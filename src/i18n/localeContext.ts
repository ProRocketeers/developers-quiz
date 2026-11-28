import { createContext, useContext } from "react";
import type { Locale } from "./locales";
import { getMessages } from "./messages";
import type { Messages } from "./messages";

export const LocaleContext = createContext<Locale | null>(null);

export function useLocale(): Locale {
  const locale = useContext(LocaleContext);
  if (!locale) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return locale;
}

export function useTranslations(): Messages {
  return getMessages(useLocale());
}
