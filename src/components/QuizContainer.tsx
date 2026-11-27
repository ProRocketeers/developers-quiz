import { useState, useEffect, useRef } from "react";
import QuizQuestion from "./QuizQuestion";
import Spinner from "./Spinner";
import QuizSettings from "./QuizSettings";
import "./QuizContainer.css";
import { loadQuizQuestions } from "../services/questionService";
import { useQuizSettings } from "../context/QuizContext";
import { useLocale, useTranslations } from "../i18n/localeContext";
import type { Question } from "../types";
import { navigateTo } from "../utils/navigation";
import {
  addQuizHistoryEntry,
  createHistoryEntry,
  createSettingsSnapshot,
} from "../utils/quizResults";

const QUIZ_TIME = 10;

function QuizContainer() {
  const { settings } = useQuizSettings();
  const locale = useLocale();
  const t = useTranslations();
  const [showSettings, setShowSettings] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [questionDurationsMs, setQuestionDurationsMs] = useState<
    Record<number, number>
  >({});
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const [loading, setLoading] = useState(true);
  const [hasLoadFailed, setHasLoadFailed] = useState(false);
  const quizStartedAtRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [settings.category]);

  const loadQuestions = () => {
    setLoading(true);
    setHasLoadFailed(false);
    setTimeout(() => {
      loadQuizQuestions(locale, {
        count: settings.questionCount,
        useMock: settings.useMock,
        selectedCategories: settings.multiSelect
          ? settings.selectedCategories
          : settings.category,
        categoryQuestionCounts: settings.categoryQuestionCounts ?? {},
      })
        .then((loadedQuestions) => {
          setQuestions(loadedQuestions);
          setAnswers({});
          setQuestionDurationsMs({});
          quizStartedAtRef.current = Date.now();
        })
        .catch((error: unknown) => {
          console.error(
            `Failed to load the quiz questions (${locale}).`,
            error,
          );
          setHasLoadFailed(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setQuestionDurationsMs((prev) => {
      if (prev[questionIndex] !== undefined) {
        return prev;
      }
      const startTime = quizStartedAtRef.current ?? Date.now();
      return {
        ...prev,
        [questionIndex]: Math.max(0, Date.now() - startTime),
      };
    });
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const answerIndex = answers[questionIndex];
      if (answerIndex === questions[questionIndex]?.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const unanswered = Math.max(0, questions.length - answeredCount);
    if (unanswered > 0) {
      const confirmed = window.confirm(t.quiz.confirmUnanswered(unanswered));
      if (!confirmed) {
        return;
      }
    }

    const score = calculateScore();
    const totalDurationMs = quizStartedAtRef.current
      ? Math.max(0, Date.now() - quizStartedAtRef.current)
      : 0;
    const settingsSnapshot = createSettingsSnapshot({
      name: settings.name,
      email: settings.email,
      emailForCopy: settings.emailForCopy,
      category: settings.category,
      selectedCategories: settings.selectedCategories,
      questionCount: settings.questionCount,
      thresholdForSuccess: settings.thresholdForSuccess,
    });
    const entry = createHistoryEntry(
      { questions, answers, score, totalDurationMs, questionDurationsMs },
      settingsSnapshot,
    );
    addQuizHistoryEntry(entry);
    navigateTo("/results");
  };

  const handleRefresh = () => {
    loadQuestions();
  };

  const answeredCount = Object.keys(answers).length;

  if (loading) {
    return (
      <div className="quiz-container">
        <Spinner visible={true} />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-toolbar">
        <div className="quiz-intro">
          <span className="quiz-kicker">{t.quiz.kicker}</span>
          <h2>{t.quiz.title}</h2>
          <p>
            {t.plural.questions(settings.questionCount)} •{" "}
            {settings.useTimeLimit
              ? t.quiz.withTimeLimit
              : t.quiz.withoutTimeLimit}
          </p>
        </div>

        <div className="quiz-toolbar-actions">
          {settings.useTimeLimit ? (
            <div className="quiz-timer" aria-live="polite">
              ⏱️ {t.quiz.timeLeft(timeLeft)}
            </div>
          ) : null}

          <div className="quiz-settings-toggle">
            <button
              className="toggle-btn"
              onClick={() => setShowSettings((prev) => !prev)}
              aria-expanded={showSettings}
              aria-controls="quiz-settings-panel"
            >
              {showSettings ? t.quiz.hideSettings : t.quiz.showSettings}
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div id="quiz-settings-panel">
          <QuizSettings
            showRefresh={true}
            onRefresh={handleRefresh}
            showNamePrompt={false}
          />
        </div>
      )}

      {hasLoadFailed && (
        <p className="text-danger" role="alert">
          {t.quiz.loadFailed}
        </p>
      )}

      {questions.map((q, index) => (
        <QuizQuestion
          key={index}
          questionNumber={index + 1}
          question={q}
          selectedAnswer={answers[index]}
          onAnswerSelect={(answerIndex) =>
            handleAnswerSelect(index, answerIndex)
          }
        />
      ))}

      <div className="quiz-footer">
        <span className="progress">
          {t.quiz.answered(answeredCount, settings.questionCount)}
        </span>
        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          {t.quiz.submit}
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;
