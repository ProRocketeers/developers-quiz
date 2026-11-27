import { CERTIFICATION_EXAMS } from "../constants/certifications";
import { DEFAULT_LOCALE } from "../i18n/locales";
import type { Locale } from "../i18n/locales";
import type {
  CertificationExamId,
  CertificationQuestion,
  CertificationQuizSettings,
} from "../types";
import { shuffleArray } from "../utils/shuffleArray";
import { shuffleQuestionOptions } from "../utils/shuffleQuestionOptions";

export type QuestionCountsByExam = Partial<
  Record<CertificationExamId, Record<string, number>>
>;

type QuestionBankLoader = () => Promise<{ default: unknown[] }>;

// Banks are loaded on demand so that a page downloads only the bank it needs.
// Their shape, and that every translation mirrors the Czech source question by
// question, is enforced by `bun run certifications:validate`.
const QUESTION_BANK_LOADERS: Record<
  Locale,
  Record<CertificationExamId, QuestionBankLoader>
> = {
  cs: {
    "prince2-foundation": () =>
      import("../data/certifications/prince2-foundation.json"),
    "prince2-practitioner": () =>
      import("../data/certifications/prince2-practitioner.json"),
    "togaf-foundation": () =>
      import("../data/certifications/togaf-foundation.json"),
    "togaf-practitioner": () =>
      import("../data/certifications/togaf-practitioner.json"),
    "archimate-foundation": () =>
      import("../data/certifications/archimate-foundation.json"),
    "archimate-practitioner": () =>
      import("../data/certifications/archimate-practitioner.json"),
  },
  en: {
    "prince2-foundation": () =>
      import("../data/en/certifications/prince2-foundation.json"),
    "prince2-practitioner": () =>
      import("../data/en/certifications/prince2-practitioner.json"),
    "togaf-foundation": () =>
      import("../data/en/certifications/togaf-foundation.json"),
    "togaf-practitioner": () =>
      import("../data/en/certifications/togaf-practitioner.json"),
    "archimate-foundation": () =>
      import("../data/en/certifications/archimate-foundation.json"),
    "archimate-practitioner": () =>
      import("../data/en/certifications/archimate-practitioner.json"),
  },
};

export async function loadQuestionBank(
  examId: CertificationExamId,
  locale: Locale,
): Promise<CertificationQuestion[]> {
  const bankModule = await QUESTION_BANK_LOADERS[locale][examId]();
  return bankModule.default as CertificationQuestion[];
}

export function countQuestionsByTopic(
  questions: CertificationQuestion[],
): Record<string, number> {
  const counts: Record<string, number> = {};
  questions.forEach((question) => {
    counts[question.topic] = (counts[question.topic] ?? 0) + 1;
  });
  return counts;
}

export async function countQuestionsByExam(): Promise<QuestionCountsByExam> {
  const entries = await Promise.all(
    Object.values(CERTIFICATION_EXAMS).map(async (exam) => [
      exam.id,
      countQuestionsByTopic(await loadQuestionBank(exam.id, DEFAULT_LOCALE)),
    ]),
  );
  return Object.fromEntries(entries);
}

export function createQuizQuestions(
  bank: CertificationQuestion[],
  settings: CertificationQuizSettings,
): CertificationQuestion[] {
  const pool = bank.filter((question) =>
    settings.topicIds.includes(question.topic),
  );
  return shuffleArray(pool)
    .slice(0, settings.questionCount)
    .map(shuffleQuestionOptions);
}
