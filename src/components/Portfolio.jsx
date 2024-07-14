import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
        </div>
        <div className="containger-fluid">
          <div className="d-flex justify-content-around align-align-items-center">
            <div className="p-2">
              <a href="https://api.faster.sa:8080/auth/login" target="_blank">
                <img
                  width={"250px"}
                  src="images/projects/faster.png"
                  alt=""
                  className="mx-3 img-fluid"
                />
              </a>
              <a
                href="https://dga-nds-fbhtx.ondigitalocean.app/"
                target="_blank"
                className="mx-3 img-fluid"
              >
                <img
                  width={"250px"}
                  src="images/projects/mobile-logo.svg"
                  alt=""
                />
              </a>
              <a href="https://topqdrat.com/ar" target="_blank">
                <img
                  width={"250px"}
                  src="images/projects/new-logo.b526323.png"
                  className="mx-3 img-fluid"
                  alt=""
                />
              </a>
              <a href="https://ikschools.com/ar/main-page" target="_blank">
                <img
                  width={"200px"}
                  src="images/projects/1663594404rvrbmkblkd.png"
                  className="mx-3 img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
