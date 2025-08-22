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
    const detectCurrentSection = () => {
      let sections: { id: string; element: HTMLElement | null }[] = [];
      
      // Define sections based on current page
      if (location.pathname === '/') {
        sections = [
          { id: 'home', element: document.getElementById('home') },
          { id: 'about', element: document.getElementById('about') },
          { id: 'services', element: document.getElementById('services') },
          { id: 'recruitment', element: document.getElementById('recruitment') },
          { id: 'contact', element: document.getElementById('contact') }
        ];
      } else if (location.pathname === '/about') {
        sections = [
          { id: 'hero-about', element: document.getElementById('hero-about') },
          { id: 'values', element: document.getElementById('values') },
          { id: 'team', element: document.getElementById('team') },
          { id: 'ceo', element: document.getElementById('ceo') }
        ];
      } else if (location.pathname === '/services') {
        sections = [
          { id: 'hero', element: document.getElementById('hero') },
          { id: 'services', element: document.getElementById('services') },
          { id: 'sources', element: document.getElementById('sources') }
        ];
      } else if (location.pathname === '/recruitment') {
        sections = [
          { id: 'hero', element: document.getElementById('hero') },
          { id: 'process', element: document.getElementById('process') },
          { id: 'steps', element: document.getElementById('steps') },
          { id: 'timeline', element: document.getElementById('timeline') },
          { id: 'cta', element: document.getElementById('cta') }
        ];
      } else if (location.pathname === '/contact') {
        sections = [
          { id: 'hero', element: document.getElementById('hero') },
          { id: 'contact', element: document.getElementById('contact') },
          { id: 'locations', element: document.getElementById('locations') }
        ];
      } else if (location.pathname === '/pricing') {
        sections = [
          { id: 'hero', element: document.getElementById('hero') },
          { id: 'pricing', element: document.getElementById('pricing') }
        ];
      } else {
        return; // No sections to detect for unknown pages
      }

      const scrollPosition = window.scrollY + 100; // Offset for better detection
      let foundSection = false;

      // More robust section detection
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          
          // Check if current scroll position is within this section with better tolerance
          const tolerance = 200; // Increased tolerance for better detection
          if (scrollPosition >= (sectionTop - tolerance) && scrollPosition < (sectionBottom + tolerance)) {
            if (currentSection !== section.id) {
              setCurrentSection(section.id);
            }
            foundSection = true;
            break;
          }
        }
      }

      // Improved fallback logic
      if (!foundSection) {
        // Find the closest section based on scroll position
        let closestSection = null;
        let closestDistance = Infinity;
        
        for (const section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const distance = Math.abs(scrollPosition - sectionTop);
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = section;
            }
          }
        }
        
        if (closestSection && currentSection !== closestSection.id) {
          setCurrentSection(closestSection.id);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectCurrentSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial detection
    setTimeout(() => {
      detectCurrentSection();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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