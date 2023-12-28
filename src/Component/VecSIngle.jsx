import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import loadingphoto from "../Assects/loading.gif";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import StarContent from "../Component/StarContent";
import "../Style/VecSIngle.css";
import "../Style/SingleProduct.css";
import "../Style/OurImage.css";
import HostelRooms from "../Component/HostelRooms";

const VecSIngle = () => {
  const { id } = useParams();
  const [hostelData, setHostelData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    // alert("successful payment");
    setShowPopup(!showPopup);
  };

  const handleClick = async () => {
    const data = {
      value1: 1,
      value2: 1200,
      value3: 5,
      // Add more values as needed
    };

    try {
      const response = await fetch(
        `https://parajuli11.pythonanywhere.com/vehicle/list/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other necessary headers
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      // Handle success or additional actions upon successful request
    } catch (error) {
      console.error("Error:", error);
      // Handle errors or show error messages
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://parajuli11.pythonanywhere.com/vehicle/list/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedHostel = data.find(
          (hostel) => hostel.id === parseInt(id)
        );
        if (selectedHostel) {
          setHostelData(selectedHostel);
        } else {
          throw new Error("Hostel not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const [inputValue, setInputValue] = useState(""); // Initialize state for the input value

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the inputValue as needed, such as sending it to an API or processing it
    console.log("Input value:", inputValue);
  };

  const {
    id: alice,
    photo1,
    photo,
    bluebook_photo,

    type_of_vehicle,
    condition_of_vehicle,
    location_of_shop,
    is_available,
    price_per_day,
    contact_number,
    date_creates,

    date_updated,
  } = hostelData;

  console.log(hostelData);

  const imgs = [photo1, photo, bluebook_photo];
  const [myImage, setMyImage] = useState(imgs[0]);

  if (loading) {
    return (
      <p className="login-photo">
        <img src={loadingphoto} alt="helo" />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <>
        <div className="full-single-product-container-vec">
          <div className="image-portion-single-product">
            <div className="our-image-full-container">
              <div className="four-row-images">
                {imgs.map((currElem, index) => {
                  return (
                    <figure key={index}>
                      <img
                        src={currElem}
                        alt="hello"
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
                <img src={myImage} alt="" className="single-photo" />
              </div>
            </div>
          </div>
          <div className="another-single-container">
            <div className="content-portion-single-product">
              <div className="single-product-name">
                <p>{type_of_vehicle}</p>
              </div>

              <div className="single-product-mrp">
                <p>PRICE PER DAY: NRS{price_per_day}</p>
              </div>

              <div className="single-product-description">
                <p>LOCATION OF SOP : {location_of_shop}</p>
              </div>
              <div className="single-product-icon-container">
                <div className="single-product-icon">
                  <TbTruckDelivery className="single-icon" />
                  <p>Best In Town</p>
                </div>

                <div className="single-product-icon">
                  <TbReplaceFilled className="single-icon" />
                  <p>Feels Like Yours</p>
                </div>

                <div className="single-product-icon">
                  <GiStorkDelivery className="single-icon" />
                  <p>Well Serviced</p>
                </div>

                <div className="single-product-icon">
                  <MdSecurity className="single-icon" />
                  <p>Friendly Owner</p>
                </div>
              </div>
              <div className="single-product-available">
                <p>
                  IS AVAILABLE: TRUE
                  <span>{is_available}</span>
                </p>

                <p>VECHILE CONDICTION : {condition_of_vehicle}</p>
                <p>OWNER NAME: Rajesh Bakhrel</p>
                <p>NUMBER OF DAYS : {inputValue}</p>
                <p>CONTACT : {contact_number}</p>
                <p>
                  <input
                    type="text"
                    placeholder="Enter something"
                    value={inputValue}
                    onChange={handleChange}
                    className="booked-days"
                  ></input>
                  <button type="submit">OK</button>
                </p>
                {/* <p>DATE TILL  :  {date_updated}</p> */}
              </div>
              <div className="single-product-brand">
                {/* <p>
                  DATE CREATES: <span>{date_creates}</span>
                </p> */}
              </div>
              <div className="app-container">
                <button onClick={togglePopup} className="hey">
                  Book Now
                </button>
                {showPopup && (
                  <div className="popup-container">
                    <div
                      className="blur-background"
                      onClick={togglePopup}
                    ></div>
                    <div className="popup">
                      <div className="full-popup-container">
                        <h2 className="popup-title">Payment</h2>
                        <div className="save-card">
                          <label className="hello-label">Saved card</label>
                          <input
                            type="text"
                            placeholder="**** **** **** 2452                                        Remove Card"
                          ></input>
                          <input
                            type="text"
                            placeholder=".                      E-sewa Number"
                          ></input>
                        </div>

                        <div className="add-new-card">
                          <label className="hello-label">Add new card:</label>
                          <input type="text" placeholder="User Name"></input>
                          <div className="number-exp-date">
                            <input
                              type="text"
                              placeholder="6545-6565-4"
                              value={price_per_day * inputValue}
                              className="number"
                            ></input>
                            <input
                              type="text"
                              placeholder="Exp.date"
                              className="exp-date"
                            ></input>
                            <input
                              type="text"
                              placeholder="cvv"
                              className="cvv"
                            ></input>
                          </div>
                        </div>
                      </div>
                      <button onClick={togglePopup} className="close-pop">
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <hr className="line" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default VecSIngle;
