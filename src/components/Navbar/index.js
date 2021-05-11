import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-container">
      <Link className="navbar-brand mx-3 text-light" to="/">
        Jon's Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item text-light">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active text-light": "nav-link text-light"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active text-light" : "nav-link text-light"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active text-light" : "nav-link text-light"}
            >
              Resume
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/quotes"
              className={window.location.pathname === "/quotes" ? "nav-link active text-light" : "nav-link text-light"}
            >
              Quotes
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;