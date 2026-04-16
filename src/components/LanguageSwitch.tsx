import { useI18n } from "../i18n/I18nContext";
import type { Lang } from "../i18n/translations";
import "./LanguageSwitch.css";

export default function LanguageSwitch() {
  const { lang, setLang, t } = useI18n();

  const set = (l: Lang) => setLang(l);

  return (
    <div className="lang-switch" role="group" aria-label="Language switch">
      <button
        type="button"
        className={lang === "cs" ? "lang-btn active" : "lang-btn"}
        onClick={() => set("cs")}
      >
        {t("lang.cs")}
      </button>
      <button
        type="button"
        className={lang === "en" ? "lang-btn active" : "lang-btn"}
        onClick={() => set("en")}
      >
        {t("lang.en")}
      </button>
    </div>
  );
}