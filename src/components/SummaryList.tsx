import { useState } from "react";
import "./SummaryList.css";
import { sendResultsEmail } from "../services/emailService";
import type { Question } from "../types";

type SummaryListProps = {
  questions: Question[];
  answers: Record<number, number>;
  score: number;
  total: number;
  passed: boolean;
  userName: string | null;
  userEmail: string | null;
  emailForCopy: string | null;
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
}: SummaryListProps) {
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSendEmail = async () => {
    if (!userEmail) {
      return;
    }
    const resolvedName = userName || "Neznámý uživatel";
    const success = await sendResultsEmail({
      name: resolvedName,
      score,
      total,
      passed,
      to: userEmail,
      questions,
      answers,
      detailed: false,
    });
    if (emailForCopy) {
      await sendResultsEmail({
        name: resolvedName,
        score,
        total,
        passed,
        to: emailForCopy,
        questions,
        answers,
        detailed: true,
      });
    }
    setEmailStatus(success ? "sent" : "error");
  };

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>Souhrn pro {userName || "Neznámý uživatel"}</h2>
        <div className="d-flex flex-column gap-2">
          <div>
            <strong>Email:</strong> {userEmail || "Neuvedeno"}
          </div>
          <div>
            <strong>Skóre:</strong> {score}/{total}
          </div>
          <div>
            <strong>Výsledek:</strong> {passed ? "✓" : "✗"}
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

        return (
          <div key={qIndex} className="summary-item">
            <div className="summary-question">
              <span className="question-number">{qIndex + 1}.</span>
              {q.question}
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
