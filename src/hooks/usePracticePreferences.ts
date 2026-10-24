import { useState } from "react";
import type { CertificationPracticePreferences } from "../types";
import {
  loadCertificationPracticePreferences,
  saveCertificationPracticePreferences,
} from "../utils/certificationStorage";

export function usePracticePreferences(isPractice: boolean) {
  const [preferences, setPreferences] = useState(
    loadCertificationPracticePreferences,
  );

  const savePreferences = (next: CertificationPracticePreferences) => {
    setPreferences(next);
    saveCertificationPracticePreferences(next);
  };

  return {
    preferences,
    isLearningMode: isPractice && preferences.isLearningMode,
    isRepeatMode: isPractice && preferences.isRepeatMode,
    savePreferences,
  };
}
