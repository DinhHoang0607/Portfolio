import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ng.Đ Hoàng</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img
            src={
              "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/276322647_1940526332798756_4597193119045905148_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zkiq3P4vEgYAX8Bk2-I&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-IspgPAc2-R5c-qluIr0JcG93giM5GmccdyR3ulejswg&oe=62444357"
            }
            alt=""
          />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
