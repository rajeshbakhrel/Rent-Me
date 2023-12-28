import React, { useState, useEffect } from "react";
import imm from "../Assects/maserati-bts-website.jpg";
import loadingphoto from "../Assects/loading.gif";
import "../Style/Navbar.css";
import { NavLink } from "react-router-dom";

const VehicheContainer = () => {
  const [landData, setLandData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://parajuli11.pythonanywhere.com/vehicle/list/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLandData(data); // Assuming the data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <img src={loadingphoto} alt="helo" className="looadigggg" />;
  }

  return (
    <div>
      {/* <NavLink  to={`/SingleVec/${id}`} ></NavLink>   */}
      <div className="main-container-bike">
        <img src={imm} className="imm" />
      </div>
      <div className="vechicle-flex">
        {landData.map((currElem) => (
          <NavLink
            to={`/SingleVec/${currElem.id}`}
            className="remove-underline"
          >
            <div key={currElem.id}>
              <div className="feature-hostel-contentianers">
                <div className="full-list-view">
                  <div className="list-view-image">
                    <img src={currElem.photo1} alt="" />
                  </div>
                  <div className="list-view-content">
                    <h4>contact : {currElem.contact_number}</h4>
                    <p> Location : {currElem.location_of_shop}</p>
                    <p> Available : {currElem.is_available}</p>
                    <p> Price : {currElem.price_per_day}</p>
                    <p> vechicle : {currElem.vehicle_number}</p>
                    {/* <p>{currElem.description.slice(0, 180)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VehicheContainer;
