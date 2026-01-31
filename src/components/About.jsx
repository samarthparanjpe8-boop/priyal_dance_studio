import { motion } from 'framer-motion'

const About = ({ id }) => {
  return (
    <section id={id} className="min-h-screen py-20 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-accent">
            About
          </h2>
          <div className="space-y-6 text-text/90 text-lg leading-relaxed">
            <p>
              Priyal Dance Studio & Centre for Performing Arts blends tradition with
              contemporary pedagogy—helping students build strong foundations in
              technique, rhythm, expression, and stage presence.
            </p>
            <p>
              Rooted in <strong className="text-accent">Kathak</strong>, we help students discover rhythm, grace, and
              storytelling through movement. Our approach combines the rich heritage
              of classical Indian dance with modern teaching methodologies.
            </p>
            <p>
              <strong className="text-accent">Smt. Priyal Najpande Gadkar</strong> is a Doordarshan-graded performer and
              an accomplished Kathak educator, guiding students with precision,
              creativity, and empathy. With years of experience and dedication, she
              brings the art of Kathak to life for students of all levels.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

