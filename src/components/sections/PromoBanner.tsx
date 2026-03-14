"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function PromoBanner() {
  return (
    <section className="py-12 md:py-24 bg-off-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-coffee-dark rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Abstract Background Elements inside Banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="p-8 md:p-14 lg:p-20 lg:w-1/2 flex flex-col justify-center relative z-20">
              <span className="text-sage-light font-semibold tracking-wider text-sm uppercase mb-4 block">
                527 Plus Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Host Your Next Event With Us
              </h2>
              <p className="text-gray-300 mb-10 text-lg max-w-lg leading-relaxed font-light">
                From intimate community gatherings to birthday celebrations. 
                Get our special exclusive packages starting from Rp 1.500.000 for 15 persons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="w-full sm:w-auto">
                  Book Event
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white/50 hover:text-white">
                  Download Package
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/2 w-full h-80 lg:h-auto relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-coffee-dark/80 z-10" />
              <img
                src="/images/misc/promo.jpg"
                alt="Community event at 527 Coffee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
