import React from "react";
import "./SpaceHero.css";
import heroIllustration from "../assets/best-crypto-exchange.webp"; // Adjust the path if your image file name differs

const SpaceHero = () => {
  return (
    <div className="space-hero-container">
      {/* Starry Background */}
      <div className="stars-background">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
      </div>

      <div className="space-hero-content">
        {/* Left Section - Text Content */}
        <div className="left-section">
          <h1 className="main-title">Fast crypto exchange</h1>

          <p className="description">
            The average time for exchange is about 2 minutes. You can track the
            crypto swap progress on the exchange page.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">
                <span className="flame-icon">🔥</span>
                Triumph Rate
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-number">5M+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">2 min</div>
              <div className="stat-label">Average Exchange Time</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">1495</div>
              <div className="stat-label">
                Currencies available for exchange
              </div>
            </div>
          </div>

          <a href="#" className="cta-button">
            Try NOW &gt;
          </a>
        </div>

        {/* Right Section - Illustration */}
        <div className="right-section">
          <img
            src={heroIllustration}
            alt="Crypto exchange illustration"
            className="hero-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceHero;
