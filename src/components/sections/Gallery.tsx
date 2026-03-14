"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Rooftop ambiance",
    className: "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Barista pouring coffee",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Coffee beans",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Cafe interior",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Cozy seating area",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Latte art close up",
    className: "col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 lg:col-span-2 lg:row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-off-white">
      <div className="container mx-auto px-4 md:px-8 focus:outline-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4">
              The Aesthetic
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Take a glimpse into our space. From our bustling coffee bar to our
              serene rooftop, every corner is designed to inspire.
            </p>
          </div>
          <a
            href="https://instagram.com/527coffee"
            target="_blank"
            rel="noreferrer"
            className="text-sage font-medium hover:text-coffee transition-colors hidden md:block"
          >
            Follow our Instagram &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(150px,1fr)] sm:grid-rows-2 lg:grid-rows-2 gap-4 h-[600px] md:h-[700px] lg:h-[600px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://instagram.com/527coffee"
            target="_blank"
            rel="noreferrer"
            className="text-sage font-medium hover:text-coffee transition-colors"
          >
            Follow our Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
