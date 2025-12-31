import React, { useEffect, useRef, useState } from "react";
import api from "../api/api";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);
  const scrollRef = useRef(null);
  const indexRef = useRef(0);

  // Fetch team from backend
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get("/api/team");
        setTeam(res.data);
      } catch (err) {
        console.error("Failed to load team", err);
      }
    };

    fetchTeam();
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!team.length) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      indexRef.current = (indexRef.current + 1) % team.length;

      scrollRef.current.scrollTo({
        left: indexRef.current * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [team]);

  if (!team.length) return null;

  return (
    <div className="team">
      <div className="container">
        <h2 className="team-heading">Our Team</h2>
        <h1>
          Qualified Healthcare <br />
          Professionals
        </h1>

        <div className="team-carousel" ref={scrollRef}>
          {team.map((member) => (
            <div className="team-slide" key={member._id}>
              <img
                src={`http://localhost:4000${member.image}`}
                alt={member.name}
                className="team-slide-image"
              />

              <div className="team-slide-text">
                <h3 className="team-name">
                  {member.name}: <span>({member.role})</span>
                </h3>
                <p className="quote">{member.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
