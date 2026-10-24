import type { CertificationPracticePreferences } from "../../types";
import "./PracticeToggles.css";

interface ToggleDefinition {
  key: keyof CertificationPracticePreferences;
  label: string;
  description: string;
}

const TOGGLES: ToggleDefinition[] = [
  {
    key: "isLearningMode",
    label: "Režim učení",
    description:
      "Správná odpověď a vysvětlení se ukážou hned. Prostudované otázky se nehodnotí.",
  },
  {
    key: "isRepeatMode",
    label: "Opakovat chybné otázky",
    description:
      "Otázku zodpovězenou špatně dostanete znovu na konci, dokud ji nezvládnete.",
  },
];

interface Props {
  preferences: CertificationPracticePreferences;
  onChange: (preferences: CertificationPracticePreferences) => void;
}

function PracticeToggles({ preferences, onChange }: Props) {
  return (
    <div
      className="practice-toggles"
      role="group"
      aria-label="Možnosti procvičování"
    >
      {TOGGLES.map((toggle) => (
        <label key={toggle.key} className="practice-toggle">
          <input
            type="checkbox"
            role="switch"
            checked={preferences[toggle.key]}
            onChange={(event) =>
              onChange({ ...preferences, [toggle.key]: event.target.checked })
            }
          />
          <span className="practice-toggle-track" aria-hidden="true" />
          <span className="practice-toggle-text">
            <strong>{toggle.label}</strong>
            <span>{toggle.description}</span>
          </span>
        </label>
      ))}
    </div>
  );
}

export default PracticeToggles;
