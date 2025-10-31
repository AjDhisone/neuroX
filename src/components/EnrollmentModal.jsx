import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';

export default function EnrollmentModal({ isOpen, onClose, courseName }) {
  const [formData, setFormData] = useState({
    studentName: '',
    contactNumber: '',
    whatsappNumber: '',
    course: courseName || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Update course field when courseName changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, course: courseName || '' }));
  }, [courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhIV8Yo0doTxKv_-zbE2R23PzcbEs6ELifsifXoSiYRHOyoEEAVkCvtmQrQvjxMFNj/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          contactNumber: formData.contactNumber,
          whatsappNumber: formData.whatsappNumber,
          course: formData.course,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since we're using 'no-cors', we can't check the response
      // Assume success after a short delay
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          studentName: '',
          contactNumber: '',
          whatsappNumber: '',
          course: courseName || '',
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      }, 500);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal hover:text-scholarly-teal transition-colors"
          aria-label="Close modal"
        >
          <BsX size={32} />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
            Enroll Now
          </h2>
          <p className="text-charcoal/70 mb-6">
            Fill in your details to enroll in <span className="font-semibold text-scholarly-teal">{courseName}</span>
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✓ Enrollment submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ✗ Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-charcoal mb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg bg-crisp-white text-charcoal focus:outline-none focus:ring-2 focus:ring-scholarly-teal/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-charcoal mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg bg-crisp-white text-charcoal focus:outline-none focus:ring-2 focus:ring-scholarly-teal/50 transition-all"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-charcoal mb-2">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg bg-crisp-white text-charcoal focus:outline-none focus:ring-2 focus:ring-scholarly-teal/50 transition-all"
                placeholder="10-digit WhatsApp number"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-charcoal mb-2">
                Course Selected <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                readOnly
                className="w-full px-4 py-3 border border-scholarly-teal/30 rounded-lg bg-gray-100 text-charcoal cursor-not-allowed"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-charcoal/30 text-charcoal py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-scholarly-teal text-crisp-white py-3 px-4 rounded-lg font-semibold hover:bg-scholarly-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
