import React, { useState } from "react";
import { useImagePreview } from "./useImagePreview";
import axios from "axios";

const HomeSlider = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [buttonText, setButtonText] = useState("Book Appointment");
  const [link, setLink] = useState("appointments");
  const { preview, image, handleImageChange } = useImagePreview(); // expose image

  const handleButtonChange = (e) => {
    const value = e.target.value;
    setButtonText(value);
    setLink(value === "Book Appointment" ? "appointments" : "contact");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("buttonText", buttonText);
    formData.append("link", link);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token"); // assume stored after login
      const res = await axios.post(
        "http://localhost:4000/api/slider",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Slider created successfully");
      console.log(res.data);
      // Reset form
      setTitle("");
      setSubtitle("");
      setButtonText("Book Appointment");
      setLink("appointments");
    } catch (err) {
      console.error(err);
      alert("Error creating slider");
    }
  };

  return (
    <div className="container">
      <h1>Create Homepage Slider</h1>
      <div className="admin-card">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="field">
              <label>Subtitle</label>
              <input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Button Text</label>
              <select value={buttonText} onChange={handleButtonChange}>
                <option>Book Appointment</option>
                <option>Contact Us</option>
              </select>
            </div>
            <div className="field">
              <label>Generated Link</label>
              <input value={link} readOnly />
            </div>
          </div>

          <div className="field">
            <label>Background Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <button className="submit-btn" type="submit">
            Create Slider
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSlider;
