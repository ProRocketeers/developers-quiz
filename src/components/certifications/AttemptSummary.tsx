import { CERTIFICATION_MODE_LABELS } from "../../constants/certifications";
import type { CertificationAttempt, CertificationExam } from "../../types";
import type { AttemptScore } from "../../utils/certificationScoring";
import { formatClock } from "../../utils/formatClock";
import { POINT_FORMS, pluralizeCs } from "../../utils/pluralizeCs";
import "./AttemptSummary.css";

interface Props {
  exam: CertificationExam;
  attempt: CertificationAttempt;
  score: AttemptScore;
}

function AttemptSummary({ exam, attempt, score }: Props) {
  const questionCount = attempt.questions.length;
  const isGradient = exam.format.scoring === "gradient";

  return (
    <section
      className={`attempt-summary ${score.passed ? "is-passed" : "is-failed"}`}
    >
      <div className="attempt-summary-main">
        <span className="attempt-summary-verdict">
          {score.passed ? "Nad hranicí úspěchu" : "Pod hranicí úspěchu"}
        </span>
        <div className="attempt-summary-percentage">{score.percentage} %</div>
        <p>
          {isGradient
            ? `${score.earnedPoints} z ${pluralizeCs(score.maxPoints, POINT_FORMS)}`
            : `${score.earnedPoints} z ${questionCount} správně`}
          {` · hranice úspěchu ${exam.format.passPercentage} % (min. ${score.requiredPoints} z ${score.maxPoints})`}
        </p>
      </div>

      <dl className="attempt-summary-stats">
        <div>
          <dt>Režim</dt>
          <dd>{CERTIFICATION_MODE_LABELS[attempt.settings.mode]}</dd>
        </div>
        <div>
          <dt>Čas</dt>
          <dd>{formatClock(attempt.totalDurationMs)}</dd>
        </div>
        <div>
          <dt>Zodpovězeno</dt>
          <dd>
            {score.answeredCount} / {questionCount}
          </dd>
        </div>
        <div>
          <dt>{isGradient ? "Nejlepší odpověď" : "Správně"}</dt>
          <dd>
            {score.bestAnswerCount} / {questionCount}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default AttemptSummary;
