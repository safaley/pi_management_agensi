import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const COUNTRIES = [
  { name: 'Bangladesh', flag: '/images/flags/bangladesh.png', workers: 'Construction, manufacturing, plantation, general labour', h: 96 },
  { name: 'Nepal', flag: '/images/flags/nepal.png', workers: 'Security, manufacturing, construction, F&B service', h: 195 },
  { name: 'Myanmar', flag: '/images/flags/myanmar.png', workers: 'Manufacturing, construction, plantation, domestic helper', h: 107 },
  { name: 'Vietnam', flag: '/images/flags/vietnam.png', workers: 'Electronics, manufacturing, construction, hospitality', h: 107 },
  { name: 'India', flag: '/images/flags/india.svg', workers: 'IT, engineering, construction, restaurant, hospitality', h: 107 },
  { name: 'Pakistan', flag: '/images/flags/pakistan.svg', workers: 'Construction, manufacturing, restaurant, general labour', h: 107 },
];

const INDUSTRIES = [
  { title: 'Construction', desc: 'Skilled and general construction workers for residential, commercial, and infrastructure projects across Malaysia.', icon: '🏗️' },
  { title: 'Manufacturing & Factory', desc: 'Assembly line operators, machine operators, quality control, and factory supervisors for electronics, automotive, and FMCG industries.', icon: '🏭' },
  { title: 'Plantation & Agriculture', desc: 'Experienced plantation workers for palm oil, rubber, and agricultural operations throughout Peninsular Malaysia and East Malaysia.', icon: '🌴' },
  { title: 'Hospitality & F&B', desc: 'Restaurant staff, hotel workers, kitchen assistants, and food preparation workers for the hospitality industry.', icon: '🍽️' },
  { title: 'Domestic Services', desc: 'Thoroughly screened domestic helpers, housekeepers, and caregivers for private households and commercial establishments.', icon: '🏠' },
  { title: 'Security & Cleaning', desc: 'Trained security guards and professional cleaning crews for commercial buildings, offices, and residential complexes.', icon: '🛡️' },
];

const PROCESS_STEPS = [
  { step: 1, title: 'Employer Consultation', desc: 'We assess your workforce requirements, industry needs, preferred worker nationality, and budget to create a customized recruitment plan.' },
  { step: 2, title: 'Government Quota Approval', desc: 'We apply for foreign worker quota approval from the Malaysian Labour Department (JTK) on your behalf.' },
  { step: 3, title: 'KDN Security Clearance', desc: 'We secure Ministry of Home Affairs (KDN) approval for immigration authorization and security clearance.' },
  { step: 4, title: 'Candidate Screening', desc: 'Our overseas partners conduct interviews, skills assessments, medical checks, and background verification of candidates.' },
  { step: 5, title: 'Embassy & Visa Processing', desc: 'We coordinate embassy applications, visa submissions, and all documentation required for legal entry into Malaysia.' },
  { step: 6, title: 'Work Permit Endorsement', desc: 'Upon approval, we facilitate work permit endorsement and ensure all legal employment requirements are met.' },
  { step: 7, title: 'Arrival & Placement', desc: 'We arrange airport pickup, accommodation, transportation, and orient workers at your workplace on arrival day.' },
  { step: 8, title: 'Ongoing Compliance Support', desc: 'We handle permit renewals, passport updates, insurance, and ongoing documentation to maintain continuous legal employment status.' },
];

const ForeignWorkerRecruitment: React.FC = () => {
  usePageMeta(
    'Foreign Worker Recruitment Agency Malaysia | Licensed Manpower Supply | Agency Sumber Global',
    'Licensed foreign worker recruitment agency in Malaysia. Agency Sumber Global recruits workers from Bangladesh, Nepal, Myanmar, Vietnam, India & Pakistan for construction, manufacturing, plantation & domestic services. Offices in Johor Bahru & Penang.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-[2] max-w-4xl mx-auto text-center px-4 py-24 lg:py-36">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Licensed Foreign Worker Recruitment Agency
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Foreign Worker Recruitment Agency in Malaysia
          </h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Agency Sumber Global is a licensed manpower recruitment agency specializing in foreign worker supply from Bangladesh, Nepal, Myanmar, Vietnam, India, and Pakistan. We handle everything from government approvals to worker placement across all industries in Malaysia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-brand-green text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light hover:-translate-y-0.5 transition-all no-underline">
              Get a Free Consultation
            </Link>
            <Link to="/recruitment" className="inline-block bg-white/10 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/20 transition-all no-underline">
              View Recruitment Process
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Why Choose Agency Sumber Global for Foreign Worker Recruitment?</h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">Over 10 years of experience as a licensed foreign worker recruitment agency in Malaysia with offices in Johor Bahru and Penang.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '📋', title: 'Fully Licensed', desc: 'Class C licensed manpower supply company registered with JTK and KDN. Full legal compliance guaranteed.' },
              { icon: '🌏', title: '6 Source Countries', desc: 'Recruitment networks in Bangladesh, Nepal, Myanmar, Vietnam, India, and Pakistan for diverse workforce needs.' },
              { icon: '⚡', title: 'Fast Processing', desc: 'Typical turnaround of 6-12 weeks from application to worker arrival. Expedited processing available.' },
              { icon: '🤝', title: 'End-to-End Service', desc: 'From quota approval to accommodation setup, we handle every step of the foreign worker recruitment process.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Countries We Recruit Foreign Workers From</h2>
            <p className="text-sm sm:text-base text-gray-500">Licensed to recruit skilled and semi-skilled workers from these approved source countries</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {COUNTRIES.map((country) => (
              <div key={country.name} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-brand-lg transition-all flex items-start gap-4">
                <div className="w-14 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                  <img src={country.flag} alt={`${country.name} flag - We recruit workers from ${country.name}`} className="max-w-full max-h-full object-contain" width="80" height={country.h} loading="lazy" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{country.name} Workers</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{country.workers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Industries We Supply Foreign Workers To</h2>
            <p className="text-sm sm:text-base text-gray-500">Comprehensive manpower supply across Malaysia's key industries</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100">
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Our Foreign Worker Recruitment Process</h2>
            <p className="text-sm sm:text-base text-gray-500">Complete end-to-end recruitment in 6-12 weeks with full legal compliance</p>
          </div>
          <div className="space-y-0">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="relative flex gap-4 sm:gap-6 pb-6 last:pb-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-md text-white ${item.step % 2 === 1 ? 'bg-brand-blue' : 'bg-brand-green'}`}>
                    {item.step}
                  </div>
                  {item.step < 8 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 flex-1 -mt-1">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">Frequently Asked Questions About Foreign Worker Recruitment</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does foreign worker recruitment take in Malaysia?', a: 'The complete foreign worker recruitment process typically takes 6-12 weeks from initial application to worker arrival. This includes government quota approval (1-2 weeks), KDN security clearance (1-2 weeks), candidate screening (1-3 weeks), visa processing (2-3 weeks), and travel arrangements.' },
              { q: 'What is the cost of hiring foreign workers through a recruitment agency?', a: 'Costs vary depending on the source country, number of workers, industry sector, and specific requirements. Agency Sumber Global provides transparent pricing with no hidden fees. Contact us for a free consultation and detailed quotation tailored to your needs.' },
              { q: 'Which countries can I recruit foreign workers from in Malaysia?', a: 'Malaysia allows recruitment from several approved source countries including Bangladesh, Nepal, Myanmar, Vietnam, India, Pakistan, Indonesia, Thailand, Cambodia, and the Philippines. Agency Sumber Global has established networks in Bangladesh, Nepal, Myanmar, Vietnam, India, and Pakistan.' },
              { q: 'Do I need a foreign worker quota to hire foreign workers?', a: 'Yes, Malaysian employers must obtain a foreign worker quota approval from the Labour Department (JTK) before recruiting foreign workers. Agency Sumber Global handles the entire quota application process on your behalf.' },
              { q: 'What documents are needed to recruit foreign workers?', a: 'Employers need company registration documents (SSM), valid business license, quota approval letter, and job descriptions. Workers need a valid passport, medical clearance, and security clearance from KDN. We guide you through all documentation requirements.' },
              { q: 'Does Agency Sumber Global handle work permit renewals?', a: 'Yes, we provide ongoing support including work permit renewals, passport updates, insurance management, and all compliance documentation. Our service continues for the entire duration of employment, not just the initial placement.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                  <h3 className="text-sm font-bold text-gray-900 pr-4">{faq.q}</h3>
                  <span className="text-brand-blue text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-brand-blue">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Foreign Workers for Your Business?</h2>
          <p className="text-base text-brand-blue-100 mb-8 leading-relaxed">
            Contact Agency Sumber Global today for a free consultation. We'll assess your manpower requirements and provide a customized foreign worker recruitment solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue-50 transition-all no-underline">
              Get Free Consultation
            </Link>
            <a href="tel:+60167702098" className="inline-block bg-brand-green text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light transition-all no-underline">
              Call +60 16-770 2098
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForeignWorkerRecruitment;
