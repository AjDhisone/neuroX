import React from 'react';
import {
  BsGeoAlt,
  BsEnvelope,
  BsPhone,
} from "react-icons/bs";
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Footer() {
  const [footerRef, isFooterVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className={`bg-charcoal text-crisp-white font-poppins transition-opacity duration-1000 ${isFooterVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <a href="#" className="text-2xl font-extrabold text-crisp-white">
              Neuro<span className="text-scholarly-teal">X</span>
            </a>
            <p className="mt-4 text-sm text-crisp-white/70">
              Redefining NEET coaching to inspire and transform students into achievers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-crisp-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-crisp-white/70 hover:text-scholarly-teal transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-crisp-white/70 hover:text-scholarly-teal transition-colors">Courses</a></li>
              <li><a href="#resources" className="text-crisp-white/70 hover:text-scholarly-teal transition-colors">Resources</a></li>
              <li><a href="#contact-register" className="text-crisp-white/70 hover:text-scholarly-teal transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-crisp-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-crisp-white/70">
              <li className="flex items-start">
                <BsGeoAlt className="mr-3 mt-1 flex-shrink-0 text-scholarly-teal" size={18} />
                <span>Casagrand, Kanathur, Chennai – 603112</span>
              </li>
              <li className="flex items-start">
                <BsEnvelope className="mr-3 mt-1 flex-shrink-0 text-scholarly-teal" size={18} />
                <a href="mailto:faculty.neurox@gmail.com" className="hover:text-scholarly-teal transition-colors">faculty.neurox@gmail.com</a>
              </li>
              <li className="flex items-start">
                <BsPhone className="mr-3 mt-1 flex-shrink-0 text-scholarly-teal" size={18} />
                <a href="tel:+919043812290" className="hover:text-scholarly-teal transition-colors">+91 90438 12290</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-sm text-crisp-white/50">
            © {new Date().getFullYear()} NeuroX Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}