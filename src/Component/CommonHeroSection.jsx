import React from "react";
import "../Style/CommonHeroSection.css";
// import image1 from "../Assects/contact-banner.gif";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const CommonHeroSection = (props) => {
  const navigation = useNavigate();

  const goBack = () => {
    navigation("/");
  };
  return (
    <div className="CommonSection-full-container">
      <div className="CommonSection-first-container">
        <div className="common-hero-section-content-container">WELCOME TO</div>
        <div className="common-hero-section-title-container">{props.name}</div>
        <div className="common-hero-section-content-container">
          {props.content}
        </div>

        <button
          onClick={() => goBack()}
          className="common-hero-section-button-container"
        >
          BACK TO HOME <FaLongArrowAltRight />
        </button>
      </div>

      <div className="CommonSection-second-container">
        <div>
          <img
            src={props.image}
            alt="contact-image"
            className="image-section-common-section"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHeroSection;
