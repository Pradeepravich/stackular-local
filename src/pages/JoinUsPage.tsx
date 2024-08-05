import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import JoinUs from "../sections/JoinUs";
import useKontentServiceApi from "../services/useKontentServiceApi";

const JoinUsPage = () => {

  const { data } = useKontentServiceApi("join_us_page");
  return (
    <>
      <Header />
      <JoinUs data={data} />
      <Footer />
    </>
  );
};

export default JoinUsPage;
