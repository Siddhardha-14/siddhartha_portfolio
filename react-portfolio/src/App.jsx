import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MobileDrawer from './components/MobileDrawer'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import Services from './components/Services'
import About from './components/About'
import DesignProcess from './components/DesignProcess'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useAOS } from './hooks/useAOS'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const activeSection = useScrollSpy()
  useAOS()

  const showToast = (message) => {
    setToastMsg(message)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3200)
  }

  const openDrawer = () => {
    setDrawerOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && drawerOpen) closeDrawer()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [drawerOpen])

  return (
    <>
      <Navbar
        activeSection={activeSection}
        onHamburgerClick={openDrawer}
      />
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <MarqueeTicker />
        <Services />
        <About />
        <DesignProcess />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <Toast message={toastMsg} visible={toastVisible} />
    </>
  )
}

export default App
