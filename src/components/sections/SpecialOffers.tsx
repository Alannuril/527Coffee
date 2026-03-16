"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { X } from "lucide-react";

interface OfferItem {
  id: string;
  title: string;
  shortDescription: string;
  priceHighlight: string;
  image: string;
  packageContents: string[];
  termsAndConditions: string[];
}

const specialOffers: OfferItem[] = [
  {
    id: "ramadan-2026",
    title: "Ramadan Iftar Package",
    shortDescription: "Special course meal for breaking your fast.",
    priceHighlight: "Rp 150.000 / pax",
    image: "/images/offers/promoSS1.png",
    packageContents: [
      "Tajil: Kurma and Sweet Iced Tea",
      "Main Course: Choice of Nasi Gila 527 or Spaghetti Carbonara",
      "Dessert: Mini Choco Lava Cake",
      "Beverage: Any Signature Coffee or Mocktail"
    ],
    termsAndConditions: [
      "Available everyday during Ramadan month.",
      "Valid from 17:00 to 20:00 WIB.",
      "Reservation highly recommended at least 1 day prior.",
      "Price excludes 10% PB1 tax and 5% service charge."
    ]
  },
  {
    id: "weekend-bundle",
    title: "Weekend Friends Bundle",
    shortDescription: "Perfect sharing combo for your weekend hangout.",
    priceHighlight: "Rp 250.000 / 4 pax",
    image: "/images/offers/promoSS2.png",
    packageContents: [
      "2x Signature Platter (Fries, Sausages, Chicken Wings)",
      "4x Any Regular Coffee or Iced Tea",
      "1x Sharing Nachos with Cheese Dip"
    ],
    termsAndConditions: [
      "Valid only on Saturdays and Sundays.",
      "Dine-in only, not available for takeaway or delivery.",
      "Cannot be combined with other promotions."
    ]
  },
  {
    id: "student-deal",
    title: "Student Happy Hour",
    shortDescription: "Show your Student ID and get a fresh boost.",
    priceHighlight: "Flat Rp 25.000",
    image: "/images/offers/promoSS3.png",
    packageContents: [
      "Choice of: Ice Coffee Susu Gula Aren, Americano, or Lychee Tea",
      "Plus 1 Classic Croissant or Brownie Slice"
    ],
    termsAndConditions: [
      "Valid Monday - Thursday, 14:00 - 17:00 WIB.",
      "Must present a valid physical or digital Student ID.",
      "One package per student per day."
    ]
  }
];

export default function SpecialOffers() {
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);

  return (
    <section id="special-offers" className="py-24 bg-sage/5 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-coffee/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4"
          >
            Special Offers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 leading-relaxed"
          >
            Discover our exclusive seasonal campaigns and limited-time packages crafted specially for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col group cursor-pointer border border-gray-100"
              onClick={() => setSelectedOffer(offer)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-3 py-1 bg-sage text-xs font-semibold rounded-full mb-2">
                    {offer.priceHighlight}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-coffee mb-2 group-hover:text-sage transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  {offer.shortDescription}
                </p>

                <Button variant="outline" className="w-full mt-auto group-hover:bg-coffee group-hover:text-white transition-all duration-300 pointer-events-none">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative flex flex-col"
              >
                <div className="relative h-64 sm:h-72 shrink-0">
                  <img
                    src={selectedOffer.image}
                    alt={selectedOffer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <button
                    onClick={() => setSelectedOffer(null)}
                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                    aria-label="Close details"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">{selectedOffer.title}</h3>
                    <div className="inline-flex items-center px-4 py-1.5 bg-sage rounded-full text-sm font-semibold">
                      {selectedOffer.priceHighlight}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  {/* Description */}
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {selectedOffer.shortDescription}
                    </p>
                  </div>

                  {/* Package Contents */}
                  <div>
                    <h4 className="font-heading font-semibold text-coffee text-xl mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sage rounded-full" />
                      Package Contents
                    </h4>
                    <ul className="space-y-3">
                      {selectedOffer.packageContents.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-5 h-5 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-off-white p-6 rounded-xl border border-gray-100">
                    <h4 className="font-heading font-semibold text-coffee mb-3">Terms & Conditions</h4>
                    <ul className="space-y-2">
                      {selectedOffer.termsAndConditions.map((term, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-500">
                          <span className="text-gray-300">•</span>
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Area */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" className="flex-1 w-full" onClick={() => alert("Reservation flow would trigger here.")}>
                      Reserve Now
                    </Button>
                    <Button variant="outline" className="sm:w-auto" onClick={() => setSelectedOffer(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
