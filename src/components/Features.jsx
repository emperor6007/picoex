import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      {/* Exchange Process Overview Section */}
      <div className="exchange-process-section">
        <div className="section-header">
          <h2 className="section-title">Your Best Crypto Exchange</h2>
          <a href="#" className="learn-more-link">
            Learn more &gt;
          </a>
        </div>

        <div className="process-cards">
          <div className="process-card">
            <div className="step-indicator">
              <span className="step-number">1</span>
              <span className="step-arrow">→</span>
            </div>
            <h3 className="card-title">Choose currency</h3>
            <p className="card-description">
              Pick one of 50 000+ supported currency pairs from the list
            </p>
          </div>

          <div className="process-card">
            <div className="step-indicator">
              <span className="step-number">2</span>
              <span className="step-arrow">→</span>
            </div>
            <h3 className="card-title">Make deposit</h3>
            <p className="card-description">
              Confirm details and send your assets to the generated address
            </p>
          </div>

          <div className="process-card">
            <div className="step-indicator">
              <span className="step-number">3</span>
              <span className="step-checkmark">✓</span>
            </div>
            <h3 className="card-title">Receive crypto</h3>
            <p className="card-description">
              Receive exchanged crypto with the best possible rate
            </p>
          </div>
        </div>
      </div>

      {/* Reliable Service Banner */}
      <div className="reliable-service-section">
        <div className="service-title-container">
          <div className="sparkle-icon">✦</div>
          <h2 className="service-title">Reliable service</h2>
          <div className="sparkle-icon">✦</div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-text">
              It has been great working with the BitEX team. They provide fast
              swaps with exceptional customer support and nearly zero technical
              issues. We are proud to have them as a partner in Edge.
            </p>
            <div className="testimonial-footer">
              <div className="company-icon">🍃</div>
              <div className="author-info">
                <div className="author-name">Paul Puey</div>
                <div className="author-title">CEO, Edge Wallet</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-text">
              Integrating BitEX currency exchange into the Ballet Crypto app has
              provided tremendous value and convenience for our users! Thanks
              BitEX!
            </p>
            <div className="testimonial-footer">
              <div className="company-icon">🍃</div>
              <div className="author-info">
                <div className="author-name">Bobby Lee</div>
                <div className="author-title">CEO, Ballet Crypto</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-text">
              Cake Wallet has integrated BitEX for nearly five years, and we
              have an excellent relationship. BitEX's simplicity and reliability
              perfectly compliment the goals of our wallet.
            </p>
            <div className="testimonial-footer">
              <div className="company-icon">🍃</div>
              <div className="author-info">
                <div className="author-name">Viktor Radchenko</div>
                <div className="author-title">CEO, Cake Wallet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
