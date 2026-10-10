import {
  ATTEMPT_QUERY_PARAM,
  CERTIFICATION_ROUTES,
} from "../constants/certifications";
import type { CertificationAttempt, CertificationQuizSettings } from "../types";
import {
  addCertificationAttempt,
  saveCertificationQuizSettings,
} from "./certificationStorage";
import { navigateTo } from "./navigation";

export function startCertificationQuiz(settings: CertificationQuizSettings) {
  saveCertificationQuizSettings(settings);
  navigateTo(CERTIFICATION_ROUTES.quiz);
}

export function finishCertificationQuiz(attempt: CertificationAttempt) {
  addCertificationAttempt(attempt);
  navigateTo(
    `${CERTIFICATION_ROUTES.results}?${ATTEMPT_QUERY_PARAM}=${attempt.id}`,
  );
}
