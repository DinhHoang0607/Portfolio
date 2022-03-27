import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const Fortfolio = () => {
  const portfolio = [
    {
      src: IMG1,
      title:'This is a portfolio item title',
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      src: IMG2,
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      src: IMG3,
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      src: IMG4,
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      src: IMG5,
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      src: IMG6,
      github: "https://github.com/DinhHoang0607",
      demo: "https://dribbble.com/Alien_pixels",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolio.map((e) => (
          <article className="portfolio__item">
            <div className="portfolio__item-img"></div>
            <h3></h3>
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
        ))}
      </div>
    </section>
  );
};

export default Fortfolio;
