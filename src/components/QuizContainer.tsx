import { useState, useEffect, useRef, useCallback } from "react";
import { useI18n } from "../i18n/I18nContext";
import QuizQuestion from "./QuizQuestion";
import Spinner from "./Spinner";
import QuizSettings from "./QuizSettings";
import { QUIZ_TIME } from "../constants/quiz";
import "./QuizContainer.css";
import { getQuestions } from "../services/questionService";
import { useQuizSettings } from "../context/QuizContext";
import type { Question } from "../types";
import { navigateTo } from "../utils/navigation";
import {
  addQuizHistoryEntry,
  createHistoryEntry,
  createSettingsSnapshot,
} from "../utils/quizResults";


function QuizContainer() {
  const { settings } = useQuizSettings();
  const { lang, t } = useI18n();
  const [showSettings, setShowSettings] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [questionDurationsMs, setQuestionDurationsMs] = useState<
    Record<number, number>
  >({});
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const [loading, setLoading] = useState(true);
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

  const loadQuestions = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const loadedQuestions = getQuestions(
        lang, 
        settings.questionCount,
        settings.useMock,
        settings.multiSelect ? settings.selectedCategories : settings.category,
        settings.categoryQuestionCounts ?? {},
      );
      setQuestions(loadedQuestions);
      setAnswers({});
      setQuestionDurationsMs({});
      quizStartedAtRef.current = Date.now();
      setLoading(false);
    }, 1000);
  }, [
    lang,
    settings.questionCount,
    settings.useMock,
    settings.multiSelect,
    settings.selectedCategories,
    settings.category,
    settings.categoryQuestionCounts,
  ]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

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
      const confirmed = window.confirm(
        t("quiz.confirmUnanswered", { count: unanswered }),
      );
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
          <span className="quiz-kicker">{t("quiz.kicker")}</span>
          <h2>{t("quiz.title")}</h2>
          <p>
            {t("quiz.questionCount", { count: settings.questionCount })}
            {settings.useTimeLimit
              ? t("quiz.timeLimit.on")
              : t("quiz.timeLimit.off")}
          </p>
        </div>

        <div className="quiz-toolbar-actions">
          {settings.useTimeLimit ? (
            <div className="quiz-timer" aria-live="polite">
              {t("quiz.timerLeft", { seconds: timeLeft })}
            </div>
          ) : null}

          <div className="quiz-settings-toggle">
            <button
              className="toggle-btn"
              onClick={() => setShowSettings((prev) => !prev)}
              aria-expanded={showSettings}
              aria-controls="quiz-settings-panel"
            >
              {showSettings ? t("quiz.settings.hide") : t("quiz.settings.show")}
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div id="quiz-settings-panel">
          <QuizSettings showRefresh={true} onRefresh={handleRefresh} showNamePrompt={false} />
        </div>
      )}

      {questions.map((q, index) => (
        <QuizQuestion
          key={index}
          questionNumber={index + 1}
          question={q}
          selectedAnswer={answers[index]}
          onAnswerSelect={(answerIndex) => handleAnswerSelect(index, answerIndex)}
        />
      ))}

      <div className="quiz-footer">
        <span className="progress">
          {t("quiz.answeredProgress", { answered: answeredCount, total: settings.questionCount })}
        </span>
        <button className="submit-btn" onClick={handleSubmit}>
          {t("quiz.submit")}
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;
