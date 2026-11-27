import {
  COURSE_MATERIALS_VERIFY_ROUTE,
  WRONG_PASSWORD_STATUS,
} from "../constants/courseMaterials";

export async function verifyCourseMaterialPassword(
  password: string,
  signal: AbortSignal,
): Promise<boolean> {
  const response = await fetch(COURSE_MATERIALS_VERIFY_ROUTE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
    signal,
  });
  if (response.ok) {
    return true;
  }
  if (response.status === WRONG_PASSWORD_STATUS) {
    return false;
  }
  throw new Error(`Password verification failed (HTTP ${response.status})`);
}
