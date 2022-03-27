import React from "react";
import "./footer.css";
import { IoLogoFacebook } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import {AiOutlineYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ng.Đ Hoàng
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <IoLogoFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://youtube.com"><AiOutlineYoutube/></a>
      </div>
    </footer>
  );
};

export default Footer;
