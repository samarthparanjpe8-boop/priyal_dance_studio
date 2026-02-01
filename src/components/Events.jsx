import { motion } from 'framer-motion'

const Events = ({ id }) => {
  const events = [
    {
      image: '/images/IMG_2557.png',
      title: 'Pro-Advanced course',
      date: '1 April 2026',
      duration: '7 years',
      venue: 'Priyal Dance Studio',
    },
    {
      image: '/images/carousel-2.png',
      title: 'Beginner course',
      date: '1 April 2026',
      duration: '1 year',
      venue: 'Priyal Dance Studio',
    },
    {
      image: '/images/carousel-3.jpg',
      title: 'Advanced course',
      date: '1 April 2026',
      duration: '2 years',
      venue: 'Priyal Dance Studio',
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
          Learnings
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden w-full max-w-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center flex flex-col items-center">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-accent">
                  {event.title}
                </h3>
                <div className="space-y-2 text-text/80">
                  <p className="flex items-center gap-2 justify-center">
                    <span className="text-accent">📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2 justify-center">
                    <span className="text-accent">⏱️</span>
                    {event.duration}
                  </p>
                  <p className="flex items-center gap-2 justify-center">
                    <span className="text-accent">📍</span>
                    {event.venue}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Events

