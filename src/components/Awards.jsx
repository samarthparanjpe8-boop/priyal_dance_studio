import { motion } from 'framer-motion'

const Awards = ({ id }) => {
  const awards = [
    'Graded Artist – Prasar Bharti (Doordarshan)',
    'Member – International Dance Council (CID)',
    'Performed in front of the President of India',
    'Best Choreographer – Sakhi Mandal Group Dance Competition 2025',
    'Featured on 94.3 MyFM (2024) as special guest',
    'Interviewed by Sakhi Sayadri (2023)',
    'Bharat Nataraj Kala Gaurav Award – 2022',
    'Performed for ICCR, Sri Lanka',
  ]

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
          Awards & Recognition
        </h2>
        <div className="space-y-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl text-accent">🏆</div>
                <p className="text-lg text-text/90">{award}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Awards

