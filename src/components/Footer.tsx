import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <div className="footer-company-name">Agensi Pekerjaan PI Management</div>
          <div className="footer-nav">
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/recruitment">Recruitment Procedure</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <a href="tel:+60167702098">+60 16-770 2098</a> / <a href="tel:+60112102954">+60 11-2102 9545</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-text">
              <a href="mailto:info@agencyperkerjaanpi.com">info@agencyperkerjaanpi.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        © 2025 Agensi Pekerjaan PI Management Sdn. Bhd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;