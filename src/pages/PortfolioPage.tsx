import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Portfolio from "../sections/Portfolio";
import useKontentServiceApi from "../services/useKontentServiceApi";

const PortfolioPage = () => {
  const { data } = useKontentServiceApi("portfolio_page");
  return (
    <>
      <Header />
      <Portfolio data={data} />
      <Footer />
    </>
  );
};

export default PortfolioPage;
