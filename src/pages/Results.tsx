import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizSummary from "../components/QuizSummary";
import SummaryList from "../components/SummaryList";
import type { QuizHistoryEntry } from "../types";
import "./Results.css";
import { useQuizSettings } from "../context/QuizContext";
import {
  createSettingsSnapshot,
  loadQuizHistory,
  saveQuizHistory,
} from "../utils/quizResults";
import { formatDuration } from "../utils/formatDuration";
import { sendResultsEmail } from "../services/emailService";

function Results() {
  const navigate = useNavigate();
  const { settings } = useQuizSettings();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

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

  const [history, setHistory] = useState<QuizHistoryEntry[]>(() =>
    loadQuizHistory(settingsSnapshot),
  );

  useEffect(() => {
    setHistory(loadQuizHistory(settingsSnapshot));
  }, [settingsSnapshot]);

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
  const {
    questions,
    answers,
    score,
    settingsSnapshot: selectedSettings,
    totalDurationMs,
    questionDurationsMs,
  } = selectedEntry;
  const total = questions.length;
  const minimalRequiredScore = Math.ceil(
    selectedSettings.thresholdForSuccess * total,
  );

  const toggleDetails = (entryId: string) => {
    setExpandedIds((prev) =>
      prev.includes(entryId)
        ? prev.filter((id) => id !== entryId)
        : [...prev, entryId],
    );
  };

  const handleEmailStatusChange = useCallback(
    (entryId: string, status: QuizHistoryEntry["emailStatus"]) => {
      setHistory((prev) => {
        const next = prev.map((entry) =>
          entry.id === entryId ? { ...entry, emailStatus: status } : entry,
        );
        saveQuizHistory(next);
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    if (!selectedEntry) {
      return;
    }
    if (selectedEntry.emailStatus !== "idle") {
      return;
    }
    const userEmail = selectedEntry.settingsSnapshot.email;
    if (!userEmail) {
      return;
    }
    let isCancelled = false;
    const sendEmail = async () => {
      handleEmailStatusChange(selectedEntry.id, "sending");
      const resolvedName =
        selectedEntry.settingsSnapshot.name || "Neznámý uživatel";
      const primaryResult = await sendResultsEmail({
        name: resolvedName,
        score: selectedEntry.score,
        total: selectedEntry.questions.length,
        passed: selectedEntry.score >= minimalRequiredScore,
        to: userEmail,
        questions: selectedEntry.questions,
        answers: selectedEntry.answers,
        detailed: false,
      });
      let copySuccess = true;
      if (selectedEntry.settingsSnapshot.emailForCopy) {
        const copyResult = await sendResultsEmail({
          name: resolvedName,
          score: selectedEntry.score,
          total: selectedEntry.questions.length,
          passed: selectedEntry.score >= minimalRequiredScore,
          to: selectedEntry.settingsSnapshot.emailForCopy,
          questions: selectedEntry.questions,
          answers: selectedEntry.answers,
          detailed: true,
        });
        copySuccess = copyResult.success;
      }
      if (isCancelled) {
        return;
      }
      handleEmailStatusChange(
        selectedEntry.id,
        primaryResult.success && copySuccess ? "sent" : "error",
      );
    };
    void sendEmail();
    return () => {
      isCancelled = true;
    };
  }, [
    handleEmailStatusChange,
    minimalRequiredScore,
    selectedEntry,
    selectedEntry?.answers,
    selectedEntry?.emailStatus,
    selectedEntry?.questions,
    selectedEntry?.score,
    selectedEntry?.settingsSnapshot.email,
    selectedEntry?.settingsSnapshot.emailForCopy,
    selectedEntry?.settingsSnapshot.name,
  ]);

  return (
    <div className="results-page">
      <QuizSummary
        score={score}
        total={total}
        passed={score >= minimalRequiredScore}
        onReset={() => navigate("/quiz")}
        minimalRequiredScore={minimalRequiredScore}
        totalDurationMs={totalDurationMs}
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
            const isExpanded = expandedIds.includes(entry.id);
            return (
              <div
                key={entry.id}
                className={`history-item ${isActive ? "active" : ""}`}
              >
                <div className="history-item-header">
                  <button
                    className="history-item-button"
                    onClick={() => {
                      setSelectedId(entry.id);
                    }}
                  >
                    <div className="history-title">
                      {new Date(entry.createdAt).toLocaleString("cs-CZ")}
                    </div>
                    <div className="history-meta">
                      Skóre {entry.score}/{entryTotal} • Minimum{" "}
                      {entryMinimalScore} • Čas{" "}
                      {formatDuration(entry.totalDurationMs)}
                    </div>
                  </button>
                  <button
                    className="toggle-btn history-toggle"
                    onClick={() => toggleDetails(entry.id)}
                  >
                    {isExpanded ? "Hide Details" : "Show Details"}
                  </button>
                </div>
                {isExpanded && (
                  <div className="history-details">
                    <SummaryList
                      questions={entry.questions}
                      answers={entry.answers}
                      score={entry.score}
                      total={entryTotal}
                      passed={entry.score >= entryMinimalScore}
                      userName={entry.settingsSnapshot.name}
                      userEmail={entry.settingsSnapshot.email}
                      emailForCopy={entry.settingsSnapshot.emailForCopy}
                      emailStatus={entry.emailStatus ?? "idle"}
                      onEmailStatusChange={(status) =>
                        handleEmailStatusChange(entry.id, status)
                      }
                      totalDurationMs={entry.totalDurationMs}
                      questionDurationsMs={entry.questionDurationsMs}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Results;
