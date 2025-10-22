import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpg" 
                alt="Dev Agro Enterprises" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Leading agriculture seeds and pesticides super-stockist, master distributor, and C&F 
              Assurance of best quality agri-seeds,pesticides and crop solution under one roof.
            </p>
            <div className="text-sm text-gray-400">
              <p>📧 devagro2017@gmail.com</p>
              <p>📞 +91-8854844444</p>
              <p>📍 Jaipur, Rajasthan</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/dealership" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Apply for Dealership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Monday - Sunday: 10:00 AM - 8:00 PM</p>
              <p>Open 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2025 Dev Agro Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

