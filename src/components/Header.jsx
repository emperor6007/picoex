import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Left Section - Logo and Navigation */}

          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo">
              <span
                className="logo-text"
                onClick={() => (window.location.href = "/")}
                style={{ cursor: "pointer" }}
              >
                <span className="logo-text-top">BitEx </span>
                <span className="logo-text-bottom"> Global</span>
              </span>
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#00ff88"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12"
                    stroke="#00ff88"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12"
                    stroke="#00ff88"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7L15 10L12 13"
                    stroke="#00ff88"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17L9 14L12 11"
                    stroke="#00ff88"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="logo-divider"></div>
            <span className="tagline">Crypto Exchange</span>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`nav-menu ${isMenuOpen ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            <div className="nav-item dropdown-hover">
              <div className="nav-link">
                Exchange & Swap
                <svg
                  className="dropdown-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Spot Trading
                </a>
                <a href="#" className="dropdown-item">
                  Futures Trading
                </a>
                <a href="#" className="dropdown-item">
                  Swap
                </a>
              </div>
            </div>

            <div className="nav-item dropdown-hover">
              <div className="nav-link">
                Buy & Sell
                <svg
                  className="dropdown-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Buy Crypto
                </a>
                <a href="#" className="dropdown-item">
                  Sell Crypto
                </a>
                <a href="#" className="dropdown-item">
                  P2P Trading
                </a>
              </div>
            </div>

            <div className="nav-item">
              <a href="#" className="nav-link">
                Currencies
              </a>
            </div>

            <div className="nav-item">
              <a href="#" className="nav-link">
                How It Works
              </a>
            </div>

            <div className="nav-item dropdown-hover">
              <div className="nav-link">
                Support
                <svg
                  className="dropdown-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Help Center
                </a>
                <a href="#" className="dropdown-item">
                  Contact Us
                </a>
                <a href="#" className="dropdown-item">
                  FAQ
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <svg
              className="mobile-menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="6" x2="24" y2="6" stroke="currentColor" />
              <line y1="12" x2="24" y2="12" stroke="currentColor" />
              <line y1="18" x2="24" y2="18" stroke="currentColor" />
            </svg>
          </button>

          {/* Language Selector - Right Side */}
          <div className="language-selector">
            <div className="flag-icon">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
                <rect width="20" height="15" fill="#fff" />
                <rect width="20" height="1.2" fill="#B22234" />
                <rect y="2.4" width="20" height="1.2" fill="#B22234" />
                <rect y="4.8" width="20" height="1.2" fill="#B22234" />
                <rect y="7.2" width="20" height="1.2" fill="#B22234" />
                <rect y="9.6" width="20" height="1.2" fill="#B22234" />
                <rect y="12" width="20" height="1.2" fill="#B22234" />
                <rect width="8" height="8.4" fill="#3C3B6E" />
                <g fill="#fff">
                  <circle cx="1.2" cy="1.2" r="0.4" />
                  <circle cx="2.8" cy="1.2" r="0.4" />
                  <circle cx="4.4" cy="1.2" r="0.4" />
                  <circle cx="6" cy="1.2" r="0.4" />
                  <circle cx="1.2" cy="2.8" r="0.4" />
                  <circle cx="2.8" cy="2.8" r="0.4" />
                  <circle cx="4.4" cy="2.8" r="0.4" />
                  <circle cx="6" cy="2.8" r="0.4" />
                  <circle cx="1.2" cy="4.4" r="0.4" />
                  <circle cx="2.8" cy="4.4" r="0.4" />
                  <circle cx="4.4" cy="4.4" r="0.4" />
                  <circle cx="6" cy="4.4" r="0.4" />
                  <circle cx="1.2" cy="6" r="0.4" />
                  <circle cx="2.8" cy="6" r="0.4" />
                  <circle cx="4.4" cy="6" r="0.4" />
                  <circle cx="6" cy="6" r="0.4" />
                  <circle cx="1.2" cy="7.6" r="0.4" />
                  <circle cx="2.8" cy="7.6" r="0.4" />
                  <circle cx="4.4" cy="7.6" r="0.4" />
                  <circle cx="6" cy="7.6" r="0.4" />
                </g>
              </svg>
            </div>
            <button
              className="language-button"
              onClick={toggleLanguageDropdown}
            >
              Select Language
              <svg
                className="dropdown-arrow"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                  fill="currentColor"
                />
              </svg>
            </button>
            {isLanguageOpen && (
              <div className="dropdown-menu language-dropdown">
                <a href="#" className="dropdown-item">
                  English
                </a>
                <a href="#" className="dropdown-item">
                  Spanish
                </a>
                <a href="#" className="dropdown-item">
                  French
                </a>
                <a href="#" className="dropdown-item">
                  German
                </a>
                <a href="#" className="dropdown-item">
                  Chinese
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Header;
