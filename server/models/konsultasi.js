const mongoose = require("mongoose");

// Define MongoDB schema and model
const konsulSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  pertanyaan: String,
});

module.exports = mongoose.model("Konsul", konsulSchema);


