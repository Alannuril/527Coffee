"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { menuItems } from "@/lib/menuData";

export default function MenuDetailPage() {
  const { id } = useParams();
  
  // Find current item
  const item = useMemo(() => menuItems.find((m) => m.id === id), [id]);
  
  // Find related items containing 4 items from the same category
  const relatedItems = useMemo(() => {
    if (!item) return [];
    return menuItems
      .filter((m) => m.category === item.category && m.id !== item.id)
      .slice(0, 4);
  }, [item]);

  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!item) {
    return (
      <main className="min-h-screen bg-off-white flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-3xl font-heading text-coffee mb-4">Item Not Found</h1>
          <Link href="/menu" className="text-sage font-medium hover:underline">
            &larr; Return to Menu
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const imagesList = item.images && item.images.length > 0 ? item.images : [item.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-sage-light transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft size={16} />
            Back to Full Menu
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column: Image Gallery (Slider) */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden group">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={currentImageIndex}
                    src={imagesList[currentImageIndex]}
                    alt={`${item.name} - image ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="object-cover w-full h-full absolute inset-0"
                  />
                </AnimatePresence>
                
                {item.badge && (
                  <div
                    className={`absolute top-6 left-6 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md z-10 ${
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

                {/* Slider Controls */}
                {imagesList.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-coffee rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-coffee rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm">
                      {imagesList.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Menu Detail Info */}
            <div className="lg:w-1/2 flex flex-col pt-2 lg:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-sage uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-coffee mb-4 leading-tight">
                  {item.name}
                </h1>
                
                <p className="text-3xl text-sage font-bold mb-8">
                  {item.price}
                </p>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-8" />
                
                <h3 className="text-lg font-semibold text-coffee mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                  {item.description || "Enjoy the delightful flavors crafted perfectly for you. Prepared with the finest ingredients to satisfy your cravings."}
                </p>
                
                {/* Action Area */}
                <div className="mt-auto">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Quantity</h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-off-white border border-gray-200 rounded-full h-14 p-1 w-max">
                      <button 
                        onClick={decreaseQuantity}
                        className="w-12 h-12 flex items-center justify-center rounded-full text-coffee/70 hover:bg-white hover:text-coffee transition-colors hover:shadow-sm"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="w-12 text-center font-semibold text-coffee text-lg">
                        {quantity}
                      </span>
                      <button 
                        onClick={increaseQuantity}
                        className="w-12 h-12 flex items-center justify-center rounded-full text-coffee/70 hover:bg-white hover:text-coffee transition-colors hover:shadow-sm"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    
                    {/* Add to Order CTA */}
                    <button className="flex-1 bg-sage hover:bg-sage-dark text-white h-14 rounded-full flex items-center justify-center gap-3 font-medium text-lg transition-colors shadow-lg shadow-sage/20">
                      <ShoppingBag size={20} />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <section className="py-20 bg-off-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-coffee mb-10 text-center md:text-left">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedItems.map((relatedItem, index) => (
                <motion.div
                  key={relatedItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <Link href={`/menu/${relatedItem.id}`} className="flex flex-col h-full grow">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                      <img 
                        src={relatedItem.image} 
                        alt={relatedItem.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {relatedItem.badge && (
                        <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm ${
                          relatedItem.badge === "Spicy" ? "bg-red-500" : relatedItem.badge === "New" ? "bg-amber-500" : "bg-sage"
                        }`}>
                          {relatedItem.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col grow justify-between">
                      <div>
                        <span className="text-[10px] font-medium text-sage uppercase tracking-wider">{relatedItem.category}</span>
                        <h4 className="font-heading font-semibold text-coffee mt-1 mb-2 group-hover:text-sage transition-colors line-clamp-1">
                          {relatedItem.name}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sage font-bold text-sm">{relatedItem.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
