import React from 'react';

const LogoSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <img 
            src="/neuroX/images/logo.png" 
            alt="NeuroX Academy Logo" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-2xl shadow-2xl mb-6 ring-4 ring-scholarly-teal/20"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-3">
            Neuro<span className="text-scholarly-teal">X</span> Academy
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 font-medium">
            Excellence in NEET Preparation
          </p>
          <div className="mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-scholarly-teal/50 via-scholarly-teal to-scholarly-teal/50" />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
