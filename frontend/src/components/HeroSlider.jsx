import React, { useEffect, useState } from "react";
import "./HeroSlider.css";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const HeroSlider = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get("/api/slider");
        setSlides(res.data);
      } catch (error) {
        console.error("Failed to load slides", error);
      }
    };
    fetchSlides();
  }, []);

  // Auto slide
  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, [slides]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  if (!slides.length) return null;

  return (
    <div className="hero-slider">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide._id}
            className="slide"
            style={{
              backgroundImage: `url(https://roamingphlebotomandwellnesscenter-backend.onrender.com/${slide.image})`,
            }}
          >
            <div className="container">
              <div className="slide-content">
                <h2>{slide.subtitle}</h2>
                <h1>{slide.title}</h1>
                <button onClick={() => navigate(`/${slide.link}`)}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-button prev" onClick={goToPrev}>
        ‹
      </button>
      <button className="nav-button next" onClick={goToNext}>
        ›
      </button>
    </div>
  );
};

export default HeroSlider;
