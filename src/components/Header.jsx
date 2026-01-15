import logo from '../data/prorocketeers_logo_horizontal_cut.svg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Prorocketeers" className="header-logo" />
      <span className="header-divider">|</span>
      <h1 className="header-title">Java Developers Quiz</h1>
    </header>
  )
}

export default Header