const marqueeItems = [
  'App Design', 'Website Design', 'Dashboard & SaaS', 'Wireframing',
  'Design Systems', 'AI Prototyping', 'User Research', 'Framer & Figma',
  'WCAG Accessibility', 'Wearable UI',
]

function MarqueeContent({ ariaHidden }) {
  return (
    <div className="marquee-content" aria-hidden={ariaHidden || undefined}>
      {marqueeItems.map((item, i) => (
        <span key={i}>
          {item} <span className="marquee-star">✳</span>{' '}
        </span>
      ))}
    </div>
  )
}

export default function MarqueeTicker() {
  return (
    <section className="marquee-ticker-section">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent ariaHidden={true} />
      </div>
    </section>
  )
}
