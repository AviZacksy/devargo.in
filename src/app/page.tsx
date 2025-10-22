import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-800 text-white py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Empowering Growth Through Quality Seeds & Crop Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-emerald-100 px-4 sm:px-0">
            Leading agricultural seeds & pesticides master distributor
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/dealership"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply for Dealership
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dev Agro Enterprises
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a trusted master distributor and super-stockist specializing in agricultural seeds and pesticides. 
              Our commitment to quality and farmer success drives everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-emerald-200 transition-shadow duration-300">
                🌱
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-emerald-700 group-hover:text-emerald-800 transition-colors">Quality Seeds</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Premium quality seeds from trusted brands to ensure maximum yield and crop success.
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-teal-200 transition-shadow duration-300">
                🛡️
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-teal-700 group-hover:text-teal-800 transition-colors">Crop Protection</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Effective pesticides and crop protection solutions to safeguard your harvest.
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl border border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-green-500 to-lime-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-green-200 transition-shadow duration-300">
                🤝
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-700 group-hover:text-green-800 transition-colors">Partnership</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="text-lg font-bold text-emerald-600 mb-2">Sun Seeds</div>
              <p className="text-sm text-gray-600">Premium Seed Company</p>
              <p className="text-xs text-gray-500 mt-1">📍 Jaipur</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="text-lg font-bold text-blue-600 mb-2">Janhwi Seeds</div>
              <p className="text-sm text-gray-600">Quality Seed Solutions</p>
              <p className="text-xs text-gray-500 mt-1">📍 Hyderabad</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="text-lg font-bold text-purple-600 mb-2">Sugandham</div>
              <p className="text-sm text-gray-600">Hybrid Seeds</p>
              <p className="text-xs text-gray-500 mt-1">📍 Hisar, Haryana</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/partners"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              View All Partners →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4 sm:px-0">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-emerald-100 px-4 sm:px-0">
            Join our network of successful dealers and distributors
          </p>
          <Link
            href="/dealership"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl"
          >
            Apply for Dealership Today
          </Link>
        </div>
      </section>
    </div>
  );
}
