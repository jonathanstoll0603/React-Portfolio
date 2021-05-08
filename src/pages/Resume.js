import React, { Component } from "react";
import "./Resume.css";
import Container from "../components/Container";

class Resume extends Component {

  render() {
    return (
        <Container>
            <section className="text-center">
                <h1 className="my-3 py-2 text-center resume-header">Resume</h1>
                <span><a  className="text-dark" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:c4585c24-432e-4b08-b80c-0373a48f5b03">A full resume in PDF format can be found here</a></span>
            </section>
            <section className="row row-cols-1 text-center my-5">
                <h2 className="col-md-12 py-2 education-header">Education</h2>
            </section>
            <section className="row text-center">
                <p className="col-md-4">
                    University of Georgia
                </p>
                <p className="col-md-4">
                    B.S. Chemistry
                </p>
                <p className="col-md-4">
                    August 2012 - December 2016
                </p>
                <p className="col-md-4">
                    Georgia Institute of Technology
                </p>
                <p className="col-md-4">
                    Full Stack Web Development Coding Bootcamp
                </p>
                <p className="col-md-4">
                    December 2020 - May 2021
                </p>
            </section>
            <section className="row row-cols-1 text-center my-5">
                <h2 className="col-md-12 py-2 education-header">Experience</h2>
            </section>
            <section className="row text-center">
                <p className="col-md-6">
                    Associate LIMS Engineer at LabLynx
                </p>
                <p className="col-md-6">
                    June 2021 - Present
                </p>
                <p className="col-md-6">
                    Chemistry Technician/Departmental LIMS Analyst at Wuxi AppTec
                </p>
                <p className="col-md-6">
                    June 2019 - June 2021
                </p>
                <p className="col-md-6">
                    Bioburden Technician at Wuxi AppTec
                </p>
                <p className="col-md-6">
                    June 2018 - June 2019
                </p>
                <p className="col-md-6">
                    Quality Control Chemist at Strathmore Products
                </p>
                <p className="col-md-6">
                    June 2017 - June 2018
                </p>
            </section>
            <section className="row row-cols-1 text-center my-5">
                <h2 className="col-md-12 py-2 education-header">Skills</h2>
            </section>
            <section className="row text-center">
                <div className="col-md-6">
                    <h2 className="col-md-12 mb-3 technical-skills">Technical:</h2>
                    <p className="col-md-12">
                        LIMS Integration
                    </p>
                    <p className="col-md-12">
                        LIMS Validation
                    </p>
                    <p className="col-md-12">
                        LIMS Support
                    </p>
                    <p className="col-md-12">
                        JavaScript
                    </p>
                    <p className="col-md-12">
                        HTML5/CSS
                    </p>
                    <p className="col-md-12">
                        ReactJS/JSX
                    </p>
                    <p className="col-md-12">
                        MySQL/MongoDB
                    </p>
                    <p className="col-md-12">
                        NodeJS
                    </p>
                    <p className="col-md-12">
                        Git
                    </p>
                </div>
                <div className="col-md-6">
                    <h2 className="col-md-12 mb-3 technical-skills">Soft:</h2>
                    <p className="col-md-12">
                        Project Management
                    </p>
                    <p className="col-md-12">
                        Account Management
                    </p>
                    <p className="col-md-12">
                        Client Management
                    </p>
                    <p className="col-md-12">
                        Time Management
                    </p>
                    <p className="col-md-12">
                        Team Building
                    </p>
                    <p className="col-md-12">
                        Communication
                    </p>
                    <p className="col-md-12">
                        Organization
                    </p>
                </div>
            </section>
        </Container>
    );
  }
}

export default Resume;