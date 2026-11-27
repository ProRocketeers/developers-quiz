import { useState } from "react";
import CertificationTabs from "../components/certifications/CertificationTabs";
import DocumentsPanel from "../components/certifications/DocumentsPanel";
import ExamLevelCard from "../components/certifications/ExamLevelCard";
import PracticeSetup from "../components/certifications/PracticeSetup";
import {
  CERTIFICATION_EXAMS,
  CERTIFICATION_ROUTES,
  CERTIFICATIONS,
  getCertificationExams,
} from "../constants/certifications";
import { localizeCertification, localizeExam } from "../i18n/content";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useLocale, useTranslations } from "../i18n/localeContext";
import type { Locale } from "../i18n/locales";
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
  locale: Locale;
  questionCounts: QuestionCountsByExam;
}

export default function CertificationHomeView({
  locale,
  questionCounts,
}: Props) {
  return (
    <LocaleProvider locale={locale}>
      <CertificationHome questionCounts={questionCounts} />
    </LocaleProvider>
  );
}

function CertificationHome({ questionCounts }: Omit<Props, "locale">) {
  const locale = useLocale();
  const t = useTranslations().certifications.home;
  const certifications = CERTIFICATIONS.map((certification) =>
    localizeCertification(certification, locale),
  );
  const [certificationId, setCertificationId] =
    useState<CertificationId>("prince2");
  const [practiceExamId, setPracticeExamId] =
    useState<CertificationExamId | null>(null);
  const certification = certifications.find(({ id }) => id === certificationId);
  const practiceExam = practiceExamId
    ? localizeExam(CERTIFICATION_EXAMS[practiceExamId], locale)
    : null;
  const exams = getCertificationExams(certificationId).map((exam) =>
    localizeExam(exam, locale),
  );

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
        <span className="certifications-eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.intro}</p>
        <div className="certifications-hero-actions">
          <a
            href={CERTIFICATION_ROUTES.results}
            className="certifications-link"
          >
            {t.myResults}
          </a>
        </div>
      </section>

      <CertificationTabs
        certifications={certifications}
        selectedId={certificationId}
        onSelect={selectCertification}
      />

      {certification && (
        <p className="certification-description">
          {certification.description} {t.owner(certification.owner)}
        </p>
      )}

      {(certification?.cheatSheet || certification?.courseMaterialIds) && (
        <DocumentsPanel
          cheatSheet={certification.cheatSheet}
          courseMaterialIds={certification.courseMaterialIds}
        />
      )}

      <div className="certification-levels">
        {exams.map((exam) => (
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

      <p className="certifications-disclaimer">{t.disclaimer}</p>
    </div>
  );
}
