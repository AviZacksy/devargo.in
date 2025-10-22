'use client';

import { useState } from 'react';

export default function Dealership() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    interestedIn: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <img src="/logo.jpg" alt="Dev Agro Enterprises" className="h-16 w-auto" />
          </div>
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in becoming a dealer with Dev Agro Enterprises. 
            Our team will contact you shortly to discuss the next steps.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                state: '',
                pincode: '',
                interestedIn: '',
                message: ''
              });
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apply for Dealership
          </h1>
          <p className="text-xl text-emerald-100">
            Join our network of successful dealers and distributors
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full -translate-y-36 -translate-x-36"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-100/40 to-transparent rounded-full translate-y-40 translate-x-40"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-emerald-100">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                📝
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Dealer Registration Form
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Firm Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your firm name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm mr-3">3</span>
                  Address Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-3">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your complete address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-3">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-3">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter your state"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-3">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter your pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Interest & Message */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm mr-3">4</span>
                  Business Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="interestedIn" className="block text-sm font-semibold text-gray-700 mb-3">
                      Interested In *
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      required
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                    >
                      <option value="">Select your interest</option>
                      <option value="seeds">Seeds Only</option>
                      <option value="pesticides">Pesticides Only</option>
                      <option value="both">Both Seeds & Pesticides</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Additional Message or Query
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Tell us about your business experience, target market, or any specific requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  🚀 Submit Application
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full -translate-y-36 translate-x-36 sm:-translate-y-48 sm:translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full translate-y-32 -translate-x-32 sm:translate-y-40 sm:-translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Why Partner With Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Discover the advantages of becoming a Dev Agro dealer
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-yellow-200 transition-shadow duration-300">
                💰
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-700 group-hover:text-yellow-800 transition-colors">Competitive Margins</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Enjoy attractive profit margins with our competitive pricing structure
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-blue-200 transition-shadow duration-300">
                🏆
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-700 group-hover:text-blue-800 transition-colors">Quality Products</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Access to premium quality seeds and pesticides from trusted brands
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-green-200 transition-shadow duration-300">
                🤝
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-700 group-hover:text-green-800 transition-colors">Full Support</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Comprehensive support including training, marketing, and technical assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
