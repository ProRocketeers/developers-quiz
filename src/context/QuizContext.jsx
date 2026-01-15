import { createContext, useContext, useState } from 'react'

const QuizContext = createContext(null)

const SETTINGS_DEFAULT = {
  questionCount: 2,
  category: null,
  timeLimit: 10,
  useMock: false,
  useTimeLimit: false
}

// @refresh reset (force full remount pri HMR)
export function QuizProvider({ children }) {
  const [settings, setSettings] = useState(SETTINGS_DEFAULT)

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const resetSettings = () => {
    setSettings(SETTINGS_DEFAULT)
  }

  return (
    <QuizContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </QuizContext.Provider>
  )
}

// custom hook
export function useQuizSettings() {
  const ctx = useContext(QuizContext)
  if (!ctx) {
    throw new Error('useQuizSettings must be used within QuizProvider')
  }
  return {
    settings: ctx.settings,
    updateSettings: ctx.updateSettings,
    resetSettings: ctx.resetSettings
  }
}