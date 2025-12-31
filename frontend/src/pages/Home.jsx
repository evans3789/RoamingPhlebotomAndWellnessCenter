import React from "react";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import ServiceSummary from "../components/ServiceSummary";
import TrustIndicators from "../components/TrustIndicators";
import Appointment from "../components/Appointment";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <TrustIndicators />
      <ServiceSummary />
      <Services />
      <Appointment />
    </div>
  );
};

export default Home;
