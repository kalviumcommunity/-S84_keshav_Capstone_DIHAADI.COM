import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.description}</p>
      <p className="text-sm text-blue-500 mt-2">₹ {job.budget}</p>
    </div>
  );
};

export default JobCard;
