import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Style/SingleLandPage.css";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

const SingleLandPage = () => {
  const { id } = useParams();
  const [landData, setLandData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    // alert("successful payment");
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://parajuli11.pythonanywhere.com/land_list/all/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedLand = data.find((land) => land.id === parseInt(id));
        if (selectedLand) {
          setLandData(selectedLand);
        } else {
          throw new Error("Land not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const {
    id: alice,
    photo1,
    photo2,
    photo3,
    price,
    address,
    contact,
    specification,
    description,
    owner_name,
  } = landData;
  console.log(landData);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div>
        <div className="image-container-single-landing">
          <div className="one-two-land-image-contaier">
            <div className="div-one-land-image">
              <img src={photo1} className="width-land-image" />
            </div>
            <div className="div-two-land-image">
              <img src={photo2} className="width-land-image" />
            </div>
          </div>
          <div className="div-third-land-image">
            <img src={photo3} className="width-land-image" />
          </div>
        </div>
        {/* Display information from landData object */}
        {/* <h2>{landData.address}</h2>
        <p>{landData.description}</p> */}
        {/* Display other details */}
      </div>

      <div className="land-page-all-main-content">
        <div className="land-page-content-container">
          {" "}
          <div className="content-portion-single-product">
            <div className="single-product-name">
              <p>{owner_name}</p>
            </div>

            <div className="single-product-mrp">
              <p>Price: NRP {price + 2000}</p>
            </div>
            {/* <div className="single-product-deal">
              <p>With Discount: ${price}</p>
            </div> */}
            <div className="single-product-description">
              <p>{description}</p>
            </div>
            <div className="single-product-icon-container">
              <div className="single-product-icon">
                <TbTruckDelivery className="single-icon" />
                <p>Easy Transportation</p>
              </div>

              <div className="single-product-icon">
                <TbReplaceFilled className="single-icon" />
                <p>Good Water Supply</p>
              </div>

              <div className="single-product-icon">
                <GiStorkDelivery className="single-icon" />
                <p>Well Service</p>
              </div>

              <div className="single-product-icon">
                <MdSecurity className="single-icon" />
                <p>Friendly Owner</p>
              </div>
            </div>
            <div className="single-product-available">
              {/* <p>
                Bed Available:
                <span>
                  {" "}
                  {no_of_bed_availabe > 0 ? "Is Available" : "Not Available"}
                </span>
              </p> */}

              <p>Specification:{specification}</p>
              {/* <p>No of Room:{contact}</p> */}
              <p>Contact:{contact}</p>
            </div>
            <div className="single-product-brand">
              <p>
                Address: <span>{address}</span>
              </p>
            </div>

            <div className="app-container">
              <button onClick={togglePopup} className="hey">
                Book Now
              </button>
              {showPopup && (
                <div className="popup-container">
                  <div className="blur-background" onClick={togglePopup}></div>
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
                            // placeholder="6545-6565-4"
                            value={price}
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

            {/* <button className="hey">Book Now</button> */}

            <hr className="line" />
          </div>
        </div>
        <div className="land-page-gif-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7072.979441391021!2d84.04297476544588!3d27.57834291446854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399445bb20fb00df%3A0xb99ba218ceaec566!2sChanauli%2033007!5e0!3m2!1sen!2snp!4v1703184773125!5m2!1sen!2snp"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="land-google-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleLandPage;
