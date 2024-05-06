import React from "react";
import { useNavigate } from "react-router-dom";
import OnlineCourse from "../../assets/online-course.png";
import { FaRegClock, FaUser, FaStar } from "react-icons/fa";
import InstructorPhoto from "../../assets/instructor-profile-icon.svg";
import CourseCard from "../common/CourseCard";

const PopularCourses = () => {
  const navigate = useNavigate(); // navigate hooks'u bileşenin içinde tanımlanmalı

  const redirectToCourseDetail = () => {
    navigate("/coursedetail"); // navigate hooks'u doğrudan kullanılabilir
  };

  const courses = [
    {
      title: "Introducting to Software Engineering",
      instructor: "Mark Smith",
      duration: "3 weeks",
      lessons: 8,
      students: 20,
      rating: 4, // Eklenen yıldız derecelendirmesi
    },
    {
      title: "Enchancing Adobe Photoshop CC 2020 Skills",
      instructor: "John Doe",
      duration: "4 weeks",
      lessons: 6,
      students: 15,
      rating: 5, // Eklenen yıldız derecelendirmesi
    },
    {
      title: "Mastering React Native",
      instructor: "Jane Doe",
      duration: "5 weeks",
      lessons: 10,
      students: 25,
      rating: 3, // Eklenen yıldız derecelendirmesi
    },
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
    },
  ];

  const scrollableLength = courses.length * 320; // Adjusted for better responsiveness

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
      <div className="overflow-hidden">
        <div
          style={{ width: scrollableLength, cursor: "pointer" }}
          className="flex flex-row gap-6"
          onClick={redirectToCourseDetail} // Kartların dışındaki div öğesine tıklama olayını ekleyin
        >
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={OnlineCourse}
              InstructorPhoto={InstructorPhoto}
              course={course}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Browse More Courses
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
