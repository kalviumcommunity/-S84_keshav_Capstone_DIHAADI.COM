import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to dihaadi.com</h1>
      <p className="mb-6">A platform where freelancers meet employers.</p>
      <div className="space-x-4">
        <Link to="/freelancers" className="bg-blue-600 text-white px-4 py-2 rounded">Browse Freelancers</Link>
        <Link to="/jobs" className="bg-gray-700 text-white px-4 py-2 rounded">View Jobs</Link>
      </div>
    </section>
  );
};

export default Home;
