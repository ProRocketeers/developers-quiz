import {
  COURSE_MATERIALS_ROUTE,
  WRONG_PASSWORD_STATUS,
} from "../constants/courseMaterials";
import type { CourseMaterial } from "../types";

export class CourseMaterialDownloadError extends Error {
  readonly httpStatus: number;

  constructor(materialId: string, httpStatus: number) {
    super(
      `Course material "${materialId}" could not be downloaded (HTTP ${httpStatus}).`,
    );
    this.name = "CourseMaterialDownloadError";
    this.httpStatus = httpStatus;
  }

  get isWrongPassword(): boolean {
    return this.httpStatus === WRONG_PASSWORD_STATUS;
  }
}

async function requestCourseMaterial(
  material: CourseMaterial,
  password: string,
): Promise<Blob> {
  const response = await fetch(`${COURSE_MATERIALS_ROUTE}/${material.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (!response.ok) {
    throw new CourseMaterialDownloadError(material.id, response.status);
  }
  return response.blob();
}

function saveBlobAsFile(blob: Blob, fileName: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(objectUrl);
}

export async function downloadCourseMaterial(
  material: CourseMaterial,
  password: string,
): Promise<void> {
  const blob = await requestCourseMaterial(material, password);
  saveBlobAsFile(blob, material.fileName);
}
