import React, { useState } from "react";
import CourseCardEnrolled from "../common/CourseCardEnrolled";
import student from "../../assets/student-1.jpeg";
const Favorites = () => {
  const favoriteCourses = [
    {
      title: "Introducting to Software Engineering",
      instructor: "Mark Smith",
      duration: "3 weeks",
      lessons: 8,
      students: 20,
      rating: 4, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "Enchancing Adobe Photoshop CC 2020 Skills",
      instructor: "John Doe",
      duration: "4 weeks",
      lessons: 6,
      students: 15,
      rating: 5, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "Mastering React Native",
      instructor: "Jane Doe",
      duration: "5 weeks",
      lessons: 10,
      students: 25,
      rating: 3, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
  ];

  const favorites = 3;

  const renderCourses = (courses) => {
    return (
      <div className="grid grid-cols-4 gap-10 mt-10">
        {courses.map((course, index) => (
          <div key={index} className="course-item ">
            <CourseCardEnrolled
              course={course}
              index={index}
              image={student}
              InstructorPhoto={course.InstructorPhoto}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="mt-14 w-10/12">
        <div className="p-20">
          <p className="text-2xl font-semibold">Favorite Courses</p>
          <div className="flex mt-5">
            <p className={`cursor-pointer px-5 py-3 border-b-2 ${"a"}`}>
              Favorites ({favorites})
            </p>
          </div>
          <div className="courses-list">{renderCourses(favoriteCourses)}</div>
        </div>
      </div>
    </>
  );
};

export default Favorites;

const style = {
  defaultTitle: "border-gray-300 text-text-black",
  selectedTitle: "border-orange-500 text-orange-500",
};
