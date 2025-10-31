import React, { useState } from 'react';
// Make sure this path is correct for your project structure.
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // MODIFIED: Updated hrefs to point to section IDs.
  const navLinks = [
    { href: '#home', label: 'Home' }, // Assumes your top-most section/hero has id="home"
    { href: '#about', label: 'About Us' },
    { href: '#courses', label: 'Courses' },
    // { href: '#results', label: 'Results' }, // Add id="results" to your Results section
    { href: '#resources', label: 'Resources' },
    { href: '#contact-register', label: 'Contact' },
  ];

  // Closes the mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#2F3E46] shadow-lg font-inter sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          
          {/* --- Logo section --- */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center text-white">
              <img src={logo} alt="neuroX logo" className="mr-3 h-16 w-16 rounded-md" />
              <span className="hidden min-[910px]:inline text-3xl font-poppins font-bold">
                NeuroX
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden min-[910px]:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-[#2A9D8F] transition-colors duration-300 text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden min-[910px]:block">
             {/* MODIFIED: Link points to the contact section */}
             <a href="#contact-register" className="bg-[#2A9D8F] text-white font-poppins font-semibold py-3 px-6 rounded-lg hover:bg-[#248a7f] transition-all duration-300 transform hover:scale-105">
                Register Now
               </a>
          </div>

          {/* Mobile CTA and Menu Button Wrapper */}
          <div className="min-[910px]:hidden flex items-center gap-2">
            {/* MODIFIED: Link points to the contact section */}
            <a href="#contact-register" className="bg-[#2A9D8F] text-white font-poppins font-semibold py-2 px-4 text-sm rounded-lg hover:bg-[#248a7f] transition-colors duration-300">
              Register Now
            </a>
            
            {/* Mobile Menu (Hamburger) Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#2A9D8F] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`min-[910px]:hidden bg-[#2F3E46] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              // MODIFIED: Added onClick to close the menu
              onClick={handleMobileLinkClick}
              className="text-white hover:text-[#2A9D8F] block px-3 py-3 rounded-md text-base font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
