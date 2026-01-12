import './QuizSummary.css'

function QuizSummary({ score, total, passed, onReset, thresholdForSuccess }) {
  return (
    <div className={`quiz-summary ${passed ? 'passed' : 'failed'}`}>
      <div className="text-end">
        <span className="badge bg-success">min : {thresholdForSuccess}</span>
      </div>
      <h2>Quiz Complete!</h2>
      <div className="score">
        {score} / {total}
      </div>
      <p className="result-text">
        {passed ? 'Congratulations! You passed!' : 'Try again!'}
      </p>
      <button className="reset-btn" onClick={onReset}>
        Try Again
      </button>
    </div>
  )
}

export default QuizSummary
