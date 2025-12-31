import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu} className="logo-content">
            <img src="logo.png" alt="Logo" />
            <p>
              ROAMING PHLEBOTOMY $ <br /> WELLNESS CENTER
            </p>
          </NavLink>
        </div>

        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/preamble" onClick={closeMenu}>
            Preamble
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/appointments" onClick={closeMenu}>
            Appointments
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="bars" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
