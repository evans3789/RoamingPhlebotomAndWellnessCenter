import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/auth/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Admin Signup</h1>
      <div className="admin-card">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="submit-btn" type="submit">
            Signup
          </button>
          <p style={{ textAlign: "center" }}>
            Or{" "}
            <NavLink
              to="/login"
              style={{ textDecoration: "none", fontWeight: "bolder" }}
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
