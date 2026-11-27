import {
  COURSE_MATERIALS_ROUTE,
  WRONG_PASSWORD_STATUS,
} from "../constants/courseMaterials";
import type { CourseMaterial } from "../types";

export class CourseMaterialDownloadError extends Error {
  readonly isWrongPassword: boolean;

  constructor(message: string, isWrongPassword: boolean) {
    super(message);
    this.name = "CourseMaterialDownloadError";
    this.isWrongPassword = isWrongPassword;
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
    const isWrongPassword = response.status === WRONG_PASSWORD_STATUS;
    throw new CourseMaterialDownloadError(
      isWrongPassword
        ? "Nesprávné heslo."
        : `Soubor „${material.label}“ se nepodařilo stáhnout (HTTP ${response.status}).`,
      isWrongPassword,
    );
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
