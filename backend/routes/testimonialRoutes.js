const router = require("express").Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const {
  createTestimonial,
  getTestimonials,
} = require("../controllers/testimonialController");

// Create testimonial (admin)
router.post("/", protect, upload.single("image"), createTestimonial);

// Get all testimonials (frontend)
router.get("/", getTestimonials);

module.exports = router;
