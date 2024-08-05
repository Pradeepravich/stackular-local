import React, { useEffect, useState } from "react";
import Logo_b from "../assets/images/logos/Logo_b.png";
import {
  Linkedin,
  Instagram,
  Whatsapp,
  Github,
  Facebook,
  Twitter,
  ArrowUpShort,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";

const Footer = () => {  
  const { data } = useKontentServiceApi("footer");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("load", handleScroll);
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row footer_first">
            <div className="col-lg-8 col-md-6 d-flex">
              <div>
                <h2>
                  {data?.elements?.reach_out?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </h2>
                <p>
                  {data?.elements?.step_into?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </p>
                <div className="footer-contact-info">
                  <span>
                    <a href="mailto:info@stackular.com">
                      {data?.elements?.email?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </a>
                  </span>
                  <span>
                    <a href="tel:+14436097406">
                      {data?.elements?.telephone?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer-links d-flex">
              <figure className="figure">
                <img
                  src={data?.elements?.footer_img?.value[0]?.url}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row footer_second">
            <div className="col-lg-3 col-md-6 d-flex">
              <div>
                <img src={Logo_b} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 footer-links d-flex">
              <div className="footer-menu">
                <nav>
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
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <div className="social-links d-flex">
                <a
                  href="https://twitter.com/stackular"
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100088815441246"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/stackular/"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/stackular/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://api.whatsapp.com/message/4F6NRKL5EAFFC1"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Whatsapp />
                </a>
                <a
                  href="https://github.com/Stackular"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row footer_third">
            <div className="copyright">&copy; 2024, All Rights Reserved</div>
          </div>
        </div>
      </footer>
      <a
        href="#scroll-to-top"
        className={`scroll-top ${
          isActive ? "active" : ""
        } d-flex align-items-center justify-content-center`}
        onClick={scrollToTop}
      >
        <ArrowUpShort color="#00000" size="1.7em" />
      </a>
    </>
  );
};

export default Footer;
