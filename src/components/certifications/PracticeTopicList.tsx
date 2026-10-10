import type { CertificationTopic } from "../../types";

interface Props {
  topics: CertificationTopic[];
  topicCounts: Record<string, number>;
  selectedTopicIds: string[];
  onToggleTopic: (topicId: string) => void;
  onSelectAll: () => void;
  onClearSelection: () => void;
}

function PracticeTopicList({
  topics,
  topicCounts,
  selectedTopicIds,
  onToggleTopic,
  onSelectAll,
  onClearSelection,
}: Props) {
  return (
    <>
      <div className="practice-setup-toolbar">
        <strong>Okruhy</strong>
        <button type="button" onClick={onSelectAll}>
          Vybrat vše
        </button>
        <button type="button" onClick={onClearSelection}>
          Zrušit výběr
        </button>
      </div>

      <div className="practice-topics">
        {topics.map((topic) => {
          const count = topicCounts[topic.id] ?? 0;
          const isSelected = selectedTopicIds.includes(topic.id);
          return (
            <label
              key={topic.id}
              className={`practice-topic${isSelected ? " is-selected" : ""}`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                disabled={count === 0}
                onChange={() => onToggleTopic(topic.id)}
              />
              <span className="practice-topic-text">
                <span className="practice-topic-label">{topic.label}</span>
                <span className="practice-topic-description">
                  {topic.description}
                </span>
              </span>
              <span className="practice-topic-count">{count}</span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default PracticeTopicList;
