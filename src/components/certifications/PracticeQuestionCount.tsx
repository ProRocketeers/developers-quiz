import { QUESTION_FORMS, pluralizeCs } from "../../utils/pluralizeCs";

const QUESTION_COUNT_PRESETS = [10, 20, 40];

interface Props {
  requestedCount: number;
  availableCount: number;
  onChange: (count: number) => void;
}

function PracticeQuestionCount({
  requestedCount,
  availableCount,
  onChange,
}: Props) {
  const handleInput = (value: string) => {
    const parsed = Number.parseInt(value, 10);
    onChange(Number.isNaN(parsed) ? 0 : Math.max(0, parsed));
  };

  return (
    <div className="practice-count">
      <label htmlFor="practice-question-count">Počet otázek</label>
      <div className="practice-count-controls">
        <input
          id="practice-question-count"
          type="number"
          min={1}
          max={availableCount}
          value={requestedCount}
          onChange={(event) => handleInput(event.target.value)}
        />
        {QUESTION_COUNT_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={requestedCount === preset ? "is-active" : ""}
            onClick={() => onChange(preset)}
          >
            {preset}
          </button>
        ))}
        <button type="button" onClick={() => onChange(availableCount)}>
          Všechny
        </button>
      </div>
      <span className="practice-count-hint">
        Ve vybraných okruzích je {pluralizeCs(availableCount, QUESTION_FORMS)}.
      </span>
    </div>
  );
}

export default PracticeQuestionCount;
