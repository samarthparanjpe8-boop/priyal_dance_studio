import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Home = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/images/11.jpg',
      heading: 'Welcome to Priyal Dance Studio',
      subheading: 'Where Tradition Meets Grace',
    },
    {
      image: '/images/carousel-2.png',
      heading: 'Master the Art of Kathak',
      subheading: 'Experience Classical Dance Excellence',
    },
    {
      image: '/images/carousel-3.jpg',
      heading: 'Discover Your Rhythm',
      subheading: 'Journey Through Movement & Expression',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/90" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-text drop-shadow-lg">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-xl md:text-2xl text-text/90 font-light">
              {slides[currentSlide].subheading}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-accent'
                : 'w-2 bg-text/40 hover:bg-text/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Home

