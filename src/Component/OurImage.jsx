import React, { useState } from "react";
import "../Style/OurImage.css";

const OurImage = ({ imgs = [{ url: "" }] }) => {
  const [myImage, setMyImage] = useState(imgs[1]);

  return (
    <>
      <div className="our-image-full-container">
        <div className="four-row-images">
          {imgs.map((currElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={currElem.url}
                  alt={currElem.filename}
                  className="single-photo"
                  onClick={() => {
                    setMyImage(currElem);
                  }}
                />
              </figure>
            );
          })}
        </div>

        <div className="main-images">
          <img
            src={myImage.url}
            alt={myImage.filename}
            className="single-photo"
          />
        </div>
      </div>
    </>
  );
};

export default OurImage;
