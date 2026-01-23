import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

const SETTINGS_DEFAULT = {
  questionCount: 2,
  category: null,
  timeLimit: 10,
  useMock: false,
  useTimeLimit: false,
  name: null,
  email: null,
  selectedCategories: [],
  multiSelect: true
};

const STORAGE_KEY = 'quizSettings';

function loadSettings() {
  const saved = sessionStorage.getItem(STORAGE_KEY);
  if (saved) {
    return { ...SETTINGS_DEFAULT, ...JSON.parse(saved) };
  }
  return SETTINGS_DEFAULT;
}

// @refresh reset (force full remount pri HMR)
export function QuizProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings);

  const updateSettings = (newSettings) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetSettings = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setSettings(SETTINGS_DEFAULT);
  };

  return (
    <QuizContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </QuizContext.Provider>
  );
}

// custom hook
export function useQuizSettings() {
  const ctx = useContext(QuizContext);
  if (!ctx) {
    throw new Error("useQuizSettings must be used within QuizProvider");
  }
  return {
    settings: ctx.settings,
    updateSettings: ctx.updateSettings,
    resetSettings: ctx.resetSettings,
  };
}
