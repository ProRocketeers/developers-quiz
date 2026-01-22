import { useQuizSettings } from "../context/QuizContext";
import "./SummaryList.css";

function SummaryList({ questions, answers, score, total, passed }) {
  const { settings } = useQuizSettings();

  return (
    <div className="summary-list">
      <div className="user-info">
        <h2>Summary pro {settings.name}</h2>
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
