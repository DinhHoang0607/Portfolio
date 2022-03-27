import React from "react";
import {BsShieldFillCheck} from 'react-icons/bs'
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

  return <section id="services">
    <div className="services__container container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <div className="service__list">
          {design.map((e) => <>
            <BsShieldFillCheck/>
          </>)}
        </div>
      </article>
    </div>
  </section>;
};

export default Services;
