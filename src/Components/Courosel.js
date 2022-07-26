import React from "react";
import { FaBootstrap,FaJsSquare, FaCss3, FaHtml5, FaReact} from "react-icons/fa"

function Courosel() {
  return (
    <div>
      <div className="parent-courosel position-relative" id="courosel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I use
        </h1>
        <div className="image-gallery">
          <span style={{"--i":1}}>
            <FaReact color="cyan"/>
          </span>
          <span style={{"--i":2}}>
            <FaHtml5 color="orange"/>
          </span>
          <span style={{"--i":3}}>
            <FaJsSquare  color="yellow"/>
          </span>
          <span style={{"--i":4}}>
            <FaBootstrap color="blue"/>
          </span>
          <span style={{"--i":5}}>
            <FaCss3 color="blue"/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courosel;
