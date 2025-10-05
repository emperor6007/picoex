import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TipsCard from "./TipsCard";

// Import crypto icons (same as Hero.jsx)
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

const ExchangePage = () => {
  const [searchParams] = useSearchParams();
  const [sendAmount, setSendAmount] = useState(() => {
    return searchParams.get("send") || "0.4";
  });
  const [sendCurrency, setSendCurrency] = useState(() => {
    return searchParams.get("from") || "BTC";
  });
  const [getCurrency, setGetCurrency] = useState(() => {
    return searchParams.get("to") || "USDT";
  });
  const [getAmount, setGetAmount] = useState(() => {
    return searchParams.get("get") || "46000";
  });

  // Dropdown states
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showGetDropdown, setShowGetDropdown] = useState(false);

  // Other states
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const [refundWallet, setRefundWallet] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [activeTab, setActiveTab] = useState("exchange"); // exchange | buysell
  const navigate = useNavigate();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Crypto icons object (same as Hero.jsx)
  const cryptoIcons = {
    BTC: <img src={bitconIcon} alt="BTC" style={{ width: 20, height: 20 }} />,
    ETH: <img src={ethIcon} alt="ETH" style={{ width: 20, height: 20 }} />,
    BNB: <img src={bnbIcon} alt="BNB" style={{ width: 20, height: 20 }} />,
    USDT: <img src={usdtIcon} alt="USDT" style={{ width: 20, height: 20 }} />,
    XRP: <img src={xrpIcon} alt="XRP" style={{ width: 20, height: 20 }} />,
    DOGE: <img src={dogeIcon} alt="DOGE" style={{ width: 20, height: 20 }} />,
    SOL: <img src={solIcon} alt="SOL" style={{ width: 20, height: 20 }} />,
    MATIC: (
      <img src={maticIcon} alt="MATIC" style={{ width: 20, height: 20 }} />
    ),
    TRX: <img src={trxIcon} alt="TRX" style={{ width: 20, height: 20 }} />,
    ADA: <img src={adaIcon} alt="ADA" style={{ width: 20, height: 20 }} />,
    SIDRA: (
      <img src={sidraIcon} alt="SIDRA" style={{ width: 20, height: 20 }} />
    ),
    SHIB: <img src={shibIcon} alt="SHIB" style={{ width: 20, height: 20 }} />,
    PI: <img src={piIcon} alt="PI" style={{ width: 20, height: 20 }} />,
    USD: <span style={{ fontSize: 18 }}>🇺🇸</span>,
    BitEx: (
      <span
        style={{
          width: 20,
          height: 20,
          background: "#10b981",
          color: "#fff",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        B
      </span>
    ),
  };

  const currencies = Object.keys(cryptoIcons);

  // Mock USD prices for each currency (same as Hero.jsx)
  const ratesToUSD = useMemo(
    () => ({
      BTC: 87540,
      ETH: 4150,
      LTC: 150,
      BNB: 980,
      USDT: 1,
      XRP: 2.4,
      DOGE: 0.21,
      SOL: 235,
      MATIC: 0.25,
      TRX: 0.33,
      ADA: 0.75,
      SIDRA: 0.41,
      SHIB: 0.00002,
      PI: 0.36148863,
      BitEx: 4,
    }),
    []
  );

  // Calculate the conversion rate
  const conversionRate = useMemo(() => {
    if (sendCurrency === getCurrency) return 1;
    return ratesToUSD[sendCurrency] / ratesToUSD[getCurrency];
  }, [sendCurrency, getCurrency, ratesToUSD]);

  // Auto-calculate getAmount when sendAmount or currencies change
  useEffect(() => {
    const amount = parseFloat(String(sendAmount).replace(/[^0-9.]/g, ""));
    if (isNaN(amount)) {
      setGetAmount("");
    } else {
      const converted = amount * conversionRate;
      setGetAmount(converted.toFixed(6));
    }
  }, [sendAmount, sendCurrency, getCurrency, conversionRate]);

  // Dropdown selection handlers
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

  // Get currency display info
  const getSendCurrencyDisplay = () => {
    if (activeTab === "buysell" && sendCurrency === "USD") {
      return { icon: cryptoIcons.USD, code: "USD" };
    }
    return { icon: cryptoIcons[sendCurrency], code: sendCurrency };
  };

  const getReceiveCurrencyDisplay = () => {
    return { icon: cryptoIcons[getCurrency], code: getCurrency };
  };

  // Wallet address validators by currency
  const addressValidators = useMemo(
    () => ({
      BTC: (addr) =>
        /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(addr) ||
        /^bc1[a-zA-HJ-NP-Z0-9]{39,59}$/.test(addr),
      ETH: (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr),
      BNB: (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr),
      USDT: (addr) =>
        /^0x[a-fA-F0-9]{40}$/.test(addr) || /^T[a-zA-Z0-9]{33}$/.test(addr),
      XRP: (addr) => /^r[0-9a-zA-Z]{24,34}$/.test(addr),
      DOGE: (addr) => /^D[a-zA-Z0-9]{33}$/.test(addr),
      SOL: (addr) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr),
      MATIC: (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr),
      TRX: (addr) => /^T[a-zA-Z0-9]{33}$/.test(addr),
      ADA: (addr) =>
        /^addr1[a-z0-9]+$/.test(addr) || /^Ae2[a-zA-Z0-9]{57}$/.test(addr),
      SHIB: (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr),
      PI: (addr) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr),
      SIDRA: (addr) => addr.trim().length >= 30,
      BitEx: (addr) => addr.trim().length >= 30,
      USD: (addr) => addr.trim().length >= 10, // Arbitrary for fiat, e.g., account number or email
    }),
    []
  );

  // Validate wallet address based on getCurrency
  const validateWalletAddress = (addr, currency) => {
    const validator = addressValidators[currency];
    if (validator) {
      return validator(addr);
    }
    return addr.trim().length >= 30; // Default for unknown currencies
  };

  // Validation
  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email), [email]);
  const isWalletValid = useMemo(
    () => validateWalletAddress(wallet, getCurrency),
    [wallet, getCurrency]
  );
  const canConfirm =
    isEmailValid && isWalletValid && agreed && wallet.trim() !== "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        gap: 24,
        alignItems: isDesktop ? "flex-start" : "center",
        justifyContent: "center",
        padding: isDesktop ? 24 : 16,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Left: Form card */}
      <div style={{ flex: 1, maxWidth: isDesktop ? 760 : "100%" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#f5f6f7",
              padding: "16px 20px",
              borderBottom: "1px solid #e7eaee",
            }}
          >
            <div style={{ color: "#6b7280", fontSize: 16, fontWeight: 600 }}>
              Please fill in transaction details
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #e7eaee" }}>
            <button
              onClick={() => setActiveTab("exchange")}
              style={{
                flex: 1,
                padding: "12px 16px",
                background: activeTab === "exchange" ? "#fff" : "#f5f6f7",
                fontWeight: 600,
                color: activeTab === "exchange" ? "#1f2937" : "#6b7280",
                border: "none",
                cursor: "pointer",
              }}
            >
              Exchange Crypto
            </button>
            <button
              onClick={() => setActiveTab("buysell")}
              style={{
                flex: 1,
                padding: "12px 16px",
                background: activeTab === "buysell" ? "#fff" : "#f5f6f7",
                color: activeTab === "buysell" ? "#1f2937" : "#6b7280",
                position: "relative",
                border: "none",
                cursor: "pointer",
              }}
            >
              Buy / Sell Crypto
              <span
                style={{
                  position: "absolute",
                  right: 8,
                  top: 6,
                  background: "#22c55e",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: 4,
                  padding: "2px 6px",
                }}
              >
                NEW
              </span>
            </button>
          </div>

          <div style={{ padding: isDesktop ? 20 : 16 }}>
            {/* You Send / You Pay */}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  color: "#6b7280",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                {activeTab === "exchange" ? "You Send" : "You Pay"}
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <input
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    placeholder="0"
                    style={{
                      flex: isDesktop ? 1 : "0 1 60%", // Limit input to 60% on mobile
                      padding: "12px 16px",
                      fontSize: 18,
                      fontWeight: 700,
                      border: "none",
                      outline: "none",
                      minWidth: 0, // A
                    }}
                  />
                  <div
                    onClick={() => setShowSendDropdown(!showSendDropdown)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 14px",
                      background: "#111213ff",
                      borderLeft: "1px solid #09090aff",
                      cursor: "pointer",
                      minWidth: isDesktop ? 100 : 140, // Wider dropdown area
                      flex: isDesktop ? "none" : "0 0 auto", // Don't shrink on mobile
                    }}
                  >
                    {getSendCurrencyDisplay().icon}
                    <span style={{ fontWeight: 600 }}>
                      {getSendCurrencyDisplay().code}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                {/* Send Currency Dropdown */}
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
                            padding: "12px 14px",
                            background: "#111213ff",
                            borderLeft: "1px solid #09090aff",
                            cursor: "pointer",
                            minWidth: isDesktop ? 100 : 130, // Much wider for mobile
                            minHeight: isDesktop ? "auto" : "50px",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.background = "#f9fafb")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.background = "transparent")
                          }
                        >
                          {cryptoIcons[c]}
                          <span>{c}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8,
                  fontSize: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#16a34a",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      background: "#16a34a",
                      borderRadius: 9999,
                      display: "inline-block",
                      marginRight: 8,
                    }}
                  ></span>
                  No hidden fees
                </div>
                <div style={{ color: "#6b7280" }}>
                  Estimated rate: 1 {sendCurrency} ~ {conversionRate.toFixed(6)}{" "}
                  {getCurrency}
                </div>
              </div>
            </div>

            {/* You Get */}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  color: "#6b7280",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                You Get
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <input
                    value={getAmount}
                    readOnly
                    style={{
                      flex: isDesktop ? 1 : "0 1 60%", // Limit input to 60% on mobile
                      padding: "12px 16px",
                      fontSize: 18,
                      fontWeight: 700,
                      border: "none",
                      outline: "none",
                      minWidth: 0, // Allow input to shrink
                    }}
                  />
                  <div
                    onClick={() => setShowGetDropdown(!showGetDropdown)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 14px",
                      background: "#111213ff",
                      borderLeft: "1px solid #09090aff",
                      cursor: "pointer",
                      minWidth: isDesktop ? 100 : 140, // Wider dropdown area
                      flex: isDesktop ? "none" : "0 0 auto", // Don't shrink on mobile
                    }}
                  >
                    {getReceiveCurrencyDisplay().icon}
                    <span style={{ fontWeight: 600 }}>
                      {getReceiveCurrencyDisplay().code}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                {/* Get Currency Dropdown */}
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
                            padding: "12px 14px",
                            background: "#111213ff",
                            borderLeft: "1px solid #09090aff",
                            cursor: "pointer",
                            minWidth: isDesktop ? 100 : 130, // Much wider for mobile
                            minHeight: isDesktop ? "auto" : "50px",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.background = "#f9fafb")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.background = "transparent")
                          }
                        >
                          {cryptoIcons[c]}
                          <span>{c}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div
                style={{
                  color: "#1d4ed8",
                  fontSize: 12,
                  marginTop: 6,
                  cursor: "pointer",
                }}
              >
                Sign up to get cashback~ $0.01
              </div>
            </div>

            {/* Recipient Wallet */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <label style={{ color: "#6b7280", fontSize: 13 }}>
                  Recipient Wallet
                </label>
                <span style={{ color: "#6b7280", fontSize: 12 }}>
                  Don't have a wallet yet?
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder={`Enter a valid ${getCurrency} wallet`}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: `1px solid ${
                      wallet.trim() !== ""
                        ? isWalletValid
                          ? "#10b981"
                          : "#ef4444"
                        : "#e5e7eb"
                    }`,
                    borderRadius: 10,
                    outline: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color:
                      wallet.trim() !== ""
                        ? isWalletValid
                          ? "#10b981"
                          : "#ef4444"
                        : "#9ca3af",
                  }}
                >
                  {wallet.trim() !== "" && isWalletValid ? "✓" : "▦"}
                </span>
              </div>
              {wallet.trim() !== "" && !isWalletValid && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: 12,
                    marginTop: 6,
                  }}
                >
                  Please enter a valid {getCurrency} wallet address
                </div>
              )}
              <div style={{ color: "#9ca3af", fontSize: 11, marginTop: 6 }}>
                FIO protocol names are supported
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  color: "#6b7280",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    outline: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color: "#10b981",
                  }}
                >
                  ✉
                </span>
              </div>
            </div>

            {/* Refund Wallet */}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  color: "#6b7280",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                Refund Wallet (Optional)
              </label>
              <div style={{ position: "relative" }}>
                <input
                  value={refundWallet}
                  onChange={(e) => setRefundWallet(e.target.value)}
                  placeholder={`Enter your ${sendCurrency} refund address`}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    outline: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color: "#10b981",
                  }}
                >
                  ▦
                </span>
              </div>
            </div>

            {/* Terms */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <div style={{ color: "#6b7280", fontSize: 13 }}>
                I've read and agree to the BitEX{" "}
                <a href="#" style={{ color: "#10b981" }}>
                  Terms of Use
                </a>
                ,{" "}
                <a href="#" style={{ color: "#10b981" }}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" style={{ color: "#10b981" }}>
                  Risk Disclosure Statement
                </a>
              </div>
            </div>

            {/* Confirm */}
            <button
              onClick={() =>
                canConfirm &&
                navigate(
                  `/transaction?tab=${activeTab}&send=${sendAmount}&from=${sendCurrency}&to=${getCurrency}&get=${getAmount}&wallet=${wallet}&email=${email}&refundWallet=${refundWallet}`
                )
              }
              disabled={!canConfirm}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 10,
                background: canConfirm ? "#10b981" : "#e5e7eb",
                color: canConfirm ? "#fff" : "#6b7280",
                fontWeight: 700,
                border: "none",
                cursor: canConfirm ? "pointer" : "not-allowed",
              }}
            >
              Confirm
            </button>
          </div>
        </div>

        <TipsCard />
      </div>

      {/* Right: Sidebar */}
      <div
        style={{
          width: isDesktop ? 300 : "100%",
          position: isDesktop ? "sticky" : "static",
          top: isDesktop ? 20 : 0,
        }}
      >
        <div
          style={{
            background: "#1f2937",
            borderRadius: 12,
            color: "#fff",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div
              style={{
                width: 24,
                height: 24,
                background: "#22c55e",
                borderTopRightRadius: 8,
              }}
            ></div>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
            Trade like a Whale
          </div>
          <div style={{ marginTop: 12, display: "grid", gap: 8, fontSize: 14 }}>
            <div>★ Cashback for exchange</div>
            <div>★ Secure crypto storage</div>
            <div>★ Staking</div>
            <div>★ More benefits</div>
          </div>
          <button
            style={{
              width: "100%",
              marginTop: 16,
              background: "#10b981",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "10px 12px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Join Pro
          </button>
        </div>

        <div style={{ background: "#f3f4f6", borderRadius: 12, padding: 16 }}>
          <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 8 }}>
            Please make sure you're on https://BitexGlobal.net
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              borderRadius: 8,
              padding: 8,
            }}
          >
            <span style={{ color: "#10b981" }}>🔒 Secure</span>
            <span style={{ color: "#6b7280", fontSize: 13 }}>
              | https://BitexGlobal.net
            </span>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showSendDropdown || showGetDropdown) && (
        <div
          onClick={() => {
            setShowSendDropdown(false);
            setShowGetDropdown(false);
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default ExchangePage;
