import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    messages: 0,
    emails: 0,
    testimonials: 0,
    sliders: 0,
    team: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [messagesRes, emailsRes, testimonialsRes, slidersRes, teamRes] =
          await Promise.all([
            axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/contact", { headers }),
            axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/newsletter", { headers }),
            axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/testimonials", { headers }),
            axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/slider", { headers }),
            axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/team", { headers }),
          ]);

        setStats({
          messages: Array.isArray(messagesRes.data)
            ? messagesRes.data.length
            : 0,
          emails: Array.isArray(emailsRes.data) ? emailsRes.data.length : 0,
          testimonials: Array.isArray(testimonialsRes.data)
            ? testimonialsRes.data.length
            : 0,
          sliders: Array.isArray(slidersRes.data) ? slidersRes.data.length : 0,
          team: Array.isArray(teamRes.data) ? teamRes.data.length : 0,
        });
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={() => navigate("slider")}>
          <h3>Slider Items</h3>
          <p>{stats.sliders}</p>
        </div>{" "}
        <div className="dashboard-card" onClick={() => navigate("team")}>
          <h3>Team Members</h3>
          <p>{stats.team}</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("messages")}>
          <h3>Messages</h3>
          <p>{stats.messages}</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("emails")}>
          <h3>Newsletter Emails</h3>
          <p>{stats.emails}</p>
        </div>
        <div
          className="dashboard-card"
          onClick={() => navigate("testimonials")}
        >
          <h3>Testimonials</h3>
          <p>{stats.testimonials}</p>
        </div>
      </div>
      <div className="dashboard-summary">
        <h2>System Overview</h2>
        <p>
          This dashboard provides a real-time snapshot of all key activities
          across the Roaming Phlebotomy & Wellness Center platform. The metrics
          above reflect live data from your database and are designed to help
          administrators monitor engagement, communication flow, and content
          growth efficiently.
        </p>

        <p>
          <strong>Messages</strong> represent direct inquiries submitted by
          patients and visitors, while <strong>Newsletter Emails</strong> track
          users who have opted in to receive updates, health tips, and
          announcements. Monitoring these helps ensure timely communication and
          patient satisfaction.
        </p>

        <p>
          <strong>Testimonials</strong> highlight patient feedback and service
          credibility, <strong>Slider Items</strong> reflect active promotional
          or informational content displayed on the website, and
          <strong> Team Members</strong> represent your registered healthcare
          and support staff contributing to service delivery.
        </p>
        <p className="dashboard-note">
          Tip: Use the navigation menu to manage individual sections such as
          messages, emails, sliders, testimonials, and team members.
        </p>
        <p className="dashboard-note">
          Regularly reviewing this dashboard ensures operational visibility,
          content accuracy, and prompt engagement with your community.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
