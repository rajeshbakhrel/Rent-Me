import React, { useState, useEffect } from "react";
// import SingleContent from "./SingleContent";
import "../Style/FeatureProduct.css";
import SingleLand from "./SingleLand";

const NearByLand = () => {
  const [nearbyLands, setNearbyLands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://parajuli11.pythonanywhere.com/land_list/all/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter the data based on the condition 'near_by === "yes"'
        const nearbyData = data.filter((land) => land.near_by === "yes");
        setNearbyLands(nearbyData);
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

          <h1> Land Near By You</h1>
        </div>

        <div className="content-feature-products">
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="flexing-lear-land">
                {nearbyLands.map((currElem) => (
                  <SingleLand key={currElem.id} {...currElem} />
                ))}
              </div>
            )}
          </div>
          {/* <SingleContent /> */}
        </div>
      </div>
    </div>
  );
};

export default NearByLand;
