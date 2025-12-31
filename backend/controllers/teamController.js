const Team = require("../models/Team");

exports.createTeam = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }

  const team = await Team.create({
    ...req.body,
    image: `/uploads/${req.file.filename}`, // <-- add /uploads/
  });

  res.status(201).json(team);
};

exports.getTeam = async (req, res) => {
  const team = await Team.find().sort({ createdAt: 1 });
  res.json(team);
};
