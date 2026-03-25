import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PHASES = [
  { icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />, title: 'Legal Approvals', desc: 'Government permits & documentation', duration: '2-4 weeks', iconBg: 'bg-brand-blue' },
  { icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" />, title: 'Worker Selection', desc: 'Screening & visa processing', duration: '3-6 weeks', iconBg: 'bg-brand-green' },
  { icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5L12 21z" stroke="currentColor" strokeWidth="2" />, title: 'Arrival & Support', desc: 'Transportation & ongoing assistance', duration: '1-2 weeks', iconBg: 'bg-brand-green' },
];

const STEPS = [
  { step: 1, badge: 'Government Approval', title: 'Labour Department Approval', desc: "We submit your application to the Malaysian Labour Department for foreign worker quota approval.", duration: '1-2 weeks', detailLabel: 'Required:', detail: 'Company registration, job descriptions' },
  { step: 2, badge: 'Security Clearance', title: 'KDN Ministry Approval', desc: 'We secure approval from the Ministry of Home Affairs (KDN) for security clearance and immigration authorization.', duration: '1-2 weeks', detailLabel: 'Purpose:', detail: 'Security & immigration compliance' },
  { step: 3, badge: 'Candidate Selection', title: 'Interview & Screening', desc: 'Our experienced team conducts thorough interviews and background checks to find candidates that match your specific requirements.', duration: '1-3 weeks', detailLabel: 'Includes:', detail: 'Skills assessment, background check' },
  { step: 4, badge: 'Overseas Processing', title: 'Embassy Applications', desc: 'We coordinate with overseas partners and submit applications to respective country embassies.', duration: '2-4 weeks', detailLabel: 'Countries:', detail: 'Bangladesh, Nepal, India, Myanmar, Vietnam' },
  { step: 5, badge: 'Visa Processing', title: 'Visa Application', desc: 'We handle all visa applications with proper documentation and timely submission.', duration: '2-3 weeks', detailLabel: 'Includes:', detail: 'Work visa, entry permit' },
  { step: 6, badge: 'Work Authorization', title: 'Work Permit Endorsement', desc: 'Upon approval, we facilitate work permit endorsement ensuring all legal requirements are met.', duration: '1 week', detailLabel: 'Result:', detail: 'Legal work authorization' },
  { step: 7, badge: 'Arrival Support', title: 'Airport to Workplace Transport', desc: 'We provide safe and reliable transportation services from the airport to your workplace or accommodation.', duration: 'Same day', detailLabel: 'Service:', detail: 'Airport pickup, safe transport' },
  { step: 8, badge: 'Ongoing Support', title: 'Permit Renewal & Maintenance', desc: 'We provide continuous support for permit renewals, passport updates, and ongoing compliance.', duration: 'Annual renewals', detailLabel: 'Support:', detail: '24/7 assistance available' },
];

const Recruitment: React.FC = () => {
  usePageMeta(
    'Foreign Worker Recruitment Process Malaysia | Step-by-Step | Sumber Global',
    'Complete 8-step foreign worker recruitment process in Malaysia — from government approval to worker arrival. Licensed agency handling work permits, visa processing & KDN compliance in Johor Bahru.'
  );
  useScrollAnimation(['#recruitmentHero', '#ctaSection']);

  // HowTo structured data for rich results
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'howto-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Recruit Foreign Workers in Malaysia',
      description: 'Complete 8-step foreign worker recruitment process from government approval to worker arrival in Malaysia.',
      totalTime: 'P12W',
      step: STEPS.map((s) => ({
        '@type': 'HowToStep',
        position: s.step,
        name: s.title,
        text: s.desc,
        url: 'https://www.apsumberglobal.com/recruitment',
      })),
    });
    document.head.appendChild(script);
    return () => { document.getElementById('howto-schema')?.remove(); };
  }, []);

  return (
    <div>
      {/* Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/thumbnails/hero/recruitment-hero-bg.jpg"
          alt="Foreign worker recruitment process and procedure in Malaysia"
          className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="relative z-[3] max-w-3xl mx-auto text-center px-4 py-24 lg:py-40 animate-on-scroll" id="recruitmentHero">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Foreign Worker Recruitment Process in Malaysia</h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-2xl mx-auto">
            Our comprehensive 8-step process ensures we find the right talent for your business needs while maintaining full compliance with Malaysian regulations.
          </p>
        </div>
      </section>

      {/* 3-Phase Overview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Simple 3-Phase Recruitment Process</h2>
            <p className="text-sm sm:text-lg text-gray-500">We handle everything from government approvals to worker arrival</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {PHASES.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center border border-gray-100 hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${p.iconBg} flex items-center justify-center text-white mx-auto mb-4 sm:mb-5`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">{p.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.desc}</p>
                <span className="inline-block text-xs font-semibold text-brand-blue bg-brand-blue-50 px-3 py-1 rounded-full">{p.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Step-by-Step Process</h2>
            <p className="text-sm sm:text-lg text-gray-500">Here's exactly what happens during your recruitment journey</p>
          </div>

          <div className="space-y-0">
            {STEPS.map((item) => (
              <div key={item.step} className="relative flex gap-4 sm:gap-6 pb-8 sm:pb-10 last:pb-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md text-white ${item.step % 2 === 1 ? 'bg-brand-blue' : 'bg-brand-green'}`}>
                    {item.step}
                  </div>
                  {item.step < 8 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 flex-1 hover:shadow-brand transition-shadow -mt-1">
                  <span className="inline-block text-[11px] font-semibold text-brand-blue bg-brand-blue-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-gray-700">{item.step === 8 ? 'Frequency:' : 'Duration:'}</span>{' '}
                      <span className="text-gray-500">{item.duration}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">{item.detailLabel}</span>{' '}
                      <span className="text-gray-500">{item.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3">Total Timeline: 6-12 Weeks</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 max-w-xl mx-auto">
            From initial application to worker arrival, our complete process typically takes 6-12 weeks depending on the country of origin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { phase: 'Phase 1', label: 'Government Approvals', duration: '2-4 weeks' },
              { phase: 'Phase 2', label: 'Candidate Processing', duration: '3-6 weeks' },
              { phase: 'Phase 3', label: 'Arrival & Setup', duration: '1-2 weeks' },
            ].map((item) => (
              <div key={item.phase} className="bg-gray-50 rounded-xl p-5 border border-brand-blue-100/50">
                <div className="text-xs font-semibold text-brand-blue mb-1">{item.phase}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-xs text-gray-400">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue z-[1]" />
        <div className="max-w-2xl mx-auto text-center relative z-[2] animate-on-scroll" id="ctaSection">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Ready to Start Your Recruitment Process?</h2>
          <p className="text-base sm:text-lg text-brand-blue-100 mb-8 sm:mb-10 leading-relaxed">
            Contact us today to discuss your manpower requirements and let us guide you through our comprehensive recruitment procedure.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-blue text-base font-semibold px-10 py-4 rounded-full hover:bg-brand-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 no-underline"
          >
            Get Started
          </Link>
          <p className="mt-4">
            <Link to="/services" className="text-white/80 hover:text-white text-sm underline transition-colors">
              View all our manpower services
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
