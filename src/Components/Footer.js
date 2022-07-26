import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div">
              <p>Designed and Developed By</p>
              <hr />
              <div className="d-flex justify-content-center">
                <FaLinkedin />
              </div>
              <hr />
              <p>
                Nishanth Kotian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
