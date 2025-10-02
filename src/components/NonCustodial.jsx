import React from "react";
import "./NonCustodial.css";

const NonCustodial = () => {
  return (
    <section className="nc-section">
      <div className="nc-container">
        <div className="nc-illustration">
          <div className="hacker-mask">
            <div className="mask-eyes"></div>
            <div className="mask-smile"></div>
          </div>
          <div className="laptop">
            <div className="screen-lock">🔒</div>
          </div>
        </div>

        <div className="nc-content">
          <h2 className="nc-title">Non-custodial platform</h2>
          <p className="nc-subtitle">
            BitEX retains your privacy and guarantees security. We are a
            non-custodial cryptocurrency exchange service:
          </p>
          <ul className="nc-list">
            <li>
              <span className="tick">✓</span> We respect your privacy
            </li>
            <li>
              <span className="tick">✓</span> We don’t control your funds
            </li>
            <li>
              <span className="tick">✓</span> We don’t force you to sign up
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NonCustodial;
