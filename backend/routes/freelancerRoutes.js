const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer');

// GET all freelancers
router.get('/', async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

