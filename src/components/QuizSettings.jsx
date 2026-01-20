import { useState, useMemo } from 'react'
import { getCategories } from '../services/questionService'
import { useQuizSettings } from '../context/QuizContext'
import './QuizSettings.css'

function QuizSettings({ showRefresh = false, onRefresh, showNamePrompt = false, onValidationChange }) {
  const { settings, updateSettings } = useQuizSettings()
  const categories = useMemo(() => getCategories(settings.useMock), [settings.useMock])
  const [inputMaxQuestions, setInputMaxQuestions] = useState(settings.questionCount)
  const [inputEmail, setInputEmail] = useState()
  const [inputName, setInputName] = useState()
  const [errors, setErrors] = useState({ name: '', email: '' })

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

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

  const validateField = (field, val) => {
    if (!val) return 'Povinné pole'
    if (field === 'name' && val.length < 2) return 'Min. 2 znaky'
    if (field === 'email' && !validateEmail(val)) return 'Neplatný email'
    return ''
  }

  const handleInput = (field, val) => {
    if (field !== 'name' && field !== 'email') return

    const newError = validateField(field, val)
    const newErrors = { ...errors, [field]: newError }
    setErrors(newErrors)
    const hasError = !!newErrors.name || !!newErrors.email
    const currentName = field === 'name' ? val : inputName
    const currentEmail = field === 'email' ? val : inputEmail
    const notFilled = !currentName || !currentEmail

    const setters = { name: setInputName, email: setInputEmail }
    setters[field](val)
    updateSettings({ [field]: val })
    
    onValidationChange?.(hasError || notFilled)
  }

  return (
    <div className="quiz-settings">
      <div className="container">
      {showNamePrompt && (
          <div className="row">
            <div className="col">
        <label>
        Name:
        <input type="text" onChange={(e) => handleInput('name', e.target.value)} className="form-control" />
        {errors.name && <span className="text-danger small">{errors.name}</span>}
      </label>
      </div>
      <div className="col">
      <label>
        Email:
        <input type="email" onChange={(e) => handleInput('email', e.target.value)} className="form-control" />
        {errors.email && <span className="text-danger small">{errors.email}</span>}
      </label>
      </div>
      </div>
      )}
      
      <div className="row">
        <div className="col">
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
      </div>

<div className="col">
      <label>
        Max questions:
        <input
          type="number"
          value={inputMaxQuestions}
          onChange={(e) => handleInputMaxQuestions(Number(e.target.value))}
          onKeyDown={handleMaxQuestionsKeyDown}
          min={1}
          className="form-control"
        />
      </label>
      </div>
</div>
<div className="row">
  <div className="col">
      {showRefresh && (
        <button className="btn btn-success" onClick={handleRefresh}>
          Refresh
        </button>
      )}
      </div>
      </div>
      </div>
    </div>
  )
}

export default QuizSettings