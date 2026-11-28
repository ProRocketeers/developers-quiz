import { useTranslations } from "../../i18n/localeContext";
import type { CertificationExam } from "../../types";
import "./ExamLevelCard.css";

interface Props {
  exam: CertificationExam;
  bankSize: number;
  isPracticeOpen: boolean;
  onStartExam: () => void;
  onTogglePractice: () => void;
}

function ExamLevelCard({
  exam,
  bankSize,
  isPracticeOpen,
  onStartExam,
  onTogglePractice,
}: Props) {
  const { examCard: t, levelLabels } = useTranslations().certifications;
  const { format } = exam;
  const hasQuestions = bankSize > 0;

  return (
    <article className={`exam-level-card exam-level-card--${exam.level}`}>
      <header className="exam-level-header">
        <span className="exam-level-badge">
          {levelLabels[exam.level]}
        </span>
        <h3>{exam.title}</h3>
        <p>{exam.summary}</p>
      </header>

      <dl className="exam-format">
        <div>
          <dt>{t.questions}</dt>
          <dd>{format.questionCount}</dd>
        </div>
        <div>
          <dt>{t.time}</dt>
          <dd>{format.durationMinutes} min</dd>
        </div>
        <div>
          <dt>{t.passFrom}</dt>
          <dd>{format.passPercentage} %</dd>
        </div>
        <div>
          <dt>{t.materials}</dt>
          <dd>{format.isOpenBook ? "Open book" : "Closed book"}</dd>
        </div>
      </dl>

      {format.scoring === "gradient" && (
        <p className="exam-level-note">{t.gradientNote}</p>
      )}

      <p className="exam-level-bank">
        {hasQuestions
          ? t.bankSummary(bankSize, exam.topics.length)
          : t.bankEmpty}
      </p>

      <div className="exam-level-actions">
        <button
          type="button"
          className="exam-level-primary"
          onClick={onStartExam}
          disabled={!hasQuestions}
        >
          {t.startExam}
        </button>
        <button
          type="button"
          className="exam-level-secondary"
          onClick={onTogglePractice}
          aria-expanded={isPracticeOpen}
          disabled={!hasQuestions}
        >
          {isPracticeOpen ? t.hidePractice : t.showPractice}
        </button>
      </div>
    </article>
  );
}

export default ExamLevelCard;
