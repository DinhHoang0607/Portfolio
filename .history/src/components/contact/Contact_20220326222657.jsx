import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";

const mail = <HiOutlineMail />;
const facebook = <RiFacebookCircleLine />;
const whatApp = <AiOutlineWhatsApp />;
const Contact = () => {
  const socials = [
    {
      icon: mail,
      title: "Email",
      address: "ngdhoang0607@gmail.com",
    },
    {
      icon: facebook,
      title: "Facebook",
      address: "Đình Hhoàng",
    },
    {
      icon: whatApp,
      title: "WhatsApp",
      address: "0765596767",
    },
  ];
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {socials.map(e=><ar)}
        </div>
      </div>
    </section>
  );
};

export default Contact;
