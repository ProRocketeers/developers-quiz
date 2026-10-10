import { CERTIFICATION_MODE_LABELS } from "../../constants/certifications";
import type { CertificationExam, CertificationQuizMode } from "../../types";
import { formatClock } from "../../utils/formatClock";
import { QUESTION_FORMS, pluralizeCs } from "../../utils/pluralizeCs";
import "./QuizToolbar.css";

interface Props {
  exam: CertificationExam;
  mode: CertificationQuizMode;
  questionCount: number;
  elapsedMs: number;
  remainingMs: number;
}

function QuizToolbar({
  exam,
  mode,
  questionCount,
  elapsedMs,
  remainingMs,
}: Props) {
  const isExamMode = mode === "exam";

  return (
    <header className={`quiz-toolbar-cert is-${exam.level}`}>
      <div>
        <span className="quiz-toolbar-cert-kicker">
          {CERTIFICATION_MODE_LABELS[mode]}
        </span>
        <h2>{exam.title}</h2>
        <p>
          {pluralizeCs(questionCount, QUESTION_FORMS)} •{" "}
          {isExamMode
            ? `limit ${exam.format.durationMinutes} min, vyhodnocení na konci`
            : "okamžitá zpětná vazba, bez časového limitu"}
        </p>
      </div>
      <div
        className={`quiz-toolbar-cert-timer${isExamMode ? " is-countdown" : ""}`}
      >
        {isExamMode ? "Zbývá" : "Čas"}{" "}
        <strong>{formatClock(isExamMode ? remainingMs : elapsedMs)}</strong>
      </div>
    </header>
  );
}

export default QuizToolbar;
