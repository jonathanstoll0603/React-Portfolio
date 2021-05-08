import React, { Component } from "react";
import "./About.css";
import Container from "../components/Container";
import profilePic from "../assets/images/jon-in-cali.jpg";

class Home extends Component {

  render() {
    return (
        <Container>
          <section>
            <h1 className="my-3 text-center">About me</h1>
          </section>
          <section className="row row-cols-1 mx-4 text-center">
              <div className="col-md-12">
                <img src={profilePic} className="profile-pic" alt="Jon Stoll in La Jolla, California on the coastline"></img>
                <p className="py-3">
                  Welcome to my React Portfolio! To give some background on my life, my name is Jonathan Stoll and I am a 26 year old LIMS Engineer Atlanta, Georgia. I enjoy traveling, live music, meditation, breweries, politics, pups, EPL soccer, basketball, and everything outdoors. Although I've been practicing web development on my own for the better part of a year, I recently decided to dive into the immersive full stack web development program offered through Georgia Tech. I'm hoping to gain the skills needed to further my career and pursue my passions. 
                </p>
              </div>
            </section>
            <section className="row row-cols-1 mx-4 text-center">
              <div className="col-md-12">
                <p className="py-3">
                  One passion in particular that I have come to love is healthcare LIS/LIMS systems. This is in part due to the fact that I have been given the opportunity to work as my current department's LIMS Analyst where I have gained extensive knowledge building, validating, and improving the organization's data management software. In recent decades, these systems have predominantly moved to browser based applications that offer powerful capabilities not seen in past systems. Unfortunately, many of these browser based programs run on outdated languages that offer dismal wait times and clunky UI's. My goal is to graduate from the full stack web development program with the knowledge needed to improve and even recreate these systems from scratch. With the development of newer technologies and integration of up-to-date languages, millions more patients could benefit, and healthcare organizations can save enormous amounts of time and money.
                </p>
              </div>
            </section>

        </Container>
    );
  }
}

export default Home;