const router = require("express").Router();
const { sendReply } = require("../controllers/mailController");
const protect = require("../middleware/authMiddleware");

router.post("/reply", protect, sendReply);

module.exports = router;
