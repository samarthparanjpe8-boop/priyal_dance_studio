import { motion } from 'framer-motion'

const Contact = ({ id }) => {
  return (
    <section id={id} className="min-h-screen pt-20 pb-40 px-6 lg:px-20 lg:pb-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-accent">
          Contact
        </h2>
        <div className="glass rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center justify-items-center">
            <div className="space-y-4 md:space-y-6 w-full max-w-md mx-auto text-center">
              <motion.a
                href="tel:+918319103613"
                whileHover={{ scale: 1.05 }}
                className="flex w-full flex-col sm:flex-row items-center gap-4 p-3 sm:p-5 glass rounded-lg md:rounded-xl hover:bg-accent/10 transition-colors min-h-[60px] justify-center"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-0">📞</div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text/60">Phone</p>
                  <p className="text-lg text-text">+91 8319103613</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@priyaldancestudio.com"
                whileHover={{ scale: 1.05 }}
                className="flex w-full flex-col sm:flex-row items-center gap-4 p-3 sm:p-5 glass rounded-lg md:rounded-xl hover:bg-accent/10 transition-colors min-h-[60px] justify-center"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-0">📧</div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text/60">Email</p>
                  <p className="text-lg text-text">info@priyaldancestudio.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/918319103613"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex w-full flex-col sm:flex-row items-center gap-4 p-3 sm:p-5 glass rounded-lg md:rounded-xl hover:bg-accent/10 transition-colors min-h-[60px] justify-center"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-0">💬</div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text/60">WhatsApp</p>
                  <p className="text-lg text-text">+91 8319103613</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/priyal_dance_studio/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex w-full flex-col sm:flex-row items-center gap-4 p-3 sm:p-5 glass rounded-lg md:rounded-xl hover:bg-accent/10 transition-colors min-h-[60px] justify-center"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-0">📷</div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text/60">Instagram</p>
                  <p className="text-lg text-text">@priyal_dance_studio</p>
                </div>
              </motion.a>
            </div>

            <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
              <div className="glass rounded-lg md:rounded-xl p-5 md:p-6 text-center max-w-md w-full">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">
                  Visit Us
                </h3>
                <p className="text-text/80 text-lg">
                  Nagpur, India
                </p>
                <p className="text-text/60 text-sm mt-2">
                  402, Park View 9, Navnirman Colony, Pratap Nagar, Nagpur - 440022
                </p>

                <div className="mt-4 w-full h-48 md:h-40 overflow-hidden rounded-md">
                  <iframe
                    title="Priyal Dance Studio Location"
                    src="https://www.google.com/maps?q=402,+Park+View+9,+Navnirman+Colony,+Pratap+Nagar,+Nagpur+440022&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=402,+Park+View+9,+Navnirman+Colony,+Pratap+Nagar,+Nagpur+440022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

