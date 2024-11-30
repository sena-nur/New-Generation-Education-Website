import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnlineCourse from "../../assets/online-course.png";
import { FaRegClock, FaUser, FaStar } from "react-icons/fa";
import InstructorPhoto from "../../assets/instructor-profile-icon.svg";
import CourseCard from "../common/CourseCard";
import categoriesJson from "../../data/categories.json";
import coursesJson from "../../data/courses.json";

const PopularCourses = () => {
  const navigate = useNavigate(); // navigate hooks'u bileşenin içinde tanımlanmalı

  const redirectToCourseDetail = () => {
    navigate("/coursedetail"); // navigate hooks'u doğrudan kullanılabilir
  };

  const categories = categoriesJson.categories.map((category) => category.name);

  console.log(coursesJson.courses);
  const courses = [];
  coursesJson.courses.forEach((course) => {
    courses.push({
      title: course.title,
      rating: course.rating,
      instructor: course.instructorName,
      category: course.category,
      lessons: course.lessons,
      studentCount: course.studentCount,
    });
  });

  const [activeCategory, setActiveCategory] = useState("");

  const redirectToCourses = (category) => {
    navigate("/courses", { state: { category } });
  };

  return (
    <div
      id="popularCoursesComponent"
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mt-12 mb-6">
        <p className="text-xl mb-1 text-gray-700">POPULAR COURSES</p>
        <p className="text-4xl font-bold text-gray-900">
          Pick A Course To Get Started
        </p>
      </div>

      <div className="grid grid-cols-6 items-center gap-y-2 mb-12">
        {categories.map((category, index) => (
          <button
            className={` hover:bg-blue-600 flex justify-center text-white py-1 mx-4 rounded-md transition duration-300 ${
              activeCategory === category
                ? "bg-blue-600"
                : "bg-category-primary"
            }`}
            key={index}
            onClick={() => setActiveCategory(category)}
          >
            <p className="text-white cursor-pointer">{category}</p>
          </button>
        ))}
      </div>
      <div className="">
        <div
          style={{ cursor: "pointer" }}
          className="grid gap-y-12 grid-cols-4"
          onClick={redirectToCourseDetail} // Kartların dışındaki div öğesine tıklama olayını ekleyin
        >
          {courses.map((course, index) => (
            <div key={index}>
              {index < 4 && (
                <CourseCard
                  image={OnlineCourse}
                  InstructorPhoto={InstructorPhoto}
                  course={course}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => redirectToCourses("All Courses")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Browse More Courses
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
