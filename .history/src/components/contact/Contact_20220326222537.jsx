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
      title: 'Email',
      address:'ngdhoang0607@gmail.com'
    },
    {
      icon: facebook,
      title: 'Facebook',
      address:'Đình Hhoàng'
    },
    {
      icon: w,
      title: 'Email',
      address:'ngdhoang0607@gmail.com'
    },
  ];
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">{mail}</div>
    </section>
  );
};

export default Contact;
