import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Partners from "./components/Partners";
import SpaceHero from "./components/SpaceHero";
import NonCustodial from "./components/NonCustodial";
import DeFiBased from "./components/DeFiBased";
import ProBenefits from "./components/ProBenefits";
import LimitlessExchange from "./components/LimitlessExchange";
import LeadingApp from "./components/LeadingApp";
import PressSection from "./components/PressSection";
import TalkingCarousel from "./components/TalkingCarousel";
import ProductsSuite from "./components/ProductsSuite";
import SiteFooter from "./components/SiteFooter";
import ExchangePage from "./components/ExchangePage";
import TransactionPage from "./components/TransactionPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Partners />
              <SpaceHero />
              <NonCustodial />
              <DeFiBased />
              <ProBenefits />
              <LimitlessExchange />
              <LeadingApp />
              <PressSection />
              <TalkingCarousel />
              <ProductsSuite />
            </>
          }
        />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default App;
