import { useState, useEffect } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizSummary from './QuizSummary'
import './QuizContainer.css'
import { getQuestions } from '../services/questionService'

const TOTAL_QUESTIONS_DEFAULT = 4;
const SUCCESS_THRESHOLD = 0.5;
const QUIZ_TIME = 10;
const USE_MOCK = false;

function QuizContainer() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [showSummary, setShowSummary] = useState(false)
  const [maxQuestions, setMaxQuestions] = useState(TOTAL_QUESTIONS_DEFAULT)

  useEffect(() => {
    setTimeout(() => {
      const loadedQuestions = getQuestions(maxQuestions, USE_MOCK);
      setQuestions(loadedQuestions);
      setAnswers({});
      setShowSummary(false);
    }, 1000);
  }, [maxQuestions]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    console.log('questionIndex', questionIndex)
    console.log('answerIndex', answerIndex)
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const handleSubmit = () => {
    setShowSummary(true)
  }

  const handleReset = () => {
    setMaxQuestions(TOTAL_QUESTIONS_DEFAULT);
    const loadedQuestions = getQuestions(maxQuestions, USE_MOCK);
    setQuestions(loadedQuestions);
    setAnswers({})
    setShowSummary(false)
  }

  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const answerIndex = answers[questionIndex];
      if (answerIndex === questions[questionIndex]?.correctAnswer) {
        score++;
      }
    });
    return score;
  }

  if (showSummary) {
    // Random result for now (as per spec)
    let score = calculateScore()
    const minimalRequiredScore = Math.ceil(SUCCESS_THRESHOLD * maxQuestions);
    return (
      <QuizSummary
        score={score}
        total={maxQuestions}
        passed={score >= minimalRequiredScore}
        onReset={handleReset}
        thresholdForSuccess={minimalRequiredScore}
      />
    )
  }

  const answeredCount = Object.keys(answers).length

  if (questions.length === 0) {
    return <div className="quiz-container">Loading questions...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <label>
          Max questions:
          <input
            type="number"
            value={maxQuestions}
            onChange={(e) => setMaxQuestions(Number(e.target.value))}
            min="1"
            style={{ marginLeft: '8px', padding: '4px', width: '60px' }}
          />
        </label>
        <button onClick={handleReset}>refresh</button>
      </div>
      {questions.map((q, index) => (
        <QuizQuestion
          key={index}
          questionNumber={index + 1}
          question={q.question}
          options={q.options}
          selectedAnswer={answers[index]}
          onAnswerSelect={(answerIndex) => handleAnswerSelect(index, answerIndex)}
        />
      ))}

      <div className="quiz-footer">
        <span className="progress">Answered: {answeredCount} / {maxQuestions}</span>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={answeredCount < maxQuestions}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  )
}

export default QuizContainer
