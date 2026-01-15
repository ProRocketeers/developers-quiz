import './SummaryList.css'

function SummaryList({ questions, answers }) {
  return (
    <div className="summary-list">
      {questions.map((q, qIndex) => {
        const userAnswer = answers[qIndex]
        const isCorrect = userAnswer === q.correctAnswer

        return (
          <div key={qIndex} className="summary-item">
            <div className="summary-question">
              <span className="question-number">{qIndex + 1}.</span>
              {q.question}
            </div>
            <div className="summary-options">
              {q.options.map((option, oIndex) => {
                const isUserAnswer = userAnswer === oIndex
                let className = 'summary-option'

                if (isUserAnswer) {
                  className += isCorrect ? ' correct' : ' incorrect'
                }

                return (
                  <div key={oIndex} className={className}>
                    {isUserAnswer && (
                      <span className="answer-marker">
                        {isCorrect ? '✓' : '✗'}
                      </span>
                    )}
                    {option}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryList