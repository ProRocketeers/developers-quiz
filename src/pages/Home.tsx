import { useNavigate } from 'react-router-dom'
import QuizSettings from '../components/QuizSettings'
import './Home.css'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [hasErrors, setHasErrors] = useState(true)

  const handleStartQuiz = () => {
    navigate('/quiz')
  }

  return (
    <div className="home">
      <h2>Vítejte v Java Developers Quiz</h2>
      <p>Otestujte své znalosti z Java ekosystému.</p>

      <div className="d-flex justify-content-center">
        <QuizSettings showRefresh={false} showNamePrompt={true} onValidationChange={setHasErrors} />
      </div>
      <button className="start-btn" onClick={handleStartQuiz} disabled={hasErrors}>
        Spustit Quiz
      </button>
    </div>
  )
}

export default Home