import "./QuizSummary.css";
import { formatDuration } from "../utils/formatDuration";
import { useI18n } from "../i18n/I18nContext";

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
  const { t } = useI18n();

  return (
    <div className={`quiz-summary ${passed ? "passed" : "failed"}`}>
      <div className="summary-topline">
        <span className="threshold-badge">
          {t("summary.minimum", { value: minimalRequiredScore })}
        </span>
      </div>

      <h2>{passed ? t("summary.title.passed") : t("summary.title.failed")}</h2>

      <div className="score">
        {t("summary.score", { score, total })}
      </div>

      <div className="score-time">
        {t("summary.time", { time: formatDuration(totalDurationMs) })}
      </div>

      <p className="result-text">
        {passed ? t("summary.text.passed") : t("summary.text.failed")}
      </p>

      <button className="reset-btn" onClick={onReset}>
        {t("summary.reset")}
      </button>
    </div>
  );
}

export default QuizSummary;
