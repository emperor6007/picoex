import React from "react";
import "./ProductsSuite.css";
import custodyIcon from "../assets/now-сustody-icon.svg";
import paymentsIcon from "../assets/nowpayments-icon.svg";
import nodesIcon from "../assets/nownodes-icon.svg";
import tokenIcon from "../assets/changenowpro-icon.svg";
import walletIcon from "../assets/nowwallet-icon.svg";
import blogIcon from "../assets/nowblog-icon.svg";
import proIcon from "../assets/changenow-icon.svg";
import trackerIcon from "../assets/nowtracker-icon.svg";

const productsTop = [
  {
    iconColor: "#29e085",
    title: "BitEX App",
    text: "Exchange more than 250 cryptos with great rates on the go!",
    image: walletIcon,
  },
  {
    iconColor: "#3b82f6",
    title: "BitEX Tracker App",
    text: "One portfolio tracker for all your assets. Track, analyze and get better results on the go.",
    image: trackerIcon,
  },
  {
    iconColor: "#22d3a9",
    title: "BitEX Wallet",
    text: "Store, buy with fiat, exchange, and stake crypto in a mobile or desktop app. 40+ blockchains supported.",
    image: custodyIcon,
  },
  {
    iconColor: "#9aa0ff",
    title: "BitEX Token",
    text: "The first native digital asset introduced by an instant exchange platform.",
    image: tokenIcon,
  },
  {
    iconColor: "#f5c76a",
    title: "BitEX Blog",
    text: "Hot crypto news, useful longreads, market analysis pieces, and more – all in one place.",
    image: blogIcon,
  },
  {
    iconColor: "#8c84ff",
    title: "BitEX Pro",
    text: "More personalized and smoother experience. Get the most out of BitEX solutions.",
    image: proIcon,
  },
];

const productsBottom = [
  {
    iconColor: "#7db7ff",
    title: "BitEX Payments",
    text: "Integrate NOWPayments and start receiving online payments in crypto!",
    image: paymentsIcon,
  },
  {
    iconColor: "#3b82f6",
    title: "BitEX Custody",
    text: "Receive, store, convert and manage crypto with the single robust API.",
    image: custodyIcon,
  },
  {
    iconColor: "#a56adf",
    title: "BitEX Nodes",
    text: "Explorer and Node APIs. 45 Blockchains are supported.",
    image: nodesIcon,
  },
];

const ProductCard = ({ iconColor, title, text, image }) => (
  <div className="ps-card">
    <div className="ps-icon" style={{ backgroundColor: iconColor }}>
      <img src={image} alt={`${title} Icon`} />
    </div>
    <div>
      <h3 className="ps-title">{title}</h3>
      <p className="ps-text">{text}</p>
    </div>
  </div>
);

const ProductsSuite = () => {
  return (
    <section className="ps-section">
      <div className="ps-grid">
        {productsTop.map((p, i) => (
          <ProductCard key={`t-${i}`} {...p} />
        ))}
      </div>

      <div className="ps-grid bottom-row">
        {productsBottom.map((p, i) => (
          <ProductCard key={`b-${i}`} {...p} />
        ))}
      </div>
      <div className="ps-twinkles">
        <span>✦</span>
        <span>✦</span>
      </div>
    </section>
  );
};

export default ProductsSuite;
