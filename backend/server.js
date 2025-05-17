// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Freelancer = require('./models/Freelancer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// POST Endpoint
app.post('/api/freelancers', async (req, res) => {
  try {
    const newFreelancer = new Freelancer(req.body);
    const savedFreelancer = await newFreelancer.save();
    res.status(201).json(savedFreelancer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// GET - Fetch all freelancers
app.get('/api/freelancers', async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// PUT - Update an existing freelancer
app.put('/api/freelancers/:id', async (req, res) => {
  try {
    const updatedFreelancer = await Freelancer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedFreelancer) {
      return res.status(404).json({ error: 'Freelancer not found' });
    }
    res.status(200).json(updatedFreelancer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
