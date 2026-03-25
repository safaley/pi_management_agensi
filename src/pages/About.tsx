import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  usePageMeta(
    'About Agensi Pekerjaan Sumber Global | Licensed Manpower Agency Malaysia',
    'Learn about Agensi Pekerjaan Sumber Global Sdn Bhd — a licensed manpower recruitment agency in Johor Bahru with 10+ years experience providing local and foreign worker supply across Malaysia.'
  );

  useScrollAnimation(
    ['#heroAboutText', '#valuesGrid'],
    {
      staggerChildren: {
        'values-grid': { selector: '.value-card', delay: 200 },
      },
    }
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/images/thumbnails/hero/about-hero-bg.jpg" alt="About Agensi Pekerjaan Sumber Global - Licensed Manpower Agency in Johor Bahru Malaysia" className="absolute inset-0 w-full h-full object-cover object-center z-[1]" loading="eager" />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="relative z-[3] max-w-4xl mx-auto text-center px-4 py-24 lg:py-40 animate-on-scroll" id="heroAboutText">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">Licensed Manpower Recruitment Agency in Malaysia</h1>
          <div className="space-y-4 text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-3xl mx-auto">
            <p>We are <strong className="text-white">Agensi Pekerjaan Sumber Global Sdn Bhd</strong>, a licensed C manpower supply company established for over a decade. As a leading recruitment agency in Malaysia, we specialize in providing professional local and foreign workforce solutions across various industries.</p>
            <p>Our commitment goes beyond simple placement &ndash; we ensure legal compliance, provide comprehensive support, and build lasting partnerships that drive sustainable growth for businesses throughout Johor Bahru and beyond.</p>
            <p>With our experienced team and systematic approach, we bridge the gap between skilled workers seeking meaningful opportunities and companies requiring reliable, qualified manpower.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14 max-w-xl mx-auto">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '500+', label: 'Companies Served' },
              { num: '100%', label: 'Legal Compliance' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-brand-blue-200 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-16 tracking-tight">Our Core Values</h2>

          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8" id="valuesGrid">
            {[
              {
                category: 'Excellence', title: 'Professionalism',
                desc: 'As an experienced team, we are here to provide excellent local and foreign workers to various industries in Johor Bahru. Our aim is to maximise the potential of your industry growth by allocating the manpower best fits to the work demand.',
                tags: ['Experienced Team', 'Industry Expertise', 'Quality Assurance'],
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6l0 6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                iconBg: 'bg-brand-green',
              },
              {
                category: 'Performance', title: 'Efficiency',
                desc: 'Our well-trained team is ever-ready to act upon your requirements through our systematic approach, ensuring work is done effectively within the timeline.',
                tags: ['Systematic Approach', 'Timely Delivery', 'Well-trained Team'],
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                iconBg: 'bg-brand-blue',
              },
              {
                category: 'Integrity', title: 'Transparency',
                desc: "From application, screening to approval, we work ethically by adhering to Government's policy to deliver the right and mind-easing solution for you.",
                tags: ['Ethical Practices', 'Government Compliance', 'Clear Communication'],
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>),
                iconBg: 'bg-brand-blue',
              },
            ].map((v) => (
              <div key={v.title} className="value-card group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${v.iconBg} flex items-center justify-center text-white`}>
                    {v.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{v.category}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 sm:mb-6">{v.desc}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {v.tags.map((tag) => (
                    <span key={tag} className="text-[11px] sm:text-xs font-medium text-brand-green bg-brand-green-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Services & Recruitment */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Explore Our Manpower Services</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">From foreign worker recruitment to immigration compliance, we offer end-to-end workforce solutions across Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services" className="inline-block bg-brand-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-blue-light transition-all no-underline">View Our Services</Link>
            <Link to="/recruitment" className="inline-block bg-white text-brand-blue text-sm font-semibold px-6 py-3 rounded-full border border-brand-blue hover:bg-brand-blue-50 transition-all no-underline">Recruitment Process</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
