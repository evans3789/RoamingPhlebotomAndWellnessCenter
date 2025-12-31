import React, { useEffect, useRef, useState } from "react";
import api from "../api/api";
import "./Testimonials.css";

const AUTO_DELAY = 10000;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonials.length)
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [testimonials]);

  useEffect(() => {
    if (sliderRef.current && testimonials.length) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [index, testimonials]);

  if (!testimonials.length) return null;

  return (
    <section className="testimonials">
      <h2>TESTIMONIALS</h2>
      <h1>This Is What Patients Say About Our Services</h1>

      <div className="testimonial-slider" ref={sliderRef}>
        {testimonials.map((item) => (
          <div className="testimonial-slide" key={item._id}>
            <div className="testimonial-card">
              <img
                src={`https://roamingphlebotomandwellnesscenter-backend.onrender.com/uploads/${item.image}`}
                alt={item.name}
                className="testimonial-image"
              />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-nav">
        {testimonials.map((item, i) => (
          <img
            key={item._id}
            src={`https://roamingphlebotomandwellnesscenter-backend.onrender.com/uploads/${item.image}`}
            alt={item.name}
            className={`nav-dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
