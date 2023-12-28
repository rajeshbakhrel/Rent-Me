import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

// import OurImage from "../Component/OurImage";
import loadingphoto from "../Assects/loading.gif";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import StarContent from "../Component/StarContent";
import "../Style/SingleProduct.css";
import "../Style/OurImage.css";
import HostelRooms from "../Component/HostelRooms";

const SinglePage = () => {
  const { id } = useParams();
  const [hostelData, setHostelData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    const data = {
      value1: 1,
      value2: 1200,
      value3: 5,
      // Add more values as needed
    };

    try {
      const response = await fetch(
        `https://parajuli11.pythonanywhere.com/hostel/booking/${id}/`,
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

    fetch(`https://parajuli11.pythonanywhere.com/hostel/list/`)
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

  const {
    id: alice,
    hostel_name,
    photo1,
    photo2,
    photo3,

    address,
    price,
    contact,
    description,
    category,
    no_of_rooms,
    no_of_beds,
    rating,
    date_creates,
    date_updated,
    no_of_bed_availabe,
  } = hostelData;

  console.log(hostelData);

  const imgs = [photo1, photo2, photo3];
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
    // <div>
    //   <h2>{hostelData.hostel_name}</h2>
    //   <p>{hostelData.description}</p>
    //   {/* Display other details */}
    // </div>

    <>
      <div className="full-single-product-container">
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
              <p>{hostel_name}</p>
            </div>

            <div className="single-product-rating">
              <p>
                <StarContent star={rating} /> <span>{category} reviews</span>
              </p>
            </div>

            <div className="single-product-mrp">
              <p>
                MRP: <del>${price + 2000}</del>
              </p>
            </div>
            <div className="single-product-deal">
              <p>With Discount: ${price}</p>
            </div>
            <div className="single-product-description">
              <p>{description}</p>
            </div>
            <div className="single-product-icon-container">
              <div className="single-product-icon">
                <TbTruckDelivery className="single-icon" />
                <p>Pick Up System</p>
              </div>

              <div className="single-product-icon">
                <TbReplaceFilled className="single-icon" />
                <p>Feels Like Home</p>
              </div>

              <div className="single-product-icon">
                <GiStorkDelivery className="single-icon" />
                <p>Well Service</p>
              </div>

              <div className="single-product-icon">
                <MdSecurity className="single-icon" />
                <p>Friendly Warden</p>
              </div>
            </div>
            <div className="single-product-available">
              <p>
                Bed Available:
                <span>
                  {" "}
                  {no_of_bed_availabe > 0 ? "Is Available" : "Not Available"}
                </span>
              </p>

              <p>No of Bed available:{no_of_beds}</p>
              <p>No of Room:{no_of_rooms}</p>
              <p>Contact:{contact}</p>
            </div>
            <div className="single-product-brand">
              <p>
                Address: <span>{address}</span>
              </p>
            </div>

            <hr className="line" />
          </div>

          <div className="google-map-single">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113076.17417848708!2d84.38179998478273!3d27.666903288678036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbddb6342a6d%3A0x883275e826de4023!2seducation%20boy&#39;s%20hostel!5e0!3m2!1sen!2snp!4v1703146763848!5m2!1sen!2snp"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map-google"
            ></iframe>
          </div>
        </div>
        <div className="rooms-in-hostel">
          <HostelRooms />
        </div>
        <NavLink to="/login">
          <button onClick={handleClick} className="ok">
            Book Now
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SinglePage;
