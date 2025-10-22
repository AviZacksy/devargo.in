export default function Partners() {
  const authorizedPartners = [
    {
      name: "Sun Seeds",
      location: "Jaipur",
      description: "Leading provider of high-yield vegetable and field crop seeds with proven track record of success.",
      specialties: ["Vegetable Seeds", "Field Crops", "Hybrid Varieties"]
    },
    {
      name: "Janhwi Seeds Pvt. Ltd.",
      location: "Hyderabad",
      description: "Specialized in premium quality seeds for various crops with focus on disease resistance and high yield.",
      specialties: ["Cereal Crops", "Oil Seeds", "Pulses"]
    },
    {
      name: "Sugandham Hybrid Seeds Pvt. Ltd.",
      location: "Hisar, Haryana",
      description: "Innovative seed company offering cutting-edge hybrid varieties for modern farming practices.",
      specialties: ["Hybrid Seeds", "High Yield Varieties", "Climate Resistant"]
    },
    {
      name: "Rajashree",
      location: "Kota",
      description: "Trusted name in agricultural seeds with extensive research and development programs.",
      specialties: ["Research Varieties", "Quality Seeds", "Farmer Support"]
    },
    {
      name: "Mukundara",
      location: "Kota",
      description: "Comprehensive agricultural solutions provider with focus on sustainable farming practices.",
      specialties: ["Complete Solutions", "Technical Support", "Quality Assurance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-emerald-100">
            Trusted brands that power agricultural success
          </p>
        </div>
      </section>

      {/* Authorized Sales Partner Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-200 to-teal-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <span className="text-3xl text-white">🤝</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Authorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Sales Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are proud to be authorized sales partner with these leading agricultural companies, 
              bringing you the highest quality seeds and agricultural solutions across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorizedPartners.map((partner, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl text-white">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <div className="flex items-center justify-center text-sm text-gray-500 font-medium">
                    <span className="mr-2">📍</span>
                    {partner.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed text-center">{partner.description}</p>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-sm text-center">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partner.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 to-teal-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Authorized Partners?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefits of working with our trusted authorized sales partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl text-white">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Products</h3>
              <p className="text-gray-600 leading-relaxed">
                As authorized partners, we guarantee 100% authentic products directly from manufacturers 
                with proper quality certifications and warranties.
              </p>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to comprehensive technical support, training, and guidance from our partner companies 
                to ensure optimal product performance.
              </p>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Innovations</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with the newest products, technologies, and farming solutions from our 
                innovative partner companies across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Access These <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100">Quality Products?</span>
          </h2>
          <p className="text-xl mb-12 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Join our dealer network and gain access to products from all our trusted partners across India
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/dealership"
              className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <span className="mr-3 group-hover:animate-pulse">🤝</span>
                Apply for Dealership
              </span>
            </a>
            <a
              href="/contact"
              className="group border-2 border-white/80 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                <span className="mr-3 group-hover:animate-bounce">📞</span>
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
