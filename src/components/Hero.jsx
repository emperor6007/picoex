import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import bitconIcon from "../assets/bitcoin.png";
import ethIcon from "../assets/ethereum.png";
import bnbIcon from "../assets/bnb.png";
import usdtIcon from "../assets/Tether.png";
import xrpIcon from "../assets/xrp.png";
import dogeIcon from "../assets/dogecoin.png";
import solIcon from "../assets/solana.png";
import maticIcon from "../assets/polygon.png";
import trxIcon from "../assets/tron-logo.png";
import adaIcon from "../assets/cardano.png";
import sidraIcon from "../assets/Sidra.webp";
import shibIcon from "../assets/shiba.png";
import piIcon from "../assets/pi_network.jpg";

import "./Hero.css";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("exchange");
  const [sendAmount, setSendAmount] = useState("0.000000");
  const [getAmount, setGetAmount] = useState("0.000000");
  const [sendCurrency, setSendCurrency] = useState("BTC");
  const [getCurrency, setGetCurrency] = useState("ETH");
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showGetDropdown, setShowGetDropdown] = useState(false);
  const navigate = useNavigate();

  const cryptoIcons = {
    BTC: <img src={bitconIcon} alt="BTC" className="crypto-icon" />,
    ETH: <img src={ethIcon} alt="ETH" className="crypto-icon" />,
    BNB: <img src={bnbIcon} alt="BNB" className="crypto-icon" />,
    USDT: <img src={usdtIcon} alt="USDT" className="crypto-icon" />,
    XRP: <img src={xrpIcon} alt="XRP" className="crypto-icon" />,
    DOGE: <img src={dogeIcon} alt="DOGE" className="crypto-icon" />,
    SOL: <img src={solIcon} alt="SOL" className="crypto-icon" />,
    MATIC: <img src={maticIcon} alt="MATIC" className="crypto-icon" />,
    TRX: <img src={trxIcon} alt="TRX" className="crypto-icon" />,
    ADA: <img src={adaIcon} alt="ADA" className="crypto-icon" />,
    SIDRA: <img src={sidraIcon} alt="SIDRA" className="crypto-icon" />,
    SHIB: <img src={shibIcon} alt="SHIB" className="crypto-icon" />,
    PI: <img src={piIcon} alt="PI" className="crypto-icon" />,
    BitEx: <span className="bitex-icon">B</span>, // Placeholder for BitEx icon
  };

  const currencies = Object.keys(cryptoIcons);

  // Mock USD prices for each currency (for conversion calculations)
  const ratesToUSD = useMemo(
    () => ({
      BTC: 91677.7832221,
      ETH: 4150,
      LTC: 150,
      BNB: 980,
      USDT: 1,
      XRP: 2.006778,
      DOGE: 0.259111,
      SOL: 198.73311189,
      MATIC: 0.25,
      TRX: 0.33,
      ADA: 0.75,
      SIDRA: 0.41,
      SHIB: 0.00002,
      PI: 0.3741116888,
      BitEx: 4,
    }),
    []
  );

  // Calculate the conversion rate
  const conversionRate = useMemo(() => {
    if (sendCurrency === getCurrency) return 1;
    return ratesToUSD[sendCurrency] / ratesToUSD[getCurrency];
  }, [sendCurrency, getCurrency, ratesToUSD]);

  useEffect(() => {
    const amount = parseFloat(String(sendAmount).replace(/[^0-9.]/g, ""));
    if (isNaN(amount)) {
      setGetAmount("");
    } else {
      const converted = amount * conversionRate;
      setGetAmount(converted.toFixed(6));
    }
  }, [sendAmount, sendCurrency, getCurrency, conversionRate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown areas
      const sendDropdown = event.target.closest(".send-dropdown-container");
      const getDropdown = event.target.closest(".get-dropdown-container");

      if (!sendDropdown && !getDropdown) {
        setShowSendDropdown(false);
        setShowGetDropdown(false);
      }
    };

    if (showSendDropdown || showGetDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showSendDropdown, showGetDropdown]);

  const handleExchange = () => {
    if (sendCurrency === getCurrency) return; // Prevent same-currency exchange
    const amount = parseFloat(String(sendAmount).replace(/[^0-9.]/g, ""));
    if (isNaN(amount) || amount <= 0) return;
    const converted = (amount * conversionRate).toFixed(6);
    navigate(
      `/exchange?from=${sendCurrency}&to=${getCurrency}&send=${amount}&get=${converted}`
    );
  };

  const handleSwap = () => {
    if (sendCurrency === getCurrency) return; // No-op if same
    const tempCurrency = sendCurrency;
    setSendCurrency(getCurrency);
    setGetCurrency(tempCurrency);
    // Amount recalculation happens in useEffect
  };

  const selectSendCurrency = (currency) => {
    if (currency !== getCurrency) {
      setSendCurrency(currency);
    }
    setShowSendDropdown(false);
  };

  const selectGetCurrency = (currency) => {
    if (currency !== sendCurrency) {
      setGetCurrency(currency);
    }
    setShowGetDropdown(false);
  };

  return (
    <div className="hero-container">
      {/* Crypto Background */}
      <div className="crypto-background">
        <div className="crypto-logo btc">₿</div>
        <div className="crypto-logo eth">Ξ</div>
        <div className="crypto-logo ltc">Ł</div>
        <div className="crypto-logo doge">Ð</div>
        <div className="crypto-logo xmr">ɱ</div>
        <div className="crypto-logo ada">₳</div>
        <div className="crypto-logo dot">●</div>
        <div className="crypto-logo sol">◎</div>
        <div className="crypto-logo matic">⬟</div>
        <div className="crypto-logo avax">🔺</div>
      </div>

      <div className="hero-content">
        {/* Main Row: Left Text Column and Right Exchange Card */}
        <div className="main-row">
          <div className="left-column">
            <h1 className="subtitle1">Limitless Web3.0</h1>
            <h1 className="subtitle2">Crypto Exchange</h1>
            <p className="subtitle">Buy, sell, swap crypto: fast & secure</p>
            <div className="trust-item">
              <div className="check-icon">✓</div>
              <span>Licensed service</span>
            </div>
            <div className="trust-item">
              <div className="check-icon1">🛡</div>
              <span>Trusted since 2017</span>
            </div>
            <div className="payment-section">
              <p className="payment-text">Buy crypto worldwide</p>
              <div className="payment-methods">
                <svg
                  width="65"
                  height="21"
                  viewBox="0 0 65 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.9367 0.0351562C37.3688 0.0351562 33.2865 2.41341 33.2865 6.80641C33.2865 11.8449 40.5263 12.1929 40.5263 14.7244C40.5263 15.7903 39.3104 16.7443 37.2329 16.7443C34.2853 16.7443 32.0822 15.4113 32.0822 15.4113L31.1394 19.8451C31.1394 19.8451 33.6774 20.9711 37.0468 20.9711C42.041 20.9711 45.9713 18.4765 45.9713 14.0078C45.9713 8.68339 38.7012 8.34577 38.7012 5.99663C38.7012 5.16162 39.6994 4.24706 41.7705 4.24706C44.1076 4.24706 46.0138 5.2166 46.0138 5.2166L46.9367 0.934842C46.9367 0.934842 44.8617 0.0351562 41.936 0.0351562H41.9367ZM0.142995 0.358552L0.0322266 1.0047C0.0322266 1.0047 1.95392 1.35784 3.68499 2.06285C5.91388 2.87069 6.0723 3.34155 6.44775 4.802L10.5378 20.6374H16.0208L24.4675 0.358552H18.9974L13.5698 14.1462L11.355 2.45868C11.1522 1.12112 10.1231 0.357905 8.86404 0.357905H0.143639L0.142995 0.358552ZM26.6674 0.358552L22.3765 20.6374H27.5929L31.8684 0.358552H26.6674ZM55.7608 0.358552C54.503 0.358552 53.8365 1.03509 53.3477 2.21678L45.7054 20.6374H51.1755L52.2336 17.5671H58.8977L59.541 20.6374H64.3678L60.1574 0.358552H55.7608ZM56.4724 5.83752L58.094 13.447H53.7502L56.473 5.83752H56.4724Z"
                    fill="white"
                  />
                </svg>

                <div className="mastercard-logo">
                  <svg
                    width="46"
                    height="29"
                    viewBox="0 0 46 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.8164 3.49609H16.5664V25.5072H28.8164V3.49609Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M17.3447 14.4993C17.3447 10.2216 19.328 6.13822 22.6724 3.49378C16.6058 -1.28956 7.77798 -0.239558 2.99465 5.866C-1.74979 11.9327 -0.699794 20.7216 5.40576 25.5049C10.5002 29.5104 17.6169 29.5104 22.7113 25.5049C19.328 22.8604 17.3447 18.7771 17.3447 14.4993Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M45.3452 14.4993C45.3452 22.2382 39.0841 28.4993 31.3452 28.4993C28.1952 28.4993 25.1619 27.4493 22.7119 25.5049C28.7786 20.7216 29.8286 11.9327 25.0452 5.82711C24.3452 4.97155 23.5675 4.15489 22.7119 3.49378C28.7786 -1.28956 37.6064 -0.239558 42.3508 5.866C44.2952 8.316 45.3452 11.3493 45.3452 14.4993Z"
                      fill="#F79E1B"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="exchange-section">
            <div className="exchange-form">
              {/* Form Tabs */}
              <div className="form-tabs">
                <button
                  className={`form-tab ${
                    activeTab === "exchange" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("exchange")}
                >
                  Exchange Crypto
                </button>
                <button
                  className={`form-tab ${
                    activeTab === "buy-sell" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("buy-sell")}
                >
                  Buy / Sell Crypto
                  <div className="spanish-flag">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <rect width="16" height="4" fill="#C60B1E" />
                      <rect y="4" width="16" height="4" fill="#FFC400" />
                      <rect y="8" width="16" height="4" fill="#C60B1E" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* You Send Section */}
              <div className="input-section">
                <div
                  className="send-dropdown-container"
                  style={{ position: "relative" }}
                >
                  <div className="input-group">
                    <label className="input-label">You Send</label>
                    <input
                      type="text"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="amount-input"
                    />

                    {/* You Send Section Dropdown */}
                    <div
                      className="currency-selector"
                      onClick={() => setShowSendDropdown(!showSendDropdown)} // Toggle dropdown
                    >
                      <div className={`${sendCurrency.toLowerCase()}-icon`}>
                        {cryptoIcons[sendCurrency]}
                      </div>
                      <span className="currency-code">{sendCurrency}</span>
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
                    {showSendDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          marginTop: 4,
                          background: "#000",
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          zIndex: 1000,
                          maxHeight: 200,
                          overflowY: "auto",
                          minWidth: 150,
                          // Add these properties for better scrolling
                          scrollBehavior: "smooth",
                          WebkitOverflowScrolling: "touch", // For mobile Safari
                        }}
                      >
                        {currencies
                          .filter((c) => c !== getCurrency)
                          .map((c) => (
                            <div
                              key={c}
                              onClick={() => selectSendCurrency(c)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "12px 16px", // Reduced padding for more items to fit
                                background: "#111213ff",
                                borderBottom: "1px solid #333", // Add separator
                                cursor: "pointer",
                                minHeight: "44px", // Reduced height
                                transition: "background-color 0.2s ease", // Add hover transition
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#333")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "#111213ff")
                              }
                            >
                              {cryptoIcons[c]}
                              <span style={{ color: "#fff", fontSize: "14px" }}>
                                {c}
                              </span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                  <div className="input-info-row">
                    <div className="input-info">
                      <div className="no-fees">
                        <div className="green-dot"></div>
                        <span>No hidden fees</span>
                      </div>
                      <div className="rate-info">
                        Estimated rate: 1 {sendCurrency} ~{" "}
                        {conversionRate.toFixed(4)} {getCurrency}
                      </div>
                    </div>

                    <div className="swap-icon" onClick={handleSwap}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 15L17 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 14L12 9L7 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* You Get Section */}
              <div className="input-section">
                <div
                  className="get-dropdown-container"
                  style={{ position: "relative" }}
                >
                  <div className="input-group">
                    <label className="input-label">You Get</label>
                    <input
                      type="text"
                      value={getAmount}
                      onChange={(e) => setGetAmount(e.target.value)}
                      className="amount-input locked"
                      readOnly
                    />

                    {/* You Get Section Dropdown - Similar changes */}
                    <div
                      className="currency-selector"
                      onClick={() => setShowGetDropdown(!showGetDropdown)} // Toggle dropdown
                    >
                      <div className={`${getCurrency.toLowerCase()}-icon`}>
                        {cryptoIcons[getCurrency]}
                      </div>
                      <span className="currency-code">{getCurrency}</span>
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
                    {showGetDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          marginTop: 4,
                          background: "#000",
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          zIndex: 1000,
                          maxHeight: 200,
                          overflowY: "auto",
                          minWidth: 150,
                        }}
                      >
                        {currencies
                          .filter((c) => c !== sendCurrency)
                          .map((c) => (
                            <div
                              key={c}
                              onClick={() => selectGetCurrency(c)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "16px 20px",
                                background: "#111213ff",
                                borderLeft: "1px solid #09090aff",
                                cursor: "pointer",
                                minHeight: "50px",
                              }}
                            >
                              {cryptoIcons[c]}
                              <span style={{ color: "#fff" }}>{c}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Exchange Button */}
              <button className="exchange-button" onClick={handleExchange}>
                Exchange
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Promotional Banner */}
        <div className="promo-banner">
          <div className="banner-content">
            <div className="banner-left">
              <div className="percentage-icon">%</div>
              <div className="diamond-icon">💎</div>
              <span className="banner-text">
                Unlock exclusive benefits with BitEX!
              </span>
            </div>
            <button className="banner-button">Exchange</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

















