import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoEmblem from '../assets/logo/vignahara_logo_image_small.png'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={logoEmblem} className="brand-logo" alt="Vignahara emblem" />
          <span className="brand-text">
            <span className="brand-name">VIGNAHARA</span>
            <span className="brand-tagline header-tagline">PROPTECH | CONSERVATION | COMMUNITY</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>HOME</NavLink>
          <NavLink to="/properties" onClick={() => setMobileOpen(false)}>RENTAL PROPERTIES</NavLink>
          <NavLink to="/projects" onClick={() => setMobileOpen(false)}>DEVELOPMENT PROJECTS</NavLink>
          <NavLink to="/research" onClick={() => setMobileOpen(false)}>MARKET RESEARCH</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>CONTACT</NavLink>
        </nav>
      </div>
    </header>
  )
}
