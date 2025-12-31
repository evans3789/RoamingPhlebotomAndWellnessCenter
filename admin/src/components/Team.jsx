import React, { useState } from "react";
import { useImagePreview } from "./useImagePreview";
import axios from "axios";

const Team = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const { preview, image, handleImageChange } = useImagePreview();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("quote", quote);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/team", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Team member added successfully");
      console.log(res.data);
      setName(""); setRole(""); setQuote("");
    } catch (err) {
      console.error(err);
      alert("Error adding team member");
    }
  };

  return (
    <div className="container">
      <h1>Create Team Member</h1>
      <div className="admin-card">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label>Role</label>
            <input value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div className="field">
            <label>Quote</label>
            <textarea value={quote} onChange={(e) => setQuote(e.target.value)} />
          </div>
          <div className="field">
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          {preview && (
            <div className="image-preview medium">
              <img src={preview} alt="Preview" />
            </div>
          )}
          <button className="submit-btn" type="submit">Add Team Member</button>
        </form>
      </div>
    </div>
  );
};

export default Team;
