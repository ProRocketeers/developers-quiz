import type { CourseMaterial, CourseMaterialId } from "../types";

export const COURSE_MATERIALS_ROUTE = "/api/course-materials";

export const COURSE_MATERIAL_PASSWORD_ENV = "COURSE_MATERIALS_PASSWORD";

export const COURSE_MATERIALS: Record<CourseMaterialId, CourseMaterial> = {
  "archimate-presentation": {
    id: "archimate-presentation",
    label: "Prezentace kurzu",
    description: "Slidy kurzu ArchiMate 3.2 (433 slidů)",
    fileName: "archimate-3-2-prezentace.pdf",
  },
  "archimate-reference-cards": {
    id: "archimate-reference-cards",
    label: "Reference cards",
    description: "Oficiální referenční karty prvků a vztahů",
    fileName: "archimate-3-2-reference-cards.pdf",
  },
  "archimate-student-guide": {
    id: "archimate-student-guide",
    label: "Student Guide",
    description: "Příručka studenta s cvičeními ke každé kapitole",
    fileName: "archimate-3-2-student-guide.pdf",
  },
};

export const isCourseMaterialId = (value: string): value is CourseMaterialId =>
  Object.hasOwn(COURSE_MATERIALS, value);
