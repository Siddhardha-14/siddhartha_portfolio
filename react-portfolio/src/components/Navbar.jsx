import { useState, useEffect } from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function Navbar({ activeSection, onHamburgerClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#tools', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="header-nav-wrap" id="headerNav">
      <nav className={`pill-navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero') }}>
          <span className="brand-avatar-mini">
            <img src="/assets/photo.jpg" alt="SG" />
          </span>
          <span className="brand-name">
            Siddhartha<span className="dot">.</span>
          </span>
        </a>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="/resume.html" target="_blank" rel="noopener" className="nav-btn-resume">
            Resume
          </a>
          <button
            className="hamburger-btn"
            id="hamburgerBtn"
            aria-label="Toggle Navigation"
            onClick={onHamburgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
