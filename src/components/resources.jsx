import React, { useState } from 'react';
import {
  BsBook,
  BsPencilSquare,
  BsCameraVideo,
  BsChevronDown,
} from "react-icons/bs";
import useScrollAnimation from '../hooks/useScrollAnimation';

const resourcesData = [
  {
    category: "Study Materials",
    icon: <BsBook size={24} />,
    items: [
      "Free NEET Notes (Physics, Chemistry, Biology)",
      "NCERT Chapter Summaries",
      "Formula Sheets & Flashcards",
      "Topic-Wise PYQs with Solutions",
    ],
  },
  {
    category: "Strategy Blogs",
    icon: <BsPencilSquare size={24} />,
    items: [
      "“How to Score 650+ in NEET 2025”",
      "“Time Management Tips for Droppers”",
      "“Top 10 Mistakes to Avoid Before the Exam”",
    ],
  },
  {
    category: "Video Learning",
    icon: <BsCameraVideo size={24} />,
    items: [
      "Short Concept Explainers",
      "Full-Length Mock Test Reviews",
      "Motivation Sessions from Toppers",
    ],
  },
];

export default function ResourcesSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
  // State is now managed here to control which accordion is open
  const [openAccordion, setOpenAccordion] = useState(0); // Open the first item by default

  return (
    <section id="resources" className="bg-gray-50 py-20 md:py-28 font-poppins overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Our <span className="text-scholarly-teal">Resources</span>
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-scholarly-teal/85" />
        </div>

        {/* Container for the unified blurry background and accordions */}
        <div className="relative">
          <div className="absolute inset-0 bg-scholarly-teal/10 rounded-3xl blur-3xl -z-10"></div>
          
          <div
            ref={sectionRef}
            className={`
              space-y-4 transition-opacity duration-1000 
              ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
          >
            {resourcesData.map((resource, index) => (
              <ResourceAccordion
                key={index}
                {...resource}
                isOpen={openAccordion === index}
                setIsOpen={() => setOpenAccordion(openAccordion === index ? null : index)} // Allows closing and opening
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- REDESIGNED ResourceAccordion Component ---
function ResourceAccordion({ category, icon, items, isOpen, setIsOpen }) {
  return (
    <div
      className="
        bg-crisp-white/80 backdrop-blur-sm 
        border border-crisp-white/50
        rounded-xl
        shadow-lg shadow-scholarly-teal/10
        transition-all duration-300 ease-in-out
        overflow-hidden
      "
    >
      <button
        className="
          flex justify-between items-center w-full p-6
          text-lg font-semibold text-charcoal
          hover:bg-scholarly-teal/10 focus:outline-none transition-colors duration-300
        "
        onClick={setIsOpen}
      >
        <span className="flex items-center gap-4">
          <span className="text-scholarly-teal">{icon}</span>
          {category}
        </span>
        <BsChevronDown
          className={`
            text-scholarly-teal transition-transform duration-500 ease-in-out
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* --- NEW: Flawless CSS Grid Animation --- */}
      <div
        className={`
          grid transition-[grid-template-rows] duration-500 ease-in-out
          ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <ul className="space-y-3 text-charcoal/80 border-t border-scholarly-teal/20 pt-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-scholarly-teal mr-3 mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )};