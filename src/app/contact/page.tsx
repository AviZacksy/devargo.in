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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Ready to partner with us? Contact us today!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4 text-sm">Speak directly with our team</p>
                <a href="tel:+918854844444" className="text-emerald-600 font-medium hover:text-emerald-700 text-lg">
                  +91-8854844444
                </a>
                <p className="text-sm text-gray-500 mt-1">+91-7891150505</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4 text-sm">Send us your inquiry</p>
                <a href="mailto:devagro2017@gmail.com" className="text-emerald-600 font-medium hover:text-emerald-700 text-sm break-all">
                  devagro2017@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Dev Agro Enterprises<br />
                  Jaipur, Rajasthan<br />
                  India
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🕒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Sunday<br />
                  10:00 AM - 8:00 PM<br />
                  <span className="text-emerald-600 font-medium">Open 7 days</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918854844444"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:devagro2017@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📧 Send Email
              </a>
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
