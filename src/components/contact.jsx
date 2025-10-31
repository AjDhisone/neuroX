import React, { useState } from 'react';
import {
  BsGeoAlt,
  BsWhatsapp,
  BsArrowRight,
} from "react-icons/bs";
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ContactRegisterSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    courseInterest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const mailtoLink = `mailto:faculty.neurox@gmail.com?subject=Course Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nCourse Interest: ${formData.courseInterest}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      courseInterest: '',
      message: '',
    });
  };

  return (
    <section id="contact-register" className="bg-crisp-white py-20 md:py-28 font-poppins overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Get in <span className="text-scholarly-teal">Touch</span>
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-scholarly-teal/85" />
        </div>

        {/* --- Unified Blurry Background for Content --- */}
        <div className="relative p-6 md:p-10 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl shadow-scholarly-teal/10">
          <div className="absolute inset-0 bg-scholarly-teal/10 rounded-3xl blur-3xl -z-10"></div>
          
          <div
            ref={sectionRef}
            className={`
              grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16
              transition-opacity duration-1000
              ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
          >
            {/* --- Left Column: Contact Details & Other CTAs --- */}
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Contact Details</h3>
                <div className="flex items-start text-charcoal/80 text-lg">
                  <BsGeoAlt size={24} className="text-scholarly-teal mr-3 flex-shrink-0 mt-1" />
                  <p>
                    NeuroX Academy,<br />
                    Casagrand, Kanathur, Chennai – 603112
                  </p>
                </div>
              </div>

              {/* General CTAs */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Quick Actions</h3>
                <a
                  href="#courses"
                  className="flex items-center justify-center bg-scholarly-teal text-crisp-white py-3 px-6 rounded-lg font-semibold hover:bg-scholarly-teal/90 transition-colors shadow-md w-full"
                >
                  Register Now <BsArrowRight className="ml-2" />
                </a>
                <a
                  href="https://wa.me/919043812290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-scholarly-teal text-scholarly-teal py-3 px-6 rounded-lg font-semibold hover:bg-scholarly-teal/10 transition-colors shadow-sm w-full"
                >
                  <BsWhatsapp className="mr-2" size={20} /> WhatsApp Support
                </a>
              </div>
            </div>

            {/* --- Right Column: Inquiry Form --- */}
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Mobile Number"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Course Interest (e.g., Foundation, Crash Course)"
                  type="text"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                />
                <TextareaField
                  label="Your Message / Query"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full bg-scholarly-teal text-crisp-white py-3 px-6 rounded-lg font-semibold hover:bg-scholarly-teal/90 transition-colors shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, type, name, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-charcoal mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg
          bg-crisp-white/70 text-charcoal focus:outline-none focus:ring-2 focus:ring-scholarly-teal/50
          transition-all duration-200 ease-in-out placeholder-charcoal/60
          hover:border-scholarly-teal/50
        "
      />
    </div>
  );
}

function TextareaField({ label, name, value, onChange, rows, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-charcoal mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="
          w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg
          bg-crisp-white/70 text-charcoal focus:outline-none focus:ring-2 focus:ring-scholarly-teal/50
          transition-all duration-200 ease-in-out placeholder-charcoal/60
          hover:border-scholarly-teal/50
        "
      ></textarea>
    </div>
  );
}