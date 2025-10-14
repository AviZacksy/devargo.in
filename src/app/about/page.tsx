export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Dev Agro Enterprises
          </h1>
          <p className="text-xl text-green-100">
            Your trusted partner in agricultural excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Dev Agro Enterprises was founded with a simple yet powerful vision: to bridge the gap between 
                quality agricultural inputs and the farmers who need them most. As a master distributor and 
                super-stockist, we have built strong relationships with leading seed and pesticide companies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey began with the recognition that farmers deserve access to the best quality seeds 
                and crop protection solutions. Today, we serve as a trusted intermediary, ensuring that 
                quality products reach every corner of the agricultural landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe that successful agriculture is built on strong partnerships, quality products, 
                and unwavering commitment to farmer success.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src="/logo.jpg" alt="Dev Agro Enterprises" className="h-20 w-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Years of Excellence</h3>
                <p className="text-gray-600">
                  Serving the agricultural community with dedication and expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center">
                To provide farmers and dealers with access to the highest quality seeds and crop protection 
                solutions, while building lasting partnerships that drive agricultural success and prosperity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center">
                To be the leading agricultural input distributor, recognized for our commitment to quality, 
                innovation, and farmer success across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dev Agro Enterprises?
            </h2>
            <p className="text-lg text-gray-600">
              We offer unique advantages that set us apart in the agricultural distribution industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We partner only with certified and trusted brands, ensuring every product meets the highest 
                quality standards for maximum yield and crop protection.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">Reliable Distribution</h3>
              <p className="text-gray-600">
                Our efficient distribution network ensures timely delivery of products to dealers and farmers, 
                maintaining product quality throughout the supply chain.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Partnership Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support to our dealer network, including training, marketing materials, 
                and ongoing assistance to ensure their success.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Market Expertise</h3>
              <p className="text-gray-600">
                Our team has deep knowledge of local agricultural conditions and market needs, helping you 
                choose the right products for your region.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                As a master distributor, we offer competitive pricing that allows our dealers to maintain 
                healthy margins while providing value to farmers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends and continuously expand our product portfolio to meet 
                evolving agricultural needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-green-100">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-green-100 text-sm">
                Uncompromising commitment to product quality and excellence
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-green-100 text-sm">
                Honest, transparent, and ethical business practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-green-100 text-sm">
                Embracing new technologies and solutions for better outcomes
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold mb-2">Partnership</h3>
              <p className="text-green-100 text-sm">
                Building strong, mutually beneficial relationships
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
