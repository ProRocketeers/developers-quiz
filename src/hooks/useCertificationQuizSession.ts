import { useCallback, useState } from "react";
import type { CertificationQuestion } from "../types";
import {
  collectEvaluatedResults,
  createQuizItems,
  createRepeatItem,
  getItemStatus,
  isEvaluatedItem,
  needsRepeat,
} from "../utils/certificationQuizSession";
import type { QuizItemState } from "../utils/certificationQuizSession";

interface SessionOptions {
  questions: CertificationQuestion[];
  isPractice: boolean;
  isLearningMode: boolean;
  isRepeatMode: boolean;
}

export function useCertificationQuizSession({
  questions,
  isPractice,
  isLearningMode,
  isRepeatMode,
}: SessionOptions) {
  const [items, setItems] = useState(() => createQuizItems(questions));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [studiedIndexes, setStudiedIndexes] = useState<ReadonlySet<number>>(
    () => new Set(isLearningMode ? [0] : []),
  );

  const isStudied = (index: number) => studiedIndexes.has(index);
  const isAnswered = (index: number) => answers[index] !== undefined;
  const isRevealed = (index: number) =>
    isPractice && (isAnswered(index) || isStudied(index));

  const markStudied = (index: number) => {
    if (isAnswered(index) || isStudied(index)) {
      return;
    }
    setStudiedIndexes((previous) => new Set(previous).add(index));
  };

  const selectAnswer = (index: number, answerIndex: number) => {
    const item = items[index];
    if (!item || isRevealed(index)) {
      return;
    }
    setAnswers((previous) => ({ ...previous, [index]: answerIndex }));
    if (isPractice && isRepeatMode && needsRepeat(item, answerIndex)) {
      setItems((previous) => [...previous, createRepeatItem(item)]);
    }
  };

  const getEvaluatedResults = useCallback(
    () => collectEvaluatedResults(items, answers, studiedIndexes),
    [items, answers, studiedIndexes],
  );

  const itemStates: QuizItemState[] = items.map((item, index) => ({
    status: getItemStatus(
      item,
      answers[index],
      isRevealed(index),
      isStudied(index),
    ),
    isRepeat: item.isRepeat,
  }));
  const evaluatedIndexes = items.flatMap((item, index) =>
    isEvaluatedItem(item, index, studiedIndexes) ? [index] : [],
  );

  return {
    items,
    answers,
    itemStates,
    isRevealed,
    isStudied,
    markStudied,
    selectAnswer,
    getEvaluatedResults,
    completedCount: items.filter(
      (_, index) => isAnswered(index) || isStudied(index),
    ).length,
    evaluatedCount: evaluatedIndexes.length,
    unansweredCount: evaluatedIndexes.filter((index) => !isAnswered(index))
      .length,
  };
}
