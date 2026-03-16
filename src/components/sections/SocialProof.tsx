"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Star, MessageSquareQuote, Instagram } from "lucide-react";
import { Button } from "../ui/Button";

const reviews = [
  {
    id: 1,
    name: "Sarah J.",
    rating: 5,
    text: "The best place to hang out in Serang! The interior is so aesthetic and the coffee is amazing. Love their signature drinks.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Budi S.",
    rating: 5,
    text: "Perfect spot for WFC (Work From Cafe). WiFi is fast, plenty of electric sockets, and the Ambience is very calm during weekdays.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Nadia A.",
    rating: 4,
    text: "Beautiful minimalist design. The pastry selection is great. It gets a bit crowded on weekends, but still a lovely place.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Reza M.",
    rating: 5,
    text: "Top tier matcha latte! Friendly baristas and really comfortable seating. Definitely my go-to cafe in town.",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Dinda K.",
    rating: 5,
    text: "Very photogenic cafe! Every corner is instagrammable. The food portions are generous and worth the price.",
    date: "1 week ago"
  }
];

const instagramPosts = [
  { id: 1, image: "/images/gallery/1.jpg" },
  { id: 2, image: "/images/gallery/2.jpg" },
  { id: 3, image: "/images/gallery/3.jpg" },
  { id: 4, image: "/images/gallery/4.jpg" },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-off-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        {/* Header & Google Rating */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4">
              Loved by Our Community
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here's what our customers have to say about their experience at 527 Coffee.
            </p>
          </div>

          <motion.a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-coffee mb-1">4.8</div>
              <div className="flex text-yellow-400 gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className={i === 4 ? "opacity-50" : ""} />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-medium">850+ Reviews</div>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div>
              <div className="font-semibold text-coffee mb-1 flex items-center gap-2">
                Google Rating
              </div>
              <div className="text-sm text-sage group-hover:text-sage-light transition-colors font-medium flex items-center gap-1">
                View on Maps 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Animated Reviews Marquee */}
      <div className="mb-24 px-4 md:px-0">
        <Marquee gradient gradientColor="#F8F8F8" speed={40} pauseOnHover className="py-4">
          <div className="flex gap-6 px-3">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="w-[350px] md:w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 shrink-0"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-semibold text-coffee text-lg">{review.name}</h4>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill="currentColor" 
                        className={i >= review.rating ? "text-gray-200" : ""} 
                      />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <MessageSquareQuote size={32} className="absolute -top-2 -left-2 text-sage/10 -z-10" />
                  <p className="text-gray-600 italic leading-relaxed z-10 relative">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Instagram Showcase */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sage">
              <Instagram size={24} />
              <span className="font-semibold tracking-wider text-sm uppercase">@527.coffee</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-coffee">Follow Our Journey</h3>
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 group border-coffee text-coffee hover:bg-coffee hover:text-white"
            onClick={() => window.open('https://www.instagram.com/527.coffee/', '_blank')}
          >
            <Instagram size={18} />
            <span>Visit Instagram</span>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              href="https://www.instagram.com/527.coffee/"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden group block"
            >
              <img 
                src={post.image} 
                alt={`Instagram post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
