import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


// ─── EmailJS Configuration ───────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template with these variables:
//    {{firstName}}, {{lastName}}, {{email}}, {{phone}},
//    {{company}}, {{service}}, {{message}}
//    → copy the Template ID
// 4. Go to Account → copy your Public Key
// 5. Replace the values below:
const EMAILJS_SERVICE_ID = 'service_don9j2o';
const EMAILJS_TEMPLATE_ID = 'template_ogvpmhi';
const EMAILJS_PUBLIC_KEY = 'TG5VhouxXsA1gsSLc';
// ─────────────────────────────────────────────────────────────

const QUICK_INFO = [
  { icon: '📞', label: 'Phone', value: <><a href="tel:+60167702098" className="text-brand-blue hover:text-brand-blue-light no-underline transition-colors">+60 16-770 2098</a><br /><a href="tel:+60112102954" className="text-brand-blue hover:text-brand-blue-light no-underline transition-colors">+60 11-2102 9545</a></> },
  { icon: '✉️', label: 'Email', value: <a href="mailto:admin@apsumberglobal.com" className="text-brand-blue hover:text-brand-blue-light no-underline transition-colors">admin@apsumberglobal.com</a> },
  { icon: '⏰', label: 'Business Hours', value: <>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</> },
  { icon: '⚡', label: 'Response Time', value: 'Within 24 hours' },
];

const OFFICES = [
  {
    type: 'Main Office', subtitle: 'Headquarters', icon: '🏢', city: 'Johor Bahru',
    address: 'No. 23-01, Jalan Austin Heights 8/4, Taman Mount Austin, 8110 Johor Bahru, Johor Darul Takzim, Malaysia',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.7767!3d1.5652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6c2a6fc70f11%3A0x4f5e6c7d8e9f0a1b!2sNo.%2023-01%2C%20Jalan%20Austin%20Heights%208%2F4%2C%20Taman%20Mount%20Austin%2C%2081100%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1697500000000',
    directionsUrl: 'https://www.google.com/maps/dir//Jalan+Harmoni+3%2F1,+Taman+Desa+Harmoni,+81100+Johor+Bahru,+Johor,+Malaysia',
  },
  {
    type: 'Branch Office', subtitle: 'Northern Region', icon: '🌟', city: 'Penang',
    address: 'No.1-12B-1, Suntech @ Penang Cybercity, Lintang Mayang Pasir 3, Bandar Bayan Baru, 11950 Bayan Lepas, Penang, Malaysia',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9415!2d100.2963!3d5.3194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac04a7c853dcd%3A0x1e42c4f3ae52e5f5!2sSuntech%40Penang%20Cybercity!5e0!3m2!1sen!2smy!4v1693123456789',
    directionsUrl: 'https://www.google.com/maps/dir//No.1-12B-1,+Suntech+@+Penang+Cybercity,+Lintang+Mayang+Pasir+3,+Bandar+Bayan+Baru,+11950+Bayan+Lepas,+Penang',
  },
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  usePageMeta(
    'Contact Agensi Pekerjaan Sumber Global | Johor Bahru & Penang Offices',
    'Contact Agensi Pekerjaan Sumber Global for manpower recruitment services. Offices in Johor Bahru & Penang. Call +60 16-770 2098 or email admin@apsumberglobal.com for foreign worker supply & immigration services.'
  );
  useScrollAnimation(['#contactHeroText']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/thumbnails/hero/contact-hero-bg.jpg" alt="Contact Agensi Pekerjaan Sumber Global offices in Johor Bahru and Penang Malaysia" className="absolute inset-0 w-full h-full object-cover object-center z-[1]" loading="eager" />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="relative z-[3] max-w-3xl mx-auto text-center px-4 py-24 lg:py-40 animate-on-scroll" id="contactHeroText">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Contact Our Manpower Agency in Johor Bahru &amp; Penang</h1>
          <p className="text-base sm:text-lg text-brand-blue-100 leading-relaxed">
            Ready to find the perfect manpower solution for your business? Contact our professional team at our Johor Bahru or Penang locations today.
          </p>
        </div>
      </section>

      {/* Form + Quick Info */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Send us a Message</h2>
            <p className="text-gray-500 text-sm mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>

            {status === 'sent' && (
              <div className="mb-4 p-3 rounded-lg bg-brand-green-50 border border-brand-green-100 text-brand-green text-sm font-medium">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                Failed to send message. Please try again or contact us directly.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1">Company Name (Optional)</label>
                <input type="text" id="company" name="company" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10" />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1">Service Interested In</label>
                <select id="service" name="service" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10 bg-white">
                  <option value="">Select a service</option>
                  <option value="local-workers">Local Workers Supply</option>
                  <option value="foreign-workers">Foreign Workers Supply</option>
                  <option value="maid-supply">Maid Supply</option>
                  <option value="immigration-cases">Immigration/KDN/JTK Cases</option>
                  <option value="accommodation">Accommodation &amp; Transportation</option>
                  <option value="passport-renewal">Passport, Permit &amp; Insurance Renewal</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your manpower requirements..." required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/10 min-h-[70px] resize-y" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto bg-brand-green text-white text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-brand-green-light hover:-translate-y-0.5 hover:shadow-green-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Quick Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Contact</h3>
            <p className="text-gray-500 text-sm mb-8">Get in touch with us directly through any of these channels.</p>
            <div className="space-y-5">
              {QUICK_INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-brand-blue-100/50">
                  <span className="text-xl mt-0.5">{info.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">{info.label}</div>
                    <div className="text-sm text-gray-700 leading-relaxed">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Our Office Locations</h2>
            <p className="text-sm sm:text-base text-gray-500">Serving you from two convenient locations across Malaysia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {OFFICES.map((office) => (
              <div key={office.city} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-brand-lg transition-shadow">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center text-lg">{office.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-brand-blue">{office.type}</div>
                      <div className="text-[11px] text-gray-400">{office.subtitle}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>

                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-sm mt-0.5">📍</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-xs mt-0.5">📞</span>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        <a href="tel:+60167702098" className="text-brand-blue hover:text-brand-blue-light no-underline block">+60 16-770 2098</a>
                        <a href="tel:+60112102954" className="text-brand-blue hover:text-brand-blue-light no-underline block">+60 11-2102 9545</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs mt-0.5">✉️</span>
                      <a href="mailto:admin@apsumberglobal.com" className="text-xs text-brand-blue hover:text-brand-blue-light no-underline">admin@apsumberglobal.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-gray-500">
                    <span className="mt-0.5">⏰</span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                      <span>Mon - Fri:</span><span>9:00 AM - 6:00 PM</span>
                      <span>Saturday:</span><span>9:00 AM - 1:00 PM</span>
                      <span>Sunday:</span><span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="px-6">
                  <iframe
                    title={`${office.city} Office Location`}
                    src={office.mapSrc}
                    width="100%"
                    height="180"
                    className="rounded-xl border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-6 pt-4">
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-light transition-colors no-underline"
                  >
                    🗺️ Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
