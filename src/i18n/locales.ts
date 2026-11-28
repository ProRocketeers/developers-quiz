export const LOCALES = ["cs", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "cs";

export const LOCALE_COOKIE_NAME = "locale";

/** Native names, so that a user finds their language whatever the current one is. */
export const LOCALE_NAMES: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
};

export const INTL_LOCALE_TAGS: Record<Locale, string> = {
  cs: "cs-CZ",
  en: "en-GB",
};

export function isLocale(value: unknown): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
