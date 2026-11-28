import type { ReactNode } from "react";
import { LocaleContext } from "./localeContext";
import type { Locale } from "./locales";

interface Props {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({ locale, children }: Props) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
