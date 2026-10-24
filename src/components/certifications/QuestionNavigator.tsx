import type {
  QuizItemState,
  QuizItemStatus,
} from "../../utils/certificationQuizSession";
import "./QuestionNavigator.css";

const STATUS_LABELS: Record<QuizItemStatus, string> = {
  unanswered: "bez odpovědi",
  answered: "zodpovězeno",
  studied: "prostudováno",
  correct: "správně",
  partial: "částečně správně",
  incorrect: "špatně",
};

interface Props {
  items: QuizItemState[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

function QuestionNavigator({ items, currentIndex, onSelect }: Props) {
  return (
    <nav className="question-navigator" aria-label="Přehled otázek">
      {items.map((item, index) => {
        const isCurrent = index === currentIndex;
        const repeatLabel = item.isRepeat ? " (opakování)" : "";
        return (
          <button
            key={index}
            type="button"
            className={`question-navigator-item is-${item.status}${item.isRepeat ? " is-repeat" : ""}${isCurrent ? " is-current" : ""}`}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Otázka ${index + 1}${repeatLabel}: ${STATUS_LABELS[item.status]}`}
            onClick={() => onSelect(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
}

export default QuestionNavigator;
