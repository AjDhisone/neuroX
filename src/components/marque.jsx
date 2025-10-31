import React from "react";

const Marquee = () => {
  // Calculate next year dynamically
  const nextYear = new Date().getFullYear() + 1;
  
  return (
    <div className="block md:hidden w-full overflow-hidden relative py-2
      bg-[#2A9D8F]
      before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-[#2A9D8F] before:to-transparent
      after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-[#2A9D8F] after:to-transparent"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First copy */}
        <span className="text-lg font-semibold text-white mx-8">
          Admissions open for NEET {nextYear} – Limited seats available!
        </span>
        <span className="text-lg font-semibold text-white mx-8">
          Admissions Open for NEET {nextYear} — Join Our Top Scoring Batch!
        </span>

        {/* Duplicate for seamless loop */}
        <span className="text-lg font-semibold text-white mx-8">
          Admissions open for NEET {nextYear} – Limited seats available!
        </span>
        <span className="text-lg font-semibold text-white mx-8">
          Admissions Open for NEET {nextYear} — Join Our Top Scoring Batch!
        </span>
      </div>
    </div>
  );
};

export default Marquee;
