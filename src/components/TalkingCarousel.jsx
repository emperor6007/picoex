import React from "react";
import "./TalkingCarousel.css";

const items = new Array(6).fill(0).map((_, i) => ({
  id: i,
  name: "Nelson Johnsons", // as in screenshot
  date: "2025-06-16",
  text: "I only use BitEX as a cross chain exchange. I've made many transactions over the last couple of years. It's simple and it always works accurately. The customer service was good also the one time when I...",
}));

const TalkingCarousel = () => {
  return (
    <section className="talking-section">
      <h2 className="talking-title">People are talking</h2>
      <div className="twinkles">
        <span>✦</span>
        <span>✦</span>
      </div>
      <div className="carousel-mask">
        <div className="carousel-track">
          {[...items, ...items].map((it) => (
            <div className="review-card" key={`${it.id}-${Math.random()}`}>
              <div className="review-header">
                <div className="avatar">👤</div>
                <div className="user">
                  <div className="name">{it.name}</div>
                  <div className="verified">✔</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="review-text">{it.text}</p>
              <div className="date">{it.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkingCarousel;
