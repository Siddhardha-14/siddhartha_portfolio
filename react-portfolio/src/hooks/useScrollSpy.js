import { useState, useEffect } from 'react'

const sectionNavMap = {
  hero: '',
  services: '',
  about: '#about',
  process: '#process',
  tools: '#tools',
  projects: '#projects',
  experience: '#experience',
  certs: '#experience',
  contact: '#contact',
}

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function update() {
      const scrollPosition = window.scrollY + 160
      let active = ''

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')
        if (scrollPosition >= top && scrollPosition < top + height) {
          active = sectionNavMap[id] !== undefined ? sectionNavMap[id] : `#${id}`
        }
      })

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        active = '#contact'
      }

      setActiveSection(active)
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return activeSection
}
