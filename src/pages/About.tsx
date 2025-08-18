import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - PI Management | Professional Manpower Solutions';

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'animate');
          
          // Special handling for values section to animate individual items
          if (entry.target.classList.contains('new-values-container')) {
            const valueItems = entry.target.querySelectorAll('.new-value-item');
            valueItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const heroAboutText = document.getElementById('heroAboutText');
    const valuesContainer = document.querySelector('.new-values-container');
    // const teamContainer = document.querySelector('.team-grid-container'); // Hidden for now
    // const ceoContainer = document.getElementById('ceoContainer'); // Hidden for now

    if (heroAboutText) observer.observe(heroAboutText);
    if (valuesContainer) observer.observe(valuesContainer);
    // if (teamContainer) observer.observe(teamContainer); // Hidden for now
    // if (ceoContainer) observer.observe(ceoContainer); // Hidden for now

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Who Are We Hero Section */}
      <section id="hero-about" className="hero-about-section">
        <div className="hero-about-background"></div>
        <div className="hero-about-overlay"></div>
        <div className="hero-about-container">
          <div className="hero-about-content" id="heroAboutText">
            <h1 className="hero-about-title">Who Are We?</h1>
            <div className="hero-about-description">
              <p>We are <strong>Agensi Pekerjaan PI Management Sdn Bhd</strong>, a licensed C manpower supply company established for over a decade. As a leading recruitment agency in Malaysia, we specialize in providing professional local and foreign workforce solutions across various industries.</p>
              
              <p>Our commitment goes beyond simple placement – we ensure legal compliance, provide comprehensive support, and build lasting partnerships that drive sustainable growth for businesses throughout Johor Bahru and beyond.</p>
              
              <p>With our experienced team and systematic approach, we bridge the gap between skilled workers seeking meaningful opportunities and companies requiring reliable, qualified manpower to achieve their business objectives.</p>
            </div>
            <div className="hero-about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Companies Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Legal Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="new-values-section">
        <div className="new-values-container">
          <h2 className="new-section-title">Our Core Values</h2>
          <div className="new-values-grid">
            <div className="new-value-item theme-professional" data-delay="0">
              <div className="card-badge premium">Core Value</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6l0 6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Excellence</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Professionalism</h3>
                <p className="new-value-text">As an experienced team, we are here to provide excellent local and foreign workers to various industries in Johor Bahru. Our aim is to maximise the potential of your industry growth by allocating the manpower best fits to the work demand.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Experienced Team</span>
                  <span className="feature-tag">✓ Industry Expertise</span>
                  <span className="feature-tag">✓ Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="new-value-item theme-efficient" data-delay="200">
              <div className="card-badge featured">Essential</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Performance</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Efficiency</h3>
                <p className="new-value-text">Our well-trained team is ever-ready to act upon your requirements through our systematic approach, ensuring work is done effectively within the timeline.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Systematic Approach</span>
                  <span className="feature-tag">✓ Timely Delivery</span>
                  <span className="feature-tag">✓ Well-trained Team</span>
                </div>
              </div>
            </div>
            <div className="new-value-item theme-transparent" data-delay="400">
              <div className="card-badge">Trust</div>
              <div className="value-header">
                <div className="value-icon">
                  <div className="icon-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <div className="value-category">Integrity</div>
              </div>
              <div className="value-content">
                <h3 className="new-value-title">Transparency</h3>
                <p className="new-value-text">From application, screening to approval, we work ethically by adhering to Government's policy to deliver the right and mind-easing solution for you.</p>
                <div className="value-features">
                  <span className="feature-tag">✓ Ethical Practices</span>
                  <span className="feature-tag">✓ Government Compliance</span>
                  <span className="feature-tag">✓ Clear Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - HIDDEN FOR NOW */}
      {/* 
      <section className="team-grid-section">
        <div className="team-grid-container">
          <div className="team-intro">
            <h1 className="team-main-title">Meet Our Professional Team</h1>
            <p className="team-subtitle">Our experienced professionals are dedicated to providing excellent local and foreign workforce solutions across various industries in Malaysia.</p>
          </div>
          <div className="team-grid">
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="/images/team/siti-rahman.jpg" alt="Siti Rahman" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Siti Rahman</h3>
                <p className="team-position">Managing Director</p>
                <p className="team-description">Over 15 years of experience in manpower solutions and business development across Malaysia.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="/images/team/ahmad-hassan.jpg" alt="Ahmad Hassan" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Ahmad Hassan</h3>
                <p className="team-position">Operations Manager</p>
                <p className="team-description">Expert in workforce planning and operational efficiency for local and foreign worker placement.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="/images/team/priya-sharma.jpg" alt="Priya Sharma" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Priya Sharma</h3>
                <p className="team-position">HR Specialist</p>
                <p className="team-description">Specialized in recruitment processes and candidate assessment for various industries in Johor Bahru.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="/images/team/mohamed-ali.jpg" alt="Mohamed Ali" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Mohamed Ali</h3>
                <p className="team-position">Legal Compliance Officer</p>
                <p className="team-description">Ensures all recruitment processes adhere to Malaysian government policies and legal requirements.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="/images/team/fatima-wong.jpg" alt="Fatima Wong" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Fatima Wong</h3>
                <p className="team-position">Client Relations Manager</p>
                <p className="team-description">Dedicated to building lasting partnerships with companies and providing exceptional customer service.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Robert Lim</h3>
                <p className="team-position">Foreign Worker Coordinator</p>
                <p className="team-description">Handles documentation and coordination for foreign worker permits and visa applications.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b000?auto=format&fit=crop&w=400&q=80" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Emma Tan</h3>
                <p className="team-position">Training Coordinator</p>
                <p className="team-description">Develops training programs and ensures workers meet industry standards and safety requirements.</p>
              </div>
            </div>
            <div className="team-member-card">
              <div className="team-photo-square">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3 className="team-name">David Chan</h3>
                <p className="team-position">Business Development Manager</p>
                <p className="team-description">Identifies new business opportunities and maintains relationships with industry partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CEO Message Section - HIDDEN FOR NOW */}
      {/* 
      <section id="ceo-message" className="ceo-section">
        <div className="ceo-container" id="ceoContainer">
          <div className="ceo-header">
            <h2 className="ceo-title">Message from Our CEO</h2>
            <p className="ceo-subtitle">Leadership & Vision</p>
          </div>
          <div className="ceo-profile">
            <div className="ceo-photo-wrap">
              <img className="ceo-photo" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" alt="Ahmad Rahman, CEO" />
            </div>
            <div className="ceo-content">
              <div className="ceo-quote">
                "At PI Management, we believe the right workforce transforms businesses and meaningful employment changes lives. Our decade of experience in manpower solutions drives us to bridge opportunities between skilled workers and companies, ensuring legal compliance and building lasting partnerships for Malaysia's economy."
              </div>
              <div className="ceo-signature">
                <div className="ceo-name">Ahmad Rahman</div>
                <div className="ceo-role">CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default About;