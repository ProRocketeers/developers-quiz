import {
  COURSE_MATERIAL_PASSWORD_ENV,
  WRONG_PASSWORD_STATUS,
} from "../constants/courseMaterials";
import {
  isCourseMaterialDownloadConfigured,
  isCourseMaterialPasswordValid,
} from "./courseMaterialsService";

const WRONG_PASSWORD_DELAY_MS = 500;
const NOT_CONFIGURED_STATUS = 503;
const MISSING_PASSWORD_STATUS = 400;

export const courseMaterialErrorResponse = (message: string, status: number) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });

async function readPassword(request: Request): Promise<string | null> {
  try {
    const body: unknown = await request.json();
    const password = (body as { password?: unknown } | null)?.password;
    return typeof password === "string" ? password : null;
  } catch {
    return null;
  }
}

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

/** Returns an error response when the request must not be served, otherwise null. */
export async function rejectUnauthorizedRequest(
  request: Request,
): Promise<Response | null> {
  if (!isCourseMaterialDownloadConfigured()) {
    console.error(
      `Course material download is disabled: ${COURSE_MATERIAL_PASSWORD_ENV} is not set`,
    );
    return courseMaterialErrorResponse(
      "Stahování podkladů není nakonfigurováno.",
      NOT_CONFIGURED_STATUS,
    );
  }

  const password = await readPassword(request);
  if (password === null) {
    return courseMaterialErrorResponse("Chybí heslo.", MISSING_PASSWORD_STATUS);
  }
  if (!isCourseMaterialPasswordValid(password)) {
    await wait(WRONG_PASSWORD_DELAY_MS);
    return courseMaterialErrorResponse(
      "Nesprávné heslo.",
      WRONG_PASSWORD_STATUS,
    );
  }
  return null;
}
