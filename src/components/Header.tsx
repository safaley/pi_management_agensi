import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
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

  // Section detection for navbar color change
  useEffect(() => {
    if (location.pathname !== '/') {
      setCurrentSection('');
      return;
    }

    const detectCurrentSection = () => {
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'services', element: document.getElementById('services') },
        { id: 'recruitment', element: document.getElementById('recruitment') },
        { id: 'contact', element: document.getElementById('contact') }
      ];

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          
          if (scrollPosition >= sectionTop) {
            if (currentSection !== section.id) {
              setCurrentSection(section.id);
            }
            break;
          }
        }
      }
    };

    // Initial detection
    detectCurrentSection();

    window.addEventListener('scroll', detectCurrentSection);
    return () => window.removeEventListener('scroll', detectCurrentSection);
  }, [location.pathname, currentSection]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''} ${currentSection ? `section-${currentSection}` : ''}`} id="header">
        <Link to="/" className="logo">
          <span className="logo-main">Agensi</span>
          <span className="logo-separator"> </span>
          <span className="logo-middle">Pekerjaan</span>
          <span className="logo-separator"> </span>
          <span className="logo-accent">PI</span>
        </Link>
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
        <div className="mobile-nav-links">
          <Link to="/" className={isActive('/')} onClick={closeMobileNav}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')} onClick={closeMobileNav}>
            About
          </Link>
          <Link to="/services" className={isActive('/services')} onClick={closeMobileNav}>
            Services
          </Link>
          <Link to="/recruitment" className={isActive('/recruitment')} onClick={closeMobileNav}>
            Recruitment
          </Link>
          <Link to="/contact" className={isActive('/contact')} onClick={closeMobileNav}>
            Contact
          </Link>
        </div>
        
        <div className="mobile-nav-footer">
          <div className="mobile-nav-company">
            <h3>Agensi Pekerjaan PI Management</h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;