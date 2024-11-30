import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { course: "Course A", price: 200, count: 2 },
  { course: "Course B", price: 300, count: 2 },
  { course: "Course C", price: 150, count: 2 },
  { course: "Course D", price: 400, count: 2 },
  { course: "Course E", price: 250, count: 2 },
];

const Earnings = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleBarClick = (course) => {
    setSelectedCourse((prevSelectedCourse) => {
      // If the clicked course is already selected, deselect it
      if (prevSelectedCourse && prevSelectedCourse.course === course.course) {
        return null;
      } else {
        return course;
      }
    });
  };

  const updatedData = data.map((course) => {
    return {
      ...course,
      totalEarned: course.price * course.count,
    };
  });

  // Calculate total earnings
  const totalEarnings = updatedData.reduce((total, course) => {
    return total + course.totalEarned;
  }, 0);

  const totalCount = updatedData.reduce((total, course) => {
    return total + course.count;
  }, 0);

  return (
    <div
      className="flex justify-center items-center bg-gray-300 w-10/12
     pt-28 pb-4 "
    >
      <div className="  md:w-3/4 p-6 bg-white rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Course Earnings
        </h1>
        <div className="text-center mb-8 text-gray-800">
          <p className="text-xl">Total Earnings : ${totalEarnings}</p>
          <p className="text-xl">Total Courses Sold : {totalCount}</p>
        </div>
        <div className="flex justify-center">
          <div style={{ width: "70%", height: "60vh" }}>
            <ResponsiveContainer>
              <BarChart
                data={updatedData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="totalEarned"
                  fill="#3B82F6"
                  onClick={(data, index) => handleBarClick(updatedData[index])}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {selectedCourse && (
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">
              Selected Course: {selectedCourse.course}
            </p>
            <p className="text-lg">Quantity Sold: {selectedCourse.count}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Earnings;
