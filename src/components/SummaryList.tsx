import "./SummaryList.css";
import { useLocale, useTranslations } from "../i18n/localeContext";
import { sendResultsEmail } from "../services/emailService";
import type { Question } from "../types";
import { formatDuration } from "../utils/formatDuration";

type SummaryListProps = {
  questions: Question[];
  answers: Record<number, number>;
  score: number;
  total: number;
  passed: boolean;
  userName: string | null;
  userEmail: string | null;
  emailForCopy: string | null;
  emailStatus: "idle" | "sending" | "sent" | "error";
  onEmailStatusChange: (status: "idle" | "sending" | "sent" | "error") => void;
  totalDurationMs?: number;
  questionDurationsMs?: Record<number, number>;
};

function SummaryList({
  questions,
  answers,
  score,
  total,
  passed,
  userName,
  userEmail,
  emailForCopy,
  emailStatus,
  onEmailStatusChange,
  totalDurationMs,
  questionDurationsMs,
}: SummaryListProps) {
  const locale = useLocale();
  const messages = useTranslations();
  const t = messages.summaryList;
  const resolvedName = userName || messages.common.unknownUser;

  const handleSendEmail = async () => {
    if (!userEmail) {
      return;
    }
    console.info("Email: start sending results", { to: userEmail });
    onEmailStatusChange("sending");
    const primaryResult = await sendResultsEmail({
      name: resolvedName,
      score,
      total,
      passed,
      to: userEmail,
      questions,
      answers,
      detailed: false,
      locale,
    });
    let copySuccess = true;
    if (emailForCopy) {
      console.info("Email: sending copy", { to: emailForCopy });
      const copyResult = await sendResultsEmail({
        name: resolvedName,
        score,
        total,
        passed,
        to: emailForCopy,
        questions,
        answers,
        detailed: true,
        locale,
      });
      copySuccess = copyResult.success;
    }
    const isSuccess = primaryResult.success && copySuccess;
    console.info("Email: send finished", {
      to: userEmail,
      status: isSuccess ? "sent" : "error",
      message: primaryResult.message,
    });
    onEmailStatusChange(isSuccess ? "sent" : "error");
  };

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>{t.title(resolvedName)}</h2>
        <div className="summary-meta">
          <div className="summary-meta-row">
            <strong>{t.email}</strong> {userEmail || t.emailNotProvided}
          </div>
          <div className="summary-meta-row">
            <strong>{t.emailStatusLabel}</strong> {t.emailStatus[emailStatus]}
          </div>
          <div className="summary-meta-row">
            <strong>{t.score}</strong> {score}/{total}
          </div>
          <div className="summary-meta-row">
            <strong>{t.outcome}</strong> {passed ? "✓" : "✗"}
          </div>
          <div className="summary-meta-row">
            <strong>{t.totalTime}</strong> {formatDuration(totalDurationMs)}
          </div>
          <div className="summary-meta-actions">
            <button
              className="toggle-btn"
              onClick={handleSendEmail}
              disabled={emailStatus === "sending" || !userEmail}
            >
              {t.sendEmailButton[emailStatus]}
            </button>
          </div>
        </div>
      </div>

      {questions.map((q, qIndex) => {
        const userAnswer = answers[qIndex];
        const isCorrect = userAnswer === q.correctAnswer;
        const questionDuration = questionDurationsMs?.[qIndex];

        return (
          <div key={qIndex} className="summary-item">
            <div className="summary-question">
              <span className="question-number">{qIndex + 1}.</span>
              {q.question}
              <span className="question-time">
                ⏱️ {formatDuration(questionDuration)}
              </span>
            </div>
            <div className="summary-options">
              {q.options.map((option, oIndex) => {
                const isUserAnswer = userAnswer === oIndex;
                let className = "summary-option";

                if (isUserAnswer) {
                  className += isCorrect ? " correct" : " incorrect";
                }

                return (
                  <div key={oIndex} className={className}>
                    {isUserAnswer && (
                      <span className="answer-marker">
                        {isCorrect ? "✓" : "✗"}
                      </span>
                    )}
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummaryList;
