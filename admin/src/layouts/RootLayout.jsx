import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = ({ user }) => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 900);

    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (isSmallScreen) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>
          Sorry, this site is not accessible on small screens. Please use a
          larger device.
        </p>
      </div>
    );
  }

  return (
    <div className="root">
      <div className="side-panel">
        <div className="user-info">
          <p>
            Logged in as: <strong>{user?.name || "Admin"}</strong>
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <NavBar />
      </div>
      <div className="display">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
