import React from "react";
import "./DeFiBased.css";

const DeFiBased = () => {
  return (
    <section className="defi-section">
      <div className="defi-container">
        <div className="defi-illustration">
          <div className="unicorn"></div>
          <div className="bunny"></div>
        </div>
        <div className="defi-content">
          <h2 className="defi-title">DeFi-based</h2>
          <p className="defi-subtitle">
            Gain access to decentralized liquidity of Uniswap and Pancakeswap
            through BitEX:
          </p>
          <ul className="defi-list">
            <li>
              <span className="tick">✓</span> DEX-exclusive assets crosschain
              swaps
            </li>
            <li>
              <span className="tick">✓</span> Lower network fees and less
              on-chain txs
            </li>
            <li>
              <span className="tick">✓</span> Simplified listing for a young
              start-ups
            </li>
          </ul>
          <a className="more-link" href="#">
            More details →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeFiBased;
