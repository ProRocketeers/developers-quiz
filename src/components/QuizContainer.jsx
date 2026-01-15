import { useState, useEffect, useMemo, Suspense, lazy } from 'react'
import QuizQuestion from './QuizQuestion'
import Spinner from './Spinner'
import SummaryList from './SummaryList'
const QuizSummary = lazy(() => import('./QuizSummary'))
import './QuizContainer.css'
import { getQuestions, getCategories } from '../services/questionService'
import { useQuizSettings } from '../context/QuizContext'

const SUCCESS_THRESHOLD = 0.5;
const QUIZ_TIME = 10;

function QuizContainer() {
  const { settings } = useQuizSettings()
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [showSummary, setShowSummary] = useState(false)
  const [maxQuestions, setMaxQuestions] = useState(settings.questionCount)
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const categories = useMemo(() => getCategories(settings.useMock), []);
  const [inputMaxQuestions, setInputMaxQuestions] = useState(settings.questionCount)

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
    setLoading(true)
    setTimeout(() => {
      const loadedQuestions = getQuestions(maxQuestions, settings.useMock, selectedCategory);
      setQuestions(loadedQuestions);
      setAnswers({});
      setShowSummary(false);
      setLoading(false)
    }, 1000);
  }, [maxQuestions, selectedCategory]);

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
    setMaxQuestions(settings.questionCount);
    const loadedQuestions = getQuestions(maxQuestions, settings.useMock);
    setQuestions(loadedQuestions);
    setAnswers({})
    setShowSummary(false)
    setShowDetails(false)
  }

  const handleRefresh = () => {
    const loadedQuestions = getQuestions(maxQuestions, settings.useMock);
    setQuestions(loadedQuestions);
    setMaxQuestions(inputMaxQuestions)
    setAnswers({})
    setShowSummary(false)
    setShowDetails(false)
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
    let score = calculateScore()
    const minimalRequiredScore = Math.ceil(SUCCESS_THRESHOLD * maxQuestions);
    return (
      <div className="quiz-container">
        <Suspense fallback={<div>Loading...</div>}>
          <QuizSummary
            score={score}
            total={maxQuestions}
            passed={score >= minimalRequiredScore}
            onReset={handleReset}
            thresholdForSuccess={minimalRequiredScore}
          />
        </Suspense>
        <div className="summary-details-toggle">
          <button
            className="toggle-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <SummaryList questions={questions} answers={answers} />
        )}
      </div>
    )
  }

  const answeredCount = Object.keys(answers).length

  if (loading) {
    return <div className="quiz-container"><Spinner visible={true} /></div>;
  }

  return (
    <div className="quiz-container">
      {settings.useTimeLimit ? <span>{timeLeft}</span> : null}
      <div className="quiz-header">
        <div className="quiz-header-filter">
          <label>
            Category:
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              style={{ marginLeft: '8px', padding: '4px' }}
            >
              <option value="">All categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <label>
            Max questions:
            <input
              type="number"
              value={inputMaxQuestions}
              onChange={(e) => setInputMaxQuestions(Number(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setMaxQuestions(inputMaxQuestions)
                }
              }}
              
              style={{ marginLeft: '8px', padding: '4px', width: '60px' }}
            />
          </label>
          <button className="btn btn-success" onClick={handleRefresh}>refresh</button>
        </div>
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
