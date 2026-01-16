import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizQuestion from './QuizQuestion'
import Spinner from './Spinner'
import QuizSettings from './QuizSettings'
import './QuizContainer.css'
import { getQuestions } from '../services/questionService'
import { useQuizSettings } from '../context/QuizContext'

const QUIZ_TIME = 10

function QuizContainer() {
  const navigate = useNavigate()
  const { settings } = useQuizSettings()
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    loadQuestions()
  }, [settings.category])

  const loadQuestions = () => {
    setLoading(true)
    setTimeout(() => {
      const loadedQuestions = getQuestions(settings.questionCount, settings.useMock, settings.category)
      setQuestions(loadedQuestions)
      setAnswers({})
      setLoading(false)
    }, 1000)
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const calculateScore = () => {
    let score = 0
    Object.keys(answers).forEach((questionIndex) => {
      const answerIndex = answers[questionIndex]
      if (answerIndex === questions[questionIndex]?.correctAnswer) {
        score++
      }
    })
    return score
  }

  const handleSubmit = () => {
    const score = calculateScore()
    sessionStorage.setItem('quizResults', JSON.stringify({ questions, answers, score }))
    navigate('/results')
  }

  const handleRefresh = () => {
    loadQuestions()
  }

  const answeredCount = Object.keys(answers).length

  if (loading) {
    return <div className="quiz-container"><Spinner visible={true} /></div>;
  }

  return (
    <div className="quiz-container">
      {settings.useTimeLimit ? <span>{timeLeft}</span> : null}

      <QuizSettings showRefresh={true} onRefresh={handleRefresh} />

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
        <span className="progress">Answered: {answeredCount} / {settings.questionCount}</span>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={answeredCount < settings.questionCount}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  )
}

export default QuizContainer
