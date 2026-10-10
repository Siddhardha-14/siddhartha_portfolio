const timelineItems = [
  {
    type: 'work',
    icon: 'fa-briefcase',
    badge: { cls: 'work-badge', label: 'Work Experience' },
    date: '2024',
    title: 'UI Designer Intern',
    company: { icon: 'fa-building', text: 'Infotact Solutions — PeoplePulse HRMS' },
    body: 'Led the user interface design for an enterprise HRMS platform. Collaborated directly with engineering and product leads to ship authentication, employee directories, and leave/attendance portals in Figma.',
    skills: ['Figma', 'Enterprise UI', 'User Flows', 'Design Systems', 'Handoff'],
  },
  {
    type: 'edu',
    icon: 'fa-graduation-cap',
    badge: { cls: 'edu-badge', label: 'Higher Education' },
    date: '2022 – 2026',
    title: 'B.E. in Electronics & Communication Engineering',
    company: { icon: 'fa-school', text: 'Kalasalingam Academy of Research and Education' },
    body: 'CGPA: 7.25/10 · Graduating 2026. Built strong analytical, problem-solving, and engineering foundations while specializing heavily in UI/UX architecture, front-end technologies, and AI workflows.',
    skills: ['ECE', 'Embedded Systems', 'UI/UX Architecture', 'Front-End Dev'],
  },
  {
    type: 'edu',
    icon: 'fa-plane-up',
    badge: { cls: 'edu-badge', label: 'Minor Degree' },
    date: '2023 – 2025',
    title: 'Minor Degree in UAV (Unmanned Aerial Vehicles)',
    company: { icon: 'fa-school', text: 'Kalasalingam Academy of Research and Education' },
    body: 'Completed a specialized aeronautical engineering track covering UAV design principles, autonomous flight dynamics, and embedded avionics, strengthening a cross-disciplinary engineering perspective.',
    skills: ['UAV Systems', 'Aeronautical Systems', 'Flight Dynamics', 'Embedded Avionics', 'Sensor Integration'],
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-center-head" data-aos="">
          <div className="section-tag">— Journey</div>
          <h2 className="section-title">
            Experience &amp; <span className="highlight-gold">Education</span>
          </h2>
        </div>

        <div className="timeline-container">
          {timelineItems.map((item, i) => (
            <div className="timeline-card-item" key={i} data-aos="">
              <div className={`tl-icon-badge ${item.type}`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="tl-content-card">
                <div className="tl-header-row">
                  <span className={`tl-badge ${item.badge.cls}`}>{item.badge.label}</span>
                  <span className="tl-date-pill">{item.date}</span>
                </div>
                <h3 className="tl-title">{item.title}</h3>
                <h4 className="tl-company">
                  <i className={`fa-solid ${item.company.icon}`}></i> {item.company.text}
                </h4>
                <p className="tl-body">{item.body}</p>
                <div className="tl-skills-tags">
                  {item.skills.map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
