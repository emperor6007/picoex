import React from "react";
import "./LeadingApp.css";
import heroIllustration from "../assets/crypto-app-small.png";
import appStoreIcon from "../assets/app-store-new-small.svg";
import googlePlayIcon from "../assets/google-play-new-small.svg";
import androidIcon from "../assets/apk-download-new-small.svg";
import qrCodeIcon from "../assets/qr-mini.svg";

const LeadingApp = () => {
  const handleBadgeClick = () => {
    window.location.href = "/";
  };

  return (
    <section className="app-section">
      <div className="app-container">
        <div className="app-content">
          <h2 className="app-title">Leading crypto app</h2>
          <p className="app-subtitle">
            A trustworthy app for our frequent users. Access handy features
            including transaction history and cashback 💸 from every exchange.
          </p>
          <div className="store-badges">
            <button onClick={handleBadgeClick}>
              <img src={appStoreIcon} alt="App Store 4.9 ★★★★★" />
            </button>
            <button onClick={handleBadgeClick}>
              <img src={googlePlayIcon} alt="Google Play 4.8 ★★★★★" />
            </button>
            <button onClick={handleBadgeClick}>
              <img src={androidIcon} alt="Download APK" />
            </button>
            <button onClick={handleBadgeClick}>
              <img src={qrCodeIcon} alt="QR Code" />
            </button>
          </div>
        </div>
        <div className="app-illustration">
          <img src={heroIllustration} alt="Crypto app illustration" />
        </div>
      </div>
    </section>
  );
};

export default LeadingApp;
