export default function Partners() {
  const seedCompanies = [
    {
      name: "Sun Seeds",
      description: "Leading provider of high-yield vegetable and field crop seeds with proven track record of success.",
      specialties: ["Vegetable Seeds", "Field Crops", "Hybrid Varieties"]
    },
    {
      name: "Mukundra Seeds",
      description: "Specialized in premium quality seeds for various crops with focus on disease resistance and high yield.",
      specialties: ["Cereal Crops", "Oil Seeds", "Pulses"]
    },
    {
      name: "Green Valley Seeds",
      description: "Innovative seed company offering cutting-edge varieties for modern farming practices.",
      specialties: ["Hybrid Seeds", "Organic Varieties", "Climate Resistant"]
    },
    {
      name: "Crop Master Seeds",
      description: "Trusted name in agricultural seeds with extensive research and development programs.",
      specialties: ["Research Varieties", "High Yield", "Quality Assurance"]
    }
  ];

  const pesticideCompanies = [
    {
      name: "Pancham Agro",
      description: "Leading manufacturer of crop protection chemicals and plant nutrition products.",
      specialties: ["Insecticides", "Fungicides", "Herbicides"]
    },
    {
      name: "Agro Shield",
      description: "Specialized in eco-friendly crop protection solutions for sustainable agriculture.",
      specialties: ["Bio Pesticides", "Organic Solutions", "Integrated Pest Management"]
    },
    {
      name: "Crop Guard",
      description: "Innovative crop protection company with focus on precision agriculture solutions.",
      specialties: ["Precision Application", "Smart Formulations", "Resistance Management"]
    },
    {
      name: "Plant Care Plus",
      description: "Comprehensive plant health solutions including nutrition and protection products.",
      specialties: ["Plant Nutrition", "Growth Promoters", "Soil Health"]
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

      {/* Seed Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seed Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading seed companies to bring you the highest quality seeds 
              for maximum yield and crop success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seedCompanies.map((company, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
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

      {/* Pesticide Companies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pesticide Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pesticide partners provide comprehensive crop protection solutions 
              to safeguard your harvest and ensure healthy crop growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pesticideCompanies.map((company, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Why our partnerships matter for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                All our partner products undergo rigorous quality testing to ensure they meet 
                the highest standards for agricultural use.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-600">
                Access to expert technical support and guidance from our partner companies 
                to help you make the right product choices.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                Stay ahead with the latest products and technologies from our innovative 
                partner companies.
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
