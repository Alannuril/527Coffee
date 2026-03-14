"use client";

import { motion, Variants } from "framer-motion";
import { Wifi, Map, Music, CarFront, Coffee } from "lucide-react";

const facilities = [
  {
    icon: <Wifi size={32} strokeWidth={1.5} />,
    title: "WFC Friendly",
    description: "Fast WiFi & power outlets at every table for your productivity.",
  },
  {
    icon: <Map size={32} strokeWidth={1.5} />,
    title: "Rooftop View",
    description: "Enjoy your coffee with a stunning city view from our rooftop.",
  },
  {
    icon: <Music size={32} strokeWidth={1.5} />,
    title: "Live Music",
    description: "Experience live music performances every weekend.",
  },
  {
    icon: <CarFront size={32} strokeWidth={1.5} />,
    title: "Spacious Parking",
    description: "Ample parking space available for cars and motorcycles.",
  },
  {
    icon: <Coffee size={32} strokeWidth={1.5} />,
    title: "Dine-in & Drive-Thru",
    description: "Flexible options to enjoy our menu your way.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-off-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4">
            Curated For Your Comfort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're here to work, relax, or catch up with friends, we've
            thought of everything to make your stay perfect.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {facilities.map((fac, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-sage/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                {fac.icon}
              </div>
              <h3 className="text-lg font-semibold text-coffee mb-2">
                {fac.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {fac.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
