import logo from "../data/prorocketeers_logo_horizontal_cut.svg";
import "./Header.css";

interface HeaderProps {
  currentPath?: string;
}

function Header({ currentPath = "/" }: HeaderProps) {
  const homeClass = currentPath === "/" ? "nav-link active" : "nav-link";
  const resultsClass =
    currentPath === "/results" ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="Prorocketeers" className="header-logo" />
        <span className="header-divider">|</span>
        <h1 className="header-title">Kvíz pro softwareové inženýry</h1>
      </div>
      <nav className="header-nav">
        <a href="/" className={homeClass}>
          Domů
        </a>
        <a href="/results" className={resultsClass}>
          Výsledky
        </a>
      </nav>
    </header>
  );
}

export default Header;
