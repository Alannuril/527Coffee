"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "../ui/Button";

// Dynamically import the Leaflet map to avoid SSR issues
const CafeMap = dynamic(() => import("../map/CafeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-3xl">
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <MapPin size={32} className="animate-bounce" />
        <span className="text-sm">Loading map…</span>
      </div>
    </div>
  ),
});

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/GDKVC4sJcMr9kYFj8";

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
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="w-full sm:w-auto">
                    Get Directions
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-100 relative shadow-sm z-10"
          >
            <CafeMap />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
