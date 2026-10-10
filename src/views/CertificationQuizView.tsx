import { useCallback, useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import CertificationQuestionCard from "../components/certifications/CertificationQuestionCard";
import QuestionNavigator from "../components/certifications/QuestionNavigator";
import type { QuestionStatus } from "../components/certifications/QuestionNavigator";
import QuizFooter from "../components/certifications/QuizFooter";
import QuizToolbar from "../components/certifications/QuizToolbar";
import {
  CERTIFICATION_EXAMS,
  CERTIFICATION_ROUTES,
  getTopicLabel,
} from "../constants/certifications";
import { useBeforeUnloadWarning } from "../hooks/useBeforeUnloadWarning";
import { useCertificationQuestions } from "../hooks/useCertificationQuestions";
import { useQuizClock } from "../hooks/useQuizClock";
import type {
  CertificationExam,
  CertificationQuestion,
  CertificationQuizSettings,
} from "../types";
import { getAnswerOutcome } from "../utils/certificationScoring";
import { finishCertificationQuiz } from "../utils/certificationNavigation";
import { loadCertificationQuizSettings } from "../utils/certificationStorage";
import { QUESTION_FORMS, pluralizeCs } from "../utils/pluralizeCs";
import { createId } from "../utils/quizResults";
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
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFinishedRef = useRef(false);
  const questionAnchorRef = useRef<HTMLDivElement>(null);
  const { startedAt, elapsedMs, remainingMs } = useQuizClock(
    exam.format.durationMinutes,
  );

  const isExamMode = settings.mode === "exam";
  const answeredCount = Object.keys(answers).length;
  const currentQuestion = questions[currentIndex];
  const isRevealed = (index: number) =>
    !isExamMode && answers[index] !== undefined;

  const finishQuiz = useCallback(() => {
    if (isFinishedRef.current) {
      return;
    }
    isFinishedRef.current = true;
    finishCertificationQuiz({
      id: createId(),
      createdAt: new Date().toISOString(),
      settings,
      questions,
      answers,
      totalDurationMs: Date.now() - startedAt,
    });
  }, [answers, questions, settings, startedAt]);

  useEffect(() => {
    if (isExamMode && remainingMs === 0) {
      finishQuiz();
    }
  }, [finishQuiz, isExamMode, remainingMs]);

  useBeforeUnloadWarning(answeredCount > 0, isFinishedRef);

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    questionAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selectAnswer = (answerIndex: number) => {
    setAnswers((previous) => ({ ...previous, [currentIndex]: answerIndex }));
  };

  const confirmAndFinish = () => {
    if (confirmUnansweredQuestions(questions.length - answeredCount)) {
      finishQuiz();
    }
  };

  const questionStatuses = questions.map((question, index) =>
    getQuestionStatus(question, answers[index], isRevealed(index)),
  );

  if (!currentQuestion) {
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

      <QuestionNavigator
        statuses={questionStatuses}
        currentIndex={currentIndex}
        onSelect={goToQuestion}
      />

      <div ref={questionAnchorRef} className="certification-question-anchor">
        <CertificationQuestionCard
          key={currentIndex}
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          topicLabel={getTopicLabel(exam, currentQuestion.topic)}
          selectedAnswer={answers[currentIndex]}
          isRevealed={isRevealed(currentIndex)}
          onSelect={selectAnswer}
        />
      </div>

      <QuizFooter
        currentIndex={currentIndex}
        questionCount={questions.length}
        answeredCount={answeredCount}
        onNavigate={goToQuestion}
        onFinish={confirmAndFinish}
      />
    </div>
  );
}

function confirmUnansweredQuestions(unansweredCount: number): boolean {
  return (
    unansweredCount === 0 ||
    window.confirm(
      `Bez odpovědi zůstává ${pluralizeCs(unansweredCount, QUESTION_FORMS)}. Opravdu chcete test vyhodnotit?`,
    )
  );
}

function getQuestionStatus(
  question: CertificationQuestion,
  answer: number | undefined,
  isRevealed: boolean,
): QuestionStatus {
  if (answer !== undefined && !isRevealed) {
    return "answered";
  }
  return getAnswerOutcome(question, answer);
}
