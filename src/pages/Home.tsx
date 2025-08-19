import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO optimization for homepage
    document.title = 'Agensi Pekerjaan PI Management - Professional Manpower Recruitment Agency Malaysia | Worker Supply Services';
    
    // Video loading optimization
    const video = document.querySelector('.hero-video') as HTMLVideoElement;
    if (video) {
      // Check if user prefers reduced data usage (mobile)
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const isMobile = window.innerWidth <= 768;
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      
      if (isMobile || isSlowConnection) {
        // Don't autoplay video on mobile or slow connections
        video.autoplay = false;
        video.preload = 'none';
        
        // Add click to play functionality
        const playButton = document.createElement('button');
        playButton.innerHTML = '▶️ Play Video';
        playButton.className = 'video-play-btn';
        playButton.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.7);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          z-index: 10;
        `;
        
        playButton.onclick = () => {
          video.play();
          playButton.remove();
        };
        
        video.parentElement?.appendChild(playButton);
      }
      
      // Add loaded event listener
      video.addEventListener('loadeddata', () => {
        video.setAttribute('data-loaded', 'true');
      });
    }
    
    // Update meta description dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading manpower recruitment agency in Malaysia. Agensi Pekerjaan PI Management provides professional local and foreign worker supply, legal immigration services, and comprehensive workforce solutions for over 10 years in Johor Bahru.');
    }

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'animate');
          
          // Special handling for recruitment sources section to animate country items
          if (entry.target.classList.contains('recruitment-sources-container')) {
            const countryItems = entry.target.querySelectorAll('.country-item');
            countryItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 50);
            });
          }
          
          // Special handling for services section to animate service cards
          if (entry.target.classList.contains('new-services-container')) {
            const serviceCards = entry.target.querySelectorAll('.new-value-item');
            serviceCards.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const aboutContent = document.getElementById('aboutText');
    const servicesContainer = document.getElementById('servicesContainer');
    // const clientsContainer = document.getElementById('clientsContainer'); // Hidden section
    const contactContainer = document.getElementById('contactContainer');
    const recruitmentSourcesContainer = document.getElementById('recruitmentSourcesContainer');

    if (aboutContent) observer.observe(aboutContent);
    if (servicesContainer) observer.observe(servicesContainer);
    // if (clientsContainer) observer.observe(clientsContainer); // Hidden section
    if (contactContainer) observer.observe(contactContainer);
    if (recruitmentSourcesContainer) observer.observe(recruitmentSourcesContainer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full Screen Video Hero */}
      <div id="home" className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
          poster="/images/petronas_tower_poster.jpg"
        >
          <source src="/videos/petronas_tower.webm" type="video/webm" />
          <source src="/videos/petronas_tower.mp4" type="video/mp4" />
          {/* Fallback for unsupported browsers */}
          <div className="video-fallback" style={{
            backgroundImage: 'url(/images/petronas_tower_fallback.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}></div>
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-headline">Agensi Pekerjaan PI Management - Professional Manpower Solutions Malaysia</h1>
          <div className="hero-sub">Leading Worker Recruitment Agency in Malaysia<br/>Connecting Businesses with Skilled Local & Foreign Workers</div>
          <button className="hero-btn" onClick={() => navigate('/contact')}>Get Workers Now</button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content" id="aboutText">
            <div className="about-badge">
              <div className="badge-circle"></div>
              <span>About Our Agency</span>
            </div>
            <h2 className="about-title">Malaysia's Trusted Manpower Recruitment Agency for Over a Decade</h2>
            <p className="about-desc">
              Established for more than 10 years, <strong>Agensi Pekerjaan PI Management Sdn Bhd</strong> is a licensed Class C manpower supply company specializing in professional recruitment services. As a leading <strong>worker recruitment agency in Malaysia</strong>, we provide comprehensive <strong>local and foreign worker supply</strong> solutions across various industries in Johor Bahru and throughout Malaysia. Our expertise includes <strong>immigration services</strong>, work permit processing, and complete workforce management solutions for businesses seeking reliable manpower.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Legal Compliance</div>
              </div>
            </div>
            <button className="about-btn" onClick={() => navigate('/about')}>Learn More</button>
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

      {/* Services Section */}
      <section id="services" className="new-services-section">
        <div className="new-services-container" id="servicesContainer">
          <h2 className="new-section-title">Professional Manpower & Recruitment Services in Malaysia</h2>
          <div className="new-services-grid">
            <div className="new-value-item theme-legal" data-delay="0">
              <div className="value-content">
                <h3 className="new-value-title">Immigration/KDN/JTK Cases</h3>
                <p className="new-value-text">Complete legal assistance for immigration cases and compliance with government regulations.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Legal Compliance</span>
                  <span className="feature-tag">✓ Government Relations</span>
                  <span className="feature-tag">✓ Professional Support</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-processing" data-delay="200">
              <div className="value-content">
                <h3 className="new-value-title">Foreign Worker Approval</h3>
                <p className="new-value-text">Streamlined application process for foreign worker permits and approvals with full documentation support.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Fast Processing</span>
                  <span className="feature-tag">✓ Complete Documentation</span>
                  <span className="feature-tag">✓ Government Approved</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-workforce" data-delay="400">
              <div className="value-content">
                <h3 className="new-value-title">Local & Foreign Workers</h3>
                <p className="new-value-text">Professional recruitment of skilled local and foreign workers for all industries with thorough background verification.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Skilled Workers</span>
                  <span className="feature-tag">✓ Background Verified</span>
                  <span className="feature-tag">✓ Industry Experienced</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-domestic" data-delay="600">
              <div className="value-content">
                <h3 className="new-value-title">Domestic Helper Supply</h3>
                <p className="new-value-text">Reliable domestic helpers and maids with thorough screening and verification for household and commercial needs.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Thoroughly Screened</span>
                  <span className="feature-tag">✓ Experienced</span>
                  <span className="feature-tag">✓ Reliable Service</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-support" data-delay="800">
              <div className="value-content">
                <h3 className="new-value-title">Accommodation & Transportation</h3>
                <p className="new-value-text">Complete accommodation and transportation services for foreign workers ensuring comfort and compliance.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Safe Accommodation</span>
                  <span className="feature-tag">✓ Transportation</span>
                  <span className="feature-tag">✓ Compliance Standards</span>
                </div>
              </div>
            </div>

            <div className="new-value-item theme-documentation" data-delay="1000">
              <div className="value-content">
                <h3 className="new-value-title">Passport & Insurance Renewal</h3>
                <p className="new-value-text">Complete documentation services including passport, permit, and insurance renewal with ongoing support.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Document Renewal</span>
                  <span className="feature-tag">✓ Insurance Coverage</span>
                  <span className="feature-tag">✓ Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section hidden">
        <div className="clients-container" id="clientsContainer">
          <div className="clients-header">
            <h2 className="clients-title">Our Clients</h2>
            <p className="clients-subtitle">Forward-thinking brands trust us to drive scalable growth and engagement. We partner with companies ready to embrace the future of digital solutions.</p>
          </div>
          <div className="clients-grid">
            <div className="client-item">
              <div className="client-icon">in</div>
              <span className="client-name">LinkedIn</span>
            </div>
            <div className="client-item">
              <div className="client-icon travelata">t</div>
              <span className="client-name">Travelata</span>
            </div>
            <div className="client-item">
              <div className="client-icon tele2">t2</div>
              <span className="client-name">Tele2</span>
            </div>
            <div className="client-item">
              <div className="client-icon s7">S7</div>
              <span className="client-name">S7</span>
            </div>
            <div className="client-item">
              <div className="client-icon joom">J</div>
              <span className="client-name">Joom</span>
            </div>
            <div className="client-item">
              <div className="client-icon lazada">laz</div>
              <span className="client-name">Lazada</span>
            </div>
            <div className="client-item">
              <div className="client-icon ff">ff</div>
              <span className="client-name">Facebook</span>
            </div>
            <div className="client-item">
              <div className="client-icon binomo">⚡</div>
              <span className="client-name">Binomo</span>
            </div>
            <div className="client-item">
              <div className="client-icon hoff">Hoff</div>
              <span className="client-name">Hoff</span>
            </div>
            <div className="client-item">
              <div className="client-icon binance">◈</div>
              <span className="client-name">Binance</span>
            </div>
            <div className="client-item">
              <div className="client-icon alibaba">🟠</div>
              <span className="client-name">Alibaba Group</span>
            </div>
            <div className="client-item">
              <div className="client-icon exness">Ex</div>
              <span className="client-name">Exness</span>
            </div>
            <div className="client-item">
              <div className="client-icon alibaba-text">alibaba.com</div>
              <span className="client-name">Alibaba.com</span>
            </div>
            <div className="client-item">
              <div className="client-icon sunlight">☀️</div>
              <span className="client-name">Sunlight</span>
            </div>
            <div className="client-item">
              <div className="client-icon indrive">iD</div>
              <span className="client-name">inDrive</span>
            </div>
            <div className="client-item">
              <div className="client-icon joom2">Joom</div>
              <span className="client-name">Joom</span>
            </div>
            <div className="client-item">
              <div className="client-icon kion">Ki</div>
              <span className="client-name">Kion</span>
            </div>
            <div className="client-item">
              <div className="client-icon binance2">◈</div>
              <span className="client-name">Binance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="get-in-touch-section">
        <div className="get-in-touch-container" id="contactContainer">
          <div className="get-in-touch-content">
            <div className="get-in-touch-badge">
              <div className="badge-circle"></div>
              <span>Get In Touch</span>
            </div>
            <h2 className="get-in-touch-title">Ready to Transform Your Business?</h2>
            <p className="get-in-touch-description">
              Take the next step in finding the perfect manpower solution for your industry. Our experienced team is ready to provide professional consultation and customized recruitment services that meet your specific business needs. From local workforce to international talent, we connect you with the right people for sustainable growth.
            </p>
            <div className="get-in-touch-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Free consultation and assessment</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Customized recruitment solutions</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Legal compliance guaranteed</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>24/7 professional support</span>
              </div>
            </div>
            <div className="get-in-touch-cta">
              <button className="contact-us-btn" onClick={() => navigate('/contact')}>Contact Us</button>
              <p className="contact-info">
                Call us directly at <a href="tel:+60167702098">+60 16-770 2098</a> or 
                <a href="tel:+60112102954">+60 11-2102 9545</a>
              </p>
            </div>
          </div>
          
          <div className="get-in-touch-visual">
            <div className="visual-bg">
              <div className="floating-elements">
                <div className="floating-card">
                  <div className="card-icon">👥</div>
                  <span>Professional Team</span>
                </div>
                <div className="floating-card">
                  <div className="card-icon">🌏</div>
                  <span>Global Network</span>
                </div>
                <div className="floating-card">
                  <div className="card-icon">⚡</div>
                  <span>Fast Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;