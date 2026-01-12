import realQuestions from '../data/questions.json';
import { mockQuestions } from '../data/mockData';

function selectRandomQuestions(questions, count) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  // TODO shuffle odpovedi
  return selected;
}

export function getQuestions(count, useMock = true) {
  const source = useMock ? mockQuestions : realQuestions;
  return selectRandomQuestions(source, count);
}

export function getQuestionCount(useMock = true) {
  const source = useMock ? mockQuestions : realQuestions;
  return source.length;
}