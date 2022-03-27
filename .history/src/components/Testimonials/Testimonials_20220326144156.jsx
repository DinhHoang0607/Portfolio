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
            <img src={'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/276322647_1940526332798756_4597193119045905148_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zkiq3P4vEgYAX8Bk2-I&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-IspgPAc2-R5c-qluIr0JcG93giM5GmccdyR3ulejswg&oe=62444357'} alt="avt1" />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT2} alt="avt2" />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT3} alt="avt3" />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </article>
        <article className="testmonial">
          <div className="client__avatar">
            <img src={AVT4} alt="avt4" />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
