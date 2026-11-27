import { useTranslations } from "../../i18n/localeContext";
import type { CertificationPracticePreferences } from "../../types";
import "./PracticeToggles.css";

const TOGGLE_KEYS: (keyof CertificationPracticePreferences)[] = [
  "isLearningMode",
  "isRepeatMode",
];

interface Props {
  preferences: CertificationPracticePreferences;
  onChange: (preferences: CertificationPracticePreferences) => void;
}

function PracticeToggles({ preferences, onChange }: Props) {
  const t = useTranslations().certifications.practice;

  return (
    <div
      className="practice-toggles"
      role="group"
      aria-label={t.togglesLabel}
    >
      {TOGGLE_KEYS.map((toggleKey) => (
        <label key={toggleKey} className="practice-toggle">
          <input
            type="checkbox"
            role="switch"
            checked={preferences[toggleKey]}
            onChange={(event) =>
              onChange({ ...preferences, [toggleKey]: event.target.checked })
            }
          />
          <span className="practice-toggle-track" aria-hidden="true" />
          <span className="practice-toggle-text">
            <strong>{t.toggles[toggleKey].label}</strong>
            <span>{t.toggles[toggleKey].description}</span>
          </span>
        </label>
      ))}
    </div>
  );
}

export default PracticeToggles;
