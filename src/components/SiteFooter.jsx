import React from "react";
import "./SiteFooter.css";

const footerCols = {
  company: ["About Us", "Press About Us", "Reviews"],
  products: [
    "BitEX Pro",
    "NOW Tracker",
    "Meme coins",
    "DeFi coins",
    "Crypto Bridge",
  ],
  partners: [
    "Development API",
    "Partners Profile",
    "Referral Program",
    "Affiliate program",
    "Partnership",
  ],
  support: ["FAQ", "How It Works", "Contact Us", "Help Center", "Status Page"],
};

const FooterLinks = ({ title, items }) => (
  <div className="sf-col">
    <h4 className="sf-col-title">{title}</h4>
    <ul className="sf-links">
      {items.map((i) => (
        <li key={i}>
          <a href="#">{i}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SiteFooter = () => {
  return (
    <footer className="sf">
      <div className="sf-mid">
        <FooterLinks title="Company" items={footerCols.company} />
        <FooterLinks title="Products" items={footerCols.products} />
        <FooterLinks title="For Partners" items={footerCols.partners} />
        <FooterLinks title="Support" items={footerCols.support} />
      </div>

      <div className="sf-low">
        <div className="sf-tables">
          <div className="sf-table">
            <h5>Buy Crypto</h5>
            <ul>
              {[
                "Buy Bitcoin (BTC)",
                "Buy Ethereum (ETH)",
                "Buy Litecoin (LTC)",
                "Buy Binancecoin (BNB)",
                "Buy Tether (USDT)",
                "Buy Ripple (XRP)",
                "Buy Dogecoin (DOGE)",
              ].map((t) => (
                <li key={t}>
                  <a href="#">{t}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sf-table">
            <h5>Exchange</h5>
            <ul>
              {[
                "Exchange Bitcoin (BTC)",
                "Exchange Ethereum (ETH)",
                "Exchange Litecoin (LTC)",
                "Exchange Binancecoin (BNB)",
                "Exchange Tether (USDT)",
                "Exchange Ripple (XRP)",
                "Exchange Dogecoin (DOGE)",
              ].map((t) => (
                <li key={t}>
                  <a href="#">{t}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sf-table">
            <h5>Exchange Pairs</h5>
            <ul>
              {[
                "BTC to ETH",
                "USDT to XRP",
                "TRX to ADA",
                "BTC to LTC",
                "USDT to DOGE",
                "TRX to MATIC",
                "BTC to BNB",
                "USDT to SOL",
                "TRX to SHIB",
              ].map((t) => (
                <li key={t}>
                  <a href="#">{t}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sf-social">
          <div className="title">Follow us</div>
          <div className="icons">
            <span className="x">𝕏</span>
            <span>✈</span>
            <span>👽</span>
            <span>f</span>
            <span>▶</span>
          </div>
        </div>
      </div>

      <div className="sf-copy">© BitEX — 2025</div>
    </footer>
  );
};

export default SiteFooter;
