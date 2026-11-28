import { useEffect, useRef, useState } from "react";
import { DEFAULT_PRACTICE_QUESTION_COUNT } from "../../constants/certifications";
import { useTranslations } from "../../i18n/localeContext";
import type { CertificationExam } from "../../types";
import PracticeQuestionCount from "./PracticeQuestionCount";
import PracticeTopicList from "./PracticeTopicList";
import "./PracticeSetup.css";

interface Props {
  exam: CertificationExam;
  topicCounts: Record<string, number>;
  onStart: (topicIds: string[], questionCount: number) => void;
  onClose: () => void;
}

function PracticeSetup({ exam, topicCounts, onStart, onClose }: Props) {
  const t = useTranslations().certifications.practice;
  const sectionRef = useRef<HTMLElement>(null);
  const topicIdsWithQuestions = exam.topics
    .map((topic) => topic.id)
    .filter((topicId) => (topicCounts[topicId] ?? 0) > 0);
  const [selectedTopicIds, setSelectedTopicIds] = useState(
    topicIdsWithQuestions,
  );
  const [requestedCount, setRequestedCount] = useState(
    DEFAULT_PRACTICE_QUESTION_COUNT,
  );

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const availableCount = selectedTopicIds.reduce(
    (sum, topicId) => sum + (topicCounts[topicId] ?? 0),
    0,
  );
  const questionCount = Math.min(requestedCount, availableCount);

  const toggleTopic = (topicId: string) => {
    setSelectedTopicIds((previous) =>
      previous.includes(topicId)
        ? previous.filter((id) => id !== topicId)
        : [...previous, topicId],
    );
  };

  const handleStart = () => {
    const orderedTopicIds = topicIdsWithQuestions.filter((topicId) =>
      selectedTopicIds.includes(topicId),
    );
    onStart(orderedTopicIds, questionCount);
  };

  return (
    <section
      ref={sectionRef}
      className="practice-setup"
      aria-label={t.sectionLabel(exam.title)}
    >
      <header className="practice-setup-header">
        <div>
          <span className="practice-setup-kicker">{t.kicker}</span>
          <h3>{exam.title}</h3>
          <p>{t.intro}</p>
        </div>
        <button
          type="button"
          className="practice-setup-close"
          onClick={onClose}
        >
          {t.close}
        </button>
      </header>

      <PracticeTopicList
        topics={exam.topics}
        topicCounts={topicCounts}
        selectedTopicIds={selectedTopicIds}
        onToggleTopic={toggleTopic}
        onSelectAll={() => setSelectedTopicIds(topicIdsWithQuestions)}
        onClearSelection={() => setSelectedTopicIds([])}
      />

      <div className="practice-setup-footer">
        <PracticeQuestionCount
          requestedCount={requestedCount}
          availableCount={availableCount}
          onChange={setRequestedCount}
        />
        <button
          type="button"
          className="practice-start"
          onClick={handleStart}
          disabled={questionCount === 0}
        >
          {t.start(questionCount)}
        </button>
      </div>
    </section>
  );
}

export default PracticeSetup;
