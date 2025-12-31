const router = require("express").Router();
const { createContact, getContacts } = require("../controllers/contactController");
const protect = require("../middleware/authMiddleware"); // admin JWT

// Public route for form submission
router.post("/", createContact);

// Protected route for admin
router.get("/", protect, getContacts);

module.exports = router;
