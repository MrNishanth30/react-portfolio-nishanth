import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Header from "./Header";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-width-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5" data-aos="fade-down">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="fobt-bold">
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
              <button className="primary-button projects-button"><a href="#projects-list">Get Started</a></button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M64.3,-35.5C76,-16.8,73.1,11.8,59.9,35.4C46.8,59,23.4,77.4,0.2,77.3C-23,77.2,-46.1,58.5,-60,34.5C-74,10.5,-78.9,-19,-67.4,-37.5C-55.9,-56.1,-28,-63.7,-0.8,-63.2C26.3,-62.7,52.6,-54.1,64.3,-35.5Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size={180}
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>
      <div className="container projects-lists">
        <h3 className="font-bold">Take a look of my projects</h3>
        <hr />
        <div className="row" id="projects-list">
          {ProjectsData.map((item) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={item.image} alt="" />
                  <div className="project-content">
                    <h3>{item.title}</h3>
                    <hr />
                    <p>{item.description}</p>
                    <button className="primary-button">Demo</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
