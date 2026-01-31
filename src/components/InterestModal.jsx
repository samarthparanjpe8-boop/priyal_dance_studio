import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

const InterestModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    cityCountry: '',
    interest: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (emailjsConfig.publicKey) {
      try {
        emailjs.init(emailjsConfig.publicKey)
        console.log('EmailJS initialized successfully')
      } catch (error) {
        console.error('EmailJS initialization error:', error)
      }
    } else {
      console.warn('EmailJS publicKey is missing in config')
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your config file.')
      }

      const recipientEmail = emailjsConfig.recipientEmail || 'samarthparanjpe01@gmail.com'
      
      if (!recipientEmail || !recipientEmail.trim()) {
        throw new Error('Recipient email is not configured. Please check your EmailJS config file.')
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(recipientEmail)) {
        throw new Error(`Invalid recipient email format: ${recipientEmail}`)
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_email: recipientEmail,
          reply_to: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp || 'Not provided',
          city_country: formData.cityCountry || 'Not provided',
          interest: formData.interest || 'Not specified',
          message: formData.message,
          submission_date: new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short'
          })
        },
        emailjsConfig.publicKey
      )
      .then(() => {
        console.log('EmailJS success: Form submitted successfully!')
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          whatsapp: '',
          cityCountry: '',
          interest: '',
          message: '',
        })
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        throw error
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      
      let errorMsg = 'Something went wrong. Please try again or contact us directly.'
      
      if (error.text) {
        errorMsg = `Error: ${error.text}`
      } else if (error.message) {
        errorMsg = `Error: ${error.message}`
      } else if (typeof error === 'string') {
        errorMsg = `Error: ${error}`
      }
      
      if (error.status === 400) {
        errorMsg = 'Invalid request. Please check your form data and try again.'
      } else if (error.status === 401) {
        errorMsg = 'Authentication failed. Please check your EmailJS configuration.'
      } else if (error.status === 404) {
        errorMsg = 'Service or template not found. Please check your EmailJS IDs.'
      } else if (error.status === 429) {
        errorMsg = 'Too many requests. Please try again later.'
      }
      
      setErrorMessage(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-accent">
            Are You Interested?
          </h2>
          <button
            onClick={onClose}
            className="text-text/60 hover:text-text text-3xl transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {submitStatus === 'success' ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">✅</div>
            <p className="text-2xl text-accent font-semibold">
              Thank you for your interest!
            </p>
            <p className="text-text/80 mt-2">
              We'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-text/80 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-text/80 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text/80 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="+91 1234567890"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-text/80 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="+91 1234567890"
                />
              </div>
            </div>

            <div>
              <label className="block text-text/80 mb-2">City/Country</label>
              <input
                type="text"
                name="cityCountry"
                value={formData.cityCountry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Nagpur, India"
              />
            </div>

            <div>
              <label className="block text-text/80 mb-2">Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Select your interest</option>
                <option value="Beginner Classes">Beginner Classes</option>
                <option value="Intermediate Classes">Intermediate Classes</option>
                <option value="Advanced Classes">Advanced Classes</option>
              </select>
            </div>

            <div>
              <label className="block text-text/80 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-bg/50 border border-accent/20 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                placeholder="Tell us about your interest..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm font-semibold mb-1">Submission Failed</p>
                <p className="text-red-300 text-sm">
                  {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
                </p>
                <p className="text-red-400/80 text-xs mt-2">
                  You can also contact us directly at samarthparanjpe01@gmail.com or +91 8319103613
                </p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-lg border border-accent/30 text-text hover:bg-accent/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

export default InterestModal

