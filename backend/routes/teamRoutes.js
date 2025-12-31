const router = require("express").Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const {
  createTeam,
  getTeam,
} = require("../controllers/teamController");

// PUBLIC (frontend)
router.get("/", getTeam);

// ADMIN
router.post("/", protect, upload.single("image"), createTeam);

module.exports = router;
