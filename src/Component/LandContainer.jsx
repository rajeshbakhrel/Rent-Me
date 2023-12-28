import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import image1 from "../Assects/hello.jpg";
import "../Style/Landcontainer.css";
import { NavLink } from "react-router-dom";
import "../Style/ListView.css";

const LandContainer = () => {
  const [landData, setLandData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://parajuli11.pythonanywhere.com/land_list/all/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLandData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const {
    id,
    photo1,
    photo2,
    photo3,
    owner_name,
    description,
    price,
    address,
    land_area,
    contact,
    created_date,
    specification,
  } = landData;

  return (
    <>
      <div className="land-full-container">
        <div className="upper-image-container">
          <div className="image-content">
            <img src={image1} alt="shopping" className="env-background" />
          </div>
        </div>
        <div className="land-search-container">
          <input
            type="text"
            placeholder="search"
            className="landcontainer-searchbar"
          />
          <button className="landcontainer-searchbar-button">Search</button>
        </div>
        <div className="land-all-content-container">
          <>
            <div className="external-div-feature">
              {landData.map((currElem) => {
                return (
                  <NavLink
                    to={`/SingleLand/${currElem.id}`}
                    className="land-contaier-nav"
                  >
                    <div className="feature-hostel-contentianers">
                      <div className="full-list-view">
                        <div className="list-view-image">
                          <img src={currElem.photo1} alt="" />
                        </div>
                        <div className="list-view-content">
                          <h2>{currElem.address}</h2>
                          <p> NRP{currElem.price}</p>
                          <p>{currElem.description.slice(0, 180)}</p>

                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </>
        </div>
        {/* <button>Book NOw</button> */}
      </div>
    </>
  );
};

export default LandContainer;
