import { useState } from 'react'

const phases = [
  {
    id: 1,
    phaseNumber: '01',
    label: 'DISCOVER',
    icon: 'fa-magnifying-glass',
    accent: '#6366f1',
    accentLight: 'rgba(99, 102, 241, 0.12)',
    accentBorder: 'rgba(99, 102, 241, 0.3)',
    tag: 'PHASE 01 · DISCOVER',
    title: 'Research & Discovery',
    description:
      'I use a mixed-methods approach: qualitative interviews (5–8 users per round) combined with quantitative signals from analytics. Every assumption gets challenged before a single pixel is drawn.',
    tools: [
      'User Interviews',
      'Heuristic Audits',
      'Competitive Analysis',
      'Analytics Review',
    ],
    outcome:
      'Validated problem statement backed by real user pain points and data.',
  },
  {
    id: 2,
    phaseNumber: '02',
    label: 'DEFINE',
    icon: 'fa-book-open',
    accent: '#8b5cf6',
    accentLight: 'rgba(139, 92, 246, 0.12)',
    accentBorder: 'rgba(139, 92, 246, 0.3)',
    tag: 'PHASE 02 · DEFINE',
    title: 'Synthesise & Define',
    description:
      'I translate raw research into clear opportunity spaces using JTBD frameworks. The output is a one-page brief that aligns stakeholders, engineers, and business goals — no ambiguity allowed.',
    tools: [
      'Affinity Mapping',
      'Jobs-to-be-Done',
      'Journey Maps',
      'How Might We',
    ],
    outcome:
      'A sharp, agreed-upon design brief with measurable success metrics.',
  },
  {
    id: 3,
    phaseNumber: '03',
    label: 'DESIGN',
    icon: 'fa-pen',
    accent: '#f43f5e',
    accentLight: 'rgba(244, 63, 94, 0.12)',
    accentBorder: 'rgba(244, 63, 94, 0.3)',
    tag: 'PHASE 03 · DESIGN',
    title: 'Ideate & Prototype',
    description:
      'I prototype at the speed of thought — low-fi sketches in 30 min, hi-fi Figma in hours. Every component is built for a design system first, an isolated screen second.',
    tools: [
      'Figma',
      'Crazy 8s',
      'Component Systems',
      'WCAG Checks',
    ],
    outcome:
      'High-fidelity, interactive prototype validated against real user flows.',
  },
  {
    id: 4,
    phaseNumber: '04',
    label: 'DELIVER',
    icon: 'fa-check',
    accent: '#10b981',
    accentLight: 'rgba(16, 185, 129, 0.12)',
    accentBorder: 'rgba(16, 185, 129, 0.3)',
    tag: 'PHASE 04 · DELIVER',
    title: 'Test & Ship',
    description:
      'I run 3–5 moderated usability tests per sprint, document findings in Confluence, and sit in on sprint reviews. I write dev-ready specs with interaction notes, edge cases, and accessibility annotations.',
    tools: [
      'Usability Testing',
      'A/B Testing',
      'Dev Handoff',
      'Post-Launch Metrics',
    ],
    outcome:
      'Shipped product with measurable uplift in CSAT, task completion, and retention.',
  },
]

export default function DesignProcess() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = phases[activeIdx]

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : phases.length - 1))
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev < phases.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-center-head" data-aos="">
          <div className="process-pill-badge">MY PROCESS</div>
          <h2 className="section-title">
            How I <span className="highlight-gold">Design</span>
          </h2>
          <p className="section-subtitle">
            A Double Diamond approach — structured enough to be rigorous,
            flexible enough to move fast.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="process-stepper-wrap" data-aos="">
          <div className="stepper-track-line" aria-hidden="true">
            <div
              className="stepper-progress-fill"
              style={{
                width: `${(activeIdx / (phases.length - 1)) * 100}%`,
                background: current.accent,
              }}
            ></div>
          </div>

          <div className="stepper-nodes-row">
            {phases.map((phase, idx) => {
              const isActive = idx === activeIdx
              const isPast = idx < activeIdx

              return (
                <button
                  key={phase.id}
                  type="button"
                  className={`stepper-node-btn ${
                    isActive ? 'active' : isPast ? 'completed' : 'upcoming'
                  }`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Switch to ${phase.label} phase`}
                  aria-pressed={isActive}
                >
                  <div
                    className="stepper-node-box"
                    style={{
                      background: isActive
                        ? phase.accent
                        : isPast
                        ? phase.accent
                        : 'var(--c-bg-card)',
                      borderColor: isActive || isPast ? phase.accent : 'var(--c-border)',
                      boxShadow: isActive
                        ? `0 10px 24px -4px ${phase.accent}66`
                        : 'none',
                    }}
                  >
                    {isPast ? (
                      <i className="fa-solid fa-check node-icon-check"></i>
                    ) : (
                      <span
                        className="node-num"
                        style={{ color: isActive ? '#ffffff' : 'var(--c-text-muted)' }}
                      >
                        {phase.phaseNumber}
                      </span>
                    )}
                  </div>

                  <div className="stepper-node-meta">
                    <i
                      className={`fa-solid ${phase.icon} node-type-icon`}
                      style={{
                        color: isActive || isPast ? phase.accent : 'var(--c-text-muted)',
                      }}
                    ></i>
                    <span
                      className="node-label"
                      style={{
                        color: isActive ? phase.accent : 'var(--c-text-secondary)',
                        fontWeight: isActive ? 800 : 600,
                      }}
                    >
                      {phase.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Phase Content Card */}
        <div
          className="process-card-display"
          data-aos=""
          style={{
            borderTop: `4px solid ${current.accent}`,
          }}
        >
          {/* Top Banner Row */}
          <div className="process-card-header">
            <div
              className="process-icon-square"
              style={{
                background: current.accentLight,
                borderColor: current.accentBorder,
                color: current.accent,
              }}
            >
              <i className={`fa-solid ${current.icon}`}></i>
            </div>
            <div className="process-header-text">
              <span
                className="process-phase-tag"
                style={{ color: current.accent }}
              >
                {current.tag}
              </span>
              <h3 className="process-phase-title">{current.title}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="process-phase-desc">{current.description}</p>

          {/* Split Row: Tools & Methods / Outcome */}
          <div className="process-card-bottom-grid">
            {/* Tools & Methods Column */}
            <div className="process-col-tools">
              <h4 className="process-subhead-label">TOOLS &amp; METHODS</h4>
              <div className="process-tools-chips">
                {current.tools.map((tool) => (
                  <span key={tool} className="process-tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome Sub-Card */}
            <div className="process-col-outcome">
              <div className="process-outcome-box">
                <h4 className="process-subhead-label">OUTCOME</h4>
                <p className="process-outcome-text">
                  <span className="outcome-sparkle" style={{ color: current.accent }}>
                    ✦
                  </span>
                  {current.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Pagination Dots & Arrows */}
          <div className="process-nav-controls">
            <button
              type="button"
              className="process-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous Phase"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="process-dots-list" role="tablist">
              {phases.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  className={`process-dot-btn ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Jump to ${p.label}`}
                  style={{
                    background: idx === activeIdx ? p.accent : 'rgba(22, 48, 36, 0.15)',
                  }}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="process-arrow-btn"
              onClick={handleNext}
              aria-label="Next Phase"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
