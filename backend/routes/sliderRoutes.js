const router = require("express").Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const {
  createSlider,
  getSliders,
  deleteSlider,
} = require("../controllers/sliderController");

// PUBLIC – frontend
router.get("/", getSliders);

// ADMIN – protected
router.post("/", protect, upload.single("image"), createSlider);
router.delete("/:id", protect, deleteSlider);

module.exports = router;
