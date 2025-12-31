const Service = require("../models/Service");

exports.createService = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }

  const service = await Service.create({
    ...req.body,
    image: `/uploads/${req.file.filename}`, 
  });

  res.status(201).json(service);
};

exports.getServices = async (req, res) => {
  const services = await Service.find().sort({ createdAt: 1 });
  res.json(services);
};
