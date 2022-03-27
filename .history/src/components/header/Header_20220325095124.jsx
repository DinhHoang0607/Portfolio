import React from "react";
import CTA from "./CTA";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hellot I'm</h5>
        <h1>Ng.Đ Hoàng</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt=''/>
        </div>
      </div>
    </header>
  );
};

export default Header;
