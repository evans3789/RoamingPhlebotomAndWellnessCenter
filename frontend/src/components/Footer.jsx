import React, { useState } from "react";
import "./Footer.css";
import { FaLocationPin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setStatus("Please enter an email");

    try {
      const res = await axios.post("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/newsletter", {
        email,
      });
      if (res.status === 201) {
        setStatus("Thank You for Your Subscription!");
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setStatus("Subscription failed");
    }
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <h2>GET IN TOUCH</h2>
          <p>
            Our vision is to minimize patients’ struggle and trouble in seeking
            medical services that they can otherwise receive at their
            convenience and comfort.
          </p>
          <p>
            <span>
              <FaLocationPin />
            </span>
            Location, Nairobi, Kenya
          </p>
          <p>
            <span>
              <TfiEmail />
            </span>
            info@phlebotomywellness.com
          </p>
        </div>
        <div className="right">
          <h2>NEWSLETTER</h2>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {status && <p className="status">{status}</p>}

          <h3>FOLLOW US</h3>
          <div className="footer-icons">
            <div className="socials">
              <FaFacebook />
              <AiFillTwitterCircle />
              <FaLinkedin />
            </div>
            <div className="footer-logo">
              <img src="logo.png" alt="" width="60px" height="60px" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            © 2024 <span> ROAMING PHLEBOTOMY & WELLNESS CENTER.</span> All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
