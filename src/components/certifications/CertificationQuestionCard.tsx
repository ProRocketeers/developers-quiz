import { useId } from "react";
import type { CertificationQuestion } from "../../types";
import {
  getAnswerOutcome,
  getEarnedPoints,
  getMaxPoints,
} from "../../utils/certificationScoring";
import { POINT_FORMS, pluralizeCs } from "../../utils/pluralizeCs";
import "./CertificationQuestionCard.css";

interface Props {
  question: CertificationQuestion;
  questionNumber: number;
  topicLabel: string;
  selectedAnswer: number | undefined;
  isRevealed: boolean;
  onSelect?: (answerIndex: number) => void;
}

function CertificationQuestionCard({
  question,
  questionNumber,
  topicLabel,
  selectedAnswer,
  isRevealed,
  onSelect,
}: Props) {
  const radioGroupName = useId();
  const titleId = `${radioGroupName}-title`;
  const isGradient = question.optionScores !== undefined;
  const isReadOnly = isRevealed || !onSelect;

  return (
    <article className="cert-question">
      <div className="cert-question-meta">
        <span className="cert-question-number">Otázka {questionNumber}</span>
        <span className="cert-question-topic">{topicLabel}</span>
        {isGradient && (
          <span className="cert-question-scoring">Gradientní bodování</span>
        )}
      </div>

      {question.scenario && (
        <div className="cert-question-scenario">
          <strong>Scénář</strong>
          <p>{question.scenario}</p>
        </div>
      )}

      <h3 id={titleId} className="cert-question-title">
        {question.question}
      </h3>

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
                {pluralizeCs(question.optionScores?.[index] ?? 0, POINT_FORMS)}
              </span>
            )}
          </label>
        ))}
      </div>

      {isRevealed && (
        <AnswerFeedback question={question} selectedAnswer={selectedAnswer} />
      )}
    </article>
  );
}

function AnswerFeedback({
  question,
  selectedAnswer,
}: {
  question: CertificationQuestion;
  selectedAnswer: number | undefined;
}) {
  const earnedPoints = getEarnedPoints(question, selectedAnswer);
  const maxPoints = getMaxPoints(question);
  const outcome = getAnswerOutcome(question, selectedAnswer);

  return (
    <div className={`cert-feedback cert-feedback--${outcome}`} role="status">
      <strong className="cert-feedback-verdict">
        {getVerdictText(question, selectedAnswer, earnedPoints, maxPoints)}
      </strong>
      <p className="cert-feedback-explanation">{question.explanation}</p>
    </div>
  );
}

function getVerdictText(
  question: CertificationQuestion,
  selectedAnswer: number | undefined,
  earnedPoints: number,
  maxPoints: number,
): string {
  if (selectedAnswer === undefined) {
    return "Bez odpovědi – správné řešení je zvýrazněné.";
  }
  if (question.optionScores) {
    return `Získáno ${earnedPoints} z ${pluralizeCs(maxPoints, POINT_FORMS)}.`;
  }
  return earnedPoints === maxPoints
    ? "Správně!"
    : "Špatně – správná odpověď je zvýrazněná.";
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
