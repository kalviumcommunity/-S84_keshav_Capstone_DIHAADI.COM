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

module.exports = mongoose.model("Freelancer", freelancerSchema);

freelancerSchema.virtual("projects", {
  ref: "Project",
  localField: "_id",
  foreignField: "freelancer",
});
freelancerSchema.set("toObject", { virtuals: true });
freelancerSchema.set("toJSON", { virtuals: true });


