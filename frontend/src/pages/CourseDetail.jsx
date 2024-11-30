import React from "react";
import { Button } from "react-scroll";
import OnlineCourse from "../assets/online-course.png";
import AdditionalImage from "../assets/online-course.png"; // İkinci resmi buraya ekleyin
import Navbar from "../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-pink-100 to-blue-200 min-h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto py-32">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Course Name</h1>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src={OnlineCourse}
            className="w-full max-w-2xl rounded-lg shadow-lg"
            alt="OnlineCourse"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
            <div>
              <p className="text-xl font-semibold">$129.99</p>
              <p className="text-sm">Price</p>
            </div>
            <div>
              <p className="text-xl font-semibold">34h, 45m</p>
              <p className="text-sm">Total Hours</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Beginner</p>
              <p className="text-sm">Course Level</p>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate("/course");
                }}
                className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-blue-600 mr-2"
              >
                Enroll Now
              </Button>
              <Button className="px-4 pr-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-orange">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-start lg:items-center justify-center lg:justify-start">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What You'll Learn
              </h2>
              <p className="text-lg text-gray-700">
                Do you ever scroll through images of beautiful lettering on
                Instagram and think to yourself that if you could do the same?
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Material Includes
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>34 hours on-demand video</li>
                <li>45 articles</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={AdditionalImage}
              className="max-h-64 rounded-lg shadow-lg"
              alt="AdditionalImage"
            />
          </div>
        </div>

        {/* Kurs müfredatı alanı */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Curriculum
          </h2>
          <div className="divide-y divide-gray-200">
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                01. Introduction
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Welcome! Watch this First</li>
                <li>Office Hours</li>
                <li>The Magic Student Center</li>
              </ul>
            </div>
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                02. Setup and Foundation
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Welcome! Watch this First</li>
                <li>Office Hours</li>
                <li>Up and runnings</li>
                <li>The Magic Student Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
