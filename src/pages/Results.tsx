import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizSummary from "../components/QuizSummary";
import SummaryList from "../components/SummaryList";
import type { QuizResults } from "../types";
import "./Results.css";
import { useQuizSettings } from "../context/QuizContext";

function Results() {
  const navigate = useNavigate();
  const {settings} = useQuizSettings();
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
  const minimalRequiredScore = Math.ceil(settings.thresholdForSuccess * total);
  console.log('min: ', minimalRequiredScore)
  console.log('min: ', settings.thresholdForSuccess)
  console.log('min: ', total)
  console.log(questions[0]?.category);

  return (
    <div className="results-page">
      <QuizSummary
        score={score}
        total={total}
        passed={score >= minimalRequiredScore}
        onReset={() => navigate("/quiz")}
        minimalRequiredScore={minimalRequiredScore}
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
