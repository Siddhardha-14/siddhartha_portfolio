import { useEffect } from 'react'

export function useAOS() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [...entry.target.parentElement.children].filter(
              (el) => el.hasAttribute('data-aos')
            )
            const idx = siblings.indexOf(entry.target)
            entry.target.style.transitionDelay = `${idx * 0.08}s`
            entry.target.classList.add('aos-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}
