import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpg" 
                alt="Dev Agro Enterprises" 
                className="h-10 sm:h-12 lg:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Leading agriculture seeds and pesticides super-stockist, master distributor, and C&F.
            </p>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Assurance of best quality <span className="whitespace-nowrap">agri-seeds</span>, pesticides and crop solution under one roof.
            </p>
            <div className="text-xs sm:text-sm text-gray-400 space-y-1">
              <p className="break-all">📧 devagro2017@gmail.com</p>
              <p>📞 +91-8854844444</p>
              <p>📍 Jaipur, Rajasthan</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/dealership" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                  Apply for Dealership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Network */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Network</h3>
            <div className="text-gray-300 text-xs sm:text-sm space-y-1 max-h-32 overflow-y-auto">
              <p className="font-medium text-emerald-400 mb-2">Rajasthan Coverage:</p>
              <div className="grid grid-cols-2 gap-1">
                <span>Alwar</span>
                <span>Ajmer</span>
                <span>Bhilwara</span>
                <span>Banswara</span>
                <span>Baran</span>
                <span>Bharatpur</span>
                <span>Barmer</span>
                <span>Bundi</span>
                <span>Chittorgarh</span>
                <span>Churu</span>
                <span>Dausa</span>
                <span>Deedwana-Kuchaman</span>
                <span>Dholpur</span>
                <span>Dungarpur</span>
                <span>Jalore</span>
                <span>Jaipur</span>
                <span>Jhalawar</span>
                <span>Karauli</span>
                <span>Khairthal-Tijara</span>
                <span>Kota</span>
                <span>Kotputli-Behror</span>
                <span>Nagaur</span>
                <span>Pali</span>
                <span>Phalodi</span>
                <span>Pratapgarh</span>
                <span>Sawai Madhopur</span>
                <span>Tonk</span>
                <span>Udaipur</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Business Hours</h3>
            <div className="text-gray-300 text-xs sm:text-sm space-y-1">
              <p>Monday - Sunday</p>
              <p>10:00 AM - 8:00 PM</p>
              <p className="text-emerald-400 font-medium">Open 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-xs sm:text-sm">
          <p>&copy; 2025 Dev Agro Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

