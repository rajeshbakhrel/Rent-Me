import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/SingleCard.css";

const SingleLand = (currElem) => {
  const { id, price, photo1, address } = currElem;

  return (
    <div className="width-height-land-container">
      <NavLink to={`/SingleLand/${id}`} className="single-product-full">
        <div className="single-product-image-title">
          <img src={photo1} alt="" className="single-product-image" />
          <span>{address}</span>
        </div>

        <div className="single-product-price-name">
          <div className="product-name">{address}</div>
          <div className="product-price">$ {price}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleLand;
