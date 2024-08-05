import React, { useCallback, useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import PortfolioInfo from "../sections/PortfolioInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PortfolioInfoPage = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [code, setCode] = useState<string>("");
  const validateURLParams = useCallback(
    (str: string) => {
      try {
        return atob(str);
      } catch (err) {
        navigate(PATHS.notFoundPage);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const id = query.get("id") as string;
    const decodedStr = validateURLParams(id) as string;
    const slug = decodedStr
      ?.toString()
      ?.toLowerCase()
      ?.trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "_")
      .replace(/-/g, "");
    const codename = slug;
    setCode(codename);
  }, [query, validateURLParams]);
  const { data, errorCode } = useKontentServiceApi(code);

  useEffect(() => {
    if(code && errorCode === 100){
      navigate(PATHS.notFoundPage);
    }
  },[code, errorCode, navigate])

  return (
    <>
      <Header />
      <PortfolioInfo data={data} />
      <Footer />
    </>
  );
};

export default PortfolioInfoPage;
