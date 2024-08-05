import React, { FC, useState } from "react";
import CompanyStandards from "./CompanyStandards";

interface Props {
  pageData: any;
  services: any;
}

const Services: FC<Props> = ({ pageData, services }) => {
  const [activeTab, setActiveTab] = useState<string>("Product");
  const openGrid = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    serviceName: string
  ) => {
    setActiveTab(serviceName);
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="services" className="services hero-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8 services-title d-none d-md-block">
                    <h1>
                      {pageData?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                  </div>
                  <div className="col-lg-4 d-flex align-items-end d-none d-md-block">
                    <div className="contact-img ps-0 ps-lg-5">
                      <div className="position-relative">
                        <img
                          src={pageData?.elements?.top_right_img?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 services-title d-block d-md-none">
                    <h1>
                      {pageData?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                  </div>
                </div>
                <div className="col-lg-12 tabs">
                  <div className="box" id="boxid">
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Product")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Product" ? "active_tab" : ""
                        }`}
                      >
                        {services?.elements?.product_development?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Data")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Data" ? "active_tab" : ""
                        }`}
                      >
                        {services?.elements?.data_visualization?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Enterprise")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Enterprise" ? "active_tab" : ""
                        }`}
                      >
                        {services?.elements?.enterprise_systems?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Digital")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Digital" ? "active_tab" : ""
                        }`}
                      >
                        {services?.elements?.digital_experience?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tabcontents mt-5">
                  <div className="textbox">
                    {activeTab === "Product" && (
                      <div id="Product" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.product_strategy_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.product_strategy?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.crafting_strategic?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.strategy_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.product_management_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.product_management?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.strategic_guidance?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.strategy_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                services?.elements?.experience_design_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.experience_design?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.crafting_seamless?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.mvp_implementation_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.mvp_implementation?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.efficiently_build?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.mvp_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.operations_support_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.operations_support?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.operations_support_streamlines?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.operations_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Data" && (
                      <div id="Data" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.artificial_intelligence_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.artificial_intelligence?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.ai_services_leverage?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.artificial_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.business_img?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.business_intelligence?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.data_driven_insights?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.business_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={services?.elements?.data_img?.value[0]?.url}
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.data_visualization?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.transforms_complex_data?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.data_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.platform_img?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.platform_modernization?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.modernize_platforms?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.platform_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Enterprise" && (
                      <div
                        id="Enterprise"
                        className="tabcontent active_content"
                      >
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.modern_workplace_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.modern_workplace?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.innovate_collaboration?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.modern_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.service_desk_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.service_desk?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.service_desk_offers?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.service_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                services?.elements?.managed_services_img
                                  ?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.managed_services?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.it_support?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.managed_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={services?.elements?.bpm_img?.value[0]?.url}
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.bpm?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.bpm_services_optimize?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.bpm_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={services?.elements?.crm_img?.value[0]?.url}
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.crm?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.streamlines_customer_interactions?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.crm_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Digital" && (
                      <div id="Digital" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.ux_research_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.ux_research?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.unlock_user_insights?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.ux_research_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.ux_design_img?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.ui_ux_design?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.ui_ux_design_creates?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.ux_design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                services?.elements?.branding_img?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.branding?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.branding_services_craft?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.branding_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.usability_img?.value[0]?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.usability_testing?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.usability_testing_observes?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.usability_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                services?.elements?.design_audit_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {services?.elements?.design_audit?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {services?.elements?.design_audit_ensures?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {services?.elements?.design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <CompanyStandards />
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
