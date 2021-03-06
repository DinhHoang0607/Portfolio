import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about"
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
