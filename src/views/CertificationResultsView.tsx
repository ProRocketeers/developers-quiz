import { useState } from "react";
import AnswerReview from "../components/certifications/AnswerReview";
import AttemptHistory from "../components/certifications/AttemptHistory";
import AttemptSummary from "../components/certifications/AttemptSummary";
import TopicBreakdown from "../components/certifications/TopicBreakdown";
import {
  ATTEMPT_QUERY_PARAM,
  CERTIFICATION_EXAMS,
  CERTIFICATION_ROUTES,
  DEFAULT_PRACTICE_QUESTION_COUNT,
} from "../constants/certifications";
import { localizeExam } from "../i18n/content";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useLocale, useTranslations } from "../i18n/localeContext";
import { INTL_LOCALE_TAGS } from "../i18n/locales";
import type { Locale } from "../i18n/locales";
import type { CertificationAttempt } from "../types";
import { getWeakTopicIds, scoreAttempt } from "../utils/certificationScoring";
import { loadCertificationAttempts } from "../utils/certificationStorage";
import { startCertificationQuiz } from "../utils/certificationNavigation";
import "../pages/Certifications.css";

function readAttemptIdFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get(ATTEMPT_QUERY_PARAM);
}

function writeAttemptIdToUrl(attemptId: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(ATTEMPT_QUERY_PARAM, attemptId);
  window.history.replaceState(null, "", url);
}

export default function CertificationResultsView({
  locale,
}: {
  locale: Locale;
}) {
  return (
    <LocaleProvider locale={locale}>
      <CertificationResults />
    </LocaleProvider>
  );
}

function CertificationResults() {
  const t = useTranslations().certifications.results;
  const [attempts] = useState(loadCertificationAttempts);
  const [selectedId, setSelectedId] = useState(readAttemptIdFromUrl);
  const selectedAttempt =
    attempts.find((attempt) => attempt.id === selectedId) ?? attempts[0];

  if (!selectedAttempt) {
    return (
      <div className="certifications certification-empty">
        <h2>{t.emptyTitle}</h2>
        <p>{t.emptyText}</p>
        <a href={CERTIFICATION_ROUTES.home} className="certifications-link">
          {t.chooseCertification}
        </a>
      </div>
    );
  }

  const selectAttempt = (attemptId: string) => {
    setSelectedId(attemptId);
    writeAttemptIdToUrl(attemptId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="certifications certification-results">
      <AttemptResults key={selectedAttempt.id} attempt={selectedAttempt} />

      <section className="certification-section">
        <h3>{t.historyTitle}</h3>
        <AttemptHistory
          attempts={attempts}
          selectedId={selectedAttempt.id}
          onSelect={selectAttempt}
        />
      </section>
    </div>
  );
}

function AttemptResults({ attempt }: { attempt: CertificationAttempt }) {
  const locale = useLocale();
  const t = useTranslations().certifications.results;
  const exam = localizeExam(
    CERTIFICATION_EXAMS[attempt.settings.examId],
    locale,
  );
  const score = scoreAttempt(attempt, exam);
  const weakTopicIds = getWeakTopicIds(
    score.topicScores,
    exam.format.passPercentage,
  );

  const practiceWeakTopics = () =>
    startCertificationQuiz({
      examId: exam.id,
      mode: "practice",
      topicIds: weakTopicIds,
      questionCount: DEFAULT_PRACTICE_QUESTION_COUNT,
    });

  return (
    <>
      <div className="certification-results-intro">
        <span className="certifications-eyebrow">{t.kicker}</span>
        <h2>{exam.title}</h2>
        <p>
          {new Date(attempt.createdAt).toLocaleString(INTL_LOCALE_TAGS[locale])}
        </p>
      </div>

      <AttemptSummary exam={exam} attempt={attempt} score={score} />

      <div className="certification-results-actions">
        <button
          type="button"
          className="certification-submit-btn"
          onClick={() => startCertificationQuiz(attempt.settings)}
        >
          {t.retry}
        </button>
        {weakTopicIds.length > 0 && (
          <button
            type="button"
            className="certification-nav-btn is-primary"
            onClick={practiceWeakTopics}
          >
            {t.practiceWeakTopics(weakTopicIds.length)}
          </button>
        )}
        <a href={CERTIFICATION_ROUTES.home} className="certification-nav-btn">
          {t.backToCertifications}
        </a>
      </div>

      <section className="certification-section">
        <h3>{t.topicBreakdownTitle}</h3>
        <TopicBreakdown
          topicScores={score.topicScores}
          passPercentage={exam.format.passPercentage}
        />
      </section>

      <section className="certification-section">
        <h3>{t.answerReviewTitle}</h3>
        <AnswerReview exam={exam} attempt={attempt} />
      </section>
    </>
  );
}
