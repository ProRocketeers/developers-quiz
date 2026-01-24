import "./QuizQuestion.css";
import type { Question } from "../types";

interface Props {
  question: Question;
  selectedAnswer: number | undefined;
  onAnswerSelect: (index: number) => void;
  questionNumber: number;
}

function QuizQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
}: Props) {
  return (
    <div className="quiz-question">
      <h3 className="question-title">
        {questionNumber}. {question.question}
      </h3>
      <div className="options">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`option ${selectedAnswer === index ? "selected" : ""}`}
          >
            <input
              type="radio"
              name={`question-${questionNumber}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
