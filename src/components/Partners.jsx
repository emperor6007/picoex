import React from "react";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-scroll">
        <div className="partners-track">
          {/* First set of logos */}
          <div className="partner-item">
            <div className="partner-logo swapzone">
              <div className="logo-symbol">
                <div className="satellite-icon">
                  <div className="satellite-circle"></div>
                  <div className="satellite-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                  </div>
                </div>
              </div>
              <span className="partner-name">Swapzone</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo localcoinswap">
              <div className="logo-symbol">
                <div className="overlapping-shapes">
                  <div className="shape shape-blue"></div>
                  <div className="shape shape-yellow"></div>
                </div>
              </div>
              <span className="partner-name">LocalCoinSwap</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo nowwallet">
              <div className="logo-symbol">
                <div className="shield-logo">
                  <div className="shield-outline"></div>
                  <span className="shield-text">NOW</span>
                </div>
              </div>
              <span className="partner-name">wallet</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo exodus">
              <div className="logo-symbol">
                <div className="hexagon-logo">
                  <div className="hex-shape"></div>
                </div>
              </div>
              <span className="partner-name">EXODUS</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo nowpayments">
              <div className="logo-symbol">
                <span className="now-text">NOW</span>
              </div>
              <span className="partner-name">Payments</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo coinrabbit">
              <div className="logo-symbol">
                <div className="coin-button">
                  <span className="coin-text">COIN</span>
                </div>
              </div>
              <span className="partner-name">Rabbit</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo tangem">
              <div className="logo-symbol">
                <div className="tangem-icon">
                  <div className="tangem-shape"></div>
                </div>
              </div>
              <span className="partner-name">tangem</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo guarda">
              <div className="logo-symbol">
                <div className="guarda-shield">
                  <div className="shield-icon"></div>
                </div>
              </div>
              <span className="partner-name">GUARDA</span>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo cakewallet">
              <div className="logo-symbol">
                <div className="cake-logo">
                  <div className="cake-circle">
                    <div className="cake-c">C</div>
                    <div className="cake-w">W</div>
                  </div>
                </div>
              </div>
              <div className="partner-name-multiline">
                <span>Cake</span>
                <span>Wallet</span>
              </div>
            </div>
          </div>

          <div className="partner-item">
            <div className="partner-logo rubic">
              <div className="logo-symbol">
                <div className="rubic-cube">
                  <div className="cube-3d"></div>
                </div>
              </div>
              <span className="partner-name">Rubic</span>
            </div>
          </div>

          {/* Space for additional companies */}
          <div className="partner-item placeholder">
            <div className="partner-logo add-company">
              <div className="logo-symbol">
                <div className="plus-icon">+</div>
              </div>
              <span className="partner-name">Add Company</span>
            </div>
          </div>

          <div className="partner-item placeholder">
            <div className="partner-logo add-company">
              <div className="logo-symbol">
                <div className="plus-icon">+</div>
              </div>
              <span className="partner-name">Add Company</span>
            </div>
          </div>

          <div className="partner-item placeholder">
            <div className="partner-logo add-company">
              <div className="logo-symbol">
                <div className="plus-icon">+</div>
              </div>
              <span className="partner-name">Add Company</span>
            </div>
          </div>

          <div className="partner-item placeholder">
            <div className="partner-logo add-company">
              <div className="logo-symbol">
                <div className="plus-icon">+</div>
              </div>
              <span className="partner-name">Add Company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
