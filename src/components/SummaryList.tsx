import "./SummaryList.css";
import { sendResultsEmail } from "../services/emailService";
import type { Question } from "../types";
import { formatDuration } from "../utils/formatDuration";
import { useI18n } from "../i18n/I18nContext";

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
  const { t } = useI18n();

  const resolvedName = userName || t("summaryList.unknownUser");

  const handleSendEmail = async () => {
    if (!userEmail) return;

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

  const emailStatusLabel =
    emailStatus === "sending"
      ? t("summaryList.emailStatus.sending")
      : emailStatus === "sent"
        ? t("summaryList.emailStatus.sent")
        : emailStatus === "error"
          ? t("summaryList.emailStatus.error")
          : t("summaryList.emailStatus.idle");

  const emailButtonLabel =
    emailStatus === "sending"
      ? t("summaryList.emailButton.sending")
      : emailStatus === "sent"
        ? t("summaryList.emailButton.sent")
        : emailStatus === "error"
          ? t("summaryList.emailButton.errorRetry")
          : t("summaryList.emailButton.send");

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>{t("summaryList.title", { name: resolvedName })}</h2>

        <div className="summary-meta">
          <div className="summary-meta-row">
            <strong>{t("summaryList.label.email")}</strong>{" "}
            {userEmail || t("summaryList.notProvided")}
          </div>

          <div className="summary-meta-row">
            <strong>{t("summaryList.label.emailStatus")}</strong> {emailStatusLabel}
          </div>

          <div className="summary-meta-row">
            <strong>{t("summaryList.label.score")}</strong> {score}/{total}
          </div>

          <div className="summary-meta-row">
            <strong>{t("summaryList.label.result")}</strong>{" "}
            {passed ? "✓" : "✗"}
          </div>

          <div className="summary-meta-row">
            <strong>{t("summaryList.label.totalTime")}</strong>{" "}
            {formatDuration(totalDurationMs)}
          </div>

          <div className="summary-meta-actions">
            <button
              className="toggle-btn"
              onClick={handleSendEmail}
              disabled={emailStatus === "sending" || !userEmail}
            >
              {emailButtonLabel}
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