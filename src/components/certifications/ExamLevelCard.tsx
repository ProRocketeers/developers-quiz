import { CERTIFICATION_LEVEL_LABELS } from "../../constants/certifications";
import type { CertificationExam } from "../../types";
import {
  QUESTION_FORMS,
  TOPIC_FORMS,
  pluralizeCs,
} from "../../utils/pluralizeCs";
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
  const { format } = exam;
  const hasQuestions = bankSize > 0;

  return (
    <article className={`exam-level-card exam-level-card--${exam.level}`}>
      <header className="exam-level-header">
        <span className="exam-level-badge">
          {CERTIFICATION_LEVEL_LABELS[exam.level]}
        </span>
        <h3>{exam.title}</h3>
        <p>{exam.summary}</p>
      </header>

      <dl className="exam-format">
        <div>
          <dt>Otázky</dt>
          <dd>{format.questionCount}</dd>
        </div>
        <div>
          <dt>Čas</dt>
          <dd>{format.durationMinutes} min</dd>
        </div>
        <div>
          <dt>Úspěch od</dt>
          <dd>{format.passPercentage} %</dd>
        </div>
        <div>
          <dt>Materiály</dt>
          <dd>{format.isOpenBook ? "Open book" : "Closed book"}</dd>
        </div>
      </dl>

      {format.scoring === "gradient" && (
        <p className="exam-level-note">
          Komplexní scénářové otázky s gradientním bodováním 5 / 3 / 1 / 0 bodů.
        </p>
      )}

      <p className="exam-level-bank">
        {hasQuestions
          ? `V bance: ${pluralizeCs(bankSize, QUESTION_FORMS)}, ${pluralizeCs(exam.topics.length, TOPIC_FORMS)}.`
          : "Otázky pro tuto úroveň se připravují."}
      </p>

      <div className="exam-level-actions">
        <button
          type="button"
          className="exam-level-primary"
          onClick={onStartExam}
          disabled={!hasQuestions}
        >
          Zkouška nanečisto
        </button>
        <button
          type="button"
          className="exam-level-secondary"
          onClick={onTogglePractice}
          aria-expanded={isPracticeOpen}
          disabled={!hasQuestions}
        >
          {isPracticeOpen ? "Skrýt výběr okruhů" : "Procvičovat okruhy"}
        </button>
      </div>
    </article>
  );
}

export default ExamLevelCard;
