import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentsAdmin.css";

const AppointmentsAdmin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem("token"); // admin JWT
      try {
        const res = await axios.get("http://localhost:4000/api/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch appointments");
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="appointments-admin">
      <h1>All Appointments</h1>
      <table>
        <thead>
          <tr>
            <th>#</th> {/* Count Column */}
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Booked At</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, index) => (
            <tr key={a._id}>
              <td>{index + 1}</td> {/* Show count starting from 1 */}
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.subject}</td>
              <td>{new Date(a.date).toLocaleDateString()}</td>
              <td>{a.time}</td>
              <td>{new Date(a.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsAdmin;
