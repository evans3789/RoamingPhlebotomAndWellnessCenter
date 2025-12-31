import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmailsAdmin.css";

const Emails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const token = localStorage.getItem("token"); // admin JWT
      try {
        const res = await axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/newsletter", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmails(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch emails");
      }
    };
    fetchEmails();
  }, []);

  return (
    <div className="emails-admin">
      <h1>Received Emails</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Subscribed At</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((e, index) => (
            <tr key={e._id}>
              <td>{index + 1}</td>
              <td>{e.email}</td>
              <td>{new Date(e.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emails;
