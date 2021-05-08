import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mx-3" to="/">
        Jon's Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/quotes"
              className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}
            >
              Quotes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;