import React from "react";
import "./ProBenefits.css";

const ProBenefits = () => {
  return (
    <section className="pro-section">
      <div className="pro-container">
        <div className="pro-content">
          <h2 className="pro-title">Boost your profits with BitEX Pro</h2>
          <p className="pro-subtitle">
            Create a free account and unlock a world of benefits. Maximize your
            income and make your funds work for you!
          </p>
          <ul className="pro-list">
            <li>
              <span className="tick">✓</span> Get cashback for every transaction
            </li>
            <li>
              <span className="tick">✓</span> Save on fees with off-chain swaps
            </li>
            <li>
              <span className="tick">✓</span> Perform AML address checks
            </li>
            <li>
              <span className="tick">✓</span> Upgrade your level for more
              features
            </li>
          </ul>
          <a className="more-link" href="#">
            More details →
          </a>
        </div>
        <div className="pro-illustration">
          <div className="diamond"></div>
          <div className="icons-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default ProBenefits;
