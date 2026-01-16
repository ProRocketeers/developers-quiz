import { useState, useMemo } from 'react'
import { getCategories } from '../services/questionService'
import { useQuizSettings } from '../context/QuizContext'
import './QuizSettings.css'

function QuizSettings({ showRefresh = false, onRefresh }) {
  const { settings, updateSettings } = useQuizSettings()
  const categories = useMemo(() => getCategories(settings.useMock), [settings.useMock])
  const [inputMaxQuestions, setInputMaxQuestions] = useState(settings.questionCount)

  const handleCategoryChange = (e) => {
    updateSettings({ category: e.target.value || null })
  }

  const handleMaxQuestionsKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateSettings({ questionCount: inputMaxQuestions })
    }
  }

  const handleInputMaxQuestions = (val) => {
    console.log('green ', val)
    setInputMaxQuestions(val)
    updateSettings({ questionCount: val })
  }

  const handleRefresh = () => {
    updateSettings({ questionCount: inputMaxQuestions })
    if (onRefresh) onRefresh()
  }

  return (
    <div className="quiz-settings">
      <label>
        Category:
        <select
          value={settings.category || ''}
          onChange={handleCategoryChange}
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
          onChange={(e) => handleInputMaxQuestions(Number(e.target.value))}
          onKeyDown={handleMaxQuestionsKeyDown}
          min={1}
        />
      </label>

      {showRefresh && (
        <button className="btn btn-success" onClick={handleRefresh}>
          Refresh
        </button>
      )}
    </div>
  )
}

export default QuizSettings