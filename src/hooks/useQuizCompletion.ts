import { useCallback, useEffect, useRef } from "react";
import { CERTIFICATION_ROUTES } from "../constants/certifications";
import type { CertificationQuizSettings } from "../types";
import { finishCertificationQuiz } from "../utils/certificationNavigation";
import type { EvaluatedResults } from "../utils/certificationQuizSession";
import { navigateTo } from "../utils/navigation";
import { QUESTION_FORMS, pluralizeCs } from "../utils/pluralizeCs";
import { createId } from "../utils/quizResults";
import { useBeforeUnloadWarning } from "./useBeforeUnloadWarning";

interface CompletionOptions {
  settings: CertificationQuizSettings;
  startedAt: number;
  remainingMs: number;
  completedCount: number;
  unansweredCount: number;
  getEvaluatedResults: () => EvaluatedResults;
}

/**
 * Saves the attempt and opens its results; returns the handler for finishing
 * on the user's request. A practice run in which every question was only
 * studied has nothing to evaluate, so it just leaves.
 */
export function useQuizCompletion({
  settings,
  startedAt,
  remainingMs,
  completedCount,
  unansweredCount,
  getEvaluatedResults,
}: CompletionOptions): () => void {
  const isFinishedRef = useRef(false);

  const finishQuiz = useCallback(() => {
    if (isFinishedRef.current) {
      return;
    }
    isFinishedRef.current = true;
    const results = getEvaluatedResults();
    if (results.questions.length === 0) {
      navigateTo(CERTIFICATION_ROUTES.home);
      return;
    }
    finishCertificationQuiz({
      id: createId(),
      createdAt: new Date().toISOString(),
      settings,
      ...results,
      totalDurationMs: Date.now() - startedAt,
    });
  }, [getEvaluatedResults, settings, startedAt]);

  useEffect(() => {
    if (settings.mode === "exam" && remainingMs === 0) {
      finishQuiz();
    }
  }, [finishQuiz, settings.mode, remainingMs]);

  useBeforeUnloadWarning(completedCount > 0, isFinishedRef);

  return () => {
    if (confirmUnansweredQuestions(unansweredCount)) {
      finishQuiz();
    }
  };
}

function confirmUnansweredQuestions(unansweredCount: number): boolean {
  return (
    unansweredCount === 0 ||
    window.confirm(
      `Bez odpovědi zůstává ${pluralizeCs(unansweredCount, QUESTION_FORMS)}. Opravdu chcete test vyhodnotit?`,
    )
  );
}
