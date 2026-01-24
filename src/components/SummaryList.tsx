import { useState } from "react";
import { useQuizSettings } from "../context/QuizContext";
import "./SummaryList.css";
import { sendResultsEmail } from "../services/emailService";

function SummaryList({ questions, answers, score, total, passed }) {
  const { settings } = useQuizSettings();
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSendEmail = async () => {
    const success = await sendResultsEmail({
      name: settings.name,
      score,
      total,
      passed,
      to: settings.email,
      questions,
      answers,
      detailed: false,
    });
    await sendResultsEmail({
      name: settings.name,
      score,
      total,
      passed,
      to: settings.emailForCopy,
      questions,
      answers,
      detailed: true,
    });
    setEmailStatus(success ? "sent" : "error");
  };

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>Souhrn pro {settings.name}</h2>
        <div className="d-flex flex-column gap-2">
          <div>
            <strong>Email:</strong> {settings.email || "Neuvedeno"}
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
              disabled={emailStatus === "sending" || !settings.email}
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
