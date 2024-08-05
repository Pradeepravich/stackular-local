import React, { FC } from "react";
import CountUp from "react-countup";
import videoTop from "../assets/images/general/6d43-4a9e-93e5-6a8769c08851.mp4";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";
import SuccessStoriesSection from "./SuccessStoriesSection";

interface Props {
  data: any;
}

const Portfolio: FC<Props> = ({ data }) => {
  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio-sec hero-padding">
          <video autoPlay muted loop id="myVideo">
            <source src={videoTop} type="video/mp4" />
          </video>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="section-header">
                  <h1>
                    {data?.elements?.creative_things?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h1>
                  <p>
                    {data?.elements?.showcasing_innovation?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                  <div className="form-group">
                    <Link
                      to={PATHS.contactUs}
                      className="btn btn-primary !text-left py-2 group"
                    >
                      {data?.elements?.talk_to_us?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                      <span className="float-end ml-4 ">
                        <ArrowRightCircleFill
                          color="#87FCFE"
                          size="1.7em"
                          className="arrow-right-circle-fill"
                        />
                      </span>
                      <span className="clear-both"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <section id="map" className="map-sec portfolio-info">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-2 portfolio-projects">
                    <h2>
                      <CountUp
                        start={0}
                        end={data?.elements?.count_clients?.value}
                        duration={2}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.count_clients_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-2 portfolio-projects">
                    <h2>
                      <CountUp
                        start={0}
                        end={data?.elements?.count_projects?.value}
                        duration={2}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.count_projects_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-2 portfolio-projects d-none d-md-block"></div>
                  <div className="col-lg-6">
                    <div className="map-content portfolio-content">
                      <p>
                        {data?.elements?.count_portfolio_content?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="mb-32">
              {/* <SuccessStories successStories={storiesData} /> */}
              <SuccessStoriesSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
