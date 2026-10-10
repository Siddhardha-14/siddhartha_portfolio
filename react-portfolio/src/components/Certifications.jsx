const certs = [
  {
    icon: 'fa-certificate',
    heading: 'UI/UX Design Specialization',
    issuer: 'Great Learning',
    date: 'July 2024',
  },
  {
    icon: 'fa-award',
    heading: 'Professional Soft Skills & Communication',
    issuer: 'Professional Development',
    date: '2023',
  },
]

export default function Certifications() {
  return (
    <section className="certs-section" id="certs">
      <div className="container">
        <div className="section-center-head" data-aos="">
          <div className="section-tag">— Recognition</div>
          <h2 className="section-title">
            Verified <span className="highlight-gold">Certifications</span>
          </h2>
        </div>

        <div className="certs-grid-row">
          {certs.map((cert, i) => (
            <div className="cert-card-box" key={i} data-aos="">
              <div className="cert-icon-wrap">
                <i className={`fa-solid ${cert.icon}`}></i>
              </div>
              <div className="cert-info">
                <h3 className="cert-heading">{cert.heading}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date-text">
                  <i className="fa-regular fa-calendar"></i> {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
