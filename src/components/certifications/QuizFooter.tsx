import "./QuizFooter.css";

interface Props {
  currentIndex: number;
  questionCount: number;
  completedCount: number;
  canEvaluate: boolean;
  onNavigate: (index: number) => void;
  onFinish: () => void;
}

function QuizFooter({
  currentIndex,
  questionCount,
  completedCount,
  canEvaluate,
  onNavigate,
  onFinish,
}: Props) {
  const isLastQuestion = currentIndex === questionCount - 1;

  return (
    <>
      <footer className="quiz-footer-cert">
        <button
          type="button"
          className="certification-nav-btn"
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          ← Předchozí
        </button>
        <span className="quiz-footer-cert-progress">
          Hotovo {completedCount} / {questionCount}
        </span>
        {isLastQuestion ? (
          <button
            type="button"
            className="certification-submit-btn"
            onClick={onFinish}
          >
            {canEvaluate ? "Vyhodnotit test" : "Ukončit studium"}
          </button>
        ) : (
          <button
            type="button"
            className="certification-nav-btn is-primary"
            onClick={() => onNavigate(currentIndex + 1)}
          >
            Další →
          </button>
        )}
      </footer>

      {!isLastQuestion && (
        <button
          type="button"
          className="quiz-footer-cert-finish"
          onClick={onFinish}
        >
          {canEvaluate ? "Ukončit a vyhodnotit test" : "Ukončit studium"}
        </button>
      )}
    </>
  );
}

export default QuizFooter;
