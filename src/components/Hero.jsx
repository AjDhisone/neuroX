import React from 'react';

const HeroSection = () => {
  const colors = {
    white: '#FFFFFF',
    alabaster: '#F8F9FA', 
    charcoal: '#2F3E46',
    scholarlyTeal: '#2A9D8F',
  };

  return (
    <section 
      id="home"
      className="relative min-h-[calc(100vh-80px)] md:min-h-[700px] flex items-end lg:items-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 lg:hidden">
        <img 
          src="/neuroX/images/hero.png" 
          alt="Students learning with NeuroX" 
          className="w-full h-full object-cover" 
          loading="eager"
          fetchpriority="high"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/45 backdrop-blur-[2px]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 hidden lg:block" style={{ backgroundColor: colors.white }} />

      <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-center pt-6 lg:pt-4 pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div
          className="lg:col-span-3 absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:static lg:p-0 flex flex-col gap-4"
        >
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up"
            style={{ color: colors.charcoal, textShadow: '0 6px 18px rgba(0,0,0,0.25)' }}
          >
            Turning Aspirations into Achievements
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl md:max-w-2xl animate-fade-in-up delay-100"
            style={{ color: colors.charcoal, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          >
            Join NeuroX online coaching platform — where top results are born through structured learning, 
            expert mentorship, and personalized guidance. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#courses"
              className="w-full sm:w-auto text-center py-3 sm:py-4 px-8 sm:px-10 text-lg sm:text-xl font-semibold
                         rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                         bg-[#2A9D8F] hover:bg-[#248a7f] text-white animate-fade-in-up delay-200"
            >
              Explore Courses
            </a>

            <a
              href="#contact-register"
              className="w-full sm:w-auto text-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-xl font-semibold rounded-lg shadow-lg
                         transition-all duration-200 transform hover:scale-105 hover:shadow-xl
                         bg-white hover:bg-teal-50 border-2 border-[#2A9D8F] text-[#2A9D8F] animate-fade-in-up delay-200"
            >
              Book Free Session
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-2 relative h-96 md:h-[500px] w-full mt-12 md:mt-0 justify-center items-center z-0">
          <div 
            className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 lg:-bottom-16 lg:-right-16 w-5/6 h-5/6 
                       bg-opacity-80 rounded-full md:rounded-3xl rotate-6 animate-slide-in-right"
            style={{ backgroundColor: colors.scholarlyTeal }}
          ></div>
          
          <div 
            className="relative w-[90%] h-[90%] md:w-4/5 md:h-4/5 bg-gray-300 rounded-lg shadow-2xl overflow-hidden z-10 transform -rotate-3 animate-fade-in-right delay-300"
            style={{ 
              backgroundImage: `url(${heroimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
