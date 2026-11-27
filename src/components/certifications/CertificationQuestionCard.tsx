import { useId } from "react";
import { useTranslations } from "../../i18n/localeContext";
import type { Messages } from "../../i18n/messages";
import type {
  CertificationQuestion,
  CertificationQuestionImage,
} from "../../types";
import {
  getAnswerOutcome,
  getEarnedPoints,
  getMaxPoints,
} from "../../utils/certificationScoring";
import "./CertificationQuestionCard.css";

type QuestionMessages = Messages["certifications"]["question"];

interface Props {
  question: CertificationQuestion;
  questionNumber: number;
  topicLabel: string;
  selectedAnswer: number | undefined;
  isRevealed: boolean;
  isStudied?: boolean;
  isRepeat?: boolean;
  onSelect?: (answerIndex: number) => void;
}

function CertificationQuestionCard({
  question,
  questionNumber,
  topicLabel,
  selectedAnswer,
  isRevealed,
  isStudied = false,
  isRepeat = false,
  onSelect,
}: Props) {
  const messages = useTranslations();
  const t = messages.certifications.question;
  const radioGroupName = useId();
  const titleId = `${radioGroupName}-title`;
  const isGradient = question.optionScores !== undefined;
  const isReadOnly = isRevealed || !onSelect;

  return (
    <article className="cert-question">
      <div className="cert-question-meta">
        <span className="cert-question-number">
          {t.number(questionNumber)}
        </span>
        <span className="cert-question-topic">{topicLabel}</span>
        {isRepeat && <span className="cert-question-repeat">{t.repeat}</span>}
        {isGradient && (
          <span className="cert-question-scoring">{t.gradientScoring}</span>
        )}
      </div>

      {question.scenario && (
        <div className="cert-question-scenario">
          <strong>{t.scenario}</strong>
          <p>{question.scenario}</p>
        </div>
      )}

      <h3 id={titleId} className="cert-question-title">
        {question.question}
      </h3>

      {question.image?.placement === "question" && (
        <QuestionImage image={question.image} />
      )}

      <div className="cert-options" role="radiogroup" aria-labelledby={titleId}>
        {question.options.map((option, index) => (
          <label
            key={index}
            className={getOptionClassName(
              question,
              index,
              selectedAnswer,
              isRevealed,
            )}
          >
            <input
              type="radio"
              name={radioGroupName}
              checked={selectedAnswer === index}
              disabled={isReadOnly}
              onChange={() => onSelect?.(index)}
            />
            <span className="cert-option-text">{option}</span>
            {isRevealed && isGradient && (
              <span className="cert-option-points">
                {messages.plural.points(question.optionScores?.[index] ?? 0)}
              </span>
            )}
          </label>
        ))}
      </div>

      {isRevealed && (
        <AnswerFeedback
          question={question}
          selectedAnswer={selectedAnswer}
          isStudied={isStudied}
        />
      )}
    </article>
  );
}

function AnswerFeedback({
  question,
  selectedAnswer,
  isStudied,
}: {
  question: CertificationQuestion;
  selectedAnswer: number | undefined;
  isStudied: boolean;
}) {
  const earnedPoints = getEarnedPoints(question, selectedAnswer);
  const maxPoints = getMaxPoints(question);
  const outcome = getAnswerOutcome(question, selectedAnswer);
  const t = useTranslations().certifications.question;

  return (
    <div className={`cert-feedback cert-feedback--${outcome}`} role="status">
      <strong className="cert-feedback-verdict">
        {isStudied
          ? t.studiedVerdict
          : getVerdictText(t, selectedAnswer, {
              isGradient: question.optionScores !== undefined,
              earnedPoints,
              maxPoints,
            })}
      </strong>
      <p className="cert-feedback-explanation">{question.explanation}</p>
      {question.image?.placement === "explanation" && (
        <QuestionImage image={question.image} />
      )}
    </div>
  );
}

function QuestionImage({ image }: { image: CertificationQuestionImage }) {
  const t = useTranslations().certifications.question;

  return (
    <a
      className="cert-question-image"
      href={image.src}
      target="_blank"
      rel="noreferrer"
      title={t.openImage}
    >
      <img src={image.src} alt={image.alt} loading="lazy" />
    </a>
  );
}

interface AnswerPoints {
  isGradient: boolean;
  earnedPoints: number;
  maxPoints: number;
}

function getVerdictText(
  t: QuestionMessages,
  selectedAnswer: number | undefined,
  { isGradient, earnedPoints, maxPoints }: AnswerPoints,
): string {
  if (selectedAnswer === undefined) {
    return t.unansweredVerdict;
  }
  if (isGradient) {
    return t.pointsVerdict(earnedPoints, maxPoints);
  }
  return earnedPoints === maxPoints ? t.correctVerdict : t.incorrectVerdict;
}

function getOptionClassName(
  question: CertificationQuestion,
  index: number,
  selectedAnswer: number | undefined,
  isRevealed: boolean,
): string {
  const isSelected = selectedAnswer === index;
  if (!isRevealed) {
    return isSelected ? "cert-option is-selected" : "cert-option";
  }
  if (index === question.correctAnswer) {
    return "cert-option is-correct";
  }
  if (!isSelected) {
    return "cert-option is-dimmed";
  }
  return `cert-option is-${getAnswerOutcome(question, index)}`;
}

export default CertificationQuestionCard;
