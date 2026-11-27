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
  emailStatus?: "idle" | "sending" | "sent" | "error";
}

export type CertificationId = "prince2" | "togaf" | "archimate";

export type CertificationLevel = "foundation" | "practitioner";

export type CertificationExamId = `${CertificationId}-${CertificationLevel}`;

export type CertificationQuizMode = "practice" | "exam";

/**
 * "gradient" mirrors the Open Group practitioner exams, where every option
 * is worth a different number of points (typically 5/3/1/0).
 */
export type CertificationScoring = "single-answer" | "gradient";

export interface CertificationDownload {
  label: string;
  href: string;
}

export interface CertificationCheatSheet {
  title: string;
  description: string;
  pageHref?: string;
  files: CertificationDownload[];
}

export type CourseMaterialId =
  | "archimate-presentation"
  | "archimate-reference-cards"
  | "archimate-student-guide";

export interface CourseMaterial {
  id: CourseMaterialId;
  label: string;
  description: string;
  fileName: string;
}

export interface Certification {
  id: CertificationId;
  name: string;
  edition: string;
  owner: string;
  description: string;
  cheatSheet?: CertificationCheatSheet;
  courseMaterialIds?: CourseMaterialId[];
}

export interface CertificationTopic {
  id: string;
  label: string;
  description: string;
}

export interface CertificationExamFormat {
  questionCount: number;
  durationMinutes: number;
  passPercentage: number;
  isOpenBook: boolean;
  scoring: CertificationScoring;
}

export interface CertificationExam {
  id: CertificationExamId;
  certificationId: CertificationId;
  level: CertificationLevel;
  title: string;
  summary: string;
  format: CertificationExamFormat;
  topics: CertificationTopic[];
}

/**
 * An illustration stored under `public/`. "question" shows it with the question,
 * "explanation" only after answering, so it must not give the answer away.
 */
export interface CertificationQuestionImage {
  src: string;
  alt: string;
  placement: "question" | "explanation";
}

export interface CertificationQuestion {
  topic: string;
  scenario?: string;
  image?: CertificationQuestionImage;
  question: string;
  options: string[];
  correctAnswer: number;
  optionScores?: number[];
  explanation: string;
}

export interface CertificationQuizSettings {
  examId: CertificationExamId;
  mode: CertificationQuizMode;
  topicIds: string[];
  questionCount: number;
}

export interface CertificationPracticePreferences {
  isLearningMode: boolean;
  isRepeatMode: boolean;
}

export interface CertificationAttempt {
  id: string;
  createdAt: string;
  settings: CertificationQuizSettings;
  questions: CertificationQuestion[];
  answers: Record<number, number>;
  totalDurationMs: number;
}

export interface CheatSheetRun {
  text: string;
  isBold?: boolean;
  isItalic?: boolean;
}

export type CheatSheetParagraph = CheatSheetRun[];

export interface CheatSheetTableCell {
  paragraphs: CheatSheetParagraph[];
  fill?: string;
  colSpan?: number;
}

export interface CheatSheetTableRow {
  cells: CheatSheetTableCell[];
  isHeader?: boolean;
}

export type CheatSheetBlock =
  | { type: "title"; text: string }
  | { type: "heading"; level: 1 | 2; text: string; id: string }
  | { type: "paragraph"; runs: CheatSheetParagraph }
  | { type: "listItem"; runs: CheatSheetParagraph }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "callout"; title: string; paragraphs: CheatSheetParagraph[] }
  | { type: "table"; rows: CheatSheetTableRow[] };

export interface CheatSheetDocument {
  blocks: CheatSheetBlock[];
}
