import React, { useState } from "react";
import { RiMenuFoldFill, RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const path = window.location.pathname;
  return (
    <div className="header">
      {showHeader ? (
        <RiMenuFoldFill
          className="menu-icon position-fixed top-0 end-0"
          onClick={() => setShowHeader(!showHeader)}
        />
      ) : (
        <RiCloseCircleLine
          className="menu-icon position-fixed top-0 end-0"
          onClick={() => setShowHeader(!showHeader)}
        />
      )}
      <ul className={`${showHeader ? "hide-Header" : "show-Header n-box1"}`}>
        <li className={`${path === "/" && "active" }`}>
         <Link to="/">Home</Link>
        </li>
        <li className={`${path === "/projects" && "active" }`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`${path === "/experience" && "active" }`}>
          <Link to="/experience">Experience</Link>
        </li>
        <li className={`${path === "/education" && "active" }`}>
          <Link to="/education">Education</Link>
        </li>
        <li className={`${path === "/contact" && "active" }`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
