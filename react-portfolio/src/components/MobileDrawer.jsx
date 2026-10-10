import { smoothScrollTo } from '../utils/smoothScroll'

export default function MobileDrawer({ isOpen, onClose, activeSection }) {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#tools', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLink = (href) => {
    smoothScrollTo(href)
    onClose()
  }

  return (
    <div className={`mobile-drawer${isOpen ? ' open' : ''}`} id="mobileDrawer">
      <div className="drawer-backdrop" id="drawerBackdrop" onClick={onClose}></div>
      <div className="drawer-panel">
        <div className="drawer-top">
          <span className="brand-name">
            Siddhartha<span className="dot">.</span>
          </span>
          <button className="drawer-close" id="drawerClose" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`drawer-link${activeSection === link.href ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLink(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener"
            className="drawer-link drawer-resume"
            onClick={onClose}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </div>
  )
}
