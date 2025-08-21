import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/services.css';

const Services: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Our Services – Professional Manpower Solutions';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.services-header, .new-value-item, .country-item').forEach(el => {
      observer.observe(el);
    });

    // Observer for recruitment sources section
    const recruitmentSourcesContainer = document.getElementById('recruitmentSourcesContainer');
    if (recruitmentSourcesContainer) {
      const recruitmentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'animate');
            
            // Special handling for recruitment sources section to animate country items
            const countryItems = entry.target.querySelectorAll('.country-item');
            countryItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 50);
            });
          }
        });
      }, { threshold: 0.1 });
      
      recruitmentObserver.observe(recruitmentSourcesContainer);
    }

    // Special handling for new services section
    const servicesContainer = document.getElementById('servicesGrid');
    if (servicesContainer && servicesContainer.parentElement) {
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const serviceCards = entry.target.querySelectorAll('.new-value-item');
            serviceCards.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 150);
            });
          }
        });
      }, { threshold: 0.1 });
      
      observer2.observe(servicesContainer.parentElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="services-header" id="servicesHeroText">
            <h1 className="services-hero-title">Our Professional Services</h1>
            <p className="services-hero-subtitle">Comprehensive manpower solutions tailored to meet your business needs across all industries in Malaysia.</p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="new-services-section">
        <div className="new-services-container">
          <h2 className="new-section-title">What We Offer</h2>
          <p className="section-subtitle">Complete workforce solutions designed to drive your business forward</p>
          
          <div className="new-services-grid" id="servicesGrid">
            <div className="new-value-item theme-standard" data-delay="0">
              <div className="card-badge">Popular</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Local</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Local Workers Supply</h3>
                <p className="new-value-text">Professional Malaysian workforce across all skill levels - from general laborers to skilled technicians and supervisors for construction, manufacturing, and service industries.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Skilled & Semi-Skilled</span>
                  <span className="feature-tag">✓ Background Verified</span>
                  <span className="feature-tag">✓ Industry Experienced</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-standard" data-delay="200">
              <div className="card-badge featured">Featured</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12h20M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0zM8 12c0-3.5 1.8-7 4-7s4 3.5 4 7-1.8 7-4 7-4-3.5-4-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">International</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Foreign Workers Supply</h3>
                <p className="new-value-text">Licensed recruitment of foreign workers from Bangladesh, Nepal, India, Myanmar, and other approved countries with full legal compliance and documentation support.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Legal Documentation</span>
                  <span className="feature-tag">✓ Government Approved</span>
                  <span className="feature-tag">✓ Multi-Country Source</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-support" data-delay="400">
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Domestic</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Domestic Helper Supply</h3>
                <p className="new-value-text">Reliable domestic helpers and maids for households and commercial establishments, with thorough screening and proper work permit arrangements.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Thoroughly Screened</span>
                  <span className="feature-tag">✓ Experienced</span>
                  <span className="feature-tag">✓ Reliable Service</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-premium" data-delay="600">
              <div className="card-badge premium">Premium</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7.5,4.21 12,6.81 16.5,4.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7.5,19.79 7.5,14.6 3,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="21,12 16.5,14.6 16.5,19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="12,22.81 12,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="6.81" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Legal</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Immigration & Legal Services</h3>
                <p className="new-value-text">Complete immigration assistance including work permit applications, visa renewals, KDN and JTK compliance, and legal documentation for foreign workers.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ KDN/JTK Compliance</span>
                  <span className="feature-tag">✓ Work Permits</span>
                  <span className="feature-tag">✓ Visa Processing</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-support" data-delay="800">
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7l3-3h12l3 3v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Support</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Accommodation & Transportation</h3>
                <p className="new-value-text">Comprehensive accommodation arrangements and transportation services for foreign workers, ensuring comfortable and compliant living conditions.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Safe Accommodation</span>
                  <span className="feature-tag">✓ Transportation</span>
                  <span className="feature-tag">✓ Compliance Standards</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-premium" data-delay="1000">
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Documentation</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Insurance & Documentation</h3>
                <p className="new-value-text">Complete insurance coverage, passport renewals, permit extensions, and ongoing documentation support to ensure continuous legal employment status.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Full Insurance</span>
                  <span className="feature-tag">✓ Document Renewal</span>
                  <span className="feature-tag">✓ Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Recruit Section */}
      <section className="recruitment-sources-section">
        <div className="recruitment-sources-container" id="recruitmentSourcesContainer">
          <div className="recruitment-sources-header">
            <h2 className="recruitment-sources-title">Where We Recruit Your Workers</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="countries-grid">
            <div className="country-item" data-delay="0">
              <div className="country-flag">
                <img 
                  src="/images/flags/malaysia.png" 
                  alt="Malaysia Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="107"
                />
              </div>
              <h3 className="country-name">Malaysia</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="200">
              <div className="country-flag">
                <img 
                  src="/images/flags/nepal.png" 
                  alt="Nepal Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="195"
                />
              </div>
              <h3 className="country-name">Nepal</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="400">
              <div className="country-flag">
                <img 
                  src="/images/flags/bangladesh.png" 
                  alt="Bangladesh Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="96"
                />
              </div>
              <h3 className="country-name">Bangladesh</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="600">
              <div className="country-flag">
                <img 
                  src="/images/flags/myanmar.png" 
                  alt="Myanmar Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="107"
                />
              </div>
              <h3 className="country-name">Myanmar</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="800">
              <div className="country-flag">
                <img 
                  src="/images/flags/vietnam.png" 
                  alt="Vietnam Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="107"
                />
              </div>
              <h3 className="country-name">Vietnam</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="1000">
              <div className="country-flag">
                <img 
                  src="/images/flags/india.svg" 
                  alt="India Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="107"
                />
              </div>
              <h3 className="country-name">India</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="1200">
              <div className="country-flag">
                <img 
                  src="/images/flags/pakistan.svg" 
                  alt="Pakistan Flag" 
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="107"
                />
              </div>
              <h3 className="country-name">Pakistan</h3>
              <p className="country-label">Demographics</p>
            </div>
          </div>
          
          <div className="recruitment-sources-footer">
            <button className="more-sources-btn" onClick={() => navigate('/recruitment')}>MORE SOURCES</button>
          </div>
        </div>
        
        {/* Globe Background */}
        <div className="globe-background">
          <div className="globe-dots"></div>
        </div>
      </section>
    </>
  );
};

export default Services;