import "./QuizFooter.css";

interface Props {
  currentIndex: number;
  questionCount: number;
  answeredCount: number;
  onNavigate: (index: number) => void;
  onFinish: () => void;
}

function QuizFooter({
  currentIndex,
  questionCount,
  answeredCount,
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
          Zodpovězeno {answeredCount} / {questionCount}
        </span>
        {isLastQuestion ? (
          <button
            type="button"
            className="certification-submit-btn"
            onClick={onFinish}
          >
            Vyhodnotit test
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
          Ukončit a vyhodnotit test
        </button>
      )}
    </>
  );
}

export default QuizFooter;
