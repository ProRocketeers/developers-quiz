#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";
import { CERTIFICATION_EXAMS } from "../src/constants/certifications";
import type { CertificationExam } from "../src/types";

const SOURCE_LOCALE = "cs";
const BANK_DIRS: Record<string, string> = {
  [SOURCE_LOCALE]: path.resolve(process.cwd(), "src/data/certifications"),
  en: path.resolve(process.cwd(), "src/data/en/certifications"),
};
const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const IMAGE_PLACEMENTS = ["question", "explanation"];
const OPTION_COUNT = 4;
const GRADIENT_SCORES = [0, 1, 3, 5];
const MIN_EXPLANATION_LENGTH = 30;
const MAX_LONGEST_CORRECT_RATIO = 0.4;
const ALLOWED_KEYS = new Set([
  "topic",
  "scenario",
  "image",
  "question",
  "options",
  "correctAnswer",
  "optionScores",
  "explanation",
]);

type RawQuestion = Record<string, unknown>;

interface ValidQuestion {
  index: number;
  raw: RawQuestion;
}

interface ExamReport {
  bankName: string;
  errors: string[];
  warnings: string[];
  questionCount: number;
  topicCounts: Map<string, number>;
}

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const normalize = (text: string) =>
  text.trim().toLowerCase().replace(/\s+/g, " ");

function validateOptions(question: RawQuestion, errors: string[]) {
  const { options } = question;
  if (!Array.isArray(options) || options.length !== OPTION_COUNT) {
    errors.push(`must have exactly ${OPTION_COUNT} options`);
    return;
  }
  if (!options.every(isNonEmptyString)) {
    errors.push("all options must be non-empty strings");
    return;
  }
  if (new Set(options.map(normalize)).size !== options.length) {
    errors.push("options must be unique");
  }
}

function validateCorrectAnswer(question: RawQuestion, errors: string[]) {
  const { correctAnswer } = question;
  if (
    typeof correctAnswer !== "number" ||
    !Number.isInteger(correctAnswer) ||
    correctAnswer < 0 ||
    correctAnswer >= OPTION_COUNT
  ) {
    errors.push(
      `correctAnswer must be an integer between 0 and ${OPTION_COUNT - 1}`,
    );
  }
}

function validateOptionScores(
  question: RawQuestion,
  exam: CertificationExam,
  errors: string[],
) {
  const { optionScores, correctAnswer } = question;
  const isGradientExam = exam.format.scoring === "gradient";

  if (!isGradientExam) {
    if (optionScores !== undefined) {
      errors.push("optionScores are allowed only in gradient-scored exams");
    }
    return;
  }

  if (!Array.isArray(optionScores) || optionScores.length !== OPTION_COUNT) {
    errors.push(`gradient question must have ${OPTION_COUNT} optionScores`);
    return;
  }
  const sortedScores = [...optionScores].sort((a, b) => Number(a) - Number(b));
  if (sortedScores.join(",") !== GRADIENT_SCORES.join(",")) {
    errors.push(
      `optionScores must be a permutation of ${GRADIENT_SCORES.join("/")}`,
    );
    return;
  }
  if (
    typeof correctAnswer === "number" &&
    optionScores[correctAnswer] !== Math.max(...GRADIENT_SCORES)
  ) {
    errors.push(
      "correctAnswer must point to the option with the highest score",
    );
  }
}

function validateImage(question: RawQuestion, errors: string[]) {
  const { image } = question;
  if (image === undefined) {
    return;
  }
  if (typeof image !== "object" || image === null || Array.isArray(image)) {
    errors.push("image must be an object");
    return;
  }
  const { src, alt, placement } = image as Record<string, unknown>;
  if (!isNonEmptyString(alt)) {
    errors.push("image.alt must be a non-empty string");
  }
  if (!IMAGE_PLACEMENTS.includes(String(placement))) {
    errors.push(
      `image.placement must be one of ${IMAGE_PLACEMENTS.join(", ")}`,
    );
  }
  if (!isNonEmptyString(src) || !src.startsWith("/")) {
    errors.push("image.src must be an absolute path under public/");
    return;
  }
  if (!fs.existsSync(path.join(PUBLIC_DIR, src))) {
    errors.push(`image file "${src}" does not exist in public/`);
  }
}

function validateQuestion(
  question: unknown,
  exam: CertificationExam,
  topicIds: Set<string>,
): string[] {
  if (
    typeof question !== "object" ||
    question === null ||
    Array.isArray(question)
  ) {
    return ["must be an object"];
  }
  const raw = question as RawQuestion;
  const errors: string[] = [];

  const unknownKeys = Object.keys(raw).filter((key) => !ALLOWED_KEYS.has(key));
  if (unknownKeys.length > 0) {
    errors.push(`unknown keys: ${unknownKeys.join(", ")}`);
  }
  if (!isNonEmptyString(raw.topic) || !topicIds.has(raw.topic)) {
    errors.push(`unknown topic "${String(raw.topic)}"`);
  }
  if (!isNonEmptyString(raw.question)) {
    errors.push("question must be a non-empty string");
  }
  if (raw.scenario !== undefined && !isNonEmptyString(raw.scenario)) {
    errors.push("scenario must be a non-empty string when present");
  }
  if (
    !isNonEmptyString(raw.explanation) ||
    raw.explanation.trim().length < MIN_EXPLANATION_LENGTH
  ) {
    errors.push(
      `explanation must have at least ${MIN_EXPLANATION_LENGTH} characters`,
    );
  }
  validateImage(raw, errors);
  validateOptions(raw, errors);
  validateCorrectAnswer(raw, errors);
  validateOptionScores(raw, exam, errors);
  return errors;
}

function isCorrectOptionStrictlyLongest(question: RawQuestion): boolean {
  const options = question.options as string[];
  const correctAnswer = question.correctAnswer as number;
  const correctLength = options[correctAnswer]?.length ?? 0;
  return options.every(
    (option, index) => index === correctAnswer || option.length < correctLength,
  );
}

function readBankFile(filePath: string): unknown[] {
  const parsed: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (!Array.isArray(parsed)) {
    throw new Error("expected a JSON array");
  }
  return parsed;
}

function findDuplicateErrors(
  bankName: string,
  questions: ValidQuestion[],
): string[] {
  const firstIndexByIdentity = new Map<string, number>();
  return questions.flatMap(({ index, raw }) => {
    const identity = normalize(
      `${raw.scenario ?? ""} ${raw.question as string}`,
    );
    const duplicateOf = firstIndexByIdentity.get(identity);
    if (duplicateOf !== undefined) {
      return [
        `${bankName}.json [${index}]: duplicate of question [${duplicateOf}]`,
      ];
    }
    firstIndexByIdentity.set(identity, index);
    return [];
  });
}

function countTopics(
  exam: CertificationExam,
  questions: ValidQuestion[],
): Map<string, number> {
  const counts = new Map(exam.topics.map((topic) => [topic.id, 0]));
  questions.forEach(({ raw }) => {
    const topic = raw.topic as string;
    counts.set(topic, (counts.get(topic) ?? 0) + 1);
  });
  return counts;
}

function getEmptyTopicWarnings(
  bankName: string,
  topicCounts: Map<string, number>,
): string[] {
  return [...topicCounts.entries()]
    .filter(([, count]) => count === 0)
    .map(([topicId]) => `${bankName}: topic "${topicId}" has no questions`);
}

function getLengthBiasWarnings(
  bankName: string,
  questions: ValidQuestion[],
): string[] {
  if (questions.length === 0) {
    return [];
  }
  const longestCorrectCount = questions.filter(({ raw }) =>
    isCorrectOptionStrictlyLongest(raw),
  ).length;
  const ratio = longestCorrectCount / questions.length;
  if (ratio <= MAX_LONGEST_CORRECT_RATIO) {
    return [];
  }
  return [
    `${bankName}: correct option is the longest in ${Math.round(ratio * 100)} % of questions (limit ${MAX_LONGEST_CORRECT_RATIO * 100} %)`,
  ];
}

function validateExam(exam: CertificationExam, locale: string): ExamReport {
  const bankName = `${locale}/${exam.id}`;
  const filePath = path.join(BANK_DIRS[locale] ?? "", `${exam.id}.json`);
  let questions: unknown[];
  try {
    questions = readBankFile(filePath);
  } catch (error) {
    return {
      bankName,
      errors: [`${filePath}: cannot read question bank (${String(error)})`],
      warnings: [],
      questionCount: 0,
      topicCounts: new Map(),
    };
  }

  const topicIds = new Set(exam.topics.map((topic) => topic.id));
  const errors: string[] = [];
  const validQuestions: ValidQuestion[] = [];
  questions.forEach((question, index) => {
    const questionErrors = validateQuestion(question, exam, topicIds);
    errors.push(
      ...questionErrors.map((error) => `${bankName}.json [${index}]: ${error}`),
    );
    if (questionErrors.length === 0) {
      validQuestions.push({ index, raw: question as RawQuestion });
    }
  });

  const topicCounts = countTopics(exam, validQuestions);
  return {
    bankName,
    errors: [...errors, ...findDuplicateErrors(bankName, validQuestions)],
    warnings: [
      ...getEmptyTopicWarnings(bankName, topicCounts),
      ...getLengthBiasWarnings(bankName, validQuestions),
    ],
    questionCount: questions.length,
    topicCounts,
  };
}

const formatTopicCounts = (topicCounts: Map<string, number>) =>
  [...topicCounts.entries()]
    .map(([topicId, count]) => `${topicId}: ${count}`)
    .join(", ");

// The quiz treats every locale's bank as the same set of questions, so a
// translation has to keep the number of questions in each topic.
function getTranslationMismatchErrors(
  source: ExamReport,
  translation: ExamReport,
): string[] {
  const sourceCounts = formatTopicCounts(source.topicCounts);
  const translationCounts = formatTopicCounts(translation.topicCounts);
  if (
    source.questionCount === translation.questionCount &&
    sourceCounts === translationCounts
  ) {
    return [];
  }
  return [
    `${translation.bankName}: questions per topic differ from ${source.bankName} (${translationCounts} vs ${sourceCounts})`,
  ];
}

function validateExamInAllLocales(exam: CertificationExam): ExamReport[] {
  const sourceReport = validateExam(exam, SOURCE_LOCALE);
  const translationReports = Object.keys(BANK_DIRS)
    .filter((locale) => locale !== SOURCE_LOCALE)
    .map((locale) => {
      const report = validateExam(exam, locale);
      return {
        ...report,
        errors: [
          ...report.errors,
          ...getTranslationMismatchErrors(sourceReport, report),
        ],
      };
    });
  return [sourceReport, ...translationReports];
}

const reports = Object.values(CERTIFICATION_EXAMS).flatMap(
  validateExamInAllLocales,
);

reports.forEach((report) => {
  console.log(
    `${report.bankName}: ${report.questionCount} questions (${formatTopicCounts(report.topicCounts)})`,
  );
});

const errors = reports.flatMap((report) => report.errors);
const warnings = reports.flatMap((report) => report.warnings);
warnings.forEach((warning) => console.warn(`WARNING ${warning}`));
errors.forEach((error) => console.error(`ERROR ${error}`));

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log("All certification question banks are valid.");
