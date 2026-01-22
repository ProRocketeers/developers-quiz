import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizSummary from "../components/QuizSummary";
import SummaryList from "../components/SummaryList";
import type { QuizResults } from "../types";
import "./Results.css";

const SUCCESS_THRESHOLD = 0.5;

function Results() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const saved = sessionStorage.getItem("quizResults");
  if (!saved) {
    return (
      <div className="results-page">
        <h2>Výsledky</h2>
        <p>Zatím nemáte žádné výsledky.</p>
        <button className="btn" onClick={() => navigate("/quiz")}>
          Spustit nový Quiz
        </button>
      </div>
    );
  }

  const { questions, answers, score } = JSON.parse(saved) as QuizResults;
  const total = questions.length;
  const minimalRequiredScore = Math.ceil(SUCCESS_THRESHOLD * total);
  console.log(questions[0]?.category);

  return (
    <div className="results-page">
      <QuizSummary
        score={score}
        total={total}
        passed={score >= minimalRequiredScore}
        onReset={() => navigate("/quiz")}
        thresholdForSuccess={minimalRequiredScore}
      />

      <div className="summary-details-toggle">
        <button
          className="toggle-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {showDetails && (
        <SummaryList
          questions={questions}
          answers={answers}
          score={score}
          total={total}
          passed={score >= minimalRequiredScore}
        />
      )}
    </div>
  );
}

export default Results;
