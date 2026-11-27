import { useTranslations } from "../../i18n/localeContext";
import type { CertificationExam, CertificationQuizMode } from "../../types";
import { formatClock } from "../../utils/formatClock";
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
  const messages = useTranslations();
  const { toolbar: t, modeLabels } = messages.certifications;
  const isExamMode = mode === "exam";

  return (
    <header className={`quiz-toolbar-cert is-${exam.level}`}>
      <div>
        <span className="quiz-toolbar-cert-kicker">
          {modeLabels[mode]}
        </span>
        <h2>{exam.title}</h2>
        <p>
          {messages.plural.questions(questionCount)} •{" "}
          {isExamMode
            ? t.examDetails(exam.format.durationMinutes)
            : t.practiceDetails}
        </p>
      </div>
      <div
        className={`quiz-toolbar-cert-timer${isExamMode ? " is-countdown" : ""}`}
      >
        {isExamMode ? t.remaining : t.elapsed}{" "}
        <strong>{formatClock(isExamMode ? remainingMs : elapsedMs)}</strong>
      </div>
    </header>
  );
}

export default QuizToolbar;
