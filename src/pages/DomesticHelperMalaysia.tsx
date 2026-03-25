import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const DomesticHelperMalaysia: React.FC = () => {
  usePageMeta(
    'Domestic Helper Agency Malaysia | Maid Supply Johor Bahru & Penang | Agency Sumber Global',
    'Licensed domestic helper agency in Malaysia. Agency Sumber Global provides thoroughly screened maids and domestic helpers from Indonesia, Myanmar, Cambodia & Philippines. Serving Johor Bahru, Penang & nationwide. Pembantu rumah Malaysia.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-[2] max-w-4xl mx-auto text-center px-4 py-24 lg:py-36">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Domestic Helper &amp; Maid Agency in Malaysia
          </h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Agency Sumber Global provides licensed domestic helper supply services across Malaysia. We thoroughly screen and verify all domestic workers to ensure reliable, experienced, and trustworthy helpers for your household.
          </p>
          <Link to="/contact" className="inline-block bg-brand-green text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light transition-all no-underline">
            Enquire About Domestic Helpers
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-10 tracking-tight text-center">Types of Domestic Helpers We Supply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Live-In Housekeepers', desc: 'Full-time live-in domestic helpers for daily household cleaning, laundry, ironing, and general housekeeping duties.', icon: '🏠' },
              { title: 'Caregivers for Elderly', desc: 'Experienced caregivers trained in elderly care, mobility assistance, medication management, and companionship.', icon: '👴' },
              { title: 'Child Care Helpers', desc: 'Trusted helpers experienced in child care, baby sitting, meal preparation for children, and school pickup services.', icon: '👶' },
              { title: 'Cooks & Kitchen Helpers', desc: 'Skilled cooks familiar with Malaysian, Asian, and international cuisines for private households and small establishments.', icon: '🍳' },
              { title: 'Drivers & Multi-Role', desc: 'Domestic helpers who can drive and handle multiple household responsibilities including shopping, errands, and transport.', icon: '🚗' },
              { title: 'Part-Time Cleaners', desc: 'Professional part-time cleaning services for households, condominiums, and small offices on a regular schedule.', icon: '✨' },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">How to Hire a Domestic Helper in Malaysia</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Submit Your Requirements', desc: 'Tell us your household needs - type of helper, preferred nationality, language skills, specific duties, and budget.' },
              { step: 2, title: 'Candidate Matching', desc: 'We match you with pre-screened candidates based on your requirements. Review biodata, experience, and references.' },
              { step: 3, title: 'Interview & Selection', desc: 'Interview shortlisted candidates via video call or in person. We facilitate the entire selection process.' },
              { step: 4, title: 'Documentation & Permits', desc: 'We handle all work permit applications, visa processing, medical checks, and immigration documentation.' },
              { step: 5, title: 'Placement & Support', desc: 'Your domestic helper arrives ready to work. We provide orientation and ongoing support for both employer and helper.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">Domestic Helper FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'How much does it cost to hire a domestic helper in Malaysia?', a: 'The cost varies depending on nationality, experience, and specific requirements. Contact Agency Sumber Global for a transparent quotation with no hidden fees. We offer competitive rates for domestic helper placement.' },
              { q: 'How long does it take to get a domestic helper?', a: 'For foreign domestic helpers, the process typically takes 4-8 weeks including documentation, permits, and travel arrangements. Local helpers can be placed within 1-2 weeks.' },
              { q: 'What screening do you perform on domestic helpers?', a: 'We conduct comprehensive background checks, reference verification, skills assessment, medical examination, and document verification. All helpers are screened for criminal records and verified for work eligibility.' },
              { q: 'Do you provide replacement if the helper is not suitable?', a: 'Yes, Agency Sumber Global provides a replacement guarantee period. If the domestic helper is not suitable within the agreed period, we will provide a replacement at no additional agency fee.' },
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
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need a Domestic Helper?</h2>
          <p className="text-base text-brand-blue-100 mb-8">Contact Agency Sumber Global for reliable, screened domestic helpers in Johor Bahru, Penang, and across Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue-50 transition-all no-underline">Contact Us</Link>
            <a href="tel:+60167702098" className="inline-block bg-brand-green text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-green-light transition-all no-underline">Call +60 16-770 2098</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticHelperMalaysia;
