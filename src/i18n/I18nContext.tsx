import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";
import { CZ_LANG, ENG_LANG } from "../constants/quiz";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "lang";

function loadLang(): Lang {
  if (typeof localStorage === "undefined") return CZ_LANG;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === ENG_LANG || saved === CZ_LANG ? saved : CZ_LANG;
}

function format(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

const EVENT_NAME = "i18n:lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(loadLang);

  const setLang = (next: Lang) => {
    setLangState(next);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      if (e.newValue === CZ_LANG || e.newValue ===ENG_LANG) setLangState(e.newValue);
    };

    const onLangEvent = (e: Event) => {
      const next = (e as CustomEvent).detail;
      if (next === CZ_LANG || next === ENG_LANG) setLangState(next);
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT_NAME, onLangEvent);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT_NAME, onLangEvent);
    };
  }, []);

  const t = useMemo(() => {
    return (key: TranslationKey, vars?: Record<string, string | number>) => {
      const template =
        translations[lang][key] ?? translations.cs[key] ?? String(key);
      return format(template, vars);
    };
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}