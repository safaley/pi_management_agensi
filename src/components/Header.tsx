import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMobileNav = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobileNav = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when nav is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <span className="logo">
          <span className="logo-main">Agensi</span>
          <span className="logo-accent">PI</span>
        </span>
        <nav className="nav">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/recruitment" className={isActive('/recruitment')}>Recruitment</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} id="overlay" onClick={closeMobileNav}></div>
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} id="mobileNav">
        <div className="mobile-nav-header">
          <h2 className="mobile-nav-title">Menu</h2>
        </div>
        <div className="mobile-nav-menu">
          <Link to="/" className={`mobile-nav-item ${isActive('/')}`} onClick={closeMobileNav}>
            <div className="nav-icon">🏠</div>
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/about" className={`mobile-nav-item ${isActive('/about')}`} onClick={closeMobileNav}>
            <div className="nav-icon">ℹ️</div>
            <span className="nav-text">About Information</span>
          </Link>
          <Link to="/services" className={`mobile-nav-item ${isActive('/services')}`} onClick={closeMobileNav}>
            <div className="nav-icon">🔧</div>
            <span className="nav-text">Our Services</span>
          </Link>
          <Link to="/recruitment" className={`mobile-nav-item ${isActive('/recruitment')}`} onClick={closeMobileNav}>
            <div className="nav-icon">👥</div>
            <span className="nav-text">Recruitment</span>
          </Link>
          <Link to="/contact" className={`mobile-nav-item ${isActive('/contact')}`} onClick={closeMobileNav}>
            <div className="nav-icon">💬</div>
            <span className="nav-text">Contact Us</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;