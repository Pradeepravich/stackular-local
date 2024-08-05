import React, { FC } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { PATHS } from "../utils";

interface Props {
  data: any;
}

const PortfolioInfo: FC<Props> = ({ data }) => {
  
  return (
    <>
      <main id="main">
        <div className="container">
          <section id="join" className="project-info-sec hero-padding">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 project-info-header">
                  <div className="section-header">
                    <h5 className="text-white">
                      {data?.elements?.tag?.value?.replace(/(<([^>]+)>)/gi, "")}{" "}
                      /
                    </h5>
                    <h1>
                      {data?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                    <p>
                      {data?.elements?.description?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <div className="">
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label1?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label2?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label3?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <img
                    src={data?.elements?.image?.value[0]?.url}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects sm-8">
            <div className="container">
              <div className="row mt-lg-5 g-0">
                <div className="col-lg-3 project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__title1?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9 job-cards mb-3">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__description1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 g-0">
                <div className="col-lg-3 project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__title2?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9 job-cards mb-3">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__description2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <img
                      src={
                        data?.elements?.portfolio_second_block_info__large_img
                          ?.value[0]?.url
                      }
                      className="figure-img img-fluid rounded mt-3"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 g-0">
                <div className="col-lg-3 project-issues-info">
                  <h4 className="d-none d-md-block project-issues-info-width">
                    {data?.elements?.portfolio_second_block_info__technology_tools_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                  <h4 className="d-block d-md-none project-issues-info-width">
                    {data?.elements?.portfolio_second_block_info__technology_tools_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9 job-cards mb-3">
                  <div className="project-info tec-tools flex items-center">
                    {data?.elements
                      ?.portfolio_second_block_info__technology_tools_images
                      ?.value &&
                      data?.elements?.portfolio_second_block_info__technology_tools_images?.value.map(
                        (item: any) => (
                          <span key={item?.name}>
                            <img
                              src={item?.url}
                              className="figure-img img-fluid rounded"
                              alt="..."
                            />
                          </span>
                        )
                      )}
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 g-0">
                <div className="col-lg-3 project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__result?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9 job-cards mb-3">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__result_description?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 g-0">
                <div className="col-lg-3 project-issues-info">
                  <h4 className="d-none d-md-block project-issues-info-width">
                    {data?.elements?.portfolio_second_block_info__success_metrics?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                  <h4 className="d-block d-md-none">
                    {data?.elements?.portfolio_second_block_info__success_metrics?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9 job-cards mb-3">
                  <div className="project-info job-card">
                    <div className="row">
                      <div className="col-lg-3 metrics">
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_orders
                                ?.value
                            }
                            duration={2}
                            prefix="+"
                            suffix="%"
                            className="portfolio-info-count"
                          />
                        </h4>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_orders_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 metrics">
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_revenue
                                ?.value
                            }
                            duration={2}
                            prefix="+$"
                            suffix="M"
                            className="portfolio-info-count"
                          />
                        </h4>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_revenue_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 metrics">
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_performance
                                ?.value
                            }
                            duration={2}
                            prefix="0"
                            suffix="x"
                            className="portfolio-info-count"
                          />
                        </h4>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_performance_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 metrics">
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_completion
                                ?.value
                            }
                            duration={2}
                            prefix="+"
                            suffix="%"
                            className="portfolio-info-count"
                          />
                        </h4>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_completion_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="works" className="other-works section-padding1">
            <div className="container">
              <div className="row mt-lg-5 g-0">
                <div className="section-header">
                  <h3>
                    {data?.elements?.other_works__other_works_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h3>
                </div>

                <div className="col-lg-4 other-work-cards">
                  <div className="other-work-card">
                    <img
                      src={
                        data?.elements?.other_works__work_image2?.value[0]?.url
                      }
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                    <h4>
                      {data?.elements?.other_works__work_title2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.other_works__work_description2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <Link
                      to={`${PATHS.portfolioInfo}?id=${btoa(
                        data?.elements?.other_works__work_title2?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )
                      )}`}
                    >
                      {data?.elements?.other_works__work_btn_title2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 other-work-cards">
                  <div className="other-work-card">
                    <img
                      src={
                        data?.elements?.other_works__work_image3?.value[0]?.url
                      }
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                    <h4>
                      {data?.elements?.other_works__work_title3?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.other_works__work_description3?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <Link
                      to={`${PATHS.portfolioInfo}?id=${btoa(
                        data?.elements?.other_works__work_title3?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )
                      )}`}
                    >
                      {data?.elements?.other_works__work_btn_title3?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 other-work-cards">
                  <div className="other-work-card">
                    <img
                      src={
                        data?.elements?.other_works__work_image1?.value[0]?.url
                      }
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                    <h4>
                      {data?.elements?.other_works__work_title1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.other_works__work_description1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <Link
                      to={`${PATHS.portfolioInfo}?id=${btoa(
                        data?.elements?.other_works__work_title1?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )
                      )}`}
                    >
                      {data?.elements?.other_works__work_btn_title1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PortfolioInfo;
