import { useTranslations } from "../../i18n/localeContext";
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
  const t = useTranslations().certifications.footer;
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
          {t.previous}
        </button>
        <span className="quiz-footer-cert-progress">
          {t.progress(completedCount, questionCount)}
        </span>
        {isLastQuestion ? (
          <button
            type="button"
            className="certification-submit-btn"
            onClick={onFinish}
          >
            {canEvaluate ? t.evaluate : t.finishStudy}
          </button>
        ) : (
          <button
            type="button"
            className="certification-nav-btn is-primary"
            onClick={() => onNavigate(currentIndex + 1)}
          >
            {t.next}
          </button>
        )}
      </footer>

      {!isLastQuestion && (
        <button
          type="button"
          className="quiz-footer-cert-finish"
          onClick={onFinish}
        >
          {canEvaluate ? t.finishAndEvaluate : t.finishStudy}
        </button>
      )}
    </>
  );
}

export default QuizFooter;
