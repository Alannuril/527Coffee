import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-off-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-sage-light">
              527 Coffee
            </h2>
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
              Titik temu ikonik di Jantung Kota Serang. Tempat yang tepat untuk
              menikmati kopi, bekerja, dan bersantai hingga larut malam.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com/527coffee"
                target="_blank"
                rel="noreferrer"
                className="bg-coffee p-2 rounded-full hover:bg-sage transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Menu", "Facilities", "Events", "Gallery", "Location"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-sage-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">
              Contact & Location
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="text-sage-light shrink-0 mt-0.5" />
                <p>Jl. Maulana Yusuf, Cimuncang, Serang, Banten</p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} className="text-sage-light shrink-0" />
                <p>+62 (0) 811 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} className="text-sage-light shrink-0" />
                <p>hello@527coffee.com</p>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-medium text-white mb-2">Operational Hours</h4>
              <p className="text-sm text-gray-300">Everyday: 07.00 - 03.00 WIB</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-coffee mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 527 Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
