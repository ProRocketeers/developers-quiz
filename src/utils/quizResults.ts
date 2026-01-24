import type { QuizHistoryEntry, QuizResults, QuizSettingsSnapshot } from "../types";

const HISTORY_STORAGE_KEY = "quizResultsHistory";
const LEGACY_STORAGE_KEY = "quizResults";

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const createSettingsSnapshot = (
  settings: Partial<QuizSettingsSnapshot>,
): QuizSettingsSnapshot => ({
  name: settings.name ?? null,
  email: settings.email ?? null,
  emailForCopy: settings.emailForCopy ?? null,
  category: settings.category ?? null,
  selectedCategories: settings.selectedCategories ?? [],
  questionCount: settings.questionCount ?? 0,
  thresholdForSuccess: settings.thresholdForSuccess ?? 0,
});

export const createHistoryEntry = (
  results: QuizResults,
  settingsSnapshot: QuizSettingsSnapshot,
): QuizHistoryEntry => ({
  id: createId(),
  createdAt: new Date().toISOString(),
  settingsSnapshot,
  emailStatus: "idle",
  ...results,
});

export const loadQuizHistory = (
  fallbackSettingsSnapshot?: QuizSettingsSnapshot,
): QuizHistoryEntry[] => {
  if (typeof localStorage === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as QuizHistoryEntry[];
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    return [];
  }

  if (typeof sessionStorage === "undefined") {
    return [];
  }

  const legacy = sessionStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) {
    return [];
  }

  try {
    const parsedLegacy = JSON.parse(legacy) as QuizResults;
    if (!fallbackSettingsSnapshot) {
      return [];
    }
    const migratedEntry = createHistoryEntry(
      parsedLegacy,
      fallbackSettingsSnapshot,
    );
    const migrated = [migratedEntry];
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  } catch {
    return [];
  }
};

export const saveQuizHistory = (history: QuizHistoryEntry[]) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
};

export const addQuizHistoryEntry = (
  entry: QuizHistoryEntry,
): QuizHistoryEntry[] => {
  const history = loadQuizHistory();
  const next = [entry, ...history];
  saveQuizHistory(next);
  return next;
};

export const updateQuizHistoryEntryEmailStatus = (
  entryId: string,
  emailStatus: QuizHistoryEntry["emailStatus"],
): QuizHistoryEntry[] => {
  const history = loadQuizHistory();
  const next = history.map((entry) =>
    entry.id === entryId ? { ...entry, emailStatus } : entry,
  );
  saveQuizHistory(next);
  return next;
};
