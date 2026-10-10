import { useState } from 'react'

const projects = [
  {
    category: 'ai',
    image: '/assets/foodbridge.png',
    badgeClass: 'badge-ai',
    badgeLabel: 'AI-Native · Full-Stack',
    name: 'FoodBridge',
    tagline: 'Connecting Surplus to Service',
    role: 'Product Designer & Developer',
    time: 'Solo Project · 2025',
    chips: [
      { cls: 'master', label: 'Lovable AI' },
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'Supabase' },
      { label: 'Twilio Voice' },
      { label: 'Framer Motion' },
    ],
    summary: 'A food rescue ecosystem connecting restaurants with surplus food to NGOs and volunteers. Features real-time listings, automated Twilio voice confirmations, and impact analytics.',
    problem: 'Huge restaurant food waste while NGOs struggle with urgent coordination.',
    solution: 'Live claims, automated phone dispatch, and real-time coordinator dashboards.',
    actions: [
      { href: 'https://hungry-hearts-link.lovable.app', label: 'View Live App', icon: 'fa-arrow-up-right-from-square', primary: true },
    ],
    reverse: false,
  },
  {
    category: 'uiux',
    image: '/assets/vehicle-bay.png',
    badgeClass: 'badge-design',
    badgeLabel: 'UI/UX Case Study',
    name: 'Vehicle Bay',
    tagline: 'Smart Parking Slot Reservation',
    role: 'Lead UI/UX Designer',
    time: 'Academic Project · 2024',
    chips: [
      { label: 'Figma' },
      { label: 'User Research' },
      { label: 'Mobile UI' },
      { label: 'Design System' },
      { label: 'React Prototype' },
    ],
    summary: 'End-to-end UI/UX case study for smart parking slot booking — from user interviews, problem scoping, and wireframes to high-fidelity interactive Figma flows and React prototyping.',
    problem: 'Commuters waste up to 20 minutes circling lots with zero slot visibility.',
    solution: 'Live visual lot map, instant reservation, and contactless QR entrance check-in.',
    actions: [
      { href: 'https://group-share-28476166.figma.site', label: 'Read Case Study', icon: 'fa-book-open', primary: true },
      { href: 'https://www.figma.com/proto/KLlM84Icr7t7cINou8gFzW/Vehicle-parking?node-id=2-4&p=f&t=EWaJiZ0sonMa631k-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1', label: 'Figma Prototype', icon: 'fa-figma', iconType: 'brands', primary: false },
    ],
    reverse: true,
  },
  {
    category: 'uiux',
    image: '/assets/hrms.png',
    badgeClass: 'badge-gold',
    badgeLabel: 'Infotact Internship',
    name: 'PeoplePulse HRMS',
    tagline: 'Enterprise Human Resource Management',
    role: 'UI Designer Intern',
    time: 'Infotact Solutions · 2024',
    chips: [
      { label: 'Figma' },
      { label: 'Enterprise UX' },
      { label: 'Dashboard Design' },
      { label: 'Attendance Flows' },
      { label: 'Dev Handoff' },
    ],
    summary: 'Designed a complete enterprise HR system delivered during an internship at Infotact Solutions — featuring authentication, self-service portals, attendance logging, and leave management dashboards.',
    problem: 'Legacy HR software caused high error rates and slow managerial approvals.',
    solution: 'Role-tailored dashboards with 1-click approvals and real-time attendance insights.',
    actions: [
      { href: 'https://www.figma.com/proto/1t9yl5vwHBGHOciPBaqNC6/PeoplePulse-HRMS?node-id=181-342&t=l7ZBai08M7IyKYtv-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', label: 'Explore Figma Prototype', icon: 'fa-figma', iconType: 'brands', primary: true },
    ],
    reverse: false,
  },
  {
    category: 'iot',
    image: '/assets/nexushome.png',
    badgeClass: 'badge-purple',
    badgeLabel: 'IoT & Mobile UI',
    name: 'NexusHome',
    tagline: 'Smart Home Control — Dark Mode First',
    role: 'UI/UX Designer & Developer',
    time: 'Personal Project · 2025',
    chips: [
      { label: 'Figma' },
      { label: 'Dark Mode UI' },
      { label: 'IoT Design' },
      { label: 'Glassmorphism' },
      { label: 'React' },
    ],
    summary: 'Premium dark-mode IoT mobile application for smart home automation. Features quick scene scheduling, contextual room cards, and sleek micro-interactions for connected appliances.',
    problem: 'Smart home interfaces are technical, confusing, and tedious to configure.',
    solution: '1-tap scene routines, ambient room cards, and progressive setup flows.',
    actions: [
      { href: 'https://nexus-home-ui-a.vercel.app/', label: 'View Live Web App', icon: 'fa-arrow-up-right-from-square', primary: true },
      { href: 'https://www.figma.com/proto/TSQ4LdLya244WE1ItqVJCt/NexusHome?node-id=305-1092&p=f&t=RH6P7it20tvtwIYg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=305%3A1075&show-proto-sidebar=1', label: 'Figma Prototype', icon: 'fa-figma', iconType: 'brands', primary: false },
    ],
    reverse: true,
  },
  {
    category: 'uiux',
    image: '/assets/agri-hub.png',
    badgeClass: 'badge-green',
    badgeLabel: 'AgriTech & A11y',
    name: 'Smart Agri Hub',
    tagline: 'Farmer Support & Crop Health Companion',
    role: 'UX Researcher & UI Designer',
    time: 'Academic Project · 2024',
    chips: [
      { label: 'Figma' },
      { label: 'User Research' },
      { label: 'Accessibility (A11y)' },
      { label: 'AgriTech' },
      { label: 'Data Viz' },
    ],
    summary: 'Accessible mobile application UI for rural farmers — providing real-time crop disease diagnosis, local market commodity prices, weather alerts, and direct agricultural expert chat.',
    problem: 'Rural farmers lack timely advice on market prices and pest control.',
    solution: 'High-contrast visual design, vernacular support, and one-tap camera diagnosis.',
    actions: [
      { href: 'https://www.figma.com/proto/SFUvgEF0gZQZfWqviDpEAz/smart-agri-hub?node-id=1-2&p=f&t=wrppLoUHTUE9TsvA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2', label: 'View Figma Prototype', icon: 'fa-figma', iconType: 'brands', primary: true },
    ],
    reverse: false,
  },
  {
    category: 'iot',
    image: '/assets/smartwatch.png',
    badgeClass: 'badge-purple',
    badgeLabel: 'Wear OS · Smartwatch',
    name: 'Smartwatch Bus Booking',
    tagline: 'Glanceable. Thumb-Friendly. Transit UX.',
    role: 'Wearable UI Designer',
    time: 'Personal Project · 2024',
    chips: [
      { label: 'Wear OS' },
      { label: 'Figma' },
      { label: 'Circular Constraints' },
      { label: 'Smart Animate' },
      { label: 'Micro-interactions' },
    ],
    summary: 'Glanceable wearable UI designed strictly within circular watch viewport constraints. Allows commuters to check upcoming bus arrivals, reserve seats, and board with an on-wrist QR code.',
    problem: 'Pulling out phones while boarding crowded buses is inconvenient and risky.',
    solution: 'Wrist-first quick swipes, haptic feedback, and instant NFC/QR ticket scanning.',
    actions: [
      { href: 'https://www.figma.com/design/enGsbnl8r9GbRpZVPMkGqC/Bus-booking-intf?node-id=5-12&p=f&t=2xuiaGbarHGpexSP-0', label: 'Explore Watch UI on Figma', icon: 'fa-figma', iconType: 'brands', primary: true },
    ],
    reverse: true,
  },
  {
    category: 'ai',
    image: '/assets/img2docx.png',
    badgeClass: 'badge-ai',
    badgeLabel: '100% Offline · In-Browser',
    name: 'Img2DOCX',
    tagline: 'Browser-Native Image to Editable Word Document',
    role: 'Full-Stack Designer & Developer',
    time: 'Solo Project · 2025',
    chips: [
      { cls: 'master', label: 'Tesseract.js' },
      { label: 'React 19' },
      { label: 'Vite' },
      { label: 'Canvas API' },
      { label: 'docx.js' },
    ],
    summary: 'Converts scanned documents, whiteboard photos, and receipts into formatted Microsoft Word files entirely client-side. Zero server uploads, zero API fees, and 100% data privacy.',
    problem: 'Online OCR converters require uploading private documents to external servers.',
    solution: '3-variant local OCR preprocessing engine running inside WebAssembly in the browser.',
    actions: [
      { href: '/img2docx.html', label: 'Deep-Dive Case Study', icon: 'fa-book-open', primary: true },
      { href: 'https://img-to-word-do-cx.vercel.app/', label: 'Try Live Tool', icon: 'fa-arrow-up-right-from-square', primary: false },
    ],
    reverse: false,
  },
]

const filters = [
  { value: 'all', icon: 'fa-shapes', label: 'All Projects' },
  { value: 'uiux', icon: 'fa-pen-ruler', label: 'UI/UX Case Studies' },
  { value: 'ai', icon: 'fa-wand-magic-sparkles', label: 'AI & Web Apps' },
  { value: 'iot', icon: 'fa-mobile-screen-button', label: 'IoT & Wearables' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header-wrap" data-aos="">
          <div>
            <div className="section-tag">— Selected Work</div>
            <h2 className="section-title">
              Projects that <span className="highlight-gold">Deliver Impact</span>
            </h2>
          </div>
          <div className="project-filter-tabs">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                data-filter={f.value}
                onClick={() => setActiveFilter(f.value)}
              >
                <i className={`fa-solid ${f.icon}`}></i>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-list-wrap">
          {filtered.map((p) => (
            <article
              key={p.name}
              className={`project-showcase-card${p.reverse ? ' reverse' : ''}`}
              data-category={p.category}
              data-aos=""
              style={{ display: 'grid' }}
            >
              <div
                className="project-preview-side"
                style={{ backgroundImage: `url('${p.image}')` }}
              >
                <span className={`project-category-badge ${p.badgeClass}`}>{p.badgeLabel}</span>
              </div>
              <div className="project-info-side">
                <div className="project-title-area">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                </div>
                <div className="project-role-meta">
                  <span><i className="fa-solid fa-user"></i> Role: {p.role}</span>
                  <span><i className="fa-regular fa-clock"></i> {p.time}</span>
                </div>
                <div className="project-tech-tags">
                  {p.chips.map((c, j) => (
                    <span key={j} className={`tech-chip${c.cls ? ` ${c.cls}` : ''}`}>
                      {c.label}
                    </span>
                  ))}
                </div>
                <p className="project-summary">{p.summary}</p>
                <div className="project-problem-solution">
                  <div className="ps-mini-box problem">
                    <span className="ps-label">⚠ Problem:</span>
                    <span>{p.problem}</span>
                  </div>
                  <div className="ps-mini-box solution">
                    <span className="ps-label">✦ Solution:</span>
                    <span>{p.solution}</span>
                  </div>
                </div>
                <div className="project-actions-row">
                  {p.actions.map((a, k) => (
                    <a
                      key={k}
                      href={a.href}
                      target={a.href.startsWith('http') ? '_blank' : undefined}
                      rel={a.href.startsWith('http') ? 'noopener' : undefined}
                      className={a.primary ? 'btn-project-primary' : 'btn-project-outline'}
                    >
                      <span>{a.label}</span>
                      <i className={`fa-${a.iconType || 'solid'} ${a.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
