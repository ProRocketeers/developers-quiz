import { useTranslations } from "../../i18n/localeContext";
import type { QuizItemState } from "../../utils/certificationQuizSession";
import "./QuestionNavigator.css";

interface Props {
  items: QuizItemState[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

function QuestionNavigator({ items, currentIndex, onSelect }: Props) {
  const t = useTranslations().certifications.navigator;

  return (
    <nav className="question-navigator" aria-label={t.label}>
      {items.map((item, index) => {
        const isCurrent = index === currentIndex;
        return (
          <button
            key={index}
            type="button"
            className={`question-navigator-item is-${item.status}${item.isRepeat ? " is-repeat" : ""}${isCurrent ? " is-current" : ""}`}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={t.itemLabel(
              index + 1,
              item.isRepeat,
              t.status[item.status],
            )}
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
