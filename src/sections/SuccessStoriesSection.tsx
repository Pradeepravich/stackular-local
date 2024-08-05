import React, { FC } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Link} from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";

interface Props {}
const SuccessStoriesSection: FC<Props> = () => {

  const { data } = useKontentServiceApi("success_stories_section");

  return (
    <section id="projects" className="projects smt-8">
      <div className="container">
        <div className="section-header">
          <p>
            {data?.elements?.title?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </p>
          <h2>
            {data?.elements?.description?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </h2>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6">
          
          <Link to={`${PATHS.portfolioInfo}?id=${btoa(data?.elements?.project_one__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              ))}`}><img
              src={
                data?.elements?.project_one__project_image?.value[0]
                  ?.url
              }
              className="img-fluid"
              alt=""
            /></Link>
          </div>
          <div className="col-lg-6 align-items-center project-card">            
            <h4>
              {data?.elements?.project_one__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {data?.elements?.project_one__project_description?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {data?.elements?.project_one__label1?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_one__label2?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_one__label3?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6 align-items-center project-card">
          
            <h4>
              {data?.elements?.project_two__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {data?.elements?.project_two__project_description?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {data?.elements?.project_two__label1?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_two__label2?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_two__label3?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
          <div className="col-lg-6">
          <Link to={`${PATHS.portfolioInfo}?id=${btoa(data?.elements?.project_two__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              ))}`}>
            <img
              src={
                data?.elements?.project_two__project_image?.value[0]?.url
              }
              className="img-fluid"
              alt=""
            /></Link>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6">
          <Link to={`${PATHS.portfolioInfo}?id=${btoa(data?.elements?.project_three__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              ))}`}>
            <img
              src={
                data?.elements?.project_three__project_image?.value[0]?.url
              }
              className="img-fluid"
              alt=""
            />
           </Link>
          </div>
          <div className="col-lg-6 align-items-center project-card">
            <h4>
              {data?.elements?.project_three__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {data?.elements?.project_three__project_description?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {data?.elements?.project_three__label1?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_three__label2?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_three__label3?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
        </div>
        <div className="row mt-5 g-0">
          <div className="col-lg-6 align-items-center project-card">
            <h4>
              {data?.elements?.project_four__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
            <p>
              {data?.elements?.project_four__project_description?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </p>
            <span>
              {data?.elements?.project_four__label1?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_four__label2?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
            <span>
              {data?.elements?.project_four__label3?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </span>
          </div>
          <div className="col-lg-6">
          <Link to={`${PATHS.portfolioInfo}?id=${btoa(data?.elements?.project_four__project_title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              ))}`}><img
              src={data?.elements?.project_four__project_image?.value[0]?.url}
              className="img-fluid"
              alt=""
            /></Link>
          </div>
        </div>
        <div className="form-group">
          <Link
            to={PATHS.portfolio}
            className="btn btn-primary !text-left py-2 group"
          >
            {data?.elements?.view_btn?.value.replace(
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

export default SuccessStoriesSection;
