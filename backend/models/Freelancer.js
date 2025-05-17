// backend/models/Freelancer.js
const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [String],
  phone: { type: String, required: true },
  location: String,
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Freelancer', freelancerSchema);
