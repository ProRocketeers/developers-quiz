import { useState } from "react";
import { getTopicLabel } from "../../constants/certifications";
import type { CertificationAttempt, CertificationExam } from "../../types";
import { getAnswerOutcome } from "../../utils/certificationScoring";
import CertificationQuestionCard from "./CertificationQuestionCard";
import "./AnswerReview.css";

interface Props {
  exam: CertificationExam;
  attempt: CertificationAttempt;
}

function AnswerReview({ exam, attempt }: Props) {
  const [showOnlyMistakes, setShowOnlyMistakes] = useState(false);
  const reviewedQuestions = attempt.questions.map((question, index) => ({
    question,
    index,
    isCorrect: getAnswerOutcome(question, attempt.answers[index]) === "correct",
  }));
  const mistakeCount = reviewedQuestions.filter(
    ({ isCorrect }) => !isCorrect,
  ).length;
  const visibleQuestions = showOnlyMistakes
    ? reviewedQuestions.filter(({ isCorrect }) => !isCorrect)
    : reviewedQuestions;

  return (
    <div className="answer-review">
      <label className="answer-review-filter">
        <input
          type="checkbox"
          checked={showOnlyMistakes}
          onChange={(event) => setShowOnlyMistakes(event.target.checked)}
        />
        Zobrazit jen otázky k zopakování ({mistakeCount})
      </label>

      {visibleQuestions.length === 0 && (
        <p className="answer-review-empty">
          Všechny odpovědi jsou nejlepší možné.
        </p>
      )}

      {visibleQuestions.map(({ question, index }) => (
        <CertificationQuestionCard
          key={index}
          question={question}
          questionNumber={index + 1}
          topicLabel={getTopicLabel(exam, question.topic)}
          selectedAnswer={attempt.answers[index]}
          isRevealed={true}
        />
      ))}
    </div>
  );
}

export default AnswerReview;
