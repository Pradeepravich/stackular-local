import React, { useEffect } from "react";
import { FC } from "react";
import Logo from "../assets/images/logos/Logo.png";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";

interface Props {}

const Header: FC<Props> = () => {
  useEffect(() => {
    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 100
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      });
    }

    const currentPageUrl = window.location.href;
    const navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach((link) => {
      const menuItemUrl = link.getAttribute("href") || "";
      if (currentPageUrl.includes(menuItemUrl)) {
        link.classList.add("active");
      }
    });
  }, []);

  return (
    <>
      <div className="top-boreder fixed-top"></div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link
            to={"/"}
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src={Logo} alt="" />
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to={PATHS.about}>About</Link>
              </li>
              <li>
                <Link to={PATHS.services}>Services</Link>
              </li>
              <li>
                <Link to={PATHS.portfolio}>Portfolio</Link>
              </li>
              <li>
                <Link to={PATHS.joinUs}>Join Us</Link>
              </li>
              <li>
                <Link className="d-lg-none" to={PATHS.contactUs}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Link className="btn-contact-us d-none d-lg-block" to={PATHS.contactUs}>
            Contact Us
          </Link>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
