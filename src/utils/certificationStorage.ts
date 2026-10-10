import {
  CERTIFICATION_EXAMS,
  isCertificationExamId,
} from "../constants/certifications";
import type {
  CertificationAttempt,
  CertificationQuizMode,
  CertificationQuizSettings,
} from "../types";

const SETTINGS_STORAGE_KEY = "certificationQuizSettings";
const HISTORY_STORAGE_KEY = "certificationAttemptHistory";
const MAX_HISTORY_ENTRIES = 15;

export function saveCertificationQuizSettings(
  settings: CertificationQuizSettings,
): void {
  sessionStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

export function loadCertificationQuizSettings(): CertificationQuizSettings | null {
  const stored = sessionStorage.getItem(SETTINGS_STORAGE_KEY);
  if (!stored) {
    return null;
  }
  const parsed = parseStoredJson(stored, SETTINGS_STORAGE_KEY);
  return isValidQuizSettings(parsed) ? parsed : null;
}

export function loadCertificationAttempts(): CertificationAttempt[] {
  const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
  if (!stored) {
    return [];
  }
  const parsed = parseStoredJson(stored, HISTORY_STORAGE_KEY);
  return Array.isArray(parsed) ? parsed.filter(isStoredAttempt) : [];
}

export function addCertificationAttempt(attempt: CertificationAttempt): void {
  const history = [attempt, ...loadCertificationAttempts()].slice(
    0,
    MAX_HISTORY_ENTRIES,
  );
  saveHistoryWithinQuota(history);
}

// Attempts embed full question texts, so the oldest entries are dropped when
// the browser quota is exceeded rather than losing the newest result.
function saveHistoryWithinQuota(history: CertificationAttempt[]): void {
  for (let keptEntries = history.length; keptEntries > 0; keptEntries--) {
    try {
      localStorage.setItem(
        HISTORY_STORAGE_KEY,
        JSON.stringify(history.slice(0, keptEntries)),
      );
      return;
    } catch (error) {
      if (!isQuotaExceededError(error)) {
        throw error;
      }
    }
  }
  throw new Error(
    "Výsledek nelze uložit, protože úložiště prohlížeče je zaplněné.",
  );
}

function isQuotaExceededError(error: unknown): boolean {
  return (
    error instanceof DOMException &&
    (error.name === "QuotaExceededError" ||
      error.name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}

function parseStoredJson(serialized: string, storageKey: string): unknown {
  try {
    return JSON.parse(serialized);
  } catch (error) {
    console.warn(
      `Ignoring corrupted value in storage key "${storageKey}".`,
      error,
    );
    return null;
  }
}

function isValidQuizSettings(
  value: unknown,
): value is CertificationQuizSettings {
  if (!isRecord(value)) {
    return false;
  }
  const { examId, mode, topicIds, questionCount } = value;
  if (typeof examId !== "string" || !isCertificationExamId(examId)) {
    return false;
  }
  const examTopicIds = CERTIFICATION_EXAMS[examId].topics.map(
    (topic) => topic.id,
  );
  const hasValidTopics =
    Array.isArray(topicIds) &&
    topicIds.length > 0 &&
    topicIds.every(
      (topicId) =>
        typeof topicId === "string" && examTopicIds.includes(topicId),
    );
  const hasValidQuestionCount =
    typeof questionCount === "number" &&
    Number.isInteger(questionCount) &&
    questionCount > 0;

  return isQuizMode(mode) && hasValidTopics && hasValidQuestionCount;
}

function isStoredAttempt(value: unknown): value is CertificationAttempt {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.createdAt === "string" &&
    typeof value.totalDurationMs === "number" &&
    isValidQuizSettings(value.settings) &&
    Array.isArray(value.questions) &&
    isRecord(value.answers)
  );
}

function isQuizMode(value: unknown): value is CertificationQuizMode {
  return value === "practice" || value === "exam";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
