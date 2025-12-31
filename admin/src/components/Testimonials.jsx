import React, { useState } from "react";
import { useImagePreview } from "./useImagePreview";
import axios from "axios";

const Testimonials = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { preview, image, handleImageChange } = useImagePreview();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/testimonials",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Testimonial added successfully");
      console.log(res.data);
      setName("");
      setText("");
    } catch (err) {
      console.error(err);
      alert("Error adding testimonial");
    }
  };

  return (
    <div className="container">
      <h1>Add Testimonial</h1>
      <div className="admin-card">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="field">
            <label>Testimony</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>

          <div className="field">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {preview && (
            <div className="image-preview medium">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <button className="submit-btn" type="submit">
            Add Testimonial
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
