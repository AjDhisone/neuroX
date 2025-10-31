import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import logo from '../assets/images/logo.png';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-scholarly-teal flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export default function AboutSection() {
  const [leftColumnRef, isLeftVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightColumnRef, isRightVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="bg-crisp-white py-20 md:py-28 font-poppins overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            About <span className="text-scholarly-teal">NeuroX</span> Academy
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-scholarly-teal/85" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <div
            ref={leftColumnRef}
            className={`transition-opacity duration-1000 ${isLeftVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {/* Short About Preview */}
            <p className="text-charcoal/80 leading-relaxed mb-8">
              At NeuroX Academy, we believe every NEET aspirant has the potential to succeed. Our mission is to
              turn that potential into medical success through expert mentoring and consistent guidance.
            </p>

            {/* Mission */}
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Our Mission
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              To empower every NEET aspirant to achieve their medical dream through personalized mentorship,
              structured learning, and technology-driven support.
            </p>
            
            {/* Why Choose NeuroX Academy */}
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Why Choose NeuroX Academy
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><CheckIcon /><span>10+ Years of NEET Coaching Expertise</span></li>
              <li className="flex items-start"><CheckIcon /><span>Doctor and IIT Faculty Team</span></li>
              <li className="flex items-start"><CheckIcon /><span>Personalized Study Plans</span></li>
              <li className="flex items-start"><CheckIcon /><span>Small Batches for Focused Attention</span></li>
            </ul>

            {/* Founder’s Message */}
            <blockquote className="border-l-4 border-scholarly-teal bg-scholarly-teal/5 p-4 rounded-r-lg mt-6">
              <p className="italic text-charcoal/90">
                “NeuroX Academy was created to redefine NEET coaching — not just to teach, but to inspire and
                transform students into achievers.”
              </p>
              <footer className="text-right mt-2 text-sm font-semibold text-charcoal">
                — Dr. Vimalan Vijay
              </footer>
            </blockquote>
          </div>

          <div
            ref={rightColumnRef}
            className={`relative flex items-center justify-center transition-opacity duration-1000 ${isRightVisible ? 'animate-scale-in' : 'opacity-0'}`}
          >
            {/* Logo and branding section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
              {/* Logo with premium styling */}
              <div className="relative group mb-8">
                <img 
                  src={logo} 
                  alt="NeuroX Academy Logo" 
                  className="relative h-40 w-40 md:h-48 md:w-48 rounded-3xl shadow-2xl ring-4 ring-scholarly-teal/30 group-hover:ring-scholarly-teal/50 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Branding text */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
                Neuro<span className="text-scholarly-teal">X</span> Academy
              </h2>
              <p className="text-xl md:text-2xl text-charcoal/70 font-medium mb-6">
                Excellence in NEET Preparation
              </p>
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-scholarly-teal/50 via-scholarly-teal to-scholarly-teal/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}