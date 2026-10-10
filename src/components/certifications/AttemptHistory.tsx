import {
  CERTIFICATION_EXAMS,
  CERTIFICATION_MODE_LABELS,
} from "../../constants/certifications";
import type { CertificationAttempt } from "../../types";
import { scoreAttempt } from "../../utils/certificationScoring";
import "./AttemptHistory.css";

interface Props {
  attempts: CertificationAttempt[];
  selectedId: string;
  onSelect: (attemptId: string) => void;
}

function AttemptHistory({ attempts, selectedId, onSelect }: Props) {
  return (
    <ul className="attempt-history">
      {attempts.map((attempt) => {
        const exam = CERTIFICATION_EXAMS[attempt.settings.examId];
        const score = scoreAttempt(attempt, exam);
        const isSelected = attempt.id === selectedId;
        return (
          <li key={attempt.id}>
            <button
              type="button"
              className={`attempt-history-item${isSelected ? " is-active" : ""}`}
              aria-current={isSelected ? "true" : undefined}
              onClick={() => onSelect(attempt.id)}
            >
              <span className="attempt-history-title">{exam.title}</span>
              <span className="attempt-history-meta">
                {new Date(attempt.createdAt).toLocaleString("cs-CZ")} ·{" "}
                {CERTIFICATION_MODE_LABELS[attempt.settings.mode]}
              </span>
              <span
                className={`attempt-history-score ${score.passed ? "is-passed" : "is-failed"}`}
              >
                {score.percentage} %
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default AttemptHistory;
