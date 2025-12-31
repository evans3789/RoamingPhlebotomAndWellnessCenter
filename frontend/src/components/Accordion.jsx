import React, { useState } from "react";
import "./Accordion.css";
import { accordionData } from "../assets/data";

const SupportServices = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="right">
      <h2>Support Services</h2>

      <p className="support-intro">
        RP&WC has developed a range of support services to address identified
        healthcare gaps. These include mobile specimen collection for laboratory
        testing and basic health procedures such as blood pressure checks, body
        weight measurements, and heart rate monitoring.
      </p>

      <div className="accordion">
        {accordionData.map((item) => (
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => toggleAccordion(item.id)}
            >
              {item.title}
              <span className="accordion-icon">
                {activeId === item.id ? "−" : "+"}
              </span>
            </button>

            <div
              className={`accordion-content ${
                activeId === item.id ? "open" : ""
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportServices;
