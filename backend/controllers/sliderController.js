const Slider = require("../models/Slider");

// GET ALL SLIDES (frontend)
exports.getSliders = async (req, res) => {
  try {
    const sliders = await Slider.find().sort({ createdAt: -1 });
    res.json(sliders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sliders" });
  }
};

// CREATE SLIDE (admin)
exports.createSlider = async (req, res) => {
  const { title, subtitle, buttonText, link } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }

  try {
    const slider = await Slider.create({
      title,
      subtitle,
      buttonText,
      link,
      image:`/uploads/${req.file.filename}`,
    });

    res.status(201).json(slider);
  } catch (error) {
    res.status(500).json({ message: "Failed to create slider" });
  }
};

// DELETE SLIDE (admin)
exports.deleteSlider = async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.json({ message: "Slider deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete slider" });
  }
};
