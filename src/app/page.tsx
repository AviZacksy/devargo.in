import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Growth Through Quality Seeds & Crop Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Leading agricultural seeds & pesticides master distributor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dealership"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              Apply for Dealership
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dev Agro Enterprises
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a trusted master distributor and super-stockist specializing in agricultural seeds and pesticides. 
              Our commitment to quality and farmer success drives everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Quality Seeds</h3>
              <p className="text-gray-600">
                Premium quality seeds from trusted brands to ensure maximum yield and crop success.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Crop Protection</h3>
              <p className="text-gray-600">
                Effective pesticides and crop protection solutions to safeguard your harvest.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600">
                Strong partnerships with leading brands and dedicated support for our dealers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600">
              We partner with leading brands in the agricultural industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Sun Seeds</div>
              <p className="text-sm text-gray-600">Premium Seed Company</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Mukundra Seeds</div>
              <p className="text-sm text-gray-600">Quality Seed Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Pancham Agro</div>
              <p className="text-sm text-gray-600">Crop Protection</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">More Brands</div>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/partners"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              View All Partners →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join our network of successful dealers and distributors
          </p>
          <Link
            href="/dealership"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-block"
          >
            Apply for Dealership Today
          </Link>
        </div>
      </section>
    </div>
  );
}
