import "./QuizSummary.css";
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
  return (
    <div className={`quiz-summary ${passed ? "passed" : "failed"}`}>
      <div className="summary-topline">
        <span className="threshold-badge">Minimum: {minimalRequiredScore}</span>
      </div>
      <h2>{passed ? "Skvělý výsledek" : "Výsledek kvízu"}</h2>
      <div className="score">
        {score} / {total}
      </div>
      <div className="score-time">Čas: {formatDuration(totalDurationMs)}</div>
      <p className="result-text">
        {passed
          ? "Limit jste splnili a můžete pokračovat k detailnímu rozpisu odpovědí."
          : "Tentokrát to nevyšlo, ale detailní rozpis vám ukáže, kde máte největší prostor ke zlepšení."}
      </p>
      <button className="reset-btn" onClick={onReset}>
        Spustit nový kvíz
      </button>
    </div>
  );
}

export default QuizSummary;
