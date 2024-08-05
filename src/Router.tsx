import React from 'react'
import { useRoutes } from 'react-router-dom'; 
import { PATHS } from './utils';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';
import PortfolioInfoPage from './pages/PortfolioInfoPage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceInfoPage from './pages/ServiceInfoPage';
import NoDataPage from './pages/NoDataPage';

const Router = () => {
  return (
    <>
    {useRoutes([
        {
          path: PATHS.home,
          element: <HomePage />,
        },
        {
          path: PATHS.about,
          element: <AboutPage />,
        },
        {
          path: PATHS.services,
          element: <ServicesPage />,
        },
        {
          path: PATHS.portfolio,
          element: <PortfolioPage />,
        },
        {
          path: PATHS.joinUs,
          element: <JoinUsPage />,
        },
        {
          path: PATHS.contactUs,
          element: <ContactPage />,
        },
        {
          path: PATHS.portfolioInfo,
          element: <PortfolioInfoPage />,
        },
        {
          path: PATHS.notFoundPage,
          element: <NotFoundPage />,
        },
        {
          path: PATHS.noDataFoundPage,
          element: <NoDataPage />,
        },
        {
          path: PATHS.serviceInfo,
          element: <ServiceInfoPage />,
        },
        
      ])}
    </>
  )
}

export default Router