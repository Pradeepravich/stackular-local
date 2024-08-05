import React, { FC } from "react";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import play from "../assets/images/general/8180-4a2b-a6e4-784e016a00b3.mp4";
import TribeSection from "./TribeSection";

interface Props {
  data: any;
}

const JoinUs: FC<Props> = ({ data }) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetDiv = document.getElementById("projects");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="join" className="join-us-sec hero-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-7 join-us-header">
                    <div className="section-header mt-5">
                      <h1>
                        {data?.elements?.title?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <p>
                        {data?.elements?.description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <div className="form-group">
                        <a
                          href={"#projects"}
                          onClick={scrollToSection}
                          className="btn btn-primary !text-left !py-2 !pl-4 group"
                        >
                          {data?.elements?.btn_title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                          <span className="float-end ml-4 ">
                            <ArrowDownCircleFill
                              color="#87FCFE"
                              size="1.7em"
                              className="arrow-right-circle-fill"
                            />
                          </span>
                          <span className="clear-both"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src={data?.elements?.joinus_img?.value[0]?.url}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="join_us" className="join-inner-sec mt-5">
              <div className="container">
                <div className="row gy-lg-4">
                  <div className="section-header">
                    <h3>
                      {data?.elements?.treasure_section?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h3>
                  </div>
                  <div className="col-lg-4 mt-lg-5 mt-sm-3 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.work_life_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.work_life?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.recognition_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.recognition?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.growth_opportunities_img?.value[0]
                            ?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.growth_opportunities?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.indoor_games_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.indoor_games?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-lg-5 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.competitive_pay_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.competitive_pay?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.innovation_labs_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.innovation_labs?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.flexible_leave_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.flexible_leave?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.daily_snacks_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.daily_snacks?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-lg-5 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.continuous_learning_img?.value[0]?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.continuous_learning?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.help_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.help?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.spot_bonuses_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.spot_bonuses?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.unlimited_coffee_img?.value[0]?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.unlimited_coffee?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-lg-5 gy-lg-4">
                  <div className="col-lg-6 mt-3">
                    <img
                      src={data?.elements?.image1?.value[0]?.url}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6 mt-lg-3">
                    <div className="col-lg-12">
                      <video autoPlay muted loop id="join_us_video">
                        <source src={play} type="video/mp4" />
                      </video>
                    </div>
                    <div className="row mt-lg-3">
                      <div className="col-lg-6">
                        <img
                          src={data?.elements?.image2?.value[0]?.url}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={data?.elements?.image3?.value[0]?.url}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects our-jobs smt-8">
              <div className="container">
                <div className="section-header">
                  <p>Unlock Your Potential</p>
                  <h2>OUR CURRENT OPENINGS</h2>
                </div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-5 job-titles">
                    <h4 className="small">Software Development</h4>
                    <p>02 positions</p>
                  </div>
                  <div className="col-lg-7 align-items-center job-cards mb-3">
                    <div className="job-card">
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">Frontend Developer</h4>
                        <div className="justify-content-end">
                          <span>
                            <i className="bi bi-clock"></i>Full-time
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>Hyderabad, India
                          </span>
                        </div>
                      </div>
                      <p>
                        We are looking for experienced frontend developer to
                        collaborate with our team
                      </p>
                      <a href="#arrow" className="btn btn-linkedin">
                        <i className="bi bi-linkedin"></i> Apply with LinkedIn
                      </a>
                    </div>
                    <div className="job-card">
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">Senior Backend Developer</h4>
                        <div className="justify-content-end">
                          <span>
                            <i className="bi bi-clock"></i>Full-time
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>Hyderabad, India
                          </span>
                        </div>
                      </div>
                      <p>
                        We are looking for experienced frontend developer to
                        collaborate with our team
                      </p>
                      <a href="#arrow" className="btn btn-linkedin">
                        <i className="bi bi-linkedin"></i> Apply with LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3 border-middle"></div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-5 job-titles">
                    <h4 className="small">Designer</h4>
                    <p>02 positions</p>
                  </div>
                  <div className="col-lg-7 align-items-center job-cards mb-3">
                    <div className="job-card">
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">Graphic Designer</h4>
                        <div className="justify-content-end">
                          <span>
                            <i className="bi bi-clock"></i>Full-time
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>Hyderabad, India
                          </span>
                        </div>
                      </div>
                      <p>
                        We are looking for experienced frontend developer to
                        collaborate with our team
                      </p>
                      <a href="#arrow" className="btn btn-linkedin">
                        <i className="bi bi-linkedin"></i> Apply with LinkedIn
                      </a>
                    </div>
                    <div className="job-card">
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">UX Researcher</h4>
                        <div className="justify-content-end">
                          <span>
                            <i className="bi bi-clock"></i>Full-time
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>Hyderabad, India
                          </span>
                        </div>
                      </div>
                      <p>
                        We are looking for experienced frontend developer to
                        collaborate with our team
                      </p>
                      <a href="#arrow" className="btn btn-linkedin">
                        <i className="bi bi-linkedin"></i> Apply with LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3 border-middle"></div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-5 job-titles">
                    <h4 className="small">Customer Management</h4>
                    <p>01 positions</p>
                  </div>
                  <div className="col-lg-7 align-items-center job-cards">
                    <div className="job-card">
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">Customer Services</h4>
                        <div className="justify-content-end">
                          <span>
                            <i className="bi bi-clock"></i>Full-time
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>Hyderabad, India
                          </span>
                        </div>
                      </div>
                      <p>
                        We are looking for experienced frontend developer to
                        collaborate with our team
                      </p>
                      <a href="#arrow" className="btn btn-linkedin">
                        <i className="bi bi-linkedin"></i> Apply with LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <TribeSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default JoinUs;
