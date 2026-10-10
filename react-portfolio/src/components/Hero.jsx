import { useEffect, useRef } from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'
import AuroraCanvas from './AuroraCanvas'

export default function Hero() {
  const portraitRef = useRef(null)

  useEffect(() => {
    const el = portraitRef.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
    }
    const onLeave = () => {
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
      el.style.transition = 'transform 0.5s ease'
    }
    const onEnter = () => {
      el.style.transition = 'none'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseenter', onEnter)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  const handleBadgeClick = () => smoothScrollTo('#contact')

  return (
    <section className="hero-section" id="hero">
      {/* Aurora Background */}
      <div className="aurora-bg-container" aria-hidden="true">
        <AuroraCanvas />
        <div className="aurora-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Left */}
        <div className="hero-left" data-aos="">
          <div className="hero-frame-tag">
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>
            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
            <span className="tag-text">Hello There!</span>
          </div>

          <h1 className="hero-headline">
            I'm <span className="highlight-name">Siddhartha Gudiwada</span>,<br />
            <span className="hero-role-text">Product &amp; UI/UX Designer</span><br />
            <span className="hero-location-text">Based in India.</span>
          </h1>

          <p className="hero-description">
            I craft intuitive digital experiences and AI-augmented applications with obsessive attention to user psychology, design systems, and seamless micro-interactions.
          </p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn-hero-dark"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#projects') }}
            >
              <span>View My Projects</span>
              <span className="btn-icon-circle">
                <i className="fa-solid fa-play"></i>
              </span>
            </a>
            <a
              href="#contact"
              className="btn-hero-outline"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact') }}
            >
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-meta-strip">
            <div className="meta-item">
              <span className="meta-dot"></span>
              <span>Available for Jr. UI/UX &amp; Product Design Roles</span>
            </div>
            <div className="meta-divider">|</div>
            <div className="meta-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Hyderabad · Bengaluru · Chennai · Remote</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-right" data-aos="">
          <div className="hero-portrait-wrap" id="heroPortraitWrap" ref={portraitRef}>
            <div className="portrait-arch-bg"></div>

            <div className="portrait-image-holder">
              <img
                src="/assets/photo.jpg"
                alt="Siddhartha Gudiwada"
                className="portrait-img"
                id="heroPortraitImg"
              />
            </div>

            {/* Rotating HIRE ME Badge */}
            <div className="rotating-badge-wrap" id="rotatingBadge" onClick={handleBadgeClick}>
              <svg viewBox="0 0 120 120" className="rotating-badge-svg">
                <path
                  id="badgeCirclePath"
                  d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                  fill="none"
                />
                <text className="badge-text">
                  <textPath href="#badgeCirclePath" startOffset="0%">
                    • HIRE ME • OPEN TO WORK • HIRE ME •{' '}
                  </textPath>
                </text>
              </svg>
              <div className="badge-center-icon">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="float-badge float-badge-1">
              <i className="fa-solid fa-palette"></i>
              <span>UI/UX Designer</span>
            </div>
            <div className="float-badge float-badge-2">
              <i className="fa-solid fa-layer-group"></i>
              <span>Product Designer</span>
            </div>
            <div className="float-badge float-badge-3">
              <span className="pulse-indicator"></span>
              <span>AI-Native Prototyper</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
