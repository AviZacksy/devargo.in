export default function Network() {
  const districts = [
    "Alwar", "Ajmer", "Bhilwara", "Banswara", "Baran", "Bharatpur", 
    "Barmer", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deedwana-Kuchaman",
    "Dholpur", "Dungarpur", "Jalore", "Jaipur", "Jhalawar", "Karauli",
    "Khairthal-Tijara", "Kota", "Kotputli-Behror", "Nagaur", "Pali",
    "Phalodi", "Pratapgarh", "Sawai Madhopur", "Tonk", "Udaipur"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Network
          </h1>
          <p className="text-xl text-emerald-100">
            Extensive coverage across Rajasthan
          </p>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <span className="text-3xl text-white">🌐</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Rajasthan Network Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We have established a strong network across Rajasthan, serving dealers in all major districts. 
              Our extensive reach ensures quality agricultural inputs are available throughout the state.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📍</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">30+</h3>
              <p className="text-gray-600 font-semibold">Districts Covered</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600 font-semibold">Active Dealers</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🚚</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
              <p className="text-gray-600 font-semibold">Delivery Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Our Coverage Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve dealers across all major districts of Rajasthan
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {districts.map((district, index) => (
              <div key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
                <div className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
                  {district}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100">Network?</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Benefits of being part of our extensive agricultural network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-emerald-100 leading-relaxed">
                Quick and reliable delivery across all districts with our extensive logistics network
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Local Support</h3>
              <p className="text-emerald-100 leading-relaxed">
                Dedicated local representatives in each district for personalized support and guidance
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Market Reach</h3>
              <p className="text-emerald-100 leading-relaxed">
                Access to diverse markets and farming communities across Rajasthan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4 sm:px-0">
            Join Our Network
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-emerald-100 px-4 sm:px-0">
            Become part of Rajasthan&apos;s most trusted agricultural network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dealership"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl"
            >
              Apply for Dealership
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
