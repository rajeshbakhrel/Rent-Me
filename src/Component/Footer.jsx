import React from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import "../Style/Footer.css";
import image1 from "../Assects/shopping1.gif";

const Footer = () => {
  return (
    <div className="footer-full-container">
      <div className="footer-container">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
          <path
            fill="#fefefe"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,
            149.3C384,149,480,107,576,112C672,117,768,171,864,165.3C960,160,1056,
            96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,
            0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}

        <div className="footer-links-container">
          <div className="footer-image">
            <img src={image1} alt="shopping" />
          </div>

          <div className="footer-links">
            <h2>Useful links</h2>
            <div className="footer-link">
              <p>Home</p>
              <p>Booking</p>
              <p>AboutUs</p>
              <p>Admin</p>
            </div>
          </div>

          <div className="footer-contact">
            <h2>Contact Us</h2>
            <div className="footer-contactus-content">
              <p>Bharatpur,Chitwan,Nepal</p>
              <p>rajeshbakhrel123@gmail.com</p>
              <p> +9779865003266/9811202412 </p>
            </div>
          </div>
          <div className="footer-social-media">
            <h2>Message Us</h2>
            <div className="footer-socialmedia-content">
              <NavLink to="/https://www.facebook.com">
                <p>
                  <BsFacebook />
                </p>
              </NavLink>
              <NavLink to="/mail">
                <p>
                  <MdMail />
                </p>
              </NavLink>
              <NavLink to="/twitter">
                <p>
                  <SiTwitter />
                </p>
              </NavLink>
              <NavLink to="/instagram">
                <p>
                  <AiFillInstagram />
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-container">
        <p> @{new Date().getFullYear()}Powered by: Lumbini Ict</p>
        {/* <input
          value={() => {
            {
              new Date().getFullYear();
            }
          }}
        /> */}
      </div>
    </div>
  );
};

export default Footer;
