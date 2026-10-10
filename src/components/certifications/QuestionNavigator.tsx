import type { AnswerOutcome } from "../../utils/certificationScoring";
import "./QuestionNavigator.css";

export type QuestionStatus = AnswerOutcome | "answered";

const STATUS_LABELS: Record<QuestionStatus, string> = {
  unanswered: "bez odpovědi",
  answered: "zodpovězeno",
  correct: "správně",
  partial: "částečně správně",
  incorrect: "špatně",
};

interface Props {
  statuses: QuestionStatus[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

function QuestionNavigator({ statuses, currentIndex, onSelect }: Props) {
  return (
    <nav className="question-navigator" aria-label="Přehled otázek">
      {statuses.map((status, index) => {
        const isCurrent = index === currentIndex;
        return (
          <button
            key={index}
            type="button"
            className={`question-navigator-item is-${status}${isCurrent ? " is-current" : ""}`}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Otázka ${index + 1}: ${STATUS_LABELS[status]}`}
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
