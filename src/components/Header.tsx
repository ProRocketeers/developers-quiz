import logo from "../data/prorocketeers_logo_horizontal_cut.svg";
import type { Locale } from "../i18n/locales";
import { getMessages } from "../i18n/messages";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

interface HeaderProps {
  locale: Locale;
  currentPath?: string;
}

function Header({ locale, currentPath = "/" }: HeaderProps) {
  const t = getMessages(locale).header;
  const homeClass = currentPath === "/" ? "nav-link active" : "nav-link";
  const resultsClass =
    currentPath === "/results" ? "nav-link active" : "nav-link";
  const certificationsClass =
    currentPath === "/certifications" ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo.src} alt="Prorocketeers" className="header-logo" />
        <span className="header-divider">|</span>
        <h1 className="header-title">{t.title}</h1>
      </div>
      <nav className="header-nav">
        <a href="/" className={homeClass}>
          {t.home}
        </a>
        <a href="/results" className={resultsClass}>
          {t.results}
        </a>
        <a href="/certifications" className={certificationsClass}>
          {t.certifications}
        </a>
        <LanguageSwitcher currentLocale={locale} label={t.languageSwitcher} />
      </nav>
    </header>
  );
}

export default Header;
