import React from "react";
import "./services.css";
import { BsCheck2All } from "react-icons/bs";
const Services = () => {
  const design = [
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
  ];
  const dev = [
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
  ];
  const content = [
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
    "Ta xa rồi em nhé, đường em em cứ đi",
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <div className="services__list">
            {design.map((e) => (
              <li>
                <BsCheck2All />
                <p>{e}</p>
              </li>
            ))}
          </div>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <div className="services__list">
            {dev.map((e) => (
              <li>
                <BsCheck2All />
                <p>{e}</p>
              </li>
            ))}
          </div>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <div className="services__list">
            {content.map((e) => (
              <li>
                <BsCheck2All />
                <p>{e}</p>
              </li>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
