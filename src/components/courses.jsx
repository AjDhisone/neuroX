import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import foundationImg from '../assets/images/foundation.png';
import targetImg from '../assets/images/target.png';
import crashCourseImg from '../assets/images/crash course.png';
import repeaterImg from '../assets/images/reapeater.png';
import EnrollmentModal from './EnrollmentModal';

const coursesData = [
  {
    name: "Foundation NEET 2027",
    image: foundationImg,
    tags: ["Thanglish"],
    description: "For Class 11th Students. Build a solid base for NEET success.",
  },
  {
    name: "Target NEET 2026",
    image: targetImg,
    tags: ["POPULAR", "Thanglish"],
    description: "For Class 12th Students. Comprehensive prep with mock tests.",
  },
  {
    name: "NEET Crash Course",
    image: crashCourseImg,
    tags: ["FAST-TRACK", "Thanglish"],
    description: "Quick revision focusing on high-yield topics and strategies.",
  },
  {
    name: "Repeater Batch 2026",
    image: repeaterImg,
    tags: ["FOCUSED", "Thanglish"],
    description: "For droppers seeking to fix weak areas and maximize score.",
  },
];

export default function CoursesSection() {
  const [introRef, isIntroVisible] = useScrollAnimation({ threshold: 0.1 });
  const [coursesGridRef, isCoursesGridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnrollClick = (courseName) => {
    setSelectedCourse(courseName);
    setModalOpen(true);
  };

  return (
    <section id="courses" className="bg-gray-50 py-20 md:py-28 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Our <span className="text-scholarly-teal">Courses</span>
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-scholarly-teal/85" />
        </div>

        <div
          ref={introRef}
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-opacity duration-1000 ${isIntroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-lg text-charcoal/80 leading-relaxed">
            NeuroX Academy offers specialized NEET courses tailored for every type of learner — from beginners
            to repeaters.
          </p>
        </div>

        <div
          ref={coursesGridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 ${isCoursesGridVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}
        >
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} onEnrollClick={handleEnrollClick} />
          ))}
        </div>
      </div>

      <EnrollmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        courseName={selectedCourse}
      />
    </section>
  );
}

function CourseCard({ name, image, tags, description, onEnrollClick }) {
  return (
    <div className="bg-crisp-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Course Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-square object-cover" 
        loading="lazy"
        decoding="async"
      />

      {/* Course Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-charcoal">{name}</h3>
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-charcoal/70 mb-4 flex-grow">{description}</p>

        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
          {/* <button className="flex-1 border border-charcoal/30 text-charcoal py-2.5 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore
          </button> */}
          <button 
            onClick={() => onEnrollClick(name)}
            className="flex-1 bg-scholarly-teal text-crisp-white py-2.5 px-4 rounded-lg font-semibold hover:bg-scholarly-teal/90 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}