import React from "react";
import "../Style/SingleCard.css";
// import image1 from "../Assects/laptop.webp"
import { NavLink } from "react-router-dom";

const SingleCart = (currElem) => {
  const { id, price, hostel_name, photo1, address } = currElem;
  // console.log(id);

  return (
    <NavLink to={`/SingleProduct/${id}`} className="single-product-full">
      <div className="single-product-full-container">
        <div className="single-product-image-title">
          <img
            // src={photo1}
            alt={hostel_name}
            className="single-product-image"
          />
          <span>{address}</span>
        </div>

        <div className="single-product-price-name">
          <div className="product-name">{hostel_name}</div>
          <div className="product-price">$ {price}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default SingleCart;
