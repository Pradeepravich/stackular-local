import React, { FC } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useMainContext } from "../hooks/useMainContext";

interface Props {
  successStories: any;  
}
const SuccessStories: FC<Props> = ({ successStories }) => {
  const { portfolioInfo1,portfolioInfo2, portfolioInfo3, portfolioInfo4, setProjectUrl } = useMainContext();
  const navigate = useNavigate()
  const redirectToProjectInfo = (slug: any)=>{
    setProjectUrl(slug);
    navigate('/project-info');
  }

  return (
    <section id="projects" className="projects smt-8">
      <div className="container">
        <div className="section-header">
          <p>
            {successStories?.elements?.our_success_stories?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </p>
          <h2>
            {successStories?.elements?.customer_success_is_paramount?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </h2>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6">
          <button  onClick={()=>redirectToProjectInfo(portfolioInfo1?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}><img
              src={
                successStories?.elements?.sustainable_delivery_img?.value[0]
                  ?.url
              }
              className="img-fluid"
              alt=""
            /></button>
          </div>
          <div className="col-lg-6 align-items-center project-card">
            <h4>
              {successStories?.elements?.sustainable_delivery?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {successStories?.elements?.stackular_helped_a_startup?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {successStories?.elements?.web_and_mobile_application?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.apis_and_integration?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.cloud_automation?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6 align-items-center project-card">
          
            <h4>
              {successStories?.elements?.financial_systems_automation?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {successStories?.elements?.when_a_national_health_services?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {successStories?.elements?.business_apps?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.financial_systems?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.microsoft_power_platform?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
          <div className="col-lg-6">
          <button  onClick={()=>redirectToProjectInfo(portfolioInfo2?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}>
            <img
              src={
                successStories?.elements?.financial_systems_img?.value[0]?.url
              }
              className="img-fluid"
              alt=""
            /></button>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6">
          <button  onClick={()=>redirectToProjectInfo(portfolioInfo3?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}>
            <img
              src={
                successStories?.elements?.compliance_mobile_img?.value[0]?.url
              }
              className="img-fluid"
              alt=""
            />
           </button>
          </div>
          <div className="col-lg-6 align-items-center project-card">
            <h4>
              {successStories?.elements?.compliance_mobile_platform?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {successStories?.elements?.a_national_construction_company?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {successStories?.elements?.web_and_mobile_application?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.apis_and_integration?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.cloud_automation?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6 align-items-center project-card">
            <h4>
              {successStories?.elements?.legacy_app_modernization?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {successStories?.elements?.when_a_leading_hospitality?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {successStories?.elements?.web_and_mobile_application?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.apis_and_integration?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {successStories?.elements?.cloud_automation?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
          <div className="col-lg-6">
          <button  onClick={()=>redirectToProjectInfo(portfolioInfo4?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}><img
              src={successStories?.elements?.legacy_app_img?.value[0]?.url}
              className="img-fluid"
              alt=""
            /></button>
          </div>
        </div>
        <div className="form-group">
          <Link
            to={successStories?.elements?.view_all_projects_url?.value}
            className="btn btn-primary !text-left py-2 group"
          >
            {successStories?.elements?.view_all_projects?.value.replace(
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
    </section>
  );
};

export default SuccessStories;
