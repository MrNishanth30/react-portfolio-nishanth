import React from "react";
import Header from "../Components/Header";

function Experience() {
  return (
    <div>
      <Header />
      <div
        className="experience-intro"
        style={{ backgroundImage: `url('./experience.svg')` }}
      >
        <h3>Experience Details</h3>
      </div>
    </div>
  );
}

export default Experience;
