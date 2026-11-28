import { useTranslations } from "../../i18n/localeContext";
import type { CertificationAttempt, CertificationExam } from "../../types";
import type { AttemptScore } from "../../utils/certificationScoring";
import { formatClock } from "../../utils/formatClock";
import "./AttemptSummary.css";

interface Props {
  exam: CertificationExam;
  attempt: CertificationAttempt;
  score: AttemptScore;
}

function AttemptSummary({ exam, attempt, score }: Props) {
  const { summary: t, modeLabels } = useTranslations().certifications;
  const questionCount = attempt.questions.length;
  const isGradient = exam.format.scoring === "gradient";

  return (
    <section
      className={`attempt-summary ${score.passed ? "is-passed" : "is-failed"}`}
    >
      <div className="attempt-summary-main">
        <span className="attempt-summary-verdict">
          {score.passed ? t.passed : t.failed}
        </span>
        <div className="attempt-summary-percentage">{score.percentage} %</div>
        <p>
          {isGradient
            ? t.earnedPoints(score.earnedPoints, score.maxPoints)
            : t.correctAnswers(score.earnedPoints, questionCount)}
          {" · "}
          {t.passThreshold(
            exam.format.passPercentage,
            score.requiredPoints,
            score.maxPoints,
          )}
        </p>
      </div>

      <dl className="attempt-summary-stats">
        <div>
          <dt>{t.mode}</dt>
          <dd>{modeLabels[attempt.settings.mode]}</dd>
        </div>
        <div>
          <dt>{t.time}</dt>
          <dd>{formatClock(attempt.totalDurationMs)}</dd>
        </div>
        <div>
          <dt>{t.answered}</dt>
          <dd>
            {score.answeredCount} / {questionCount}
          </dd>
        </div>
        <div>
          <dt>{isGradient ? t.bestAnswer : t.correct}</dt>
          <dd>
            {score.bestAnswerCount} / {questionCount}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default AttemptSummary;
