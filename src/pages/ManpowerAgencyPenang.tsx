import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const ManpowerAgencyPenang: React.FC = () => {
  usePageMeta(
    'Manpower Agency Penang | Recruitment Agency Penang | Foreign Worker Supply | Agency Sumber Global',
    'Licensed manpower agency in Penang. Agency Sumber Global provides foreign worker recruitment, local worker supply, domestic helpers & immigration services in Bayan Lepas, George Town & across Penang. Branch office at Suntech Penang Cybercity.'
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'penang-local-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EmploymentAgency',
      name: 'Agency Sumber Global - Penang',
      url: 'https://www.apsumberglobal.com/manpower-agency-penang',
      telephone: '+60112102954',
      email: 'admin@apsumberglobal.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.1-12B-1, Suntech @ Penang Cybercity, Lintang Mayang Pasir 3, Bandar Bayan Baru',
        addressLocality: 'Bayan Lepas',
        addressRegion: 'Penang',
        postalCode: '11950',
        addressCountry: 'MY',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 5.3194, longitude: 100.2963 },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      areaServed: { '@type': 'State', name: 'Penang' },
      priceRange: '$$',
    });
    document.head.appendChild(script);
    return () => { document.getElementById('penang-local-schema')?.remove(); };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-[2] max-w-4xl mx-auto text-center px-4 py-24 lg:py-36">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Northern Region Branch - Penang
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Manpower Agency in Penang
          </h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Agency Sumber Global's Penang branch office at Suntech Penang Cybercity serves the Northern Region including George Town, Bayan Lepas, Butterworth, and Seberang Perai. Licensed foreign worker recruitment, local manpower supply, and immigration services for Penang's manufacturing, electronics, and hospitality industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-brand-green text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light transition-all no-underline">
              Contact Penang Office
            </Link>
            <a href="tel:+60112102954" className="inline-block bg-white/10 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/20 transition-all no-underline">
              Call +60 11-2102 9545
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight text-center">Manpower Services in Penang</h2>
          <p className="text-sm sm:text-base text-gray-500 text-center mb-10 sm:mb-16">Comprehensive workforce solutions for Penang's industrial and commercial sectors</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Electronics & Semiconductor Workers', desc: 'Skilled operators for Penang\'s world-class electronics and semiconductor manufacturing plants in Bayan Lepas Free Industrial Zone.', icon: '🔌' },
              { title: 'Manufacturing & Factory Workers', desc: 'Assembly line operators, quality inspectors, and machine operators for Penang\'s diverse manufacturing sector.', icon: '🏭' },
              { title: 'Construction Workers', desc: 'Skilled and general construction workers for Penang\'s growing infrastructure and property development projects.', icon: '🏗️' },
              { title: 'Hospitality & Tourism Workers', desc: 'Hotel staff, restaurant workers, and tourism service personnel for Penang\'s vibrant hospitality industry in George Town and resort areas.', icon: '🏨' },
              { title: 'Domestic Helpers', desc: 'Screened and verified domestic helpers for households across Penang Island and Seberang Perai.', icon: '🏠' },
              { title: 'Immigration & Work Permits', desc: 'Complete immigration services, work permit processing, visa applications, and compliance management for employers in Penang.', icon: '📋' },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-brand-lg transition-all">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">Our Penang Office Location</h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Agency Sumber Global - Penang Branch</h3>
                <address className="not-italic text-sm text-gray-600 space-y-3 leading-relaxed">
                  <p>📍 No.1-12B-1, Suntech @ Penang Cybercity,<br />Lintang Mayang Pasir 3, Bandar Bayan Baru,<br />11950 Bayan Lepas, Penang, Malaysia</p>
                  <p>📞 <a href="tel:+60112102954" className="text-brand-blue hover:text-brand-blue-light no-underline">+60 11-2102 9545</a></p>
                  <p>✉️ <a href="mailto:admin@apsumberglobal.com" className="text-brand-blue hover:text-brand-blue-light no-underline">admin@apsumberglobal.com</a></p>
                  <p>⏰ Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM</p>
                </address>
              </div>
              <div>
                <iframe
                  title="Agency Sumber Global Penang Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9415!2d100.2963!3d5.3194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac04a7c853dcd%3A0x1e42c4f3ae52e5f5!2sSuntech%40Penang%20Cybercity!5e0!3m2!1sen!2smy!4v1693123456789"
                  width="100%"
                  height="220"
                  className="rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6">Areas We Serve in Penang</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['George Town', 'Bayan Lepas', 'Bayan Baru', 'Butterworth', 'Seberang Perai', 'Bukit Mertajam', 'Nibong Tebal', 'Balik Pulau', 'Tanjung Bungah', 'Jelutong', 'Air Itam', 'Gelugor'].map((area) => (
              <span key={area} className="text-xs sm:text-sm font-medium text-brand-blue bg-brand-blue-50 px-3 py-1.5 rounded-full">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-brand-blue">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Workers in Penang?</h2>
          <p className="text-base text-brand-blue-100 mb-8 leading-relaxed">
            Contact our Penang branch office for professional manpower recruitment solutions tailored to Northern Malaysia's industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue-50 transition-all no-underline">Contact Us</Link>
            <Link to="/foreign-worker-recruitment-malaysia" className="inline-block bg-white/10 text-white text-sm font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/20 transition-all no-underline">Foreign Worker Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManpowerAgencyPenang;
