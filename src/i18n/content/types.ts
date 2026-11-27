import type {
  Certification,
  CertificationExamId,
  CertificationId,
  CertificationTopic,
  CourseMaterial,
  CourseMaterialId,
} from "../../types";
import type { CategoryGroup } from "../../utils/categoryGroups";

export type CertificationTranslation = Pick<
  Certification,
  "edition" | "description" | "cheatSheet"
>;

export type TopicTranslation = Pick<CertificationTopic, "label" | "description">;

export interface ExamTranslation {
  summary: string;
  topics: Record<string, TopicTranslation>;
}

export type CourseMaterialTranslation = Pick<
  CourseMaterial,
  "label" | "description"
>;

export type CategoryGroupTranslation = Pick<
  CategoryGroup,
  "label" | "description"
>;

/**
 * Translations of the content defined in `src/constants` and
 * `src/utils/categoryGroups.ts`, where the Czech texts are the source.
 */
export interface ContentTranslations {
  certifications: Record<CertificationId, CertificationTranslation>;
  exams: Record<CertificationExamId, ExamTranslation>;
  courseMaterials: Record<CourseMaterialId, CourseMaterialTranslation>;
  categoryGroups: Record<string, CategoryGroupTranslation>;
}
