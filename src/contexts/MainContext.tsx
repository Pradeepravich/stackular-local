import React, {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { ENVIRONMENT_ID } from "../config";

interface MainContextType {
  data: {};
  setData: React.Dispatch<React.SetStateAction<{}>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  t: TFunction<"translation", undefined>;
  storiesData: {};
  setStoriesData: React.Dispatch<React.SetStateAction<{}>>;
  tribeData: {};
  setTribeData: React.Dispatch<React.SetStateAction<{}>>;
  companyStandardData: {};
  setCompanyStandardData: React.Dispatch<React.SetStateAction<{}>>;
  aboutData: {};
  setAboutData: React.Dispatch<React.SetStateAction<{}>>;
  portfolioData: {};
  setPortfolioData: React.Dispatch<React.SetStateAction<{}>>;
  services: {};
  setServices: React.Dispatch<React.SetStateAction<{}>>;
  footerData: any;
  setFooterData: React.Dispatch<React.SetStateAction<{}>>;
  contactUs: any;
  setContactUs: React.Dispatch<React.SetStateAction<{}>>;
  joinUsData: any;
  setJoinUsData: React.Dispatch<React.SetStateAction<{}>>;
  servicesPageData: any;
  setServicesPagedata: React.Dispatch<React.SetStateAction<{}>>;
  portfolioInfo1: any;
  setPortfolioInfo1: React.Dispatch<React.SetStateAction<{}>>;
  portfolioInfo2: any;
  setPortfolioInfo2: React.Dispatch<React.SetStateAction<{}>>;
  portfolioInfo3: any;
  setPortfolioInfo3: React.Dispatch<React.SetStateAction<{}>>;
  portfolioInfo4: any;
  setPortfolioInfo4: React.Dispatch<React.SetStateAction<{}>>;
  projectUrl: string;
  setProjectUrl: React.Dispatch<React.SetStateAction<string>>;
  serviceInfo1: any;
  setserviceInfo1: React.Dispatch<React.SetStateAction<{}>>;
  serviceInfo2: any;
  setserviceInfo2: React.Dispatch<React.SetStateAction<{}>>;
}

export const MainContext = createContext<MainContextType>(
  {} as MainContextType
);

interface MainContextProps {
  children: ReactNode;
}

const MainContextProvider: FC<MainContextProps> = ({ children }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [storiesData, setStoriesData] = useState({});
  const [tribeData, setTribeData] = useState({});
  const [companyStandardData, setCompanyStandardData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [portfolioData, setPortfolioData] = useState({});
  const [services, setServices] = useState({});
  const [servicesPageData, setServicesPagedata] = useState({});
  const [contactUs, setContactUs] = useState({});
  const [joinUsData, setJoinUsData] = useState({});
  const [footerData, setFooterData] = useState({});
  const [portfolioInfo1, setPortfolioInfo1] = useState({});
  const [portfolioInfo2, setPortfolioInfo2] = useState({});
  const [portfolioInfo3, setPortfolioInfo3] = useState({});
  const [portfolioInfo4, setPortfolioInfo4] = useState({});
  const [serviceInfo1, setserviceInfo1] = useState({});
  const [serviceInfo2, setserviceInfo2] = useState({});
  const [projectUrl, setProjectUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deliveryClient = createDeliveryClient({
          environmentId: ENVIRONMENT_ID,
        });
        const home_page_response = await deliveryClient
          .item("home_page")
          .toPromise();
        const success_stories_response = await deliveryClient
          .item("success_stories")
          .toPromise();
        const join_our_tribe_response = await deliveryClient
          .item("join_our_tribe")
          .toPromise();
        const company_standard_response = await deliveryClient
          .item("what_makes_us")
          .toPromise();
        const about_page_response = await deliveryClient
          .item("about_page")
          .toPromise();
        const portfolio_page_response = await deliveryClient
          .item("portfolio_page")
          .toPromise();
        const services_page_response = await deliveryClient
          .item("services_page")
          .toPromise();
        const services_response = await deliveryClient
          .item("services")
          .toPromise();
        const contact_us_page_response = await deliveryClient
          .item("contact_us_page")
          .toPromise();
        const join_us_page_response = await deliveryClient
          .item("join_us_page")
          .toPromise();
        const footer_response = await deliveryClient.item("footer").toPromise();
        const portfolioInfo1_response = await deliveryClient
          .item("sustainable_delivery_service_platform")
          .toPromise();
        const portfolioInfo2_response = await deliveryClient
          .item("financial_systems_automation")
          .toPromise();
        const portfolioInfo3_response = await deliveryClient
          .item("compliance_mobile_platform")
          .toPromise();
        const portfolioInfo4_response = await deliveryClient
          .item("legacy_app_modernization")
          .toPromise();
        const service_info1_page_response = await deliveryClient
          .item("digital_experience")
          .toPromise();
        const service_info2_page_response = await deliveryClient
          .item("product_development")
          .toPromise();
        setData(home_page_response.data.item);
        setStoriesData(success_stories_response.data.item);
        setTribeData(join_our_tribe_response.data.item);
        setCompanyStandardData(company_standard_response.data.item);
        setAboutData(about_page_response.data.item);
        setPortfolioData(portfolio_page_response.data.item);
        setServicesPagedata(services_page_response.data.item);
        setServices(services_response.data.item);
        setContactUs(contact_us_page_response.data.item);
        setJoinUsData(join_us_page_response.data.item);
        setFooterData(footer_response.data.item);
        setPortfolioInfo1(portfolioInfo1_response.data.item);
        setPortfolioInfo2(portfolioInfo2_response.data.item);
        setPortfolioInfo3(portfolioInfo3_response.data.item);
        setPortfolioInfo4(portfolioInfo4_response.data.item);
        setserviceInfo1(service_info1_page_response.data.item);
        setserviceInfo2(service_info2_page_response.data.item);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <MainContext.Provider
      value={{
        t,
        data,
        setData,
        error,
        setError,
        storiesData,
        setStoriesData,
        tribeData,
        setTribeData,
        companyStandardData,
        setCompanyStandardData,
        aboutData,
        setAboutData,
        portfolioData,
        setPortfolioData,
        services,
        setServices,
        footerData,
        setFooterData,
        contactUs,
        setContactUs,
        joinUsData,
        setJoinUsData,
        servicesPageData,
        setServicesPagedata,
        portfolioInfo1,
        setPortfolioInfo1,
        portfolioInfo2,
        setPortfolioInfo2,
        portfolioInfo3,
        setPortfolioInfo3,
        portfolioInfo4,
        setPortfolioInfo4,
        projectUrl,
        setProjectUrl,
        serviceInfo1,
        setserviceInfo1,
        serviceInfo2,
        setserviceInfo2
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
