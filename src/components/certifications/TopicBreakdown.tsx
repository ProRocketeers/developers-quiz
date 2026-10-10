import type { TopicScore } from "../../utils/certificationScoring";
import { toPercentage } from "../../utils/certificationScoring";
import "./TopicBreakdown.css";

interface Props {
  topicScores: TopicScore[];
  passPercentage: number;
}

function TopicBreakdown({ topicScores, passPercentage }: Props) {
  return (
    <ul className="topic-breakdown">
      {topicScores.map((topicScore) => {
        const percentage = toPercentage(
          topicScore.earnedPoints,
          topicScore.maxPoints,
        );
        const isWeak = percentage < passPercentage;
        return (
          <li
            key={topicScore.topicId}
            className={`topic-breakdown-item${isWeak ? " is-weak" : ""}`}
          >
            <div className="topic-breakdown-head">
              <span className="topic-breakdown-label">{topicScore.label}</span>
              <span className="topic-breakdown-value">
                {topicScore.earnedPoints}/{topicScore.maxPoints} · {percentage}{" "}
                %
              </span>
            </div>
            <div
              className="topic-breakdown-bar"
              role="progressbar"
              aria-label={topicScore.label}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percentage}
            >
              <span style={{ width: `${percentage}%` }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TopicBreakdown;
