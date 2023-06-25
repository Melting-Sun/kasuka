import React from "react";
import "./Contact.css";
import ContactInfo from "./ContactInfo";
import Dialog from "../Dialog/Dialog";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-header-wrapper">
          <div className="contact-title">
            <p className="contact-title-p">contact</p>
          </div>

          <div className="contact-header">
            <h2 className="contact-header-h">contact us</h2>
          </div>
        </div>
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221932.1253536671!2d52.366959702988446!3d29.641761382168458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb20d0c8c85f2e3%3A0x6d0c5b8aef6b4cf6!2sShiraz%2C%20Fars%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1687443455063!5m2!1sen!2sus"
        ></iframe>

        <div className="dialog-container">
          <ContactInfo />
          <Dialog />
        </div>
      </div>
    </>
  );
}

export default Contact;
