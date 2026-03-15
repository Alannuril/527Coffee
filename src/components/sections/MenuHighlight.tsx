"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Ice Coffee Susu Gula Aren",
    price: "Rp 25.000",
    category: "Coffee",
    image: "/images/menu/1.jpg",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Pistachio Coffee",
    price: "Rp 35.000",
    category: "Coffee",
    image: "/images/menu/2.jpg",
    badge: "New",
  },
  {
    id: "3",
    name: "Nasi Gila 527",
    price: "Rp 38.000",
    category: "Food",
    image: "/images/menu/3.jpg",
    badge: "Spicy",
  },
  {
    id: "4",
    name: "Cinnamon Cheese Coffee",
    price: "Rp 32.000",
    category: "Coffee",
    image: "/images/menu/4.jpg",
  },
  {
    id: "5",
    name: "Butterscotch Coffee",
    price: "Rp 30.000",
    category: "Coffee",
    image: "/images/menu/5.jpg",
  },
  {
    id: "6",
    name: "Spaghetti Carbonara",
    price: "Rp 42.000",
    category: "Food",
    image: "/images/menu/6.jpg",
  },
];

export default function MenuHighlight() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-coffee mb-4">
              Signature Menu
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore our carefully crafted selection of beverages and meals, 
              designed to perfection for your daily dose of happiness.
            </p>
          </div>
          <Link href="/menu" className="shrink-0 self-start md:self-auto hidden md:flex">
            <Button variant="outline">
              View Full Menu
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-off-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-sage text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {item.badge}
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-xl font-semibold text-coffee font-heading leading-tight group-hover:text-sage transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-sage font-semibold shrink-0">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm font-medium text-coffee">
                    Order Now &rarr;
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/menu">
            <Button variant="outline" className="w-full">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
