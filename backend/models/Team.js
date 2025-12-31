const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  quote: String,
  image: String,
});

module.exports = mongoose.model("Team", teamSchema);
