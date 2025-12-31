import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Dashbaord</NavLink>
      <NavLink to="/slider">Home Sliders</NavLink>
      <NavLink to="services">Services</NavLink>
      <NavLink to="team">Team</NavLink>
      <NavLink to="testimonials">Testimonials</NavLink>{" "}
      <NavLink to="messages">Messages</NavLink>
      <NavLink to="appointments">Appointments</NavLink>
      <NavLink to="emails">Emails</NavLink>
    </div>
  );
};

export default NavBar;
