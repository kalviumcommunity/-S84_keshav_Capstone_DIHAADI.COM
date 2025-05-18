const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Create new project
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all projects with freelancer info
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("freelancer");
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
