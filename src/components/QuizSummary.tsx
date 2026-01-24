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
      <div className="text-end">
        <span className={`badge ${passed ? "bg-success" : "bg-danger"}`}>
          min : {minimalRequiredScore}
        </span>
      </div>
      <h2>Quiz Complete!</h2>
      <div className="score">
        {score} / {total}
      </div>
      <div className="score-time">Čas: {formatDuration(totalDurationMs)}</div>
      <p className="result-text">
        {passed ? "Congratulations! You passed!" : "Try again!"}
      </p>
      <button className="reset-btn" onClick={onReset}>
        Try Again
      </button>
    </div>
  );
}

export default QuizSummary;
