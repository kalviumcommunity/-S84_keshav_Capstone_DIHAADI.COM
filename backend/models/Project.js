const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer"
  }
});

module.exports = mongoose.model("Project", projectSchema);
