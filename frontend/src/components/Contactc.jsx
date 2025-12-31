import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contactc.css";
import { BiSolidDirections } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { contactCards } from "../assets/data";

const Contactc = () => {
  const iconMap = {
    facebook: <FaFacebook />,
    x: <FaXTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    whatsapp: <FaWhatsappSquare />,
    email: <MdOutgoingMail />,
  };

  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleContacts = isMobile ? contactCards : contactCards.slice(0, 4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/contact", {
        name,
        email,
        subject,
        message,
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-methods">
        {visibleContacts.map((item) => (
          <div
            key={item.id}
            className="contact-box"
            style={{ "--accent-color": item.color }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="icon" style={{ color: item.color }}>
                {iconMap[item.icon]}
              </div>
              <div className="content">
                <h4>{item.name}</h4>
                <p>{item.displayText}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            We would be happy to hear from you. Please reach out using the form
            or visit us at our location.
          </p>
          <button title="Click for directions from your current location">
            <h1>
              <BiSolidDirections />
              <br />
            </h1>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=5th%20Avenue%20Suites%2C%207th%20Floor%2C%20Nairobi%2C%20Kenya"
              target="_blank"
              rel="noopener noreferrer"
            >
              5th Avenue Suites, 7th Floor, Nairobi, Kenya
            </a>
          </button>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=5th%20Avenue%20Suites%2C%207th%20Floor%2C%20Nairobi&z=18&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactc;
