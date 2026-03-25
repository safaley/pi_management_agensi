import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 relative z-[2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/pi_management_log/main.png"
                alt="Agensi Pekerjaan Sumber Global - Manpower Agency Malaysia"
                className="h-14 w-auto object-contain"
                width="56"
                height="56"
                loading="lazy"
              />
              <div className="flex flex-col items-center">
                <div className="text-[0.4rem] font-bold text-brand-green uppercase tracking-[1.2px] leading-none">AGENCY PEKERJAAN</div>
                <div className="text-[0.8rem] font-bold text-brand-blue uppercase tracking-wide leading-none">SUMBER GLOBAL</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">Licensed manpower recruitment agency in Malaysia providing professional local and foreign worker supply since 2013.</p>
            <nav className="flex flex-col gap-1" aria-label="Footer navigation">
              <Link to="/" className="text-gray-500 hover:text-brand-blue transition-colors text-xs font-medium no-underline">Home</Link>
              <Link to="/about" className="text-gray-500 hover:text-brand-blue transition-colors text-xs font-medium no-underline">About Us</Link>
              <Link to="/services" className="text-gray-500 hover:text-brand-blue transition-colors text-xs font-medium no-underline">Our Services</Link>
              <Link to="/recruitment" className="text-gray-500 hover:text-brand-blue transition-colors text-xs font-medium no-underline">Recruitment Process</Link>
              <Link to="/contact" className="text-gray-500 hover:text-brand-blue transition-colors text-xs font-medium no-underline">Contact Us</Link>
            </nav>
          </div>

          {/* Johor Office */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-900">Johor Bahru Office</h3>
            <address className="not-italic text-xs text-gray-500 leading-relaxed space-y-1.5">
              <p>No. 23-01, Jalan Austin Heights 8/4,<br />Taman Mount Austin, 81100 Johor Bahru,<br />Johor, Malaysia</p>
              <p><a href="tel:+60167702098" className="text-gray-600 hover:text-brand-blue transition-colors no-underline">+60 16-770 2098</a></p>
              <p><a href="mailto:admin@apsumberglobal.com" className="text-gray-600 hover:text-brand-blue transition-colors no-underline">admin@apsumberglobal.com</a></p>
            </address>
          </div>

          {/* Penang Office */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-900">Penang Office</h3>
            <address className="not-italic text-xs text-gray-500 leading-relaxed space-y-1.5">
              <p>No.1-12B-1, Suntech @ Penang Cybercity,<br />Lintang Mayang Pasir 3, Bandar Bayan Baru,<br />11950 Bayan Lepas, Penang, Malaysia</p>
              <p><a href="tel:+60112102954" className="text-gray-600 hover:text-brand-blue transition-colors no-underline">+60 11-2102 9545</a></p>
              <p><a href="mailto:admin@apsumberglobal.com" className="text-gray-600 hover:text-brand-blue transition-colors no-underline">admin@apsumberglobal.com</a></p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-400 text-xs px-4">
        &copy; {new Date().getFullYear()} Agensi Pekerjaan Sumber Global Sdn. Bhd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
