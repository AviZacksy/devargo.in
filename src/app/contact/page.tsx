export default function Contact() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-emerald-100">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-teal-100/30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to grow your agricultural business? Let&apos;s connect and explore partnership opportunities together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-emerald-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-6 text-sm">Speak directly with our expert team</p>
                <a href="tel:+918854844444" className="text-emerald-600 font-bold hover:text-emerald-700 text-lg transition-colors">
                  +91-8854844444
                </a>
                <p className="text-sm text-gray-500 mt-2">+91-7891150505</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Available Now
                  </span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-blue-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-6 text-sm">Send us your detailed inquiry</p>
                <a href="mailto:devagro2017@gmail.com" className="text-blue-600 font-bold hover:text-blue-700 text-sm break-all transition-colors">
                  devagro2017@gmail.com
                </a>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Quick Response
                  </span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-orange-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Dev Agro Enterprises</strong><br />
                  Jaipur, Rajasthan<br />
                  India
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Welcome Visitors
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-purple-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">🕒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monday - Sunday<br />
                  <strong>10:00 AM - 8:00 PM</strong><br />
                  <span className="text-emerald-600 font-bold">Open 7 days a week</span>
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Always Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner?</h3>
              <p className="text-gray-600 mb-8">Choose your preferred way to connect with us</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+918854844444"
                  className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-3 text-2xl group-hover:animate-pulse">📞</span>
                    Call Now
                  </span>
                </a>
                <a
                  href="mailto:devagro2017@gmail.com"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-3 text-2xl group-hover:animate-bounce">📧</span>
                    Send Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I become a dealer?</h3>
                <p className="text-gray-600">
                  Simply fill out our dealership application form and our team will contact you within 24 hours to discuss the requirements and process.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the minimum order requirements?</h3>
                <p className="text-gray-600">
                  Minimum order requirements vary by product category. Contact our sales team for specific details based on your business needs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide technical support?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive technical support including product training, application guidance, and troubleshooting assistance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your delivery timeline?</h3>
                <p className="text-gray-600">
                  Delivery timelines depend on your location and order size. We typically deliver within 3-7 business days for most locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
