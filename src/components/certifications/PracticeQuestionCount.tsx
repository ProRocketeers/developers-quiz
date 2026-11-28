import { useState, type ReactNode } from "react";
import { useTranslations } from "../../i18n/localeContext";

const QUESTION_COUNT_PRESETS = [10, 20, 40];

interface Props {
  requestedCount: number;
  availableCount: number;
  onChange: (count: number) => void;
}

interface SegmentProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

function Segment({ isActive, onClick, children }: SegmentProps) {
  return (
    <button
      type="button"
      className={isActive ? "is-active" : ""}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PracticeQuestionCount({
  requestedCount,
  availableCount,
  onChange,
}: Props) {
  const t = useTranslations().certifications.practice;
  const [isCustom, setIsCustom] = useState(false);

  const visiblePresets = QUESTION_COUNT_PRESETS.filter(
    (preset) => preset < availableCount,
  );
  const isAllSelected = !isCustom && requestedCount >= availableCount;

  const selectPreset = (count: number) => {
    setIsCustom(false);
    onChange(count);
  };

  const handleCustomInput = (value: string) => {
    const parsed = Number.parseInt(value, 10);
    onChange(Number.isNaN(parsed) ? 0 : Math.max(0, parsed));
  };

  return (
    <div className="practice-count">
      <span className="practice-count-label" id="practice-count-label">
        {t.questionCount}
      </span>
      <div
        className="practice-count-segments"
        role="group"
        aria-labelledby="practice-count-label"
      >
        {visiblePresets.map((preset) => (
          <Segment
            key={preset}
            isActive={!isCustom && requestedCount === preset}
            onClick={() => selectPreset(preset)}
          >
            {preset}
          </Segment>
        ))}
        <Segment
          isActive={isAllSelected}
          onClick={() => selectPreset(availableCount)}
        >
          {t.allQuestions}
          <span className="practice-count-total">{availableCount}</span>
        </Segment>
        <Segment isActive={isCustom} onClick={() => setIsCustom(true)}>
          {t.customQuestionCount}
        </Segment>
      </div>
      {isCustom && (
        <div className="practice-count-custom">
          <input
            id="practice-question-count"
            type="number"
            min={1}
            max={availableCount}
            value={Math.min(requestedCount, availableCount)}
            onChange={(event) => handleCustomInput(event.target.value)}
            aria-labelledby="practice-count-label"
            autoFocus
          />
          <span className="practice-count-hint">
            {t.availableQuestions(availableCount)}
          </span>
        </div>
      )}
    </div>
  );
}

export default PracticeQuestionCount;
