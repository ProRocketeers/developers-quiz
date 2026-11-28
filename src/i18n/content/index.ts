import type {
  Certification,
  CertificationExam,
  CourseMaterial,
} from "../../types";
import type { CategoryGroup } from "../../utils/categoryGroups";
import type { Locale } from "../locales";
import { contentEn } from "./en";
import type { ContentTranslations } from "./types";

// Czech is the source language of the content, so it needs no translation.
const CONTENT_TRANSLATIONS: Partial<Record<Locale, ContentTranslations>> = {
  en: contentEn,
};

export function localizeCertification(
  certification: Certification,
  locale: Locale,
): Certification {
  const translation =
    CONTENT_TRANSLATIONS[locale]?.certifications[certification.id];
  return { ...certification, ...translation };
}

export function localizeExam(
  exam: CertificationExam,
  locale: Locale,
): CertificationExam {
  const translation = CONTENT_TRANSLATIONS[locale]?.exams[exam.id];
  if (!translation) {
    return exam;
  }
  return {
    ...exam,
    summary: translation.summary,
    topics: exam.topics.map((topic) => ({
      ...topic,
      ...translation.topics[topic.id],
    })),
  };
}

export function localizeCourseMaterial(
  material: CourseMaterial,
  locale: Locale,
): CourseMaterial {
  const translation = CONTENT_TRANSLATIONS[locale]?.courseMaterials[material.id];
  return { ...material, ...translation };
}

export function localizeCategoryGroup(
  group: CategoryGroup,
  locale: Locale,
): CategoryGroup {
  const translation = CONTENT_TRANSLATIONS[locale]?.categoryGroups[group.id];
  return { ...group, ...translation };
}
