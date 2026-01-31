import { motion } from 'framer-motion'

const FloatingButton = ({ onClick, disabled = false, hideOnContactInView = false }) => {
  if (hideOnContactInView) return null

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className="fixed bottom-20 sm:bottom-6 right-6 lg:bottom-12 lg:right-12 z-40 bg-accent text-white font-semibold px-6 py-4 rounded-full shadow-lg glass border border-accent/30 hover:bg-accent/90 transition-colors cursor-pointer disabled:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ boxShadow: '0 8px 32px rgba(47, 47, 47, 0.56)' }}
      aria-label="Open interest form"
    >
      Are You Interested?
    </motion.button>
  )
} 

export default FloatingButton

