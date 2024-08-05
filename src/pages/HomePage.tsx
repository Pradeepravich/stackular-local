import React from "react";
import Header from "../sections/Header";
import Home from "../sections/Home";
import Footer from "../sections/Footer";
import "../style/style.css";
import useKontentServiceApi from "../services/useKontentServiceApi";

const HomePage = () => {

  const { data } = useKontentServiceApi("home_page");

  return (
    <>
      <Header />
      <Home
        data={data}        
      />
      <Footer />
    </>
  );
};

export default HomePage;
