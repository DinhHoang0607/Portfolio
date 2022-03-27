import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Nav = () => {
  return (
    <nav>
      <a href=""><AiOutlineHome/></a>
      <a href=""><AiOutlineUser/></a>
      <a href=""><AiOutlineBook/></a>
      <a href=""><RiServiceLine/></a>
      <a href="">BiMessageSquareDetail</a>
    </nav>
  );
};

export default Nav;
