import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type QuizSettingsState = {
  questionCount: number;
  category: string | null;
  timeLimit: number;
  useMock: boolean;
  useTimeLimit: boolean;
  name: string | null;
  email: string | null;
  selectedCategories: string[];
  categoryQuestionCounts: Record<string, number>;
  multiSelect: boolean;
  thresholdForSuccess: number;
  emailForCopy: string | null;
  consentToEmailResults: boolean;
};

type QuizContextValue = {
  settings: QuizSettingsState;
  updateSettings: (newSettings: Partial<QuizSettingsState>) => void;
  resetSettings: () => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

const SETTINGS_DEFAULT: QuizSettingsState = {
  questionCount: 2,
  category: null,
  timeLimit: 10,
  useMock: false,
  useTimeLimit: false,
  name: null,
  email: null,
  selectedCategories: [],
  categoryQuestionCounts: {},
  multiSelect: true,
  thresholdForSuccess: 0.5,
  emailForCopy: "peopleandculture@prorocketeers.com",
  consentToEmailResults: false,
};

const STORAGE_KEY = 'quizSettings';

function loadSettings() {
  if (typeof sessionStorage === "undefined") {
    return SETTINGS_DEFAULT;
  }
  const saved = sessionStorage.getItem(STORAGE_KEY);
  if (saved) {
    return { ...SETTINGS_DEFAULT, ...JSON.parse(saved) };
  }
  return SETTINGS_DEFAULT;
}

// @refresh reset (force full remount pri HMR)
export function QuizProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState(loadSettings);

  const updateSettings = (newSettings: Partial<QuizSettingsState>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const resetSettings = () => {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem(STORAGE_KEY);
    }
    setSettings(SETTINGS_DEFAULT);
  };

  return (
    <QuizContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </QuizContext.Provider>
  );
}

// custom hook
// eslint-disable-next-line react-refresh/only-export-components
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
