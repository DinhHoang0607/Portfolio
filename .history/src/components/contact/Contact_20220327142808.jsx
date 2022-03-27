import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";

const mail = <HiOutlineMail className="contact__option-icon" />;
const facebook = <RiFacebookCircleLine className="contact__option-icon" />;
const whatApp = <AiOutlineWhatsApp className="contact__option-icon" />;
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
      link: "https://m.me/Dinh.Hoang.67",
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
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
