import { motion } from 'framer-motion'

const Portfolio = ({ id }) => {
  const portfolioSections = [
    {
      title: 'Class Offerings',
      items: [
        'Beginner Level - Foundation & Basics',
        'Intermediate Level - Advanced Techniques',
        'Advanced Level - Mastery & Performance',
      ],
    },
    {
      title: 'TEACHING EXPERIENCE',
      items: [
        'Dance Instructor – IAID, Doha',
        'Founder & Lead Mentor – Priyal Dance Studio, Nagpur',
        'Founder & Lead Mentor – Priyal Dance Studio, Nagpur',
        'Official Choreographer – Mudra (National-levelTransgender Dance Group)',
        'Visiting Faculty – Somalwar Junior College & Somalwar High School, Nagpur',
      ],
    },
    {
      title: 'MAJOR PRODUCTIONS & PERFORMANCES',
      items: [
        'Solo Performer & Producer – Geet Ramayan at 4th World Ramayan Conference 2026',
        'Conceptualised & Directed Shakti Roopam (50+ artists)',
        'MY FM 94.3 Award Function 2025',
        'Sanskar Bharati Annual Sabha 2025',
        'Akhanda Ghungroo Naad (2024 & 2025)',
        'ICCR Sri Lanka | NCPA Mumbai',
        'Judge – Bharat Natraj International Dance Festival (2024 &2025)'
      ],
    },
  ]

  return (
    <section id={id} className="min-h-screen py-20 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-accent">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">
                {section.title}
              </h3>
              <ul className="space-y-2 text-text/80">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Portfolio

