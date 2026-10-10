import { useEffect, useRef, useState } from 'react'

function useCounterAnimation(target, start, duration = 1800) {
  const [value, setValue] = useState(start)
  const animatedRef = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          const startTime = performance.now()
          function update(now) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(start + (target - start) * easeOut))
            if (progress < 1) requestAnimationFrame(update)
            else setValue(target)
          }
          requestAnimationFrame(update)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, start, duration])

  return [value, ref]
}

export default function About() {
  const [count1, ref1] = useCounterAnimation(7, 0)
  const [count2, ref2] = useCounterAnimation(100, 0)
  const [count3, ref3] = useCounterAnimation(2026, 2018)

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-card-container" data-aos="">
          <div className="about-grid-inner">
            {/* Left: Portrait + Chips */}
            <div className="about-visual-col">
              <div className="about-oval-wrapper">
                <div className="about-oval-bg"></div>
                <img
                  src="/assets/photo.jpg"
                  alt="Siddhartha Gudiwada"
                  className="about-portrait-img"
                />
                <span className="about-chip-pill chip-pos-1">UI/UX Design</span>
                <span className="about-chip-pill chip-pos-2">Web &amp; App Design</span>
                <span className="about-chip-pill chip-pos-3">Design System</span>
                <span className="about-chip-pill chip-pos-4">Prototype</span>
                <span className="about-chip-pill chip-pos-5">Dashboard</span>
                <span className="about-chip-pill chip-pos-6">Wireframe Design</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="about-content-col">
              <div className="section-tag text-gold">— About Me</div>
              <h2 className="about-title">
                Who is{' '}
                <span className="highlight-gold-italic">Siddhartha Gudiwada?</span>
              </h2>

              <div className="about-text-body">
                <p>
                  I'm a UI/UX &amp; Product Designer who bridges the gap between human user needs, technical feasibility, and business impact. I work across the entire lifecycle — from early research and sketches to design tokens, scalable component libraries, and developer handoffs.
                </p>
                <p>
                  During my internship at <strong>Infotact Solutions</strong>, I owned the UI for <strong>PeoplePulse HRMS</strong> — turning complex authentication flows, employee portals, and attendance tracking into an effortless enterprise experience.
                </p>
              </div>

              {/* Counters */}
              <div className="about-stats-row" ref={ref1}>
                <div className="stat-block">
                  <div className="stat-number-wrap">
                    <span className="stat-counter">{count1}</span>
                    <span className="stat-suffix">+</span>
                  </div>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-block">
                  <div className="stat-number-wrap">
                    <span className="stat-counter" ref={ref2}>{count2}</span>
                    <span className="stat-suffix">%</span>
                  </div>
                  <span className="stat-label">Offline Privacy Tools</span>
                </div>
                <div className="stat-block">
                  <div className="stat-number-wrap">
                    <span className="stat-counter" ref={ref3}>{count3}</span>
                  </div>
                  <span className="stat-label">B.E. Graduate · Ready Now</span>
                </div>
              </div>

              {/* Actions */}
              <div className="about-actions-row">
                <a
                  href="/assets/Siddhartha_Gudiwada_Resume.pdf"
                  download="Siddhartha_Gudiwada_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn-gold-pill"
                >
                  <span>Download CV / Resume</span>
                  <span className="btn-icon-white">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </a>
                <div className="about-signature-text">
                  <span>Siddhartha Gudiwada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
