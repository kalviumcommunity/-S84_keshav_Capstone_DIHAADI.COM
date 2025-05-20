import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FreelancerCard from './pages/FreelancerCard';
import JobCard from './pages/JobCard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancers" element={<FreelancerCard />} />
        <Route path="/jobs" element={<JobCard />} />
      </Routes>
    </Router>
  );
}

export default App
