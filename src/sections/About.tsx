import React, { FC } from "react";
import CountUp from "react-countup";

interface Props {
  data: any;
}

const About: FC<Props> = ({ data }) => {
  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="about" className="about-sec hero-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10">
                    <div className="section-header">
                      <h1>
                        {data?.elements?.we_take_pride?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <p>
                        {data?.elements?.we_specialize_in_custom?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
                <div className="col-lg-12 d-none mt-lg-5 d-md-block">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <img
                        src={data?.elements?.top_left_img?.value[0]?.url}
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <img
                        src={data?.elements?.top_right_img?.value[0]?.url}
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 d-block d-md-none">
                  <div className="row gy-4">
                    <div className="about-left-img">
                      <img
                        src={data?.elements?.top_left_img?.value[0]?.url}
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <div className="about-right-img">
                      <img
                        src={data?.elements?.top_right_img?.value[0]?.url}
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects sm-8">
              <div className="container">
                <div className="row g-0">
                  <div className="col-lg-6 project-issues-info">
                    <h2 className="small">
                      {data?.elements?.our_mission?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h2>
                  </div>
                  <div className="col-lg-6 job-cards">
                    <div className="project-info">
                      <p>
                        {data?.elements?.our_mission_data?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects smb-8">
              <div className="container">
                <div className="row g-0">
                  <div className="col-lg-6 project-issues-info">
                    <h2 className="small">
                      {data?.elements?.our_vision?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h2>
                  </div>
                  <div className="col-lg-6 job-cards">
                    <div className="project-info">
                      <p>
                        {data?.elements?.our_vision_data?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="our_list" className="our-list section-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-3 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.locations?.value}
                        duration={2}
                        prefix="0"
                      />
                    </h2>
                    <p>
                      {data?.elements?.locations_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.clients?.value}
                        duration={3}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.clients_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.consultants?.value}
                        duration={2}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.consultants_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 our-list-info text-center">
                    <img
                      src={data?.elements?.happiness_index_img?.value[0]?.url}
                      className="smile_gif img-fluid mx-auto"
                      alt=""
                    />
                    <p>
                      {data?.elements?.happiness_index?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="founding" className="founding-team sm-8">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-4 founding-header">
                    <div className="section-header">
                      <h2 className="small">
                        {data?.elements?.founding_team?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h2>
                      <p>
                        {data?.elements?.we_both_bring?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 all-founders">
                    <div className="row">
                      <div className="col-lg-6 founder-card mt-5">
                        <div className="founders_img">
                          <img
                            src={
                              data?.elements?.founder_background_img?.value[0]
                                ?.url
                            }
                            className="img-fluid founder_bg_img mx-auto"
                            alt=""
                          />
                          <img
                            src={
                              data?.elements?.team_founder_img1?.value[0]?.url
                            }
                            className="img-fluid founder_img mx-auto"
                            alt=""
                          />
                        </div>
                        <h4 className="mt-2">
                          {data?.elements?.team_founder1?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.team_founder1_role?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <img
                          src={data?.elements?.linkedin_img?.value[0]?.url}
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 founder-card mt-5">
                        <div className="founders_img">
                          <img
                            src={
                              data?.elements?.founder_background_img?.value[0]
                                ?.url
                            }
                            className="img-fluid founder_bg_img mx-auto"
                            alt=""
                          />
                          <img
                            src={
                              data?.elements?.team_founder_img2?.value[0]?.url
                            }
                            className="img-fluid founder_img mx-auto"
                            alt=""
                          />
                        </div>
                        <h4 className="mt-2">
                          {data?.elements?.team_founder2?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.team_founder2_role?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <img
                          src={data?.elements?.linkedin_img?.value[0]?.url}
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="make_us" className="make-us-sec">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-12 commitment-head">
                    <div className="section-header">
                      <h6 className="text-white">
                        {data?.elements?.pioneering?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h6>
                      <h3 className="mt-lg-3">
                        {data?.elements?.commitment?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 gy-4">
                  <div className="col-lg-6 commitment-cards">
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.agile_process?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.nimble_process?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 commitment-cards">
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.global_delivery?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.global_delivery_with?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 commitment-cards">
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.on_time?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.every_engineer?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 commitment-cards">
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.under_promise?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.manage_expectations?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
