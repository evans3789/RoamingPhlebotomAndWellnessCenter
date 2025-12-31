const router = require("express").Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const {
  createService,
  getServices,
} = require("../controllers/serviceController");

router.post("/", protect, upload.single("image"), createService);
router.get("/", getServices);

module.exports = router;
