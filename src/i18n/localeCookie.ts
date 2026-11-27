import { LOCALE_COOKIE_NAME } from "./locales";
import type { Locale } from "./locales";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export function saveLocaleCookie(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax`;
}
