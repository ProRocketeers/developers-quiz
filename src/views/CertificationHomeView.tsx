import { useState } from "react";
import CertificationTabs from "../components/certifications/CertificationTabs";
import ExamLevelCard from "../components/certifications/ExamLevelCard";
import PracticeSetup from "../components/certifications/PracticeSetup";
import {
  CERTIFICATION_EXAMS,
  CERTIFICATION_ROUTES,
  CERTIFICATIONS,
  getCertificationExams,
} from "../constants/certifications";
import type { QuestionCountsByExam } from "../services/certificationQuestionService";
import type {
  CertificationExam,
  CertificationExamId,
  CertificationId,
} from "../types";
import { startCertificationQuiz } from "../utils/certificationNavigation";
import "../pages/Certifications.css";

function startMockExam(exam: CertificationExam) {
  startCertificationQuiz({
    examId: exam.id,
    mode: "exam",
    topicIds: exam.topics.map((topic) => topic.id),
    questionCount: exam.format.questionCount,
  });
}

function sumCounts(topicCounts: Record<string, number> = {}): number {
  return Object.values(topicCounts).reduce((sum, count) => sum + count, 0);
}

interface Props {
  questionCounts: QuestionCountsByExam;
}

export default function CertificationHomeView({ questionCounts }: Props) {
  const [certificationId, setCertificationId] =
    useState<CertificationId>("prince2");
  const [practiceExamId, setPracticeExamId] =
    useState<CertificationExamId | null>(null);
  const certification = CERTIFICATIONS.find(({ id }) => id === certificationId);
  const practiceExam = practiceExamId
    ? CERTIFICATION_EXAMS[practiceExamId]
    : null;

  const selectCertification = (id: CertificationId) => {
    setCertificationId(id);
    setPracticeExamId(null);
  };

  const togglePractice = (examId: CertificationExamId) => {
    setPracticeExamId((current) => (current === examId ? null : examId));
  };

  return (
    <div className="certifications">
      <section className="certifications-hero">
        <span className="certifications-eyebrow">Příprava na certifikace</span>
        <h2>PRINCE2®, TOGAF® a ArchiMate®</h2>
        <p>
          Cvičné otázky pokrývající sylaby úrovní Foundation i Practitioner.
          Každá otázka má vysvětlení, takže se z chyb rovnou učíte. Výsledky se
          ukládají jen ve vašem prohlížeči a nikam se neodesílají.
        </p>
        <div className="certifications-hero-actions">
          <a
            href={CERTIFICATION_ROUTES.results}
            className="certifications-link"
          >
            Moje výsledky
          </a>
        </div>
      </section>

      <CertificationTabs
        selectedId={certificationId}
        onSelect={selectCertification}
      />

      {certification && (
        <p className="certification-description">
          {certification.description} Vlastník certifikace:{" "}
          {certification.owner}.
        </p>
      )}

      <div className="certification-levels">
        {getCertificationExams(certificationId).map((exam) => (
          <ExamLevelCard
            key={exam.id}
            exam={exam}
            bankSize={sumCounts(questionCounts[exam.id])}
            isPracticeOpen={practiceExamId === exam.id}
            onStartExam={() => startMockExam(exam)}
            onTogglePractice={() => togglePractice(exam.id)}
          />
        ))}
      </div>

      {practiceExam && (
        <PracticeSetup
          key={practiceExam.id}
          exam={practiceExam}
          topicCounts={questionCounts[practiceExam.id] ?? {}}
          onStart={(topicIds, questionCount) =>
            startCertificationQuiz({
              examId: practiceExam.id,
              mode: "practice",
              topicIds,
              questionCount,
            })
          }
          onClose={() => setPracticeExamId(null)}
        />
      )}

      <p className="certifications-disclaimer">
        Neoficiální cvičné otázky pro samostudium. PRINCE2® je registrovaná
        ochranná známka PeopleCert group. TOGAF® a ArchiMate® jsou registrované
        ochranné známky The Open Group. Tato aplikace s vlastníky certifikací
        nijak nesouvisí.
      </p>
    </div>
  );
}
