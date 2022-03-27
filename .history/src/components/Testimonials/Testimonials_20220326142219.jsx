import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
const Testimonials = () => {
  return (
    <section id="testimmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>
      <div className="container testmonials__container">
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avt1" />
            <h5 className="client__name">Hoang Dinh</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              harum et incidunt hic culpa consequuntur, magni facilis officiis,
              fugiat laboriosam obcaecati corporis dolores ut necessitatibus
              aliquid rerum illum ab cupiditate!
            </small>
          </div>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT2} alt="avt2" />
            <h5 className="client__name">Hoang Dinh</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              harum et incidunt hic culpa consequuntur, magni facilis officiis,
              fugiat laboriosam obcaecati corporis dolores ut necessitatibus
              aliquid rerum illum ab cupiditate!
            </small>
          </div>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT3} alt="avt1" />
            <h5 className="client__name">Hoang Dinh</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              harum et incidunt hic culpa consequuntur, magni facilis officiis,
              fugiat laboriosam obcaecati corporis dolores ut necessitatibus
              aliquid rerum illum ab cupiditate!
            </small>
          </div>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avt1" />
            <h5 className="client__name">Hoang Dinh</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              harum et incidunt hic culpa consequuntur, magni facilis officiis,
              fugiat laboriosam obcaecati corporis dolores ut necessitatibus
              aliquid rerum illum ab cupiditate!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
