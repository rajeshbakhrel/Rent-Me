import React from "react";
// import image from "../Assects/house2.gif";
import { NavLink } from "react-router-dom";
import "../Style/SingleCard.css";

const SingleContent = (currElem) => {
  const { id, price, hostel_name, photo1, address } = currElem;

  return (
    <NavLink to={`/SingleProduct/${id}`} className="single-product-full">
      <div className="single-product-image-title">
        <img src={photo1} alt="" className="single-product-image" />
        <span>{address}</span>
      </div>

      <div className="single-product-price-name">
        <div className="product-name">{hostel_name}</div>
        <div className="product-price">NRS {price}</div>
      </div>
    </NavLink>
  );
};

export default SingleContent;
