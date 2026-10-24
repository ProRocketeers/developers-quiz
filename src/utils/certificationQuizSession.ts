import type { CertificationQuestion } from "../types";
import { getAnswerOutcome } from "./certificationScoring";
import type { AnswerOutcome } from "./certificationScoring";
import { shuffleQuestionOptions } from "./shuffleQuestionOptions";

/**
 * One question shown in a quiz run. Repeat items are extra practice copies of
 * wrongly answered questions and never count towards the score.
 */
export interface QuizItem {
  question: CertificationQuestion;
  isRepeat: boolean;
}

export type QuizItemStatus = AnswerOutcome | "answered" | "studied";

export interface QuizItemState {
  status: QuizItemStatus;
  isRepeat: boolean;
}

export interface EvaluatedResults {
  questions: CertificationQuestion[];
  answers: Record<number, number>;
}

export function createQuizItems(
  questions: CertificationQuestion[],
): QuizItem[] {
  return questions.map((question) => ({ question, isRepeat: false }));
}

export function needsRepeat(item: QuizItem, answerIndex: number): boolean {
  return getAnswerOutcome(item.question, answerIndex) !== "correct";
}

export function createRepeatItem(item: QuizItem): QuizItem {
  return { question: shuffleQuestionOptions(item.question), isRepeat: true };
}

export function getItemStatus(
  item: QuizItem,
  answer: number | undefined,
  isRevealed: boolean,
  isStudied: boolean,
): QuizItemStatus {
  if (isStudied && answer === undefined) {
    return "studied";
  }
  if (answer !== undefined && !isRevealed) {
    return "answered";
  }
  return getAnswerOutcome(item.question, answer);
}

export function isEvaluatedItem(
  item: QuizItem,
  index: number,
  studiedIndexes: ReadonlySet<number>,
): boolean {
  return !item.isRepeat && !studiedIndexes.has(index);
}

export function collectEvaluatedResults(
  items: QuizItem[],
  answers: Record<number, number>,
  studiedIndexes: ReadonlySet<number>,
): EvaluatedResults {
  const evaluated = items.flatMap((item, index) =>
    isEvaluatedItem(item, index, studiedIndexes)
      ? [{ item, answer: answers[index] }]
      : [],
  );
  const evaluatedAnswers: Record<number, number> = {};
  evaluated.forEach(({ answer }, position) => {
    if (answer !== undefined) {
      evaluatedAnswers[position] = answer;
    }
  });
  return {
    questions: evaluated.map(({ item }) => item.question),
    answers: evaluatedAnswers,
  };
}
