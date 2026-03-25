import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SERVICES = [
  { category: 'Local', title: 'Local Workers Supply', desc: 'Professional Malaysian workforce across all skill levels - from general laborers to skilled technicians and supervisors for construction, manufacturing, and service industries.', tags: ['Skilled & Semi-Skilled', 'Background Verified', 'Industry Experienced'], iconBg: 'bg-brand-green', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" /></> },
  { category: 'International', title: 'Foreign Workers Supply', desc: 'Licensed recruitment of foreign workers from Bangladesh, Nepal, India, Myanmar, and other approved countries with full legal compliance and documentation support.', tags: ['Legal Documentation', 'Government Approved', 'Multi-Country Source'], iconBg: 'bg-brand-blue', icon: <path d="M2 12h20M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0zM8 12c0-3.5 1.8-7 4-7s4 3.5 4 7-1.8 7-4 7-4-3.5-4-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
  { category: 'Domestic', title: 'Domestic Helper Supply', desc: 'Reliable domestic helpers and maids for households and commercial establishments, with thorough screening and proper work permit arrangements.', tags: ['Thoroughly Screened', 'Experienced', 'Reliable Service'], iconBg: 'bg-brand-green', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></> },
  { category: 'Legal', title: 'Immigration & Legal Services', desc: 'Complete immigration assistance including work permit applications, visa renewals, KDN and JTK compliance, and legal documentation for foreign workers.', tags: ['KDN/JTK Compliance', 'Work Permits', 'Visa Processing'], iconBg: 'bg-brand-blue', icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="12" y1="6.81" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
  { category: 'Support', title: 'Accommodation & Transportation', desc: 'Comprehensive accommodation arrangements and transportation services for foreign workers, ensuring comfortable and compliant living conditions.', tags: ['Safe Accommodation', 'Transportation', 'Compliance Standards'], iconBg: 'bg-brand-blue', icon: <><path d="M3 7l3-3h12l3 3v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
  { category: 'Documentation', title: 'Insurance & Documentation', desc: 'Complete insurance coverage, passport renewals, permit extensions, and ongoing documentation support to ensure continuous legal employment status.', tags: ['Full Insurance', 'Document Renewal', 'Ongoing Support'], iconBg: 'bg-brand-green', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
];

const COUNTRIES = [
  { name: 'Malaysia', flag: '/images/flags/malaysia.png', h: 107 },
  { name: 'Nepal', flag: '/images/flags/nepal.png', h: 195 },
  { name: 'Bangladesh', flag: '/images/flags/bangladesh.png', h: 96 },
  { name: 'Myanmar', flag: '/images/flags/myanmar.png', h: 107 },
  { name: 'Vietnam', flag: '/images/flags/vietnam.png', h: 107 },
  { name: 'India', flag: '/images/flags/india.svg', h: 107 },
  { name: 'Pakistan', flag: '/images/flags/pakistan.svg', h: 107 },
];

const Services: React.FC = () => {
  usePageMeta(
    'Manpower Services Malaysia | Foreign & Local Worker Recruitment | Sumber Global',
    'Professional manpower services: foreign worker recruitment from Bangladesh, Nepal, Myanmar & Vietnam, local worker supply, immigration services, work permits & visa processing across Malaysia.'
  );

  useScrollAnimation(
    ['#servicesHeroText', '#servicesGrid', '#recruitmentSourcesContainer'],
    {
      staggerChildren: {
        'services-grid': { selector: '.service-card', delay: 150 },
        'recruitment-sources-container': { selector: '.country-item', delay: 50 },
      },
    }
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/thumbnails/hero/services-hero-bg.jpg" alt="Manpower and foreign worker recruitment services in Malaysia by Sumber Global" className="absolute inset-0 w-full h-full object-cover object-center z-[1]" loading="eager" />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="relative z-[3] max-w-3xl mx-auto text-center px-4 py-24 lg:py-40 animate-on-scroll" id="servicesHeroText">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Manpower &amp; Foreign Worker Recruitment Services in Malaysia</h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed">Comprehensive manpower solutions tailored to meet your business needs across all industries in Malaysia.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Our Manpower &amp; Recruitment Services in Malaysia</h2>
            <p className="text-sm sm:text-lg text-gray-500">Complete workforce solutions designed to drive your business forward</p>
          </div>

          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" id="servicesGrid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${s.iconBg} flex items-center justify-center text-white`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[11px] sm:text-xs font-medium text-brand-green bg-brand-green-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Sources */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto text-center recruitment-sources-container animate-on-scroll" id="recruitmentSourcesContainer">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Where We Recruit Your Workers</h2>
          <div className="w-12 sm:w-16 h-1 bg-brand-blue rounded-full mx-auto mb-10 sm:mb-16" />

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {COUNTRIES.map((country) => (
              <div key={country.name} className="country-item flex flex-col items-center gap-2 sm:gap-3 group">
                <div className="w-16 h-12 sm:w-24 sm:h-16 bg-white border border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2 group-hover:border-brand-blue/30 group-hover:shadow-brand transition-all duration-300">
                  <img src={country.flag} alt={`${country.name} flag - We recruit workers from ${country.name}`} loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" width="160" height={country.h} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">{country.name}</h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">Worker Source Country</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/recruitment" className="inline-block bg-brand-blue-900 text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-brand-blue-dark hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider no-underline">
            View Recruitment Process
          </Link>
        </div>
      </section>

      {/* Cross-link to Recruitment & Contact */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3">Ready to Hire Workers for Your Business?</h2>
          <p className="text-sm text-gray-500 mb-6">Our transparent 8-step recruitment process ensures full legal compliance from government approval to worker arrival.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/recruitment" className="inline-block bg-brand-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-blue-light transition-all no-underline">View Recruitment Process</Link>
            <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-6 py-3 rounded-full border border-brand-blue hover:bg-brand-blue-50 transition-all no-underline">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
