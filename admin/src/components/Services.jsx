import React, { useState } from "react";
import { useImagePreview } from "./useImagePreview";
import axios from "axios";

const Services = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { preview, image, handleImageChange } = useImagePreview();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:4000/api/services",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Service added successfully");
      console.log(res.data);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Error adding service");
    }
  };

  return (
    <div className="container">
      <h1>Create Service</h1>
      <div className="admin-card">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Service Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Service Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          {preview && (
            <div className="image-preview small">
              <img src={preview} alt="Preview" />
            </div>
          )}
          <button className="submit-btn" type="submit">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;
