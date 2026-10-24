import type { CertificationQuestion } from "../types";
import { shuffleArray } from "./shuffleArray";

export function shuffleQuestionOptions(
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
