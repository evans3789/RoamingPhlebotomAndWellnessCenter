const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { createAppointment, getAppointments } = require("../controllers/appointmentController");

// Public route to submit appointment
router.post("/", createAppointment);

// Admin route to fetch all appointments
router.get("/", protect, getAppointments);

module.exports = router;
