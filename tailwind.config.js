/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crisp-white': '#FFFFFF',
        'charcoal': '#2F3E46',
        'scholarly-teal': '#2A9D8F',
        'dark-gray': '#333333',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mobile': "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.9)), url('/src/assets/images/hero.png')",
      },
      keyframes: {
        // --- Unchanged Keyframes ---
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-3deg)' },
        },
        slideInBottom: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeSlow: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        
        // --- NEW: Keyframes for Vertical Marquee ---
        marqueeUp: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(-50%)' },
        },
        marqueeDown: {
            '0%': { transform: 'translateY(-50%)' },
            '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        // --- Unchanged Animations ---
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 1s ease-out forwards',
        'fade-scale-in': 'fadeScaleIn 1s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.8s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        'marquee-slow': 'marqueeSlow 60s linear infinite',

        // --- NEW: Animations for Vertical Marquee ---
        'marquee-up': 'marqueeUp 35s linear infinite',
        'marquee-down': 'marqueeDown 35s linear infinite',
        'marquee-up-fast': 'marqueeUp 20s linear infinite',
      },
    },
  },
  plugins: [],
};