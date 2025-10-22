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

      {/* Authorized Sales Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized Sales Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to be authorized sales partners with these leading agricultural companies, 
              bringing you the highest quality seeds and agricultural solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorizedPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">📍 {partner.location}</p>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{partner.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Authorized Partners?
            </h2>
            <p className="text-lg text-gray-600">
              Benefits of working with our trusted authorized sales partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Products</h3>
              <p className="text-gray-600">
                As authorized partners, we guarantee 100% authentic products directly from manufacturers 
                with proper quality certifications and warranties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Access to comprehensive technical support, training, and guidance from our partner companies 
                to ensure optimal product performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Innovations</h3>
              <p className="text-gray-600">
                Stay ahead with the newest products, technologies, and farming solutions from our 
                innovative partner companies across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Access These Quality Products?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join our dealer network and gain access to products from all our trusted partners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dealership"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply for Dealership
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
