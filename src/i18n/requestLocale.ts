import type { AstroCookies } from "astro";
import { LOCALE_COOKIE_NAME, resolveLocale } from "./locales";
import type { Locale } from "./locales";

export function getRequestLocale(cookies: AstroCookies): Locale {
  return resolveLocale(cookies.get(LOCALE_COOKIE_NAME)?.value);
}
