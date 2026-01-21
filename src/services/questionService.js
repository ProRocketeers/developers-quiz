import realQuestions from '../data/questions.json';
import { mockQuestions } from '../data/mockData';




function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleQuestionOptions(question) {
  const correctValue = question.options[question.correctAnswer];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctValue);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex
  };
}

function selectRandomQuestions(questions, count) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  return selected.map(shuffleQuestionOptions);
}

export function getQuestions(count, useMock = true, selectedCategories = null) {
  const source = useMock ? mockQuestions : realQuestions;
  let filtered = source;
  if (selectedCategories) {
    const categoryList = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];
    filtered = categoryList ? source.filter(q => categoryList.includes(q.category))
    : source;
  }
  return selectRandomQuestions(filtered, count);
}

export function getQuestionCount(useMock = true, category = null) {
  const source = useMock ? mockQuestions : realQuestions;
  const filtered = category
    ? source.filter(q => q.category === category)
    : source;
  return filtered.length;
}

export function getCategories(useMock = true, withCount = false) {
  const source = useMock ? mockQuestions : realQuestions;
  const categories = [...new Set(source.map(q => q.category))];
  return categories.sort();
}

export function getCategoriesWithCount(useMock = false) {
  const source = useMock ? mockQuestions : realQuestions;

  const frequencyMap = {}
  source.forEach(q => {
    frequencyMap[q.category] = (frequencyMap[q.category] ?? 0) + 1
  })

  return Object.entries(frequencyMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function green(categories) {
  // alert(categories?.length)
        // categories.map((idx,cat) => console.log(idx, cat))
        console.log(typeof categories)
        console.log(categories instanceof Set)
        console.log(categories instanceof Array)
        console.log(Array.isArray(categories))
        // console.log(categories?.map((cat, idx) => console.log(idx)))
        console.log(categories?.length)
        // console.log((categories ?? []).map(cat => console.log(cat)))
}