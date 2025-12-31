const router = require("express").Router();
const Newsletter = require("../models/Newsletter");
const protect = require("../middleware/authMiddleware");
const { sendNewsletterWelcome } = require("../controllers/mailController");

// Admin – get all subscribers
router.get("/", protect, async (req, res) => {
  try {
    const emails = await Newsletter.find().sort({ createdAt: -1 });
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch emails" });
  }
});

// Public – subscribe + AUTO EMAIL
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Prevent duplicates
    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newsletter = await Newsletter.create({ email });

    // ✅ SEND INSTANT AUTO EMAIL
    await sendNewsletterWelcome(email);

    res.status(201).json({
      message: "Subscribed successfully. Confirmation email sent.",
      newsletter,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

module.exports = router;
