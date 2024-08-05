import React from "react";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";

const NotFoundPage: React.FC = () => {
  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-5">
                <span className="display-1 fw-bold">4</span>
                <ExclamationCircleFill
                  color="#87FCFE"
                  size="1.7em"
                  className="exclamation-circle-fill text-danger display-4"
                />
                <span className="display-1 fw-bold bsb-flip-h">4</span>
              </h2>
              <h3 className="h2 mb-2">Oops! You're lost.</h3>
              <p className="mb-5">
                The page you are looking for was not found.
              </p>
              <Link
                className="btn btn-md btn-primary px-4 py-2 "
                to={PATHS.home}                
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
