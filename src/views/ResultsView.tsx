import { useCallback, useEffect, useMemo, useState } from "react";
import QuizSummary from "../components/QuizSummary";
import SummaryList from "../components/SummaryList";
import { QuizProvider, useQuizSettings } from "../context/QuizContext";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useLocale, useTranslations } from "../i18n/localeContext";
import { INTL_LOCALE_TAGS } from "../i18n/locales";
import type { Locale } from "../i18n/locales";
import { sendResultsEmail } from "../services/emailService";
import type { QuizHistoryEntry } from "../types";
import { formatDuration } from "../utils/formatDuration";
import { navigateTo } from "../utils/navigation";
import {
  createSettingsSnapshot,
  loadQuizHistory,
  saveQuizHistory,
} from "../utils/quizResults";
import "../pages/Results.css";

function ResultsContent() {
  const { settings } = useQuizSettings();
  const locale = useLocale();
  const messages = useTranslations();
  const t = messages.results;
  const unknownUserName = messages.common.unknownUser;
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

  useEffect(() => {
    setSelectedId((currentSelectedId) => {
      if (history.length === 0) {
        return null;
      }

      if (
        currentSelectedId &&
        history.some((entry) => entry.id === currentSelectedId)
      ) {
        return currentSelectedId;
      }

      return history[0].id;
    });
  }, [history]);

  const selectedEntry =
    history.find((entry) => entry.id === selectedId) ?? null;
  const total = selectedEntry?.questions.length ?? 0;
  const minimalRequiredScore = selectedEntry
    ? Math.ceil(selectedEntry.settingsSnapshot.thresholdForSuccess * total)
    : 0;

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
    if (!selectedEntry || selectedEntry.emailStatus !== "idle") {
      return;
    }

    const userEmail = selectedEntry.settingsSnapshot.email;
    if (!userEmail) {
      return;
    }

    let isCancelled = false;

    const sendEmail = async () => {
      console.info("Email: auto-send start", {
        entryId: selectedEntry.id,
        to: userEmail,
      });

      handleEmailStatusChange(selectedEntry.id, "sending");

      const resolvedName =
        selectedEntry.settingsSnapshot.name || unknownUserName;
      const primaryResult = await sendResultsEmail({
        name: resolvedName,
        score: selectedEntry.score,
        total: selectedEntry.questions.length,
        passed: selectedEntry.score >= minimalRequiredScore,
        to: userEmail,
        questions: selectedEntry.questions,
        answers: selectedEntry.answers,
        detailed: false,
        locale,
      });

      let copySuccess = true;
      if (selectedEntry.settingsSnapshot.emailForCopy) {
        console.info("Email: auto-send copy", {
          entryId: selectedEntry.id,
          to: selectedEntry.settingsSnapshot.emailForCopy,
        });

        const copyResult = await sendResultsEmail({
          name: resolvedName,
          score: selectedEntry.score,
          total: selectedEntry.questions.length,
          passed: selectedEntry.score >= minimalRequiredScore,
          to: selectedEntry.settingsSnapshot.emailForCopy,
          questions: selectedEntry.questions,
          answers: selectedEntry.answers,
          detailed: true,
          locale,
        });
        copySuccess = copyResult.success;
      }

      if (isCancelled) {
        return;
      }

      console.info("Email: auto-send finished", {
        entryId: selectedEntry.id,
        to: userEmail,
        status: primaryResult.success && copySuccess ? "sent" : "error",
        message: primaryResult.message,
      });

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
    locale,
    minimalRequiredScore,
    unknownUserName,
    selectedEntry,
    selectedEntry?.answers,
    selectedEntry?.emailStatus,
    selectedEntry?.questions,
    selectedEntry?.score,
    selectedEntry?.settingsSnapshot.email,
    selectedEntry?.settingsSnapshot.emailForCopy,
    selectedEntry?.settingsSnapshot.name,
  ]);

  if (!selectedEntry) {
    return (
      <div className="results-page">
        <div className="results-empty">
          <span className="results-kicker">{t.emptyKicker}</span>
          <h2>{t.emptyTitle}</h2>
          <p>{t.emptyText}</p>
        </div>
        <button className="btn" onClick={() => navigateTo("/quiz")}>
          {t.startNew}
        </button>
      </div>
    );
  }

  const score = selectedEntry.score;
  const totalDurationMs = selectedEntry.totalDurationMs;

  return (
    <div className="results-page">
      <div className="results-intro">
        <span className="results-kicker">{t.kicker}</span>
        <h2>{t.title}</h2>
        <p>{t.intro}</p>
      </div>

      <QuizSummary
        score={score}
        total={total}
        passed={score >= minimalRequiredScore}
        onReset={() => navigateTo("/quiz")}
        minimalRequiredScore={minimalRequiredScore}
        totalDurationMs={totalDurationMs}
      />

      <div className="results-history">
        <h3>{t.historyTitle}</h3>
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
                    onClick={() => setSelectedId(entry.id)}
                  >
                    <div className="history-title">
                      {new Date(entry.createdAt).toLocaleString(
                        INTL_LOCALE_TAGS[locale],
                      )}
                    </div>
                    <div className="history-meta">
                      {t.historyScore(entry.score, entryTotal)} •{" "}
                      {t.historyMinimum(entryMinimalScore)} •{" "}
                      {t.historyTime(formatDuration(entry.totalDurationMs))}
                    </div>
                  </button>
                  <button
                    className="toggle-btn history-toggle"
                    onClick={() => toggleDetails(entry.id)}
                  >
                    {isExpanded ? t.hideDetail : t.showDetail}
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

export default function ResultsView({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <QuizProvider>
        <ResultsContent />
      </QuizProvider>
    </LocaleProvider>
  );
}
