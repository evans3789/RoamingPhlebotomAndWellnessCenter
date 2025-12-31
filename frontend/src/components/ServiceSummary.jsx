import React from "react";
import "./ServiceSummary.css";
const ServiceSummary = () => {
  return (
    <div className="service-summary">
      <div className="container">
        <h1>Our Comprehensive Wellness Solutions</h1>
        <p>
          At RP&WC, we bridge the gap between healthcare providers and patients
          by offering mobile, reliable, and professional medical services across
          25+ counties in Kenya.
        </p>
        <div className="summary-items">
          <div className="summary-item">
            <h2>Professional Phlebotomy Outsourcing</h2>
            <p>
              We partner with medical centers, diagnostic labs, and research
              institutions to provide expert blood collection services.
            </p>
            <ul>
              <li>
                <b>Timely Collection:</b> We adhere to strict schedules to
                ensure sample integrity.
              </li>
              <li>
                <b>High-Quality Specimens:</b> WOur staff is trained in the
                latest clinical protocols to minimize errors.
              </li>
              <li>
                <b>Research Support:</b> We provide dedicated teams for
                large-scale medical research data collection.
              </li>
            </ul>
          </div>
          <div className="summary-item">
            <h2>Workplace Wellness Programs</h2>
            <p>
              A healthy workforce is a successful one. Our corporate packages
              help HR departments manage employee health through.
            </p>
            <ul>
              <li>
                <b>On-site Wellness Screenings:</b> Blood pressure, glucose,
                BMI, and cholesterol checks.
              </li>
              <li>
                <b>Occupational Health:</b> Tailored drives to maintain a
                "health-first" corporate culture.
              </li>
              <li>
                <b>Wellness Reporting:</b> Confidential aggregate data to help
                companies understand their health trends.
              </li>
            </ul>
          </div>
          <div className="summary-item">
            <h2>Mobile Wellness Checks (Individuals)</h2>
            <p>
              Skip the hospital queues. We offer wellness check-ups in the
              comfort of your living room.
            </p>
            <ul>
              <li>
                <b>Full Body Profiles:</b> Comprehensive blood panels to track your health.
              </li>
              <li>
                <b>Pre-Travel Tests:</b> Quick and convenient testing for
                travelers.
              </li>
              <li>
                <b>Chronic Disease Monitoring:</b>Easy regular checks for
                patients managing conditions like diabetes or hypertension.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;
