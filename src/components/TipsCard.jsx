import React from "react";

const TipsCard = () => {
  return (
    <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", padding: 20, marginTop: 24 }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Useful tips to know</div>

      <div style={{ fontWeight: 700, color: "#111827", marginBottom: 8 }}>We will process your transaction even if you:</div>
      <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>
        {[
          "Send a deposit in the wrong network, if this asset is supported on our service",
          "Create a transaction with a wrong coin",
          "Select an amount and then send a different one",
          "Send more than one deposit for the same transaction",
          "Send a deposit long after the exchange was created or completed",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#111827", fontSize: 14 }}>
            <span style={{ width: 20, height: 20, background: "#dcfce7", color: "#16a34a", borderRadius: 9999, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>✓</span>
            <span>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: "#e5e7eb", margin: "8px 0 16px" }}></div>

      <div style={{ fontWeight: 700, color: "#111827", marginBottom: 8 }}>We will not be able to proceed with the transaction on the initial terms if you:</div>
      <div style={{ display: "grid", gap: 10, marginBottom: 12 }}>
        {[
          "Send a deposit for a fixed-rate exchange after the rate expires, provided that the rate declines over this timeframe",
          "Make a transaction using the wrong contract address",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#111827", fontSize: 14 }}>
            <span style={{ width: 20, height: 20, background: "#fff7ed", color: "#f59e0b", borderRadius: 9999, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>!</span>
            <span>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid #e5e7eb", background: "#f9fafb", borderRadius: 10, padding: 12, color: "#374151", fontSize: 14, marginBottom: 16 }}>
        In these cases, we encourage you to contact our <a href="#" style={{ color: "#10b981" }}>support team</a>. The exchange can be continued from there, or alternatively, you are free to request a refund.
      </div>

      <div style={{ fontWeight: 700, color: "#111827", marginBottom: 8 }}>How to cancel an exchange:</div>
      <div style={{ display: "grid", gap: 10 }}>
        {[
          "If you didn’t send any funds yet, there is no need to cancel the transaction, you can simply create a new one",
          "If you have already sent the funds for the exchange, immediately contact our support team for assistance",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#111827", fontSize: 14 }}>
            <span style={{ width: 20, height: 20, background: "#eef2ff", color: "#6366f1", borderRadius: 9999, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>i</span>
            <span>
              {i === 1 ? (
                <>
                  If you have already sent the funds for the exchange, immediately contact our <a href="#" style={{ color: "#10b981" }}>support team</a> for assistance
                </>
              ) : (
                t
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsCard;


