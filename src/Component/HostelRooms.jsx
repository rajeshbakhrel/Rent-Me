import React, { useState } from "react";
import "../Style/HostelRoom.css";
import { IoBed } from "react-icons/io5";

const HostelRooms = () => {
  const [iconClicked, setIconClicked] = useState(false);
  return (
    <>
      <h2 className="topic-room-bed">Room's and Bed</h2>
      <div className="full-room-container-hostel">
        <div className="room-one-container">
          <div className="row-one-room">
            <IoBed className="bed-hostel-red" />
          </div>
          <div className="row-two-room">
            <IoBed className="bed-hostel-red" />
          </div>
          <div className="row-three-room">
            <p>
              <IoBed
                className={`bed-hostel-blank ${iconClicked ? "active" : ""}`}
                onClick={() => setIconClicked(!iconClicked)}
              />
            </p>
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
          </div>
        </div>

        <div className="room-two-container">
          <div className="row-one-room">
            <IoBed className="bed-hostel-red" />
          </div>
          <div className="row-two-room">
            <IoBed className="bed-hostel-red" />
          </div>
          <div className="row-three-room">
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
          </div>
        </div>

        <div className="room-three-container">
          <div className="row-one-room">
            <IoBed className="bed-hostel-blank" />
          </div>
          <div className="row-two-room">
            <IoBed className="bed-hostel-blank" />
          </div>
          <div className="row-three-room">
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
            <p>
              <IoBed className="bed-hostel-red" />
            </p>
          </div>
        </div>

        <div className="room-four-container">
          <div className="row-one-room">
            <IoBed className="bed-hostel-blank" />
          </div>
          <div className="row-two-room">
            <IoBed className="bed-hostel-blank" />
          </div>
          <div className="row-three-room">
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
            <p>
              <IoBed className="bed-hostel-blank" />
            </p>
          </div>
        </div>
      </div>
      <div className="room-name">
        <div className="name-one">Room 1</div>
        <div className="name-two">Room 2</div>
        <div className="name-three">Room 3</div>
        <div className="name-four">Room 4</div>
      </div>
    </>
  );
};

export default HostelRooms;
