import { smoothScrollTo } from '../utils/smoothScroll'

const services = [
  {
    icon: 'fa-pen-ruler',
    title: 'UI/UX Design',
    desc: 'From empathy mapping and user research to wireframes, interactive Figma prototypes, and WCAG-compliant design systems.',
    linkText: 'View Case Studies',
  },
  {
    icon: 'fa-mobile-screen-button',
    title: 'Application Design',
    desc: 'Intuitive mobile apps (iOS & Android), Wear OS smartwatches, and enterprise dashboards with seamless navigation patterns.',
    linkText: 'Explore Apps',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Website & SaaS Design',
    desc: 'High-converting landing pages, SaaS interfaces, and responsive web products built with micro-interactions and clean typography.',
    linkText: 'See Web Works',
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'AI-Native Prototyping',
    desc: 'Accelerating concept-to-working product pipelines using AI workflows (Lovable, Cursor, v0, Stitch) and automated logic.',
    linkText: 'Discover AI Tools',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-flex" data-aos="">
          <div>
            <div className="section-tag">— Services</div>
            <h2 className="section-title">
              <span className="highlight-gold">Services</span> I Provide
            </h2>
          </div>
          <a
            href="#projects"
            className="btn-pill-action"
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo('#projects')
            }}
          >
            <span>View All Projects</span>
            <span className="btn-arrow-circle">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i} data-aos="">
              <div className="service-icon-box">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <a
                href="#projects"
                className="service-learn-link"
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo('#projects')
                }}
              >
                <span>{s.linkText}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
