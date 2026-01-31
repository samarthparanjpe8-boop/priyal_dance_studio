import { motion } from 'framer-motion'

const Contact = ({ id }) => {
  return (
    <section id={id} className="min-h-screen py-20 px-6 lg:px-20">
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
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.a
                href="tel:+918319103613"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent/10 transition-colors"
              >
                <div className="text-3xl">📞</div>
                <div>
                  <p className="text-sm text-text/60">Phone</p>
                  <p className="text-lg text-text">+91 8319103613</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:samarthparanjpe01@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent/10 transition-colors"
              >
                <div className="text-3xl">📧</div>
                <div>
                  <p className="text-sm text-text/60">Email</p>
                  <p className="text-lg text-text">priyaldancestudio@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/918319103613"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent/10 transition-colors"
              >
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-sm text-text/60">WhatsApp</p>
                  <p className="text-lg text-text">+91 8319103613</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/priyal_dance_studio/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent/10 transition-colors"
              >
                <div className="text-3xl">📷</div>
                <div>
                  <p className="text-sm text-text/60">Instagram</p>
                  <p className="text-lg text-text">@priyal_dance_studio</p>
                </div>
              </motion.a>
            </div>

            <div className="flex flex-col justify-center">
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">
                  Visit Us
                </h3>
                <p className="text-text/80 text-lg">
                  Nagpur, India
                </p>
                <p className="text-text/60 text-sm mt-2">
                402, Park View 9, Navnirman Colony, Pratap Nagar, Nagpur - 440022
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

