import { useEffect, useState } from "react";
import {
  createQuizQuestions,
  loadQuestionBank,
} from "../services/certificationQuestionService";
import type {
  CertificationQuestion,
  CertificationQuizSettings,
} from "../types";

export type CertificationQuestionsState =
  | { status: "loading" }
  | { status: "ready"; questions: CertificationQuestion[] }
  | { status: "error" };

export function useCertificationQuestions(
  settings: CertificationQuizSettings,
): CertificationQuestionsState {
  const [state, setState] = useState<CertificationQuestionsState>({
    status: "loading",
  });

  useEffect(() => {
    let isCancelled = false;
    loadQuestionBank(settings.examId)
      .then((bank) => {
        if (!isCancelled) {
          setState({
            status: "ready",
            questions: createQuizQuestions(bank, settings),
          });
        }
      })
      .catch((error: unknown) => {
        console.error(
          `Failed to load the question bank "${settings.examId}".`,
          error,
        );
        if (!isCancelled) {
          setState({ status: "error" });
        }
      });
    return () => {
      isCancelled = true;
    };
  }, [settings]);

  return state;
}
