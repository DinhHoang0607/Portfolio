import React from "react";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>
      <div className="container testmonials__container">
        <div className="testmonial">
          <div className="client__avatar"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
