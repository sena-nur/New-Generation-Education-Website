import React from "react";
import { FaRegClock, FaUser, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ index, image, InstructorPhoto, course }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={index}
        className="relative bg-white flex flex-col  shadow-md rounded-lg overflow-hidden"
        style={{ height: 420, width: 300 }}
      >
        <img
          src={image}
          alt="Online Course"
          className=" w-full h-48 object-cover"
        />
        <div className="p-4 h-full ">
          <p className="text-lg font-semibold mb-1">{course.title}</p>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`h-4 mt-2 w-4 ${
                  i < course.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center mb-3">
            <img
              src={InstructorPhoto}
              alt="Instructor"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex justify-between w-full text-sm">
              <p className="text-sm text-gray-600">by {course.instructor}</p>
              <p className="text-sm bg-category-primary text-white px-2 py-1 rounded-full">
                {course.category}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <FaRegClock className="mr-1 text-gray-500" />
              <p>{course.lessons} lessons</p>
            </div>
            <div className="flex items-center">
              <FaUser className="mr-1 text-gray-500" />
              <p>{course.studentCount} students</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/coursedetail");
            }}
            className="absolute bottom-0 rounded-b-md  bg-category-primary text-white w-full py-2 hover:bg-orange-500 transition-all"
          >
            Enroll Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
