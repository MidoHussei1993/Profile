import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center text-lg-start wow fadeInUp mx-auto d-flex justify-content-center align-items-center">
            <div>
              <img
                src="images/mohmedMonemLogoWhite.png"
                width="75px"
                height="75px"
                alt=""
                className="mx-2 img-fluid"
              />
            </div>
            <p className="mb-2 mb-lg-0">
              Copyright © 2023{" "}
              <a className="fw-600" href="/">
                Mohamed Monem
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
