import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const SERVICES = [
  { title: 'Foreign Worker Recruitment', desc: 'Licensed recruitment of workers from Bangladesh, Nepal, Myanmar, Vietnam, India, and Pakistan for industries across Johor.', icon: '🌏' },
  { title: 'Local Worker Supply', desc: 'Professional Malaysian workforce placement for construction, manufacturing, hospitality, and service industries in Johor Bahru.', icon: '👥' },
  { title: 'Domestic Helper Supply', desc: 'Thoroughly screened domestic helpers and maids for households in Johor Bahru, Iskandar Puteri, and surrounding areas.', icon: '🏠' },
  { title: 'Immigration & Legal Services', desc: 'Work permit applications, visa processing, KDN/JTK compliance, and all documentation for foreign workers in Johor.', icon: '📋' },
  { title: 'Accommodation & Transport', desc: 'Worker accommodation arrangements and daily transportation services compliant with Malaysian regulations in Johor Bahru.', icon: '🚌' },
  { title: 'Permit Renewal & Insurance', desc: 'Ongoing permit renewals, passport updates, worker insurance, and continuous compliance support in Johor.', icon: '🔄' },
];

const ManpowerAgencyJohorBahru: React.FC = () => {
  usePageMeta(
    'Manpower Agency Johor Bahru | Agensi Pekerjaan Johor | Foreign Worker Supply JB | Agency Sumber Global',
    'Leading manpower agency in Johor Bahru. Agency Sumber Global provides foreign worker recruitment, local worker supply, domestic helpers & immigration services in JB. Licensed agensi pekerjaan in Johor since 2013.'
  );

  // LocalBusiness schema for JB office
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jb-local-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EmploymentAgency',
      name: 'Agency Sumber Global - Johor Bahru',
      image: 'https://www.apsumberglobal.com/favicon.svg',
      url: 'https://www.apsumberglobal.com/manpower-agency-johor-bahru',
      telephone: '+60167702098',
      email: 'admin@apsumberglobal.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 23-01, Jalan Austin Heights 8/4, Taman Mount Austin',
        addressLocality: 'Johor Bahru',
        addressRegion: 'Johor',
        postalCode: '81100',
        addressCountry: 'MY',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 1.5652, longitude: 103.7767 },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      areaServed: { '@type': 'City', name: 'Johor Bahru' },
      priceRange: '$$',
    });
    document.head.appendChild(script);
    return () => { document.getElementById('jb-local-schema')?.remove(); };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-[2] max-w-4xl mx-auto text-center px-4 py-24 lg:py-36">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Headquarters - Johor Bahru
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Manpower Agency in Johor Bahru
          </h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Agency Sumber Global (Agensi Pekerjaan Sumber Global Sdn. Bhd.) is a licensed manpower recruitment agency headquartered in Johor Bahru. We provide comprehensive foreign and local worker supply solutions for businesses across Johor, Iskandar Puteri, Pasir Gudang, Kulai, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-brand-green text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light transition-all no-underline">
              Contact JB Office
            </Link>
            <a href="tel:+60167702098" className="inline-block bg-white/10 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/20 transition-all no-underline">
              Call +60 16-770 2098
            </a>
          </div>
        </div>
      </section>

      {/* Services in JB */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Manpower Services in Johor Bahru</h2>
            <p className="text-sm sm:text-base text-gray-500">Complete workforce solutions for businesses in Johor Bahru and surrounding areas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries in Johor */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">Industries We Serve in Johor</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {['Construction', 'Manufacturing', 'Plantation', 'Electronics', 'Hospitality', 'Food & Beverage', 'Logistics', 'Domestic Services'].map((ind) => (
              <div key={ind} className="bg-white rounded-lg p-4 text-center border border-gray-100">
                <span className="text-sm font-semibold text-gray-800">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">Our Johor Bahru Office</h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Agency Sumber Global - Headquarters</h3>
                <address className="not-italic text-sm text-gray-600 space-y-3 leading-relaxed">
                  <p>📍 No. 23-01, Jalan Austin Heights 8/4,<br />Taman Mount Austin, 81100 Johor Bahru,<br />Johor, Malaysia</p>
                  <p>📞 <a href="tel:+60167702098" className="text-brand-blue hover:text-brand-blue-light no-underline">+60 16-770 2098</a></p>
                  <p>✉️ <a href="mailto:admin@apsumberglobal.com" className="text-brand-blue hover:text-brand-blue-light no-underline">admin@apsumberglobal.com</a></p>
                  <p>⏰ Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM</p>
                </address>
              </div>
              <div>
                <iframe
                  title="Agency Sumber Global Johor Bahru Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.7767!3d1.5652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6c2a6fc70f11%3A0x4f5e6c7d8e9f0a1b!2sNo.%2023-01%2C%20Jalan%20Austin%20Heights%208%2F4%2C%20Taman%20Mount%20Austin%2C%2081100%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1697500000000"
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

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-brand-blue">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Looking for a Manpower Agency in Johor Bahru?</h2>
          <p className="text-base text-brand-blue-100 mb-8 leading-relaxed">
            Agency Sumber Global has been providing professional manpower solutions in Johor Bahru since 2013. Contact our JB headquarters today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue-50 transition-all no-underline">
              Contact Us
            </Link>
            <Link to="/services" className="inline-block bg-white/10 text-white text-sm font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/20 transition-all no-underline">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManpowerAgencyJohorBahru;
