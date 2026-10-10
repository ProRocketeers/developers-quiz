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

export default function CertificationResultsView() {
  const [attempts] = useState(loadCertificationAttempts);
  const [selectedId, setSelectedId] = useState(readAttemptIdFromUrl);
  const selectedAttempt =
    attempts.find((attempt) => attempt.id === selectedId) ?? attempts[0];

  if (!selectedAttempt) {
    return (
      <div className="certifications certification-empty">
        <h2>Zatím tu nejsou žádné výsledky</h2>
        <p>
          Spusťte procvičování nebo zkoušku nanečisto a výsledky se uloží sem.
        </p>
        <a href={CERTIFICATION_ROUTES.home} className="certifications-link">
          Vybrat certifikaci
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
        <h3>Historie pokusů</h3>
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
  const exam = CERTIFICATION_EXAMS[attempt.settings.examId];
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
        <span className="certifications-eyebrow">Vyhodnocení</span>
        <h2>{exam.title}</h2>
        <p>{new Date(attempt.createdAt).toLocaleString("cs-CZ")}</p>
      </div>

      <AttemptSummary exam={exam} attempt={attempt} score={score} />

      <div className="certification-results-actions">
        <button
          type="button"
          className="certification-submit-btn"
          onClick={() => startCertificationQuiz(attempt.settings)}
        >
          Nový pokus se stejným nastavením
        </button>
        {weakTopicIds.length > 0 && (
          <button
            type="button"
            className="certification-nav-btn is-primary"
            onClick={practiceWeakTopics}
          >
            Procvičit slabé okruhy ({weakTopicIds.length})
          </button>
        )}
        <a href={CERTIFICATION_ROUTES.home} className="certification-nav-btn">
          Zpět na certifikace
        </a>
      </div>

      <section className="certification-section">
        <h3>Úspěšnost podle okruhů</h3>
        <TopicBreakdown
          topicScores={score.topicScores}
          passPercentage={exam.format.passPercentage}
        />
      </section>

      <section className="certification-section">
        <h3>Rozbor odpovědí</h3>
        <AnswerReview exam={exam} attempt={attempt} />
      </section>
    </>
  );
}
