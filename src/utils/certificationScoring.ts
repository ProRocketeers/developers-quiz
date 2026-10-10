import type {
  CertificationAttempt,
  CertificationExam,
  CertificationQuestion,
} from "../types";

export interface TopicScore {
  topicId: string;
  label: string;
  earnedPoints: number;
  maxPoints: number;
  questionCount: number;
}

export interface AttemptScore {
  earnedPoints: number;
  maxPoints: number;
  requiredPoints: number;
  percentage: number;
  passed: boolean;
  answeredCount: number;
  bestAnswerCount: number;
  topicScores: TopicScore[];
}

export type AnswerOutcome = "correct" | "partial" | "incorrect" | "unanswered";

interface QuestionScore {
  topicId: string;
  earnedPoints: number;
  maxPoints: number;
}

const SINGLE_ANSWER_POINTS = 1;

export function getMaxPoints(question: CertificationQuestion): number {
  return question.optionScores
    ? Math.max(...question.optionScores)
    : SINGLE_ANSWER_POINTS;
}

export function getEarnedPoints(
  question: CertificationQuestion,
  answerIndex: number | undefined,
): number {
  if (answerIndex === undefined) {
    return 0;
  }
  if (question.optionScores) {
    return question.optionScores[answerIndex] ?? 0;
  }
  return answerIndex === question.correctAnswer ? SINGLE_ANSWER_POINTS : 0;
}

export function getAnswerOutcome(
  question: CertificationQuestion,
  answerIndex: number | undefined,
): AnswerOutcome {
  if (answerIndex === undefined) {
    return "unanswered";
  }
  const earnedPoints = getEarnedPoints(question, answerIndex);
  if (earnedPoints === getMaxPoints(question)) {
    return "correct";
  }
  return earnedPoints > 0 ? "partial" : "incorrect";
}

export function getRequiredPoints(
  maxPoints: number,
  passPercentage: number,
): number {
  return Math.ceil((maxPoints * passPercentage) / 100);
}

export function toPercentage(earnedPoints: number, maxPoints: number): number {
  return maxPoints > 0 ? Math.round((earnedPoints / maxPoints) * 100) : 0;
}

export function getWeakTopicIds(
  topicScores: TopicScore[],
  passPercentage: number,
): string[] {
  return topicScores
    .filter(
      (topicScore) =>
        toPercentage(topicScore.earnedPoints, topicScore.maxPoints) <
        passPercentage,
    )
    .map((topicScore) => topicScore.topicId);
}

export function scoreAttempt(
  attempt: CertificationAttempt,
  exam: CertificationExam,
): AttemptScore {
  const questionScores = attempt.questions.map((question, index) => ({
    topicId: question.topic,
    earnedPoints: getEarnedPoints(question, attempt.answers[index]),
    maxPoints: getMaxPoints(question),
  }));
  const earnedPoints = sumBy(questionScores, (score) => score.earnedPoints);
  const maxPoints = sumBy(questionScores, (score) => score.maxPoints);
  const requiredPoints = getRequiredPoints(
    maxPoints,
    exam.format.passPercentage,
  );
  const bestAnswerCount = attempt.questions.filter(
    (question, index) => attempt.answers[index] === question.correctAnswer,
  ).length;

  return {
    earnedPoints,
    maxPoints,
    requiredPoints,
    percentage: toPercentage(earnedPoints, maxPoints),
    passed: maxPoints > 0 && earnedPoints >= requiredPoints,
    answeredCount: Object.keys(attempt.answers).length,
    bestAnswerCount,
    topicScores: scoreTopics(exam, questionScores),
  };
}

function scoreTopics(
  exam: CertificationExam,
  questionScores: QuestionScore[],
): TopicScore[] {
  return exam.topics
    .map((topic) => {
      const topicQuestionScores = questionScores.filter(
        (score) => score.topicId === topic.id,
      );
      return {
        topicId: topic.id,
        label: topic.label,
        earnedPoints: sumBy(topicQuestionScores, (score) => score.earnedPoints),
        maxPoints: sumBy(topicQuestionScores, (score) => score.maxPoints),
        questionCount: topicQuestionScores.length,
      };
    })
    .filter((topicScore) => topicScore.questionCount > 0);
}

function sumBy<T>(items: readonly T[], selector: (item: T) => number): number {
  return items.reduce((total, item) => total + selector(item), 0);
}
