import React, { useState } from "react";
import CourseCardEnrolled from "../common/CourseCardEnrolled";
import student from "../../assets/student-1.jpeg";
const EnrolledCourses = () => {
  const [selectedTab, setSelectedTab] = useState("enrolled");

  const enrolledCourses = [
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
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
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
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
  ];

  const activeCourses = [
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
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
  ];

  const completedCourses = [
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
    {
      title: "The Complete Web Development Bootcamp",
      instructor: "Alice Johnson",
      duration: "2 weeks",
      lessons: 12,
      students: 18,
      rating: 4, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero",
      instructor: "Bob Brown",
      duration: "6 weeks",
      lessons: 7,
      students: 22,
      rating: 5, // Eklenen yıldız derecelendirmesi
      InstructorPhoto: student,
    },
  ];

  const data = {
    EnrolledCourses: enrolledCourses.length,
    ActiveCourses: activeCourses.length,
    CompletedCourses: completedCourses.length,
  };

  const onClickHandle = (tab) => {
    setSelectedTab(tab);
  };

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
      <div className="mt-14">
        <div className="p-20">
          <p className="text-2xl font-semibold">Enrolled Courses</p>
          <div className="flex mt-5">
            <p
              onClick={() => onClickHandle("enrolled")}
              className={`cursor-pointer px-5 py-3 border-b-2 ${
                selectedTab === "enrolled"
                  ? style.selectedTitle
                  : style.defaultTitle
              }`}
            >
              Enrolled Courses ({data.EnrolledCourses})
            </p>
            <p
              onClick={() => onClickHandle("active")}
              className={`cursor-pointer px-5 py-3 border-b-2 ${
                selectedTab === "active"
                  ? style.selectedTitle
                  : style.defaultTitle
              }`}
            >
              Active Courses ({data.ActiveCourses})
            </p>
            <p
              onClick={() => onClickHandle("completed")}
              className={`cursor-pointer px-5 py-3 border-b-2 ${
                selectedTab === "completed"
                  ? style.selectedTitle
                  : style.defaultTitle
              }`}
            >
              Completed Courses ({data.CompletedCourses})
            </p>
          </div>
          <div className="courses-list">
            {selectedTab === "enrolled" && renderCourses(enrolledCourses)}
            {selectedTab === "active" && renderCourses(activeCourses)}
            {selectedTab === "completed" && renderCourses(completedCourses)}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;

const style = {
  defaultTitle: "border-gray-300 text-text-black",
  selectedTitle: "border-orange-500 text-orange-500",
};
