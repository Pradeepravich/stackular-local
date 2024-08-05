import React from "react";
import Header from "../sections/Header";
import About from "../sections/About";
import Footer from "../sections/Footer";
import "../style/style.css";
import useKontentServiceApi from "../services/useKontentServiceApi";

const AboutPage = () => {
 
  const { data } = useKontentServiceApi("about_page");

  return (
    <>
      <Header />
      <About data={data} />
      <Footer />
    </>
  );
};

export default AboutPage;
