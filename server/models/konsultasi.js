const mongoose = require("mongoose");

// Define MongoDB schema and model
const konsulSchema = new mongoose.Schema({
  name: String,
  email: String,
  question: String,
  time: {
    type: String, // Tipe data untuk jam (dapat juga menggunakan Number, tergantung kebutuhan)
    default: () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },
  date: {
    type: String,
    default: () => {
      const now = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return now.toLocaleDateString('id-ID', options);
    }
  }
});

module.exports = mongoose.model("Konsul", konsulSchema);
