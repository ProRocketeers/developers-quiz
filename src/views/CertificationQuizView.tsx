import { useRef, useState } from "react";
import Spinner from "../components/Spinner";
import CertificationQuestionCard from "../components/certifications/CertificationQuestionCard";
import PracticeToggles from "../components/certifications/PracticeToggles";
import QuestionNavigator from "../components/certifications/QuestionNavigator";
import QuizFooter from "../components/certifications/QuizFooter";
import QuizToolbar from "../components/certifications/QuizToolbar";
import {
  CERTIFICATION_EXAMS,
  CERTIFICATION_ROUTES,
  getTopicLabel,
} from "../constants/certifications";
import { localizeExam } from "../i18n/content";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useLocale, useTranslations } from "../i18n/localeContext";
import type { Locale } from "../i18n/locales";
import { useCertificationQuestions } from "../hooks/useCertificationQuestions";
import { useCertificationQuizSession } from "../hooks/useCertificationQuizSession";
import { useQuizClock } from "../hooks/useQuizClock";
import { usePracticePreferences } from "../hooks/usePracticePreferences";
import { useQuizCompletion } from "../hooks/useQuizCompletion";
import type {
  CertificationExam,
  CertificationPracticePreferences,
  CertificationQuestion,
  CertificationQuizSettings,
} from "../types";
import { loadCertificationQuizSettings } from "../utils/certificationStorage";
import "../pages/Certifications.css";

export default function CertificationQuizView({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <CertificationQuizEntry />
    </LocaleProvider>
  );
}

function CertificationQuizEntry() {
  const t = useTranslations().certifications.quiz;
  const [settings] = useState(loadCertificationQuizSettings);

  if (!settings) {
    return (
      <QuizUnavailable title={t.notReadyTitle} message={t.notReadyMessage} />
    );
  }
  return <CertificationQuizLoader settings={settings} />;
}

function CertificationQuizLoader({
  settings,
}: {
  settings: CertificationQuizSettings;
}) {
  const locale = useLocale();
  const t = useTranslations().certifications.quiz;
  const questionsState = useCertificationQuestions(settings);

  if (questionsState.status === "loading") {
    return <Spinner visible={true} />;
  }
  if (questionsState.status === "error") {
    return (
      <QuizUnavailable
        title={t.loadFailedTitle}
        message={t.loadFailedMessage}
      />
    );
  }
  if (questionsState.questions.length === 0) {
    return (
      <QuizUnavailable title={t.notReadyTitle} message={t.notReadyMessage} />
    );
  }
  return (
    <CertificationQuiz
      settings={settings}
      exam={localizeExam(CERTIFICATION_EXAMS[settings.examId], locale)}
      questions={questionsState.questions}
    />
  );
}

function QuizUnavailable({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  const t = useTranslations().certifications.quiz;

  return (
    <div className="certifications certification-empty">
      <h2>{title}</h2>
      <p>{message}</p>
      <a href={CERTIFICATION_ROUTES.home} className="certifications-link">
        {t.chooseCertification}
      </a>
    </div>
  );
}

interface QuizProps {
  settings: CertificationQuizSettings;
  exam: CertificationExam;
  questions: CertificationQuestion[];
}

function CertificationQuiz({ settings, exam, questions }: QuizProps) {
  const isPractice = settings.mode === "practice";
  const { preferences, isLearningMode, isRepeatMode, savePreferences } =
    usePracticePreferences(isPractice);
  const session = useCertificationQuizSession({
    questions,
    isPractice,
    isLearningMode,
    isRepeatMode,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionAnchorRef = useRef<HTMLDivElement>(null);
  const { startedAt, elapsedMs, remainingMs } = useQuizClock(
    exam.format.durationMinutes,
  );
  const confirmAndFinish = useQuizCompletion({
    settings,
    startedAt,
    remainingMs,
    completedCount: session.completedCount,
    unansweredCount: session.unansweredCount,
    getEvaluatedResults: session.getEvaluatedResults,
  });
  const currentItem = session.items[currentIndex];

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    if (isLearningMode) {
      session.markStudied(index);
    }
    questionAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const changePreferences = (next: CertificationPracticePreferences) => {
    savePreferences(next);
    if (next.isLearningMode) {
      session.markStudied(currentIndex);
    }
  };

  if (!currentItem) {
    return null;
  }

  return (
    <div className="certifications certification-quiz">
      <QuizToolbar
        exam={exam}
        mode={settings.mode}
        questionCount={questions.length}
        elapsedMs={elapsedMs}
        remainingMs={remainingMs}
      />

      {isPractice && (
        <PracticeToggles
          preferences={preferences}
          onChange={changePreferences}
        />
      )}

      <QuestionNavigator
        items={session.itemStates}
        currentIndex={currentIndex}
        onSelect={goToQuestion}
      />

      <div ref={questionAnchorRef} className="certification-question-anchor">
        <CertificationQuestionCard
          key={currentIndex}
          question={currentItem.question}
          questionNumber={currentIndex + 1}
          topicLabel={getTopicLabel(exam, currentItem.question.topic)}
          selectedAnswer={session.answers[currentIndex]}
          isRevealed={session.isRevealed(currentIndex)}
          isStudied={session.isStudied(currentIndex)}
          isRepeat={currentItem.isRepeat}
          onSelect={(answerIndex) =>
            session.selectAnswer(currentIndex, answerIndex)
          }
        />
      </div>

      <QuizFooter
        currentIndex={currentIndex}
        questionCount={session.items.length}
        completedCount={session.completedCount}
        canEvaluate={session.evaluatedCount > 0}
        onNavigate={goToQuestion}
        onFinish={confirmAndFinish}
      />
    </div>
  );
}
