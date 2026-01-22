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
}
