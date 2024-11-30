import React, { useState } from "react";
import maleMentor from "../../../assets/male-mentor.jpeg";
import { FaStar } from "react-icons/fa";
import EnrolledCourses from "../EnrolledCourses";

const Dashboard = ({ setCurrentPage }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="flex-1  p-20 mt-8 ">
          <div className="flex justify-between bg-gray-dark rounded-full p-10 items-center mb-10">
            <div className="flex gap-6">
              <img
                src={maleMentor}
                alt="Mentor"
                className="rounded-full w-24 h-24"
              />
              <div className="flex justify-center items-center">
                <p className="text-lg font-medium text-text-white">
                  Howdy, Charles Robin
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage("Enrolled Courses")}
              className="bg-category-primary transition-all text-white px-12 py-2 text-lg font-semibold hover:bg-blue-600 rounded-full"
            >
              Show Courses
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example card */}
            {Array(6)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="p-8 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center gap-12 hover:shadow-md transition-shadow duration-300"
                >
                  <FaStar className="w-12 h-12 text-blue-500" />
                  <div>
                    <p className="text-4xl font-bold mb-0">0</p>
                    <p className="text-sm text-gray-500">Enrolled courses</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
