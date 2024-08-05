import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";

const NoDataPage: React.FC = () => {
  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">              
              <h3 className="h2 mb-2">Oops! You're lost.</h3>
              <p className="mb-5">
                No Data exists.
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

export default NoDataPage;
