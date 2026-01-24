import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizSummary from "../components/QuizSummary";
import SummaryList from "../components/SummaryList";
import type { QuizHistoryEntry } from "../types";
import "./Results.css";
import { useQuizSettings } from "../context/QuizContext";
import { createSettingsSnapshot, loadQuizHistory } from "../utils/quizResults";

function Results() {
  const navigate = useNavigate();
  const { settings } = useQuizSettings();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const settingsSnapshot = useMemo(
    () =>
      createSettingsSnapshot({
        name: settings.name,
        email: settings.email,
        emailForCopy: settings.emailForCopy,
        category: settings.category,
        selectedCategories: settings.selectedCategories,
        questionCount: settings.questionCount,
        thresholdForSuccess: settings.thresholdForSuccess,
      }),
    [settings],
  );

  const history = useMemo(
    () => loadQuizHistory(settingsSnapshot),
    [settingsSnapshot],
  );

  if (history.length === 0) {
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

  const selectedEntry =
    history.find((entry) => entry.id === selectedId) ?? history[0];
  const { questions, answers, score, settingsSnapshot: selectedSettings } =
    selectedEntry;
  const total = questions.length;
  const minimalRequiredScore = Math.ceil(
    selectedSettings.thresholdForSuccess * total,
  );
  return (
    <div className="results-page">
      <QuizSummary
        score={score}
        total={total}
        passed={score >= minimalRequiredScore}
        onReset={() => navigate("/quiz")}
        minimalRequiredScore={minimalRequiredScore}
      />

      <div className="results-history">
        <h3>Historie výsledků</h3>
        <div className="history-list">
          {history.map((entry) => {
            const entryTotal = entry.questions.length;
            const entryMinimalScore = Math.ceil(
              entry.settingsSnapshot.thresholdForSuccess * entryTotal,
            );
            const isActive = entry.id === selectedEntry.id;
            return (
              <button
                key={entry.id}
                className={`history-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  setSelectedId(entry.id);
                  setShowDetails(false);
                }}
              >
                <div className="history-title">
                  {new Date(entry.createdAt).toLocaleString("cs-CZ")}
                </div>
                <div className="history-meta">
                  Skóre {entry.score}/{entryTotal} • Minimum{" "}
                  {entryMinimalScore}
                </div>
              </button>
            );
          })}
        </div>
      </div>

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
          userName={selectedSettings.name}
          userEmail={selectedSettings.email}
          emailForCopy={selectedSettings.emailForCopy}
        />
      )}
    </div>
  );
}

export default Results;
