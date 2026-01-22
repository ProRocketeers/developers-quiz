import { NavLink } from "react-router-dom";
import logo from "../data/prorocketeers_logo_horizontal_cut.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="Prorocketeers" className="header-logo" />
        <span className="header-divider">|</span>
        <h1 className="header-title">Java Developers Quiz</h1>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Výsledky
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
