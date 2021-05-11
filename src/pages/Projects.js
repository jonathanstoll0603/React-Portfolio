import React, { Component } from "react";
import "./Projects.css";
import Container from "../components/Container";
import footyImg from "../assets/images/footy.jpg";
import trailblazerImg from "../assets/images/trailblazers.jpg";
import cmsTechBlogImg from "../assets/images/CMS-Tech-blog.jpeg";
import dayPlannerImg from "../assets/images/day-planner.jpg";
import eCommerceImg from "../assets/images/e-commerce-backend.jpg";
import employeeDirectoryImg from "../assets/images/employee-directory.png";

class Projects extends Component {

  render() {
    return (
        <Container>
            <section className="text-center">
                <h1 className="py-3 text-center project-header resume-header">Projects</h1>
                <span><a  className="text-color project-header" href="https://github.com/jonathanstoll0603">A full project list can be found here on GitHub</a></span>
            </section>
            <section className="row text-center my-5">
              <div className="col-md-4 d-block py-4">
                <img src={trailblazerImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/skimmers/project_2" alt="A man sitting on the edge of a mountain">
                        Trail Blazers
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={footyImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/Footy" alt="A soccer ball laying in grass with dew on top">
                        Footy
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={cmsTechBlogImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/CMS-tech-blog" alt="A digital database">
                        CMS Tech Blog
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={eCommerceImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/e-commerce-backend" alt="Small packages stacked on top of a laptop keyboard">
                        E-Commerce Backend
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={dayPlannerImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/day-planner" alt="A day planning agenda">
                        Day Planner
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={employeeDirectoryImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/CMS-tech-blog" alt="A chart of an employee directory">
                        React Employee Directory
                    </a>
                  </h2>
              </div>
            </section>
        </Container>
    );
  }
}

export default Projects;