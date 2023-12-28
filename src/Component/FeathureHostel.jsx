// import React from "react";
import SingleContent from "./SingleContent";
import "../Style/FeatureProduct.css";

import React, { useState, useEffect } from "react";

const FeathureHostel = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://parajuli11.pythonanywhere.com/hostel/list/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const highRecHostels = data.filter(
          (hostel) => hostel.high_recommendation === "yes"
        );
        setHostels(highRecHostels);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="featuturProducts-full-container">
        <div className="title-feature-product">
          <p>Check Now</p>

          <h1>Hostel Near You</h1>
        </div>

        <div className="hii">
          {hostels.map((currElem) => {
            // console.log(currElem);
            return (
              <div className="feature-hostel-contentianers">
                <SingleContent key={currElem.id} {...currElem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeathureHostel;
