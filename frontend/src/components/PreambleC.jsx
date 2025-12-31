import React from "react";
import "./Preamble.css";
const PreambleC = () => {
  return (
    <div className="preamble">
      <div className="container">
        <div className="left">
          <img src="about.jpg" alt="" />
        </div>
        <div className="right">
          <h2>PREAMBLE</h2>
          <p>
            With the emergence of COVID-19 in late 2019, governments globally
            put-up measures to prevent spread of the virus and break the chain
            of further infections.
          </p>
          <p>
            Stringent measures such as restrictions on movement and public
            gatherings, mandatory isolation and quarantine of infected persons
            were put in place.
          </p>
          <p>
            In this case there was a need for mobile phlebotomy services to
            reach out persons whose movements had been restricted into homes,
            isolation and quarantine centers.
          </p>
          <p>
            Whereas mobile phlebotomy and wellness services helped many people
            during that period, the benefits of these services extend beyond
            people who were not directly affected by the pandemic.
          </p>
          <p>
            This includes persons with mobility challenges such as the elderly
            and bedridden who required the services at their convenience and
            comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreambleC;
