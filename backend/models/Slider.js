const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  buttonText: String,
  link: String,
  image: String,
});

module.exports = mongoose.model("Slider", sliderSchema);
