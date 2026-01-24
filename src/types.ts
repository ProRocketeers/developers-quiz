export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface QuizSettings {
  questionCount: number;
  categories: string[];
  playerName: string;
}

export interface QuizResults {
  questions: Question[];
  answers: Record<number, number>;
  score: number;
  totalDurationMs?: number;
  questionDurationsMs?: Record<number, number>;
}

export interface QuizSettingsSnapshot {
  name: string | null;
  email: string | null;
  emailForCopy: string | null;
  category: string | null;
  selectedCategories: string[];
  questionCount: number;
  thresholdForSuccess: number;
}

export interface QuizHistoryEntry extends QuizResults {
  id: string;
  createdAt: string;
  settingsSnapshot: QuizSettingsSnapshot;
}
