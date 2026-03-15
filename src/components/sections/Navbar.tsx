"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "/menu" },
    { name: "Facilities", href: "#facilities" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-off-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-heading font-bold text-coffee">
          527 Coffee
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-coffee-light hover:text-sage transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#order"
            className="bg-sage hover:bg-sage-light text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Order Online
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-coffee"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-off-white shadow-md border-t border-gray-100 flex flex-col space-y-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-coffee font-medium text-lg hover:text-sage transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            className="bg-sage text-white text-center px-6 py-3 rounded-full font-medium mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Online
          </a>
        </div>
      )}
    </nav>
  );
}
