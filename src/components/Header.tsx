import logo from "../data/prorocketeers_logo_horizontal_cut.svg";
import "./Header.css";
import LanguageSwitch from "./LanguageSwitch";
import { useI18n } from "../i18n/I18nContext";

interface HeaderProps {
  currentPath?: string;
}

function Header({ currentPath = "/" }: HeaderProps) {
  const { t } = useI18n();

  const homeClass = currentPath === "/" ? "nav-link active" : "nav-link";
  const resultsClass =
    currentPath === "/results" ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo.src} alt="Prorocketeers" className="header-logo" />
        <span className="header-divider">|</span>
        <h1 className="header-title">{t("app.title")}</h1>
      </div>

      <nav className="header-nav">
        {/* language switch LEFT from nav items */}
        <LanguageSwitch />

        <a href="/" className={homeClass}>
          {t("nav.home")}
        </a>
        <a href="/results" className={resultsClass}>
          {t("nav.results")}
        </a>
      </nav>
    </header>
  );
}

export default Header;
