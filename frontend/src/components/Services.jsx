import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/api/services");
        setServices(res.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };

    fetchServices();
  }, []);

  if (!services.length) return <p>Loading services...</p>;

  return (
    <div className="services-page">
      <h1>Excellent Phlebotomy Services</h1>
      <section className="core-services">
        <div className="core-services-grid">
          {services.map((service) => (
            <div className="core-box" key={service._id}>
              <img
                src={`https://roamingphlebotomandwellnesscenter-backend.onrender.com/${service.image}`}
                alt={service.title}
                className="core-image"
              />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
