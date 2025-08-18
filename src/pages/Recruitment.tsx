import React, { useEffect } from 'react';
import '../styles/recruitment.css';

const Recruitment: React.FC = () => {
  useEffect(() => {
    document.title = 'Recruitment Procedure – Agency';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.recruitment-header, .cta-content').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Recruitment Hero Section */}
      <section className="recruitment-hero">
        <div className="recruitment-container">
          <div className="recruitment-header">
            <h1 className="recruitment-title">Recruitment Procedure</h1>
            <p className="recruitment-subtitle">
              Our comprehensive 8-step process ensures we find the right talent for your business needs while maintaining full compliance with Malaysian regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="process-overview">
        <div className="overview-container">
          <div className="overview-header">
            <h2 className="overview-title">Simple 3-Phase Recruitment Process</h2>
            <p className="overview-subtitle">We handle everything from government approvals to worker arrival</p>
          </div>
          
          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="phase-title">Legal Approvals</h3>
              <p className="phase-desc">Government permits & documentation</p>
              <div className="phase-duration">2-4 weeks</div>
            </div>
            
            <div className="phase-card">
              <div className="phase-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="phase-title">Worker Selection</h3>
              <p className="phase-desc">Screening & visa processing</p>
              <div className="phase-duration">3-6 weeks</div>
            </div>
            
            <div className="phase-card">
              <div className="phase-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5L12 21z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="phase-title">Arrival & Support</h3>
              <p className="phase-desc">Transportation & ongoing assistance</p>
              <div className="phase-duration">1-2 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="recruitment-steps">
        <div className="steps-container">
          <div className="steps-header">
            <h2 className="section-title">Detailed Step-by-Step Process</h2>
            <p className="section-subtitle">Here's exactly what happens during your recruitment journey</p>
          </div>
          
          <div className="steps-timeline">
            
            <div className="step-item" data-step="1">
              <div className="step-marker">
                <div className="step-number">1</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge government">Government Approval</div>
                <h3 className="step-title">Labour Department Approval</h3>
                <p className="step-description">
                  We submit your application to the Malaysian Labour Department for foreign worker quota approval. This ensures you're legally authorized to hire international workers.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">1-2 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Required:</span>
                    <span className="detail-value">Company registration, job descriptions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="2">
              <div className="step-marker">
                <div className="step-number">2</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge security">Security Clearance</div>
                <h3 className="step-title">KDN Ministry Approval</h3>
                <p className="step-description">
                  We secure approval from the Ministry of Home Affairs (KDN) for security clearance and immigration authorization before proceeding with recruitment.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">1-2 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Purpose:</span>
                    <span className="detail-value">Security & immigration compliance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="3">
              <div className="step-marker">
                <div className="step-number">3</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge selection">Candidate Selection</div>
                <h3 className="step-title">Interview & Screening</h3>
                <p className="step-description">
                  Our experienced team conducts thorough interviews and background checks to find candidates that match your specific requirements and company culture.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">1-3 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Includes:</span>
                    <span className="detail-value">Skills assessment, background check</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="4">
              <div className="step-marker">
                <div className="step-number">4</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge overseas">Overseas Processing</div>
                <h3 className="step-title">Embassy Applications</h3>
                <p className="step-description">
                  We coordinate with overseas partners and submit applications to respective country embassies for proper documentation and clearance procedures.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">2-4 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Countries:</span>
                    <span className="detail-value">Bangladesh, Nepal, India, Myanmar, Vietnam</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="5">
              <div className="step-marker">
                <div className="step-number">5</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge visa">Visa Processing</div>
                <h3 className="step-title">Visa Application</h3>
                <p className="step-description">
                  We handle all visa applications with proper documentation and timely submission to ensure smooth approval for work permits and entry visas.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">2-3 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Includes:</span>
                    <span className="detail-value">Work visa, entry permit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="6">
              <div className="step-marker">
                <div className="step-number">6</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge permit">Work Authorization</div>
                <h3 className="step-title">Work Permit Endorsement</h3>
                <p className="step-description">
                  Upon approval, we facilitate work permit endorsement ensuring all legal requirements are met and workers have proper authorization to work in Malaysia.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">1 week</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Result:</span>
                    <span className="detail-value">Legal work authorization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="7">
              <div className="step-marker">
                <div className="step-number">7</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge transport">Arrival Support</div>
                <h3 className="step-title">Airport to Workplace Transport</h3>
                <p className="step-description">
                  We provide safe and reliable transportation services from the airport to your workplace or designated accommodation upon worker arrival in Malaysia.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">Same day</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Service:</span>
                    <span className="detail-value">Airport pickup, safe transport</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item" data-step="8">
              <div className="step-marker">
                <div className="step-number">8</div>
              </div>
              <div className="step-content">
                <div className="step-badge renewal">Ongoing Support</div>
                <h3 className="step-title">Permit Renewal & Maintenance</h3>
                <p className="step-description">
                  We provide continuous support for permit renewals, passport updates, and ongoing compliance to ensure uninterrupted legal employment status.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">Frequency:</span>
                    <span className="detail-value">Annual renewals</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Support:</span>
                    <span className="detail-value">24/7 assistance available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Summary Section */}
      <section className="timeline-summary">
        <div className="summary-container">
          <div className="summary-content">
            <h2 className="summary-title">Total Timeline: 6-12 Weeks</h2>
            <p className="summary-description">
              From initial application to worker arrival, our complete process typically takes 6-12 weeks depending on the country of origin and specific requirements.
            </p>
            
            <div className="timeline-breakdown">
              <div className="timeline-item">
                <div className="timeline-phase">Phase 1</div>
                <div className="timeline-label">Government Approvals</div>
                <div className="timeline-duration">2-4 weeks</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-phase">Phase 2</div>
                <div className="timeline-label">Candidate Processing</div>
                <div className="timeline-duration">3-6 weeks</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-phase">Phase 3</div>
                <div className="timeline-label">Arrival & Setup</div>
                <div className="timeline-duration">1-2 weeks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="recruitment-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Recruitment Process?</h2>
            <p className="cta-description">
              Contact us today to discuss your manpower requirements and let us guide you through our comprehensive recruitment procedure.
            </p>
            <a href="#contact" className="cta-button">Get Started</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruitment;