import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="container">
        <div className="sad">
          <HiOutlineEmojiSad />
        </div>
        <h1>We’re Sorry — This Page Can’t Be Found</h1>
        <p>
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable. <br />
          Your health and access to accurate information remain our priority.
        </p>
        <p>Please consider one of the following options:</p>
        <ul>
          <li>Check the URL for typing errors</li>
          <li>Return to the homepage</li>
          <li>Use the navigation menu to find services or information</li>
          <li>Contact our support team for assistance</li>
          <div className="actions">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Homepage
            </button>
          </div>
        </ul>
        <p></p>
      </div>
    </div>
  );
};

export default PageNotFound;
