import type { Locale } from "../locales";
import { cs } from "./cs";
import type { Messages } from "./cs";
import { en } from "./en";

export type { Messages };

const MESSAGES: Record<Locale, Messages> = { cs, en };

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}
