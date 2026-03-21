import type { APIRoute } from "astro";
import crypto from "node:crypto";
import {
  createLogger,
  sendQuizResultsEmail,
  toSafeEmail,
} from "../../../shared/mailgun";

export const prerender = false;

type EmailRequest = {
  to: string;
  name: string;
  score: number;
  total: number;
  passed: boolean;
  detailed?: boolean;
  questions?: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
  }>;
  answers?: Record<number, number>;
};

const log = createLogger("astro-api");

const jsonResponse = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const OPTIONS: APIRoute = async () => jsonResponse({});

export const POST: APIRoute = async ({ request }) => {
  const requestId = crypto.randomUUID();

  try {
    const body = (await request.json()) as Partial<EmailRequest>;
    const { to, name } = body;

    if (!to || !name) {
      log("warn", "email_send_validation_failed", {
        requestId,
        reason: "Missing required fields: to, name",
      });
      return jsonResponse(
        { error: "Missing required fields: to, name" },
        400,
      );
    }

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      log("error", "email_send_config_missing", {
        requestId,
        missing: {
          MAILGUN_API_KEY: !process.env.MAILGUN_API_KEY,
          MAILGUN_DOMAIN: !process.env.MAILGUN_DOMAIN,
        },
      });
      return jsonResponse({ error: "Missing Mailgun configuration" }, 500);
    }

    log("info", "email_send_requested", {
      requestId,
      to: toSafeEmail(to),
      detailed: Boolean(body.detailed),
      hasQuestions: Array.isArray(body.questions),
      score: body.score,
      total: body.total,
      passed: body.passed,
    });

    const startedAt = Date.now();
    const data = await sendQuizResultsEmail({
      ...(body as EmailRequest),
      requestId,
      log,
    });

    log("info", "mailgun_send_timing", {
      requestId,
      durationMs: Date.now() - startedAt,
      messageId: data?.id,
    });

    return jsonResponse({ success: true, message: "Email sent" });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const details =
      error && typeof error === "object"
        ? (error as { details?: unknown; response?: { body?: unknown } }).details ??
          (error as { response?: { body?: unknown } }).response?.body
        : undefined;
    const status =
      error && typeof error === "object" && "status" in error
        ? (error as { status?: unknown }).status
        : undefined;

    log("error", "email_send_failed", {
      requestId,
      error: errorMessage,
      status,
      details,
    });

    return jsonResponse({ error: "Failed to send email" }, 500);
  }
};
