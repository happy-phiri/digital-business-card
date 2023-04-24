import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <FontAwesomeIcon
        className="cta-btn"
        icon="fa-brands fa-square-twitter"
        size="2xl"
      />
      <FontAwesomeIcon
        className="cta-btn"
        icon="fa-brands fa-square-facebook"
        size="2xl"
      />
      <FontAwesomeIcon
        className="cta-btn"
        icon="fa-brands fa-square-instagram"
        size="2xl"
      />
      <FontAwesomeIcon
        className="cta-btn"
        icon="fa-brands fa-square-github"
        size="2xl"
      />
    </footer>
  );
};

export default Footer;
