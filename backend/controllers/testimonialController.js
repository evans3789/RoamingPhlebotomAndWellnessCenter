const Testimonial = require("../models/Testimonial");

// Create new testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create({
      ...req.body,
      image: req.file.filename,
    });
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Failed to create testimonial", error });
  }
};

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
};
