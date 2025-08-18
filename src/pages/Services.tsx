import React, { useEffect } from 'react';
import '../styles/services.css';

const Services: React.FC = () => {
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
                  <div className="icon-bg">👤</div>
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
                  <div className="icon-bg">🌍</div>
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
                  <div className="icon-bg">🏠</div>
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
                  <div className="icon-bg">⚖️</div>
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
                  <div className="icon-bg">🚐</div>
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
                  <div className="icon-bg">📋</div>
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

      {/* Countries Recruitment Section */}
      <section className="countries-recruitment-section">
        <div className="countries-recruitment-container">
          <div className="section-header">
            <h2 className="section-title">Where We Recruit Your Workers</h2>
            <p className="section-subtitle">We source skilled workers from government-approved countries to meet your specific industry requirements</p>
          </div>
          
          <div className="countries-grid" id="countriesGrid">
            <div className="country-item" data-delay="0">
              <div className="country-flag">
                <img src="https://flagcdn.com/w320/my.png" alt="Malaysia Flag" />
              </div>
              <h3 className="country-name">Malaysia</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="200">
              <div className="country-flag">
                <img src="https://flagcdn.com/w320/np.png" alt="Nepal Flag" />
              </div>
              <h3 className="country-name">Nepal</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="400">
              <div className="country-flag">
                <img src="https://flagcdn.com/w320/bd.png" alt="Bangladesh Flag" />
              </div>
              <h3 className="country-name">Bangladesh</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="600">
              <div className="country-flag">
                <img src="https://flagcdn.com/w320/mm.png" alt="Myanmar Flag" />
              </div>
              <h3 className="country-name">Myanmar</h3>
              <p className="country-label">Demographics</p>
            </div>
            
            <div className="country-item" data-delay="800">
              <div className="country-flag">
                <img src="https://flagcdn.com/w320/in.png" alt="India Flag" />
              </div>
              <h3 className="country-name">India</h3>
              <p className="country-label">Demographics</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;