import React from "react";
import "./LimitlessExchange.css";

const LimitlessExchange = () => {
  return (
    <section className="limitless-section">
      <div className="limitless-container">
        <div className="limitless-illustration">
          <div className="infinity"></div>
          <div className="coins"></div>
        </div>
        <div className="limitless-content">
          <h2 className="limitless-title">Limitless exchange</h2>
          <p className="limitless-subtitle">
            You can start from less than $2 and swap as much crypto as you want — there is no upper limit
          </p>
          <div className="range-line">
            <span className="min">$2</span>
            <div className="line"><span className="arrow"></span></div>
            <span className="max">∞</span>
          </div>
          <a className="more-link" href="#">More details →</a>
        </div>
      </div>
    </section>
  );
};

export default LimitlessExchange;


