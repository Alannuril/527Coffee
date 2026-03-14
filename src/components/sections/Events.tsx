"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Acoustic Night",
    date: "Every Friday",
    time: "19:00 - 22:00",
    location: "Rooftop Area",
    image: "/images/events/1.jpg",
    type: "Live Music"
  },
  {
    id: 2,
    title: "Latte Art Workshop",
    date: "24 April 2026",
    time: "10:00 - 13:00",
    location: "Main Floor",
    image: "/images/events/2.jpg",
    type: "Community"
  },
  {
    id: 3,
    title: "Serang Tech Meetup",
    date: "02 May 2026",
    time: "15:00 - 18:00",
    location: "Meeting Room",
    image: "/images/events/3.jpg",
    type: "Networking"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4">
            What's Happening
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our vibrant community. From live music sessions to creative 
            workshops, there's always something exciting at 527 Coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-sage font-semibold text-xs px-3 py-1 rounded-full">
                  {event.type}
                </div>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-coffee mb-4 group-hover:text-sage transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-sage-light" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-sage-light" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-sage-light" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
