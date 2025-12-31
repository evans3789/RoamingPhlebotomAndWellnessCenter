const Appointment = require("../models/Appointment");

// Create new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, subject, date, time } = req.body;
    const appointment = await Appointment.create({ name, email, subject, date, time });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create appointment", error });
  }
};

// Get all appointments (for admin)
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments", error });
  }
};
