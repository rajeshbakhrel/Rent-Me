import React from "react";
import "../Style/Navbar.css";
import { BiSolidLogIn } from "react-icons/bi";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" className="remove-it">
        <div className="logo-nav">
          <button className="rent-button">
            <span>RENT</span> ME.
          </button>
        </div>
      </NavLink>

      <div className="nav-list">
        <NavLink to="/" className="remove">
          <>Home</>
        </NavLink>
        <NavLink to="about" className="remove">
          <>About US</>
        </NavLink>
        <div>
          <div className="dropdown">
            <div className="remove-drop">Book Now</div>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="hostel">Hostel</NavLink>
              </li>
              <li>
                <NavLink to="Land">Land</NavLink>
              </li>
              <li>
                <NavLink to="vehicle">Vehicle</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink to="add" className="remove">
          <>Add it</>
        </NavLink>

        <NavLink to="contact" className="remove">
          Contact Us
        </NavLink>
      </div>

      <div className="logo">
        <NavLink to="login" className="remove-it">
          <button className="login-button">
            Login <BiSolidLogIn />
          </button>
        </NavLink>
        <NavLink to="Profile">
          <button className="user-profile">Profile</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
