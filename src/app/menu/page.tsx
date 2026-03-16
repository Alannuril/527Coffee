"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { menuItems, categories, type Category } from "@/lib/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-sage-light transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-coffee mb-4">
              Our Menu
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl text-lg">
              From handcrafted coffee to wholesome meals — discover everything we
              serve to make your day a little more delightful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter & Menu Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-3 overflow-x-auto pb-4 mb-10 md:mb-14 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-sage text-white shadow-md"
                    : "bg-white text-coffee-light hover:bg-sage/10 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Items Count */}
          <div className="mb-8">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-coffee">
                {filteredItems.length}
              </span>{" "}
              {filteredItems.length === 1 ? "item" : "items"}
              {activeCategory !== "All" && (
                <span>
                  {" "}
                  in <span className="text-sage font-medium">{activeCategory}</span>
                </span>
              )}
            </p>
          </div>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col"
                >
                  <Link href={`/menu/${item.id}`} className="flex flex-col h-full grow">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Badge */}
                      {item.badge && (
                        <div
                          className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm ${
                            item.badge === "Spicy"
                              ? "bg-red-500/90"
                              : item.badge === "New"
                              ? "bg-amber-500/90"
                              : "bg-sage"
                          }`}
                        >
                          {item.badge}
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/10 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col grow justify-between">
                      <div>
                        <span className="text-xs font-medium text-sage uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold text-coffee font-heading mt-1 mb-3 leading-snug group-hover:text-sage transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sage font-bold text-lg">
                          {item.price}
                        </span>
                        <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm font-medium text-coffee">
                          Order &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
