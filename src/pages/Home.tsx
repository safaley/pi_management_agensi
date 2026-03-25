import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {

  usePageMeta(
    'Agency Sumber Global | Agensi Pekerjaan Sumber Global | Manpower Agency Malaysia',
    'Agency Sumber Global (Agensi Pekerjaan Sumber Global Sdn. Bhd.) - Licensed manpower recruitment agency in Malaysia. Foreign worker recruitment, local worker supply, immigration services & work permits in Johor Bahru & Penang since 2013.'
  );

  useScrollAnimation(
    ['#aboutText', '#servicesContainer', '#contactContainer', '#recruitmentSourcesContainer'],
    {
      staggerChildren: {
        'recruitment-sources-container': { selector: '.country-item', delay: 50 },
        'new-services-container': { selector: '.service-card', delay: 150 },
      },
    }
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <img src="/images/thumbnails/hero/home-hero-bg.webp" alt="Petronas Tower - Professional Manpower Solutions Malaysia" className="absolute inset-0 w-full h-full object-cover object-center z-[1]" loading="eager" />
        <div className="absolute inset-0 bg-black/40 z-[4]" />
        <div className="relative z-[5] text-center text-white max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] [text-shadow:_0_2px_20px_rgba(0,0,0,0.3)]">
            Agency Sumber Global &mdash; Professional Manpower Solutions Malaysia
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-brand-blue-100 font-light leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] [text-shadow:_0_1px_10px_rgba(0,0,0,0.3)]">
            Agensi Pekerjaan Sumber Global Sdn. Bhd. &mdash; Licensed Manpower Recruitment Agency in Malaysia<br />Connecting Businesses with Skilled Local &amp; Foreign Workers
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-green text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border-none cursor-pointer shadow-green-lg hover:bg-brand-green-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(8,96,54,0.4)] transition-all duration-300 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards] no-underline"
          >
            Get Workers Now
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll" id="aboutText">
          <div className="inline-flex items-center gap-2 bg-brand-blue-50 border border-brand-blue-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-brand-blue">
            <span className="w-2 h-2 bg-brand-blue rounded-full" />
            About Our Agency
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            Agency Sumber Global &mdash; Trusted Manpower Recruitment Agency in Malaysia
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto text-justify">
            Welcome to <strong className="text-gray-700">Agency Sumber Global</strong> &mdash; officially registered as <strong className="text-gray-700">Agensi Pekerjaan Sumber Global Sdn. Bhd.</strong>, we are a licensed manpower recruitment agency based in <strong className="text-gray-700">Johor Bahru</strong> with a branch office in <strong className="text-gray-700">Penang</strong>. As one of Malaysia's trusted agency for foreign worker recruitment, we specialize in sourcing skilled workers from Bangladesh, Nepal, Myanmar, Vietnam, India, and Pakistan. Whether you need <strong className="text-gray-700">foreign workers</strong>, <strong className="text-gray-700">domestic helpers</strong>, or <strong className="text-gray-700">immigration services</strong> including work permits and visa processing, Agency Sumber Global delivers comprehensive workforce solutions with full legal compliance. Serving businesses across <strong className="text-gray-700">Johor</strong>, <strong className="text-gray-700">Penang</strong>, <strong className="text-gray-700">Kuala Lumpur</strong>, <strong className="text-gray-700">Selangor</strong>, and all Malaysian states since 2013.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 py-4 sm:py-6">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '500+', label: 'Clients Served' },
              { num: '100%', label: 'Legal Compliance' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-brand-blue mb-1 sm:mb-2">{s.num}</div>
                <div className="text-[10px] sm:text-sm text-gray-500 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-block bg-brand-blue text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-brand-blue-light hover:-translate-y-0.5 hover:shadow-brand-lg transition-all duration-300 no-underline">
            Learn More About Our Agency
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto new-services-container animate-on-scroll" id="servicesContainer">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-16 tracking-tight">
            Professional Manpower &amp; Recruitment Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Immigration/KDN/JTK Cases', desc: 'Complete legal assistance for immigration cases and compliance with government regulations.', tags: ['Legal Compliance', 'Government Relations', 'Professional Support'], color: 'bg-brand-blue' },
              { title: 'Foreign Worker Approval', desc: 'Streamlined application process for foreign worker permits and approvals with full documentation support.', tags: ['Fast Processing', 'Complete Documentation', 'Government Approved'], color: 'bg-brand-green' },
              { title: 'Local & Foreign Workers', desc: 'Professional recruitment of skilled local and foreign workers for all industries with thorough background verification.', tags: ['Skilled Workers', 'Background Verified', 'Industry Experienced'], color: 'bg-brand-blue' },
              { title: 'Domestic Helper Supply', desc: 'Reliable domestic helpers and maids with thorough screening and verification for household and commercial needs.', tags: ['Thoroughly Screened', 'Experienced', 'Reliable Service'], color: 'bg-brand-green' },
              { title: 'Accommodation & Transportation', desc: 'Complete accommodation and transportation services for foreign workers ensuring comfort and compliance.', tags: ['Safe Accommodation', 'Transportation', 'Compliance Standards'], color: 'bg-brand-blue' },
              { title: 'Passport & Insurance Renewal', desc: 'Complete documentation services including passport, permit, and insurance renewal with ongoing support.', tags: ['Document Renewal', 'Insurance Coverage', 'Ongoing Support'], color: 'bg-brand-green' },
            ].map((service) => (
              <div key={service.title} className="service-card group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${service.color} mb-4 sm:mb-6 flex items-center justify-center`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 sm:mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[11px] sm:text-xs font-medium text-brand-green bg-brand-green-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Sources */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white relative">
        <div className="max-w-5xl mx-auto text-center recruitment-sources-container animate-on-scroll" id="recruitmentSourcesContainer">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Where We Recruit Your Workers</h2>
          <div className="w-12 sm:w-16 h-1 bg-brand-blue rounded-full mx-auto mb-8 sm:mb-16" />

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {[
              { name: 'Malaysia', flag: '/images/flags/malaysia.png', h: 107 },
              { name: 'Nepal', flag: '/images/flags/nepal.png', h: 195 },
              { name: 'Bangladesh', flag: '/images/flags/bangladesh.png', h: 96 },
              { name: 'Myanmar', flag: '/images/flags/myanmar.png', h: 107 },
              { name: 'Vietnam', flag: '/images/flags/vietnam.png', h: 107 },
              { name: 'India', flag: '/images/flags/india.svg', h: 107 },
              { name: 'Pakistan', flag: '/images/flags/pakistan.svg', h: 107 },
            ].map((country) => (
              <div key={country.name} className="country-item flex flex-col items-center gap-2 sm:gap-3 group">
                <div className="w-16 h-12 sm:w-24 sm:h-16 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2 group-hover:border-brand-blue/30 group-hover:shadow-brand transition-all duration-300">
                  <img src={country.flag} alt={`${country.name} flag - We recruit workers from ${country.name}`} loading="eager" decoding="async" className="max-w-full max-h-full object-contain" width="160" height={country.h} />
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

      {/* CTA */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center animate-on-scroll" id="contactContainer">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-brand-green-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-brand-green">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              Get In Touch
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8">
              Take the next step in finding the perfect manpower solution for your industry. Our experienced team is ready to provide professional consultation and customized recruitment services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                'Free consultation and assessment',
                'Customized recruitment solutions',
                'Legal compliance guaranteed',
                '24/7 professional support',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0">&#10003;</div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <Link to="/contact" className="inline-block bg-brand-green text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-brand-green-light hover:-translate-y-0.5 hover:shadow-green-lg transition-all duration-300 mb-3 sm:mb-4 no-underline">
                Contact Us
              </Link>
              <p className="text-xs sm:text-sm text-gray-400">
                Call us directly at{' '}
                <a href="tel:+60167702098" className="text-brand-blue hover:text-brand-blue-light font-medium no-underline">+60 16-770 2098</a>
                {' or '}
                <a href="tel:+60112102954" className="text-brand-blue hover:text-brand-blue-light font-medium no-underline">+60 11-2102 9545</a>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-brand-blue-50 rounded-3xl" />
              <div className="relative grid grid-cols-1 gap-4 p-8">
                {[
                  { icon: '👥', label: 'Professional Team' },
                  { icon: '🌏', label: 'Global Network' },
                  { icon: '⚡', label: 'Fast Processing' },
                ].map((card) => (
                  <div key={card.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-brand transition-shadow">
                    <div className="text-2xl">{card.icon}</div>
                    <span className="text-sm font-semibold text-gray-800">{card.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
