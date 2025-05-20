import React from "react";

const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{freelancer.name}</h2>
      <p className="text-sm text-gray-600">{freelancer.skill}</p>
      <p className="text-sm text-gray-500">₹ {freelancer.rate}/hr</p>
    </div>
  );
};

export default FreelancerCard;
