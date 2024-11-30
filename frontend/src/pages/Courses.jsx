import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import CourseCard from "../components/common/CourseCard";
import OnlineCourse from "../assets/online-course.png";
import InstructorPhoto from "../assets/team-5.jpeg";

const Courses = () => {
  const location = useLocation();
  const stateCategory = location.state.category;

  const courses = [
    {
      title: "Introducting to Software Engineering",
      instructor: "Mark Smith",
      duration: "3 weeks",
      lessons: 8,
      students: 20,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "Enchancing Adobe Photoshop CC 2020 Skills",
      instructor: "John Doe",
      duration: "4 weeks",
      lessons: 6,
      students: 15,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "Mastering React Native",
      instructor: "Jane Doe",
      duration: "5 weeks",
      lessons: 10,
      students: 25,
      rating: 3, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "Introducting to Software Engineering",
      instructor: "Mark Smith",
      duration: "3 weeks",
      lessons: 8,
      students: 20,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "Enchancing Adobe Photoshop CC 2020 Skills",
      instructor: "John Doe",
      duration: "4 weeks",
      lessons: 6,
      students: 15,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "Mastering React Native",
      instructor: "Jane Doe",
      duration: "5 weeks",
      lessons: 10,
      students: 25,
      rating: 3, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "art",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "marketing",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
    {
      title: "The Complete React Native + Hooks Course [2021 Edition]",
      instructor: "Emma Wilson",
      duration: "4 weeks",
      lessons: 9,
      students: 19,
      rating: 4, // Eklenen yıldız derecelendirmesi
      category: "music",
    },
  ];

  const categories = [
    "All Courses",
    "Art & Design",
    "Marketing",
    "Music",
    "Computer Science",
    "History & Archeologic",
    "Business Administration",
    "Web Management",
    "Information Software",
    "UI/UX Design Courses",
    "Software Engineering",
    "Health & Fitness",
    "Graphic Design",

    "Cheaper",
    "Most Viewed ",
    "Latest",
  ];

  const [activeCategory, setActiveCategory] = useState(stateCategory);
  const [courseCount, setCourseCount] = useState(8);

  return (
    <>
      <Navbar />
      <div className="mt-32 w-full mb-5 text-center">
        <p className="text-2xl font-semibold ">COURSES </p>
      </div>
      <div className=" grid grid-cols-8 text-sm items-center gap-y-2 mx-32 mb-12">
        {categories.map((category, index) => (
          <button
            className={` hover:bg-blue-600 flex justify-center text-white py-1 mx-1 rounded-md transition duration-300 ${
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
      <div
        style={{ cursor: "pointer" }}
        className="grid gap-y-12 mx-28 grid-cols-4 justify-items-center" // Added justify-items-center to center the items
      >
        {courses.map((course, index) => (
          <>
            {index < courseCount && (
              <CourseCard
                key={index}
                image={OnlineCourse}
                InstructorPhoto={InstructorPhoto}
                course={course}
              />
            )}
          </>
        ))}
      </div>

      <div className="flex mt-12 mb-8 justify-center">
        <button
          onClick={() => setCourseCount(courseCount + 4)}
          className="hover:bg-blue-600 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Courses;
