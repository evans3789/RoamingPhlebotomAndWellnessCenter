import React from "react";
import "./Aboutc.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

const Aboutc = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="left">
          <img src="about.jpg" alt="" />
        </div>
        <div className="right">
          <h2>ABOUT US</h2>
          <p>
            Roaming Phlebotomy and Wellness Center (RP&WC) is a Kenyan Center
            for Phlebotomy services and provision of Wellness health checks for
            individuals, Corporates and organized groups. RP&WC mainly
            outsources phlebotomy services to medical and research institutions.
            This is through a well-trained strong, committed team, dedicated to
            providing the highest standard of blood collecfion.
          </p>
          <div className="icons">
            <div className="icon">
              <h1>
                <MdAccessTimeFilled />
              </h1>
              <h3>
                Timely Sample <br /> <span>Collection</span>
              </h3>
            </div>
            <div className="icon">
              <h1>
                <FaCheckCircle />
              </h1>
              <h3>
                High Quality <br /> <span>Specimens</span>
              </h3>
            </div>
            <div className="icon">
              <h1>
                <FaBed />
              </h1>
              <h3>
                Client's
                <br /> <span>Comfort</span>
              </h3>
            </div>
            <div className="icon">
              <h1>
                <FaHouseUser />
              </h1>
              <h3>
                Client's <br /> <span>Convenience</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutc;
