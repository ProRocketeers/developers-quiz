import { useEffect, useState } from "react";
import { useLocale } from "../i18n/localeContext";
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
  const locale = useLocale();
  const [state, setState] = useState<CertificationQuestionsState>({
    status: "loading",
  });

  useEffect(() => {
    let isCancelled = false;
    loadQuestionBank(settings.examId, locale)
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
          `Failed to load the question bank "${settings.examId}" (${locale}).`,
          error,
        );
        if (!isCancelled) {
          setState({ status: "error" });
        }
      });
    return () => {
      isCancelled = true;
    };
  }, [settings, locale]);

  return state;
}
