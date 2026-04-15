import questionsCz from "../data/questionsCz.json";
import questionsEn from "../data/questionsEn.json";
import { mockQuestions } from "../data/mockData";
import { ENG_LANG } from "../constants/quiz";
import type { Question } from "../types";
import type { Lang } from "../i18n/translations";

function getRealQuestions(lang: Lang): Question[] {
  return (lang === ENG_LANG ? questionsEn : questionsCz) as Question[];
}

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

function selectRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  return selected.map(shuffleQuestionOptions);
}

export function getQuestions(
  lang: Lang,
  count: number,
  useMock = true,
  selectedCategories: string | string[] | null = null,
  categoryQuestionCounts: Record<string, number> = {},
): Question[] {
  const source = useMock ? (mockQuestions as Question[]) : getRealQuestions(lang);

  let filtered = source;

  if (selectedCategories) {
    const categoryList = Array.isArray(selectedCategories)
      ? selectedCategories
      : [selectedCategories];

    filtered = source.filter((q) => categoryList.includes(q.category));

    const hasCategoryCounts = Object.keys(categoryQuestionCounts).length > 0;
    if (hasCategoryCounts) {
      const perCategory = categoryList.flatMap((category) => {
        const available = source.filter((q) => q.category === category);
        const desired = Math.min(
          categoryQuestionCounts[category] ?? 0,
          available.length,
        );
        return selectRandomQuestions(available, desired);
      });
      return shuffleArray(perCategory);
    }
  }

  return selectRandomQuestions(filtered, count);
}

export function getQuestionCount(
  lang: Lang,
  useMock = true,
  category: string | null = null,
): number {
  const source = useMock ? (mockQuestions as Question[]) : getRealQuestions(lang);
  const filtered = category ? source.filter((q) => q.category === category) : source;
  return filtered.length;
}

export function getCategories(lang: Lang, useMock = true): string[] {
  const source = useMock ? (mockQuestions as Question[]) : getRealQuestions(lang);
  const categories = [...new Set(source.map((q) => q.category))];
  return categories.sort();
}

interface CategoryWithCount {
  name: string;
  count: number;
}

export function getCategoriesWithCount(
  lang: Lang,
  useMock = false,
): CategoryWithCount[] {
  const source = useMock ? (mockQuestions as Question[]) : getRealQuestions(lang);

  const frequencyMap: Record<string, number> = {};
  source.forEach((q) => {
    frequencyMap[q.category] = (frequencyMap[q.category] ?? 0) + 1;
  });

  return Object.entries(frequencyMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}