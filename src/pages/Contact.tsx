import React, { useEffect } from 'react';
import '../styles/contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us – Professional Manpower Solutions';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.contact-header').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-header" id="contactHeroText">
            <h1 className="contact-hero-title">Get In Touch With Us</h1>
            <p className="contact-hero-subtitle">Ready to find the perfect manpower solution for your business? Contact our professional team today.</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <form className="contact-form" id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="local-workers">Local Workers Supply</option>
                  <option value="foreign-workers">Foreign Workers Supply</option>
                  <option value="maid-supply">Maid Supply</option>
                  <option value="immigration-cases">Immigration/KDN/JTK Cases</option>
                  <option value="accommodation">Accommodation & Transportation</option>
                  <option value="passport-renewal">Passport, Permit & Insurance Renewal</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your manpower requirements, project details, or any specific questions you have..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          
          <div className="contact-map-wrap">
            <div className="contact-map-header">
              <h3 className="contact-map-title">Our Location</h3>
              <p className="contact-map-subtitle">Visit our office in Johor Bahru for personalized consultation.</p>
            </div>
            
            <div className="contact-map-container">
              <iframe 
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5537537537537!2d103.7621!3d1.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c6c2c2c2c2%3A0x12345678!2sJalan%20Harmoni%203%2F1%2C%20Taman%20Desa%20Harmoni%2C%2081100%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%" 
                height="400" 
                style={{border: 0, borderRadius: '1rem'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            <div className="contact-quick-info">
              <div className="quick-info-item">
                <div className="quick-info-icon">📞</div>
                <div className="quick-info-content">
                  <span className="quick-info-label">Phone</span>
                  <span className="quick-info-value">
                    <a href="tel:+60167702098">+60 16-770 2098</a> / 
                    <a href="tel:+60112102954">+60 11-2102 9545</a>
                  </span>
                </div>
              </div>
              
              <div className="quick-info-item">
                <div className="quick-info-icon">✉️</div>
                <div className="quick-info-content">
                  <span className="quick-info-label">Email</span>
                  <span className="quick-info-value">
                    <a href="mailto:info@agencyperkerjaanpi.com">info@agencyperkerjaanpi.com</a>
                  </span>
                </div>
              </div>
              
              <div className="quick-info-item">
                <div className="quick-info-icon">⏰</div>
                <div className="quick-info-content">
                  <span className="quick-info-label">Business Hours</span>
                  <span className="quick-info-value">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;