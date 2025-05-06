const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  name: String,
  skill: String,
  location: String,
  rating: Number,
  available: Boolean
});

module.exports = mongoose.model('Freelancer', freelancerSchema);
