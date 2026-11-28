import "./QuizSummary.css";
import { useTranslations } from "../i18n/localeContext";
import { formatDuration } from "../utils/formatDuration";

type QuizSummaryProps = {
  score: number;
  total: number;
  passed: boolean;
  onReset: () => void;
  minimalRequiredScore: number;
  totalDurationMs?: number;
};

function QuizSummary({
  score,
  total,
  passed,
  onReset,
  minimalRequiredScore,
  totalDurationMs,
}: QuizSummaryProps) {
  const t = useTranslations().quizSummary;

  return (
    <div className={`quiz-summary ${passed ? "passed" : "failed"}`}>
      <div className="summary-topline">
        <span className="threshold-badge">{t.minimum(minimalRequiredScore)}</span>
      </div>
      <h2>{passed ? t.passedTitle : t.failedTitle}</h2>
      <div className="score">
        {score} / {total}
      </div>
      <div className="score-time">
        {t.time(formatDuration(totalDurationMs))}
      </div>
      <p className="result-text">
        {passed ? t.passedText : t.failedText}
      </p>
      <button className="reset-btn" onClick={onReset}>
        {t.startNew}
      </button>
    </div>
  );
}

export default QuizSummary;
