import { CERTIFICATION_EXAMS } from "../constants/certifications";
import type {
  CertificationExamId,
  CertificationQuestion,
  CertificationQuizSettings,
} from "../types";
import { shuffleArray } from "../utils/shuffleArray";

export type QuestionCountsByExam = Partial<
  Record<CertificationExamId, Record<string, number>>
>;

// Banks are loaded on demand so that a page downloads only the bank it needs.
// Their shape is enforced by `bun run certifications:validate`.
const QUESTION_BANK_LOADERS: Record<
  CertificationExamId,
  () => Promise<{ default: unknown[] }>
> = {
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
};

export async function loadQuestionBank(
  examId: CertificationExamId,
): Promise<CertificationQuestion[]> {
  const bankModule = await QUESTION_BANK_LOADERS[examId]();
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
      countQuestionsByTopic(await loadQuestionBank(exam.id)),
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
    .map(shuffleOptions);
}

function shuffleOptions(
  question: CertificationQuestion,
): CertificationQuestion {
  const order = shuffleArray(question.options.map((_, index) => index));
  const shuffled: CertificationQuestion = {
    ...question,
    options: reorder(question.options, order),
    correctAnswer: order.indexOf(question.correctAnswer),
  };
  if (question.optionScores) {
    shuffled.optionScores = reorder(question.optionScores, order);
  }
  return shuffled;
}

function reorder<T>(items: readonly T[], order: readonly number[]): T[] {
  return order.map((index) => {
    const item = items[index];
    if (item === undefined) {
      throw new Error(
        `Cannot reorder options: index ${index} is out of range (${items.length} items).`,
      );
    }
    return item;
  });
}
