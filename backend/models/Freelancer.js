// backend/models/Freelancer.js

const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  experience: {
    type: String
  },
}, { timestamps: true });

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;
