import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Contact from "../sections/Contact";
import useKontentServiceApi from "../services/useKontentServiceApi";

const ContactPage = () => {

  const { data } = useKontentServiceApi("contact_us_page");

  return (
    <>
      <Header />
      <Contact data={data} />
      <Footer />
    </>
  );
};

export default ContactPage;
