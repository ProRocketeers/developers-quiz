import { saveLocaleCookie } from "../i18n/localeCookie";
import { LOCALES, LOCALE_NAMES } from "../i18n/locales";
import type { Locale } from "../i18n/locales";
import "./LanguageSwitcher.css";

interface Props {
  currentLocale: Locale;
  label: string;
}

// The server renders every page in the locale stored in the cookie, so the
// page has to be requested again for the change to take effect.
function switchLocale(locale: Locale) {
  saveLocaleCookie(locale);
  window.location.reload();
}

function LanguageSwitcher({ currentLocale, label }: Props) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {LOCALES.map((locale) => {
        const isCurrent = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            lang={locale}
            className={`language-switcher-option${isCurrent ? " is-active" : ""}`}
            aria-pressed={isCurrent}
            title={LOCALE_NAMES[locale]}
            disabled={isCurrent}
            onClick={() => switchLocale(locale)}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
