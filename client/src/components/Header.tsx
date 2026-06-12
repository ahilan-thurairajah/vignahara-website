import { Link, NavLink } from 'react-router-dom'
import logoEmblem from '../assets/logo/vignahara_logo_image_small.png'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={logoEmblem} className="brand-logo" alt="Vignahara emblem" />
          <span className="brand-text">
            <span className="brand-name">VIGNAHARA</span>
            <span className="brand-tagline">PROPTECH | CONSERVATION | COMMUNITY</span>
          </span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/properties">RENTAL PROPERTIES</NavLink>
          <NavLink to="/projects">DEVELOPMENT PROJECTS</NavLink>
          <NavLink to="/research">MARKET RESEARCH</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  )
}
