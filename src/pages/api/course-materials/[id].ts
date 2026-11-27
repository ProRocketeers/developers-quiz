import type { APIRoute } from "astro";
import { isCourseMaterialId } from "../../../constants/courseMaterials";
import {
  courseMaterialErrorResponse,
  rejectUnauthorizedRequest,
} from "../../../services/courseMaterialsAuthorization";
import { openCourseMaterial } from "../../../services/courseMaterialsService";

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  const { id } = params;
  if (!id || !isCourseMaterialId(id)) {
    return courseMaterialErrorResponse("Neznámý studijní materiál.", 404);
  }

  const rejection = await rejectUnauthorizedRequest(request);
  if (rejection) {
    return rejection;
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
    return courseMaterialErrorResponse("Soubor se nepodařilo načíst.", 500);
  }
};
