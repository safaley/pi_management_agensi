import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <div className="footer-company-name">PI Management</div>
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
              <a href="tel:+60735264008">07-352 6408</a> / <a href="tel:+60735813184">07-358 1318</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-text">
              <a href="mailto:worldaimer@yahoo.com">worldaimer@yahoo.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        © 2024 Agensi Pekerjaan PI Management Sdn. Bhd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;