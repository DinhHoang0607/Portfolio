import React from "react";
import "./contact.css";
import { HiOutlineMail }  from 'react-icons/hi'
import { RiFacebookCircleLine } from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  const socials = [
    {
      icon:HiOutlineMail
    }
  ]
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container"><{socials[0].icon}/></div>
    </section>
  );
};

export default Contact;
