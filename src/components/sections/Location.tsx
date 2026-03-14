"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Info Section */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-6">
                Visit Us
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We are located in the heart of Serang City. Drop by for your 
                daily caffeine fix, a hearty meal, or just a place to unwind.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center shrink-0 text-sage">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">
                      Jl. Maulana Yusuf, Cimuncang,<br /> 
                      Serang, Banten
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center shrink-0 text-sage">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Everyday<br /> 
                      07.00 - 03.00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center shrink-0 text-sage">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Contact</h3>
                    <p className="text-gray-600 text-sm">
                      +62 (0) 811 1234 5678<br />
                      hello@527coffee.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="primary" className="w-full sm:w-auto">
                  Get Directions
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Map Image Section (Placeholder for actual Google Maps embed or custom map) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-100 relative shadow-sm"
          >
            {/* Using a static placeholder map image for aesthetics instead of an embed that might break the design */}
            <img 
              src="/images/misc/location.jpg" 
              alt="Map location overview" 
              className="w-full h-full object-cover"
            />
            {/* Map Pin overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-xl mb-4 text-center max-w-[200px]">
                <h4 className="font-heading font-bold text-coffee text-lg">527 Coffee</h4>
                <p className="text-xs text-gray-500 mt-1">Jl. Maulana Yusuf</p>
              </div>
              <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-white shadow-lg shadow-sage/40 animate-bounce">
                <MapPin size={24} fill="currentColor" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
