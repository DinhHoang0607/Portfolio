import React from "react";
import { BsYoutube, BsFacebook, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/Dinh.Hoang.67/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://github.com/DinhHoang0607" target="_blank">
        <BsGithub />
      </a>
      <a href="hhtps://youtube.com" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
