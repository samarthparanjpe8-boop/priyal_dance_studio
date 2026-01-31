import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Awards from './components/Awards'
import Events from './components/Events'
import Contact from './components/Contact'
import FloatingButton from './components/FloatingButton'
import Footer from './components/Footer'
import InterestModal from './components/InterestModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'gallery', 'awards', 'events', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide floating button when Contact section is in view to avoid overlap on mobile
  const [isContactInView, setIsContactInView] = useState(false)
  useEffect(() => {
    const contactEl = document.getElementById('contact')
    if (!contactEl) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactInView(entry.isIntersecting)
        })
      },
      { threshold: 0.6 }
    )
    obs.observe(contactEl)
    return () => obs.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="ml-0 lg:ml-64">
        <Home id="home" />
        <About id="about" />
        <Portfolio id="portfolio" />
        <Gallery id="gallery" />
        <Awards id="awards" />
        <Events id="events" />
        <Contact id="contact" />
      </main>
      <FloatingButton onClick={() => setIsModalOpen(true)} disabled={isModalOpen} hideOnContactInView={isContactInView} />
      <Footer />
      <AnimatePresence>
        {isModalOpen && (
          <InterestModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

