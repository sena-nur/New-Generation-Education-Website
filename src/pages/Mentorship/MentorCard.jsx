import React from "react";

const MentorCard = ({ mentor, selectMentor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="relative w-full h-0" style={{ paddingBottom: "58.25%" }}>
        <img
          src={mentor.image}
          alt={mentor.name}
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{mentor.name}</h3>
        <p className="text-gray-600 mb-2">{mentor.expertise}</p>
        <p className="text-gray-600 mb-2">{mentor.experience}</p>
        <p className="text-gray-600 mb-2">{mentor.rate}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => selectMentor(mentor)}
        >
          Select Mentor
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
