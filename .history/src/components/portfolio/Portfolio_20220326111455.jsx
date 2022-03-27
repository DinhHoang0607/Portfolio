import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio.jpg";
import IMG4 from "../../assets/portfolio.jpg";
import IMG5 from "../../assets/portfolio.jpg";
import IMG6 from "../../assets/portfolio.jpg";
const Fortfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img"></div>
          <h3>This is a portfolio item title</h3>
          <a
            href="https://github.com/DinhHoang0607"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            target="_blank"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Fortfolio;
