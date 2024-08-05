import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Services from "../sections/Services";
import { IContentItem, IContentItemElements } from "@kontent-ai/delivery-sdk";
import useKontentServiceApi from "../services/useKontentServiceApi";
import kontentService from "../services/kontentService";

const ServicesPage = () => {
  const { data } = useKontentServiceApi("services");
  const [elements, setElements] = useState<IContentItem<IContentItemElements> | null>(null);
  useEffect(() => {
    const loadContentElements = async () => {
      try {
        const itemElements = await kontentService("services_page");
        setElements(itemElements);
      } catch (error) {
        console.log("Failed to fetch content item elements.");
      }
    };
    loadContentElements();
  }, []);

  return (
    <>
      <Header />
      <Services
        pageData={elements}        
        services={data}        
      />
      <Footer />
    </>
  );
};

export default ServicesPage;
