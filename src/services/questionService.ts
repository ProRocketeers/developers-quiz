import realQuestions from "../data/questions.json";
import { mockQuestions } from "../data/mockData";
import type { Question } from "../types";

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleQuestionOptions(question: Question): Question {
  const correctValue = question.options[question.correctAnswer];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctValue);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex,
  };
}

function selectRandomQuestions(
  questions: Question[],
  count: number,
): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  return selected.map(shuffleQuestionOptions);
}

export function getQuestions(
  count: number,
  useMock = true,
  selectedCategories: string | string[] | null = null,
): Question[] {
  const source = useMock ? mockQuestions : realQuestions;
  let filtered = source;
  if (selectedCategories) {
    const categoryList = Array.isArray(selectedCategories)
      ? selectedCategories
      : [selectedCategories];
    filtered = categoryList
      ? source.filter((q) => categoryList.includes(q.category))
      : source;
  }
  return selectRandomQuestions(filtered as Question[], count);
}

export function getQuestionCount(
  useMock = true,
  category: string | null = null,
): number {
  const source = useMock ? mockQuestions : realQuestions;
  const filtered = category
    ? source.filter((q) => q.category === category)
    : source;
  return filtered.length;
}

export function getCategories(useMock = true): string[] {
  const source = useMock ? mockQuestions : realQuestions;
  const categories = [...new Set(source.map((q) => q.category))];
  return categories.sort();
}

interface CategoryWithCount {
  name: string;
  count: number;
}

export function getCategoriesWithCount(useMock = false): CategoryWithCount[] {
  const source = useMock ? mockQuestions : realQuestions;

  const frequencyMap: Record<string, number> = {};
  source.forEach((q) => {
    frequencyMap[q.category] = (frequencyMap[q.category] ?? 0) + 1;
  });

  return Object.entries(frequencyMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
