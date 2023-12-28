import React from "react";
import image2 from "../Assects/shopping2.gif";
import "../Style/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="aboutus-Meaage-form">
      <div className="about-us-photo">
        <img src={image2} alt="sorry" className="about-us-side-photo" />
      </div>

      <div className="about-us-Message">
        <h2>Message Us</h2>
        <form action="https://formspree.io/f/xnqkzvqz" method="post">
          <input
            placeholder="Enter your Name"
            type="text"
            name="UserName"
            autoComplete="off"
            required
          />
          <input
            placeholder="Enter your E-mail"
            type="email"
            name="E-mail"
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
            autoComplete="off"
            type="text"
            placeholder="Enter your message"
            required
          />
          <button
            type="subbmit"
            className="About-button-message"
            typeof="submit"
            value="send"
          >
            Subbmit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
