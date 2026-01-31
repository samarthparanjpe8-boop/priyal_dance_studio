import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'awards', label: 'Awards' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Fixed Left Navbar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 z-50 flex-col items-center justify-center glass border-r border-accent/20">
        <div className="flex flex-col gap-6 w-full px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-accent bg-accent/10'
                  : 'text-text/70 hover:text-text hover:bg-accent/5'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/30"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 glass rounded-lg text-text"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}}
            className="h-0.5 bg-text rounded"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 bg-text rounded"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
            className="h-0.5 bg-text rounded"
          />
        </div>
      </button>

      {/* Mobile Overlay Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        className="lg:hidden fixed inset-0 z-40 glass backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-accent'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bottom Mobile Nav (Alternative) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-accent/20">
        <div className="flex justify-around items-center py-2 px-2 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-accent'
                  : 'text-text/70'
              }`}
            >
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar

