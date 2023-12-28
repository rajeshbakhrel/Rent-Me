// import React from "react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SingleContent from "./SingleContent";
import "../Style/SingleCard.css";
import "../Style/HostelContainer.css";
import loadingphoto from "../Assects/loading.gif";
import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";

const HostelContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHostelData = async () => {
      try {
        const response = await fetch(
          "https://parajuli11.pythonanywhere.com/hostel/list/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHostels(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hostel data:", error);
        setLoading(false);
      }
    };

    fetchHostelData();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://parajuli11.pythonanywhere.com/hostel/search/?search=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setHostels(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  const handleCityFilter = async (city) => {
    // Function to filter by city
    setLoading(true);
    try {
      const response = await fetch(
        `https://parajuli11.pythonanywhere.com/hostel/${city}/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setHostels(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hostels in the city:", error);
      setLoading(false);
    }
  };

  return (
    <div className="hostel-full-container">
      <div className="hostel-left-container">
        <div className="hostel-search">
          <input
            type="text"
            placeholder="Search hostels"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar-hostel"
          />
          <button onClick={handleSearch} className="button-of-search">
            <FaSearch />
          </button>
        </div>

        {/* <div>
          <input
            type="text"
            placeholder="Search hostels"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div> */}

        <div className="home-city">
          <h3 className="filter-heading">Where do you want</h3>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Bharatpur")}
          >
            Bharatpur
          </p>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Kathmandu")}
          >
            Kathmandu
          </p>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Butwal")}
          >
            Butwal
          </p>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Pokhara")}
          >
            Pokhara
          </p>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Hetuda")}
          >
            Hetuda
          </p>
          <p
            className="listing-city"
            onClick={() => handleCityFilter("Lalitpur")}
          >
            Lalitpur
          </p>
        </div>
        <div className="hostel-search-two">
          <input
            type="text"
            placeholder="Search hostels"
            className="search-bar-hostel-two"
          />
          {/* <button onClick={handleSearch} className="button-of-search-two">
            <FaSearch />
          </button> */}
        </div>

        <div className="hostel-search-three">
          <input type="text" className="search-bar-hostel-three" />
          <button onClick={handleSearch} className="button-of-search-three">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="hostel-right-contaier">
        <div className="right-upper-container">
          <div className="home-view">
            <IoGrid className="list-icon active" />
            <FaList className="list-icon" />
          </div>

          <div className="home-total">Total Number of Hostel: 8</div>
        </div>
        <div className="right-lower-container">
          <div className="home-card-display">
            <h2>Hostel List</h2>
            {loading ? (
              <p className="login-photo">
                <img src={loadingphoto} alt="helo" />
              </p>
            ) : (
              <ul className="edit-card">
                {hostels.map((currElem) => {
                  return (
                    <div className="feature-hostel-contentianers">
                      <SingleContent key={currElem.id} {...currElem} />
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelContainer;
