// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;

import React from "react";
import "../Style/Home.css";
// import { FaMapLocationDot } from "react-icons/ga";
import { FaLongArrowAltRight } from "react-icons/fa";
import image1 from "../Assects/house1.gif";
import { useNavigate } from "react-router-dom";
// import "../Style/Services.css";
import { FaBook } from "react-icons/fa";
import { LiaSearchLocationSolid } from "react-icons/lia";
import {
  RiSecurePaymentFill,
  RiCustomerServiceFill,
  RiExchangeBoxFill,
} from "react-icons/ri";
// import FeatureProducts from "../Component/FeatureProducts";
import FeathureHostel from "../Component/FeathureHostel";
import NearByLand from "../Component/NearByLand";

const Home = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/Contact");
  };

  return (
    <>
      <div className="Hero-section-full-container">
        <div className="hero-section-one">
          <p className="hero-section-icon-container">
            <LiaSearchLocationSolid />
          </p>
          <p className="hero-section-welcome-container">Ready For Booking?</p>
          <h1 className="hero-section-title-container">
            SO YOU <br /> HAVE MORE LATER
          </h1>
          <p className="hero-section-content-container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ea
            excepturi nemo iure molestiae! Ad sequi sunt laudantium accusantium
            id!
          </p>

          <button
            onClick={() => goBack()}
            className="hero-section-button-container"
          >
            CONTACT US <FaLongArrowAltRight />
          </button>
        </div>

        <div className="hero-section-two">
          <div className="background-colour-section">
            <img src={image1} alt="image1" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="service-full-container">
        <div className="service-first-container">
          <p className="service-front">
            <FaBook className="service-icon" />
            <p></p>Easy Booking
          </p>
        </div>

        <div className="service-Second-container">
          <div className="service-Second-container-one">
            <p className="service-middle">
              <RiExchangeBoxFill className="service-icon" />
              Feels Like Home
            </p>
          </div>

          <div className="service-Second-container-Two">
            <p className="service-middle">
              <RiCustomerServiceFill className="service-icon" />
              Customer service
            </p>
          </div>
        </div>

        <div className="service-Third-container">
          <p className="service-front">
            <RiSecurePaymentFill className="service-icon" />
            <p></p>Secure Payment
          </p>
        </div>
      </div>

      <div className="feature-products-section">
        <FeathureHostel />
      </div>

      <div className="near-by-section">
        <NearByLand />
      </div>
    </>
  );
};

export default Home;
