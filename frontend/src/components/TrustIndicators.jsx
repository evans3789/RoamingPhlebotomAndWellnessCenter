import React from "react";
import "./TrustIndicators.css"
const TrustIndicators = () => {
  return (
    <div className="trust-indicators">
      <div className="container">
        <div className="trust-item">
          <h1>25+</h1>
          <h3>Counties Covered</h3>
        </div>
        <div className="trust-item">
          <h1>100%</h1>
          <h3>Confidential Results</h3>
        </div>
        <div className="trust-item">
          <h1>Mobile</h1>
          <h3>On-site Collections</h3>
        </div>
        <div className="trust-item">
          <h1>Certified</h1>
          <h3>Phlebotomy Experts</h3>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
