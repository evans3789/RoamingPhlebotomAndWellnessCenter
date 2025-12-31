import React from "react";
import { TfiEmail } from "react-icons/tfi";
import "./Address.css";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Address = () => {
  return (
    <div className="address">
      <div className="container">
        <div className="email">
          <p>
            | <TfiEmail /> <NavLink>info@phlebotomywellness.com</NavLink>
          </p>
        </div>
        <div className="socials">
          <NavLink to="">
            <FaFacebook />
          </NavLink>
          <NavLink to="">
            <FaTwitter />
          </NavLink>
          <NavLink to="">
            <FaLinkedinIn />
          </NavLink>
          <NavLink to="">
            <FaInstagram />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Address;
