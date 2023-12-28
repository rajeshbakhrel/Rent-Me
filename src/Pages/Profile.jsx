// import React from "react";
import "../Style/Profile.css";
import img from "../Assects/my.jpg";
import React, { useState, useEffect } from "react";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://parajuli11.pythonanywhere.com/user/profile/7/"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {userData && (
        <div className="full-profile-container">
          <div className="profile-full-container">
            <div className="profile-avatar">
              <img src={img} className="profile-avatar-image" />
            </div>
            <div className="name-address">
              <p>
                <span>NAME</span> : {userData.name}
              </p>

              <p>
                <span>E-MAIL </span>: {userData.email}
              </p>
            </div>
            <hr />
          </div>
          <div className="profile-lower-container">
            <p>
              <span>USERNAME</span>: {userData.username}
            </p>
            <p>
              <span>CONTACT</span> :{userData.contact}
            </p>
            <p>
              <span>ADDRESS </span>: Bharatpur-7, Chitwan
            </p>

            <p>
              <span>DATE CREATED</span>:{useState.date_created}
            </p>

            <p>
              <span>DATE UPDATED</span>:{useState.date_updated}
            </p>

            <p>
              <span>IS ACTIVE</span>:Active
            </p>

            <p>
              <span>RELEGION </span>: Hindu
            </p>
            <p>
              <span>NATIONALITY </span>: Nepali
            </p>
            <p>
              <span>DISCRIPTION</span> : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero alias nam qui sunt nulla voluptas
              <br /> earum reprehenderit distinctio rerum quasi, suscipit eos!
              Eum suscipit labore minus asperiores saepe neque. Ad!
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
