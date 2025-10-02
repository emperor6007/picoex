import React from "react";
import "./PressSection.css";

const PressSection = () => {
  return (
    <section className="press-section">
      <h2 className="press-title">Press about Us</h2>
      <div className="press-grid">
        <article className="press-card">
          <div className="press-logo investing">
            Investing<span>.com</span>
          </div>
          <div className="press-meta">
            BitEX: What Moves the Crypto Exchange Industry?
          </div>
          <div className="press-quote">
            <span className="quote-mark">“</span>
            In this exclusive interview our head of PR explains what forces push
            the crypto exchange platform industry forward.
          </div>
        </article>
        <article className="press-card">
          <div className="press-logo benzinga">BENZINGA</div>
          <div className="press-meta">BitEX Review</div>
          <div className="press-quote">
            <span className="quote-mark">“</span>
            Not only is BitEX safe, it is fast and efficient. It is more secure
            than most centralized cryptocurrency exchanges since it does not
            keep your funds.
          </div>
        </article>
        <article className="press-card">
          <div className="press-logo invezz">invezz</div>
          <div className="press-meta">Review of BitEX</div>
          <div className="press-quote">
            <span className="quote-mark">“</span>
            BitEX has created a benchmark in cryptocurrency swap service. This
            makes them one of the most convenient places to buy cryptos.
          </div>
        </article>
      </div>
    </section>
  );
};

export default PressSection;
