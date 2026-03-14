"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 bg-coffee-dark z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/images/gallery/1.jpg"
          alt="527 Coffee Rooftop Atmosphere"
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Titik Temu Ikonik di <br className="hidden md:block" />
          <span className="text-sage-light">Jantung Kota Serang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-off-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
        >
          Lebih dari sekadar kafe. 527 Coffee adalah ruang untuk bekerja,
          bercerita, dan menikmati suasana dari pagi hingga larut malam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            View Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-coffee"
          >
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
