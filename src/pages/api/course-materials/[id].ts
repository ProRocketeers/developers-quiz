import type { APIRoute } from "astro";
import {
  COURSE_MATERIAL_PASSWORD_ENV,
  isCourseMaterialId,
} from "../../../constants/courseMaterials";
import {
  isCourseMaterialDownloadConfigured,
  isCourseMaterialPasswordValid,
  openCourseMaterial,
} from "../../../services/courseMaterialsService";

export const prerender = false;

const WRONG_PASSWORD_DELAY_MS = 500;

const errorResponse = (message: string, status: number) =>
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

export const POST: APIRoute = async ({ params, request }) => {
  const { id } = params;
  if (!id || !isCourseMaterialId(id)) {
    return errorResponse("Neznámý studijní materiál.", 404);
  }

  if (!isCourseMaterialDownloadConfigured()) {
    console.error(
      `Course material download is disabled: ${COURSE_MATERIAL_PASSWORD_ENV} is not set`,
    );
    return errorResponse("Stahování podkladů není nakonfigurováno.", 503);
  }

  const password = await readPassword(request);
  if (password === null) {
    return errorResponse("Chybí heslo.", 400);
  }
  if (!isCourseMaterialPasswordValid(password)) {
    await new Promise((resolve) =>
      setTimeout(resolve, WRONG_PASSWORD_DELAY_MS),
    );
    return errorResponse("Nesprávné heslo.", 401);
  }

  try {
    const file = await openCourseMaterial(id);
    return new Response(file.stream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(file.sizeInBytes),
        "Content-Disposition": `attachment; filename="${file.downloadName}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error(`Course material "${id}" could not be read`, error);
    return errorResponse("Soubor se nepodařilo načíst.", 500);
  }
};
