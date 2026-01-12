import './QuizQuestion.css'

function QuizQuestion({ question, options, selectedAnswer, onAnswerSelect, questionNumber }) {
  return (
    <div className="quiz-question">
      <h3 className="question-title">
        {questionNumber}. {question}
      </h3>
      <div className="options">
        {options.map((option, index) => (
          <label key={index} className="option">
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
  )
}

export default QuizQuestion
