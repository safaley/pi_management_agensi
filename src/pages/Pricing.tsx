import React, { useEffect } from 'react';
import '../styles/pricing.css';

const Pricing: React.FC = () => {
  useEffect(() => {
    document.title = 'Pricing – Agency';
  }, []);

  return (
    <div data-page="pricing">
      {/* Pricing Hero Section */}
      <section id="hero" className="pricing-hero">
        <div className="pricing-hero-container">
          <h1 className="pricing-hero-title">Foreign Worker Processing Fees</h1>
          <p className="pricing-hero-subtitle">Transparent pricing for all industries and nationalities</p>
        </div>
      </section>

      {/* Main Pricing Table Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-table-wrapper">
            <h2 className="table-title">Price Table (RM)</h2>
            <div className="table-responsive">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th className="industry-header">Industry</th>
                    <th>Manufacturing</th>
                    <th>Service</th>
                    <th>Construction</th>
                    <th>Plantation</th>
                    <th>Agriculture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fee-label">Levy</td>
                    <td>1850</td>
                    <td>1850</td>
                    <td>1850</td>
                    <td>640</td>
                    <td>640</td>
                  </tr>
                  <tr>
                    <td className="fee-label">PLKS</td>
                    <td>60</td>
                    <td>60</td>
                    <td>60</td>
                    <td>60</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td className="fee-label">Processing Fees</td>
                    <td>125</td>
                    <td>125</td>
                    <td>125</td>
                    <td>125</td>
                    <td>125</td>
                  </tr>
                  <tr>
                    <td className="fee-label">Visa*</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td className="fee-label">Insurance Guarantee#</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td className="fee-label">SKHPPA</td>
                    <td>127.20</td>
                    <td>127.20</td>
                    <td>127.20</td>
                    <td>127.20</td>
                    <td>127.20</td>
                  </tr>
                  <tr>
                    <td className="fee-label">FOMEMA**</td>
                    <td>207</td>
                    <td>207</td>
                    <td>207</td>
                    <td>207</td>
                    <td>207</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Remarks Section */}
            <div className="remarks-section">
              <div className="remark-item">
                <strong>Remark *</strong> - Visa fees vary depending on the nationality (refer to Table 1)
              </div>
              <div className="remark-item">
                <strong>Remark **</strong> - FOMEMA fees for Male RM207, FOMEMA fees for Female RM217
              </div>
              <div className="remark-item">
                <strong>Remark #</strong> - Insurances fees change depending on no of foreign worker apply. (minimum fee RM50)
              </div>
            </div>

            {/* Visa Fees Table */}
            <div className="visa-table-wrapper">
              <div className="visa-table-container">
                <table className="visa-table">
                  <thead>
                    <tr>
                      <th className="country-header">Country</th>
                      <th>Visa Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="country-name">Nepal</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td className="country-name">Myanmar</td>
                      <td>19.5</td>
                    </tr>
                    <tr>
                      <td className="country-name">Vietnam</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td className="country-name">Bangladesh</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;