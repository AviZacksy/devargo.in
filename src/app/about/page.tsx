export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Dev Agro Enterprises
          </h1>
          <p className="text-xl text-emerald-100">
            Your trusted partner in agricultural excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-200 to-teal-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
                <span className="text-2xl text-white">📖</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Story</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dev Agro Enterprises was founded with a simple yet powerful vision: to bridge the gap between 
                  quality agricultural inputs and the farmers who need them most. As a master distributor and 
                  super-stockist, we have built strong relationships with leading seed and pesticide companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our journey began with the recognition that farmers deserve access to the best quality seeds 
                  and crop protection solutions. Today, we serve as a trusted intermediary, ensuring that 
                  quality products reach every corner of the agricultural landscape.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that successful agriculture is built on strong partnerships, quality products, 
                  and unwavering commitment to farmer success.
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img src="/logo.jpg" alt="Dev Agro Enterprises" className="h-24 w-auto" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-600 mb-4">Years of Excellence</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Serving the agricultural community with dedication and expertise
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">7+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">5</div>
                    <div className="text-sm text-gray-600">Authorized Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 to-teal-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving forces behind our commitment to agricultural excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                To provide farmers and dealers with access to the highest quality seeds and crop protection 
                solutions, while building lasting partnerships that drive agricultural success and prosperity.
              </p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl text-white">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                To be the leading agricultural input distributor, recognized for our commitment to quality, 
                innovation, and farmer success across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-200 to-teal-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <span className="text-3xl text-white">⭐</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Dev Agro Enterprises?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer unique advantages that set us apart in the agricultural distribution industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner only with certified and trusted brands, ensuring every product meets the highest 
                  quality standards for maximum yield and crop protection.
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">🚚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Distribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our efficient distribution network ensures timely delivery of products to dealers and farmers, 
                  maintaining product quality throughout the supply chain.
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide comprehensive support to our dealer network, including training, marketing materials, 
                  and ongoing assistance to ensure their success.
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team has deep knowledge of local agricultural conditions and market needs, helping you 
                  choose the right products for your region.
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a master distributor, we offer competitive pricing that allows our dealers to maintain 
                  healthy margins while providing value to farmers.
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl text-white">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay ahead of industry trends and continuously expand our product portfolio to meet 
                  evolving agricultural needs and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">💎</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100">Core Values</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-emerald-100 leading-relaxed">
                Uncompromising commitment to product quality and excellence
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-emerald-100 leading-relaxed">
                Honest, transparent, and ethical business practices
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-emerald-100 leading-relaxed">
                Embracing new technologies and solutions for better outcomes
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-emerald-100 leading-relaxed">
                Building strong, mutually beneficial relationships
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
