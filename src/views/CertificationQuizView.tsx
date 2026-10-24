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

const MISSING_SETTINGS_TITLE = "Test není připravený";
const MISSING_SETTINGS_MESSAGE =
  "Nejprve si vyberte certifikaci, úroveň a režim testu.";

export default function CertificationQuizView() {
  const [settings] = useState(loadCertificationQuizSettings);

  if (!settings) {
    return (
      <QuizUnavailable
        title={MISSING_SETTINGS_TITLE}
        message={MISSING_SETTINGS_MESSAGE}
      />
    );
  }
  return <CertificationQuizLoader settings={settings} />;
}

function CertificationQuizLoader({
  settings,
}: {
  settings: CertificationQuizSettings;
}) {
  const questionsState = useCertificationQuestions(settings);

  if (questionsState.status === "loading") {
    return <Spinner visible={true} />;
  }
  if (questionsState.status === "error") {
    return (
      <QuizUnavailable
        title="Otázky se nepodařilo načíst"
        message="Zkuste stránku obnovit nebo test spustit znovu."
      />
    );
  }
  if (questionsState.questions.length === 0) {
    return (
      <QuizUnavailable
        title={MISSING_SETTINGS_TITLE}
        message={MISSING_SETTINGS_MESSAGE}
      />
    );
  }
  return (
    <CertificationQuiz
      settings={settings}
      exam={CERTIFICATION_EXAMS[settings.examId]}
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
  return (
    <div className="certifications certification-empty">
      <h2>{title}</h2>
      <p>{message}</p>
      <a href={CERTIFICATION_ROUTES.home} className="certifications-link">
        Vybrat certifikaci
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
