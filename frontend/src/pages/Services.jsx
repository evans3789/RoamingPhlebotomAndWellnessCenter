import React from "react";
import Servicesc from "../components/Services";
import Appointment from "../components/Appointment";
import Support from "../components/Support";
import Testimonials from "../components/Testimonials";

const Services = () => {
  return (
    <div>
      <Servicesc />
      <Support />
      <Appointment />
      <Testimonials />
    </div>
  );
};

export default Services;
