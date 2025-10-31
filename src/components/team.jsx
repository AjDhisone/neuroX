import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import drSathiyamoorthy from "../assets/images/dr-sathiyamoorthy.jpg";
import drKasipandi from "../assets/images/dr-kasipandi.jpg";
import drVimalan from "../assets/images/dr-vimalan.jpg";

const teamMembers = [
  {
    name: "Dr. Vimalan Vijay",
    qualification: "Ph.D. (IIT Madras)",
    role: "Founder & Mentor",
    image: drVimalan,
    description: "With 15+ years of experience, Dr. Vimalan transforms learning into a structured, concept-driven, and motivating journey. A passionate educator and mentor, he turns fear into fascination and helps students reach their highest potential."
  },
  {
    name: "Dr. Kasipandi Vellaisamy",
    qualification: "Ph.D. (IIT Madras)",
    image: drKasipandi,
    description: "Dr. Kasipandi is known for simplifying complex ideas and making learning engaging and enjoyable. With a learner-focused approach, he inspires confidence and clarity through logic, guidance, and smart strategy."
  },
  {
    name: "Dr. Krishnan Sathiyamoorthy",
    qualification: "Ph.D. (IIT Madras)",
    image: drSathiyamoorthy,
    description: "A dynamic mentor and researcher, Dr. Krishnan blends scientific depth with simplicity, turning challenging concepts into intuitive understanding. His teaching inspires curiosity, confidence, and a love for learning."
  }
];

export default function TeamSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [cardsRef, isCardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="team" className="bg-gray-50 py-20 md:py-28 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 md:mb-16 transition-opacity duration-1000 ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Meet Our <span className="text-scholarly-teal">Expert Faculty</span>
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-scholarly-teal/85" />
          <p className="mt-6 text-lg text-charcoal/80 max-w-2xl mx-auto">
            Learn from the best minds in NEET preparation. Our experienced faculty is dedicated to your success.
          </p>
        </div>

        {/* Team Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-1000 ${isCardsVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, qualification, role, image, description }) {
  return (
    <div className="bg-gradient-to-br from-white via-white to-scholarly-teal/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-scholarly-teal/10 hover:border-scholarly-teal/30">
      {/* Image */}
      <div className="relative overflow-hidden p-8 pb-6 flex justify-center bg-gradient-to-b from-scholarly-teal/5 to-transparent">
        <div className="w-52 h-52 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 ring-2 ring-scholarly-teal/20 group-hover:ring-scholarly-teal/50">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-4 text-center relative">
        <h3 className="text-2xl font-extrabold text-charcoal mb-1">{name}</h3>
        <p className="text-scholarly-teal font-semibold text-sm mb-2">{qualification}</p>
        {role && (
          <div className="inline-block bg-scholarly-teal/10 px-4 py-1.5 rounded-full mb-4">
            <p className="text-scholarly-teal font-bold text-xs uppercase tracking-wide">{role} — NeuroX Academy</p>
          </div>
        )}
        <p className="text-charcoal/70 text-sm leading-relaxed px-2">{description}</p>
        
        {/* Decorative element */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-scholarly-teal to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
