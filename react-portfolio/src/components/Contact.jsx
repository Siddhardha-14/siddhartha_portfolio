import { useState, useRef } from 'react'

const TARGET_EMAIL = 'siddhardhagudiwada133@gmail.com'
const MAILTO_LINK = `mailto:${TARGET_EMAIL}?subject=Design%20Opportunity%20%E2%80%94%20Siddhartha%20Gudiwada&body=Hi%20Siddhartha%2C%0A%0A`

export default function Contact({ showToast }) {
  const [copyText, setCopyText] = useState('Copy Address')
  const [btnState, setBtnState] = useState('idle') // idle | loading | success | error
  const [btnText, setBtnText] = useState('Send Message')
  const [btnIcon, setBtnIcon] = useState('fa-paper-plane')
  const [statusMsg, setStatusMsg] = useState({ cls: '', html: '' })
  const formRef = useRef(null)

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.location.href = MAILTO_LINK
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TARGET_EMAIL)
      setCopyText('Copied! ✓')
      showToast('✓ Email copied to clipboard: ' + TARGET_EMAIL)
      setTimeout(() => setCopyText('Copy Address'), 2500)
    } catch {
      const t = document.createElement('input')
      t.value = TARGET_EMAIL
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      document.body.removeChild(t)
      setCopyText('Copied! ✓')
      showToast('✓ Email copied to clipboard: ' + TARGET_EMAIL)
      setTimeout(() => setCopyText('Copy Address'), 2500)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const name = form.contactName.value.trim()
    const email = form.contactEmail.value.trim()
    const subject = form.contactSubject.value.trim()
    const message = form.contactMessage.value.trim()

    if (!name || !email || !message) {
      setStatusMsg({
        cls: 'show-error',
        html: '<i class="fa-solid fa-circle-exclamation"></i> Please fill in your name, email, and message.',
      })
      return
    }

    setBtnState('loading')
    setBtnText('Sending message...')
    setBtnIcon('fa-circle-notch fa-spin')
    setStatusMsg({ cls: '', html: '' })

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: subject || 'Portfolio Opportunity / Inquiry',
          message,
        }),
      })
      const data = await response.json()

      if (response.ok && data.success) {
        setBtnState('success')
        setBtnText('Message Sent! ✓')
        setBtnIcon('fa-circle-check')
        setStatusMsg({
          cls: 'show-success',
          html: '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent directly to Siddhartha.',
        })
        showToast('✓ Message sent successfully! Siddhartha will reply soon.')
        form.reset()
        setTimeout(() => {
          setBtnState('idle')
          setBtnText('Send Message')
          setBtnIcon('fa-paper-plane')
        }, 5000)
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setBtnState('error')
      setBtnText('Error Sending')
      setBtnIcon('fa-triangle-exclamation')
      setStatusMsg({
        cls: 'show-error',
        html: `<i class="fa-solid fa-circle-exclamation"></i> Could not deliver automatically. <a href="mailto:${TARGET_EMAIL}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}" style="color:#ffffff;text-decoration:underline;margin-left:4px;font-weight:700;">Click here to email directly</a>`,
      })
      setTimeout(() => {
        setBtnState('idle')
        setBtnText('Send Message')
        setBtnIcon('fa-paper-plane')
      }, 5000)
    }
  }

  const btnCls = `btn-send-form${btnState === 'loading' ? ' loading' : ''}${btnState === 'success' ? ' success' : ''}${btnState === 'error' ? ' error' : ''}`

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-big-card" data-aos="">
          {/* Email Header */}
          <div className="contact-email-header">
            <a
              href={`mailto:${TARGET_EMAIL}`}
              className="contact-email-display"
              id="emailContactCard"
              onClick={handleEmailClick}
            >
              {TARGET_EMAIL}
            </a>
            <button className="btn-copy-address" id="copyEmailBtn" onClick={handleCopy}>
              <span id="copyEmailText">{copyText}</span>
            </button>
          </div>

          <div className="contact-email-divider"></div>

          {/* Form + Elsewhere Grid */}
          <div className="contact-body-grid">
            {/* Left: Form */}
            <form className="contact-form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">Name / Recruiter</label>
                  <input type="text" id="contactName" name="name" className="form-input" placeholder="Your name or company" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contactEmail">Work Email</label>
                  <input type="email" id="contactEmail" name="email" className="form-input" placeholder="recruiter@company.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contactSubject">Subject</label>
                <input type="text" id="contactSubject" name="subject" className="form-input" placeholder="Job opportunity / Project inquiry" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" name="message" className="form-input form-textarea" placeholder="Tell me a little about the opportunity..." rows="4" required></textarea>
              </div>
              <button
                type="submit"
                className={btnCls}
                id="submitContactBtn"
                disabled={btnState === 'loading'}
              >
                <span id="btnSendText">{btnText}</span>
                <i className={`fa-solid ${btnIcon}`} id="btnSendIcon"></i>
              </button>
              {statusMsg.cls && (
                <div
                  className={`form-status-msg ${statusMsg.cls}`}
                  id="formStatusMsg"
                  aria-live="polite"
                  dangerouslySetInnerHTML={{ __html: statusMsg.html }}
                />
              )}
            </form>

            {/* Right: Elsewhere */}
            <div className="contact-elsewhere">
              <span className="elsewhere-label">Elsewhere</span>
              <a href="https://github.com/Siddhardha-14" target="_blank" rel="noopener" className="elsewhere-link">
                <span>GitHub</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/siddhartha-gudiwada-9b3584254" target="_blank" rel="noopener" className="elsewhere-link">
                <span>LinkedIn</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href="/assets/Siddhartha_Gudiwada_Resume.pdf" download="Siddhartha_Gudiwada_Resume.pdf" target="_blank" className="elsewhere-link elsewhere-resume">
                <span>Resume (PDF)</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <p className="elsewhere-location">Hyderabad, IST · usually replies before your next coffee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
