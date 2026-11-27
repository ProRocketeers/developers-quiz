import type { APIRoute } from "astro";
import { rejectUnauthorizedRequest } from "../../../services/courseMaterialsAuthorization";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const rejection = await rejectUnauthorizedRequest(request);
  return rejection ?? new Response(null, { status: 204 });
};
