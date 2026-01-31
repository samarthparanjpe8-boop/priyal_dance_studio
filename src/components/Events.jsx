import { motion } from 'framer-motion'

const Events = ({ id }) => {
  const events = [
    {
      image: '/images/IMG_2557.png',
      title: 'Annual Dance Recital',
      date: 'March 15, 2025',
      time: '6:00 PM',
      venue: 'Cultural Center, Nagpur',
    },
    {
      image: '/images/carousel-2.png',
      title: 'Kathak Workshop',
      date: 'April 20, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Priyal Dance Studio',
    },
    {
      image: '/images/carousel-3.jpg',
      title: 'Festival Performance',
      date: 'May 10, 2025',
      time: '7:30 PM',
      venue: 'City Auditorium',
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
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-accent">
                  {event.title}
                </h3>
                <div className="space-y-2 text-text/80">
                  <p className="flex items-center gap-2">
                    <span className="text-accent">📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">⏰</span>
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
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

