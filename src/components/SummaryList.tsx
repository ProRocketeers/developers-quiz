import "./SummaryList.css";
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
  const handleSendEmail = async () => {
    if (!userEmail) {
      return;
    }
    onEmailStatusChange("sending");
    const resolvedName = userName || "Neznámý uživatel";
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
    onEmailStatusChange(isSuccess ? "sent" : "error");
  };

  const emailStatusLabel =
    emailStatus === "sending"
      ? "Odesílám..."
      : emailStatus === "sent"
        ? "Odesláno"
        : emailStatus === "error"
          ? "Odeslání selhalo"
          : "Neodesláno";

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>Souhrn pro {userName || "Neznámý uživatel"}</h2>
        <div className="d-flex flex-column gap-2">
          <div>
            <strong>Email:</strong> {userEmail || "Neuvedeno"}
          </div>
          <div>
            <strong>Stav emailu:</strong> {emailStatusLabel}
          </div>
          <div>
            <strong>Skóre:</strong> {score}/{total}
          </div>
          <div>
            <strong>Výsledek:</strong> {passed ? "✓" : "✗"}
          </div>
          <div>
            <strong>Celkový čas:</strong> {formatDuration(totalDurationMs)}
          </div>
          <div>
            <button
              className="toggle-btn"
              onClick={handleSendEmail}
              disabled={emailStatus === "sending" || !userEmail}
            >
              {emailStatus === "sending"
                ? "Odesílám..."
                : emailStatus === "sent"
                  ? "Odesláno ✓"
                  : emailStatus === "error"
                    ? "Chyba - zkusit znovu"
                    : "Odeslat email"}
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
