import React from "react";
import "./MissionVision.css";
const MissionVision = () => {
  return (
    <div className="mission-vision">
      <div className="container">
        <div className="left">
          <div className="mission">
            <h2>MISSION</h2>
            <div className="steps">
              <ol type="a" className="alpha-list">
                <li>
                  Minimize patients’ hassles and cost to access laboratory
                  services. We take the responsibility of traffic jams and
                  hospital cues to ensure results are timely delivered.
                </li>
                <li>
                  Connect patients to service providers at a time and locafion
                  of their desire, convenience and choosing.
                </li>
                <li>
                  Connect patients to high quality and affordable medical
                  service providers.
                </li>
              </ol>
            </div>
            <div className="vision">
              <h2>VISION</h2>
              <p>
                Minimize patients’ struggle and trouble in seeking medical
                services that they can otherwise receive at their convenience
                and comfort.
              </p>
              <p>Delivering health services at doorsteps</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="image2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
