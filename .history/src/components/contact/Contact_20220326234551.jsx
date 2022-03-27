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
      link: "mailto:ngdhoang0607@gmail.com",
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
          {socials.map((e) => (
            <article className="contact__option">
              {e.icon}
              <h4>{e.title}</h4>
              <h5>{e.address}</h5>
              <a href={e.link} target="_blank">
                Send a message
              </a>
            </article>
          ))}
        </div>
        <form action="">
          <input type='text' name='name'
        </form>
      </div>
    </section>
  );
};

export default Contact;
