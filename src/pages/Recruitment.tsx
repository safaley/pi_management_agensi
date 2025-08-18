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

      {/* Recruitment Steps Section */}
      <section className="recruitment-steps">
        <div className="steps-container">
          <div className="steps-grid">
            
            <div className="step-item" data-step="1">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Application of Approval from Malaysia Labour Department</h3>
                <p className="step-description">
                  We initiate the process by submitting comprehensive applications to the Malaysian Labour Department to obtain the necessary approvals for foreign worker recruitment. This ensures full compliance with local labor laws and regulations.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="2">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Application of Approval from KDN</h3>
                <p className="step-description">
                  We secure approval from the Ministry of Home Affairs (KDN - Kementerian Dalam Negeri) to ensure all security and immigration requirements are met before proceeding with the recruitment process.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="3">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Interviewing and Screening of Candidates</h3>
                <p className="step-description">
                  Our experienced team conducts thorough interviews and comprehensive screening processes to identify the most suitable candidates based on your specific requirements, skills, and cultural fit.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="4">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Overseas Recruitment and Application from the Embassies of Each Country</h3>
                <p className="step-description">
                  We coordinate with overseas recruitment partners and submit applications to the respective embassies of candidate countries to facilitate proper documentation and clearance procedures.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="5">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Submission of Visa</h3>
                <p className="step-description">
                  We handle all visa application processes, ensuring proper documentation and timely submission to relevant authorities for work permit and entry visa approvals.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="6">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">Work Permit Endorsement</h3>
                <p className="step-description">
                  Upon approval, we facilitate the endorsement of work permits, ensuring all legal requirements are fulfilled and workers have proper authorization to work in Malaysia.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="7">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3 className="step-title">Transport Arrangement for Workers from Airport to Work Place</h3>
                <p className="step-description">
                  We provide comprehensive transportation services, ensuring workers are safely transported from the airport to their designated workplace or accommodation upon arrival in Malaysia.
                </p>
              </div>
            </div>

            <div className="step-item" data-step="8">
              <div className="step-number">8</div>
              <div className="step-content">
                <h3 className="step-title">Permit Renewal</h3>
                <p className="step-description">
                  We provide ongoing support for permit renewals, ensuring continuous legal compliance and uninterrupted employment for your workforce throughout their tenure.
                </p>
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