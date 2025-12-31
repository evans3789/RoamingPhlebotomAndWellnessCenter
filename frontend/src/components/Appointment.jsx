import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Sample Collection",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/appointments", form);
      alert("Appointment booked successfully!");
      setForm({ name: "", email: "", subject: "Sample Collection", date: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="appointment">
      <div className="container">
        <div className="appointment-left">
          <h2>BOOK APPOINTMENT</h2>
          <div>
            <h1>RESULTS HANDLING AND DELIVERY</h1>
            <p>
              Patients’ results will be handled with utmost confidentiality.
            </p>
          </div>
        </div>
        <div className="appointment-right">
          <h2>Book An Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="name-email">
              <div className="name">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="email">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="Sample Collection">Sample Collection</option>
              <option value="Wellness Check">Wellness Check</option>
              <option value="Other">Other</option>
            </select>
            <div className="month-time">
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
              <input type="time" name="time" value={form.time} onChange={handleChange} required />
            </div>
            <button type="submit">Make An Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
