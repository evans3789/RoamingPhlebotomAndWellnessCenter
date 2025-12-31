const express = require("express");
const router = express.Router();
const { signupAdmin, loginAdmin } = require("../controllers/authController");

// POST /api/auth/signup
router.post("/signup", signupAdmin);

// POST /api/auth/login
router.post("/login", loginAdmin);

module.exports = router;
