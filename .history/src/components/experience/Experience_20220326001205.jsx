import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const frontEnd = [
    {
      title: "HTML",
      detail: "Experienced",
    },
    {
      title: "CSS",
      detail: "Experienced",
    },
    {
      title: "JavaScript",
      detail: "Experienced",
    },
    {
      title: "Bootstrap",
      detail: "Experienced",
    },
  ];
  const backEnd = [
    {
      title: "Node JS",
      detail: "Internediate",
    },
    {
      title: "MongoDB",
      detail: "Internediate",
    },
    {
      title: "PHP",
      detail: "Internediate",
    },
    {
      title: "MySql",
      detail: "Internediate",
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__fe">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEnd.map((e) => (
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                  <h4>{e.title}</h4>
                  <small>{e.detail}</small>
                </div>
              </article>
            ))}
            {/* <h4>HTML</h4> */}
          </div>
        </div>
        <div className="experience__be">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEnd.map((e) => (
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                  <h4>{e.title}</h4>
                  <small>{e.detail}</small>
                </div>
              </article>
            ))}
            {/* <h4>HTML</h4> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
