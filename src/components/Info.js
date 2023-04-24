import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <header>
      {/* HEADER IMAGE */}
      <div className="header-avatar">
        <img src="./images/avatar2.jpg" alt="" />
      </div>

      {/* HEADER PERSONAL DETAILS */}
      <div className="header-info">
        <h1 className="header-info-name">Laura Smith</h1>
        <p className="header-info-title">Frontend Developer</p>
        <p className="header-info-website">www.laurasmith.dev</p>
      </div>

      {/* HEADER BUTTONS */}
      <div className="header-btns">
        <button className=" btn header-btns-email">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-envelope"
            size="lg"
          />{" "}
          Email
        </button>
        <button className=" btn header-btns-linkedin">
          <FontAwesomeIcon
            className="icon"
            icon="fa-brands fa-linkedin"
            size="lg"
          />
          LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Info;
