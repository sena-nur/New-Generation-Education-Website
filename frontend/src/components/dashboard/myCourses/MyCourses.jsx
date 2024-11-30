import React, { useState } from "react";
import team1 from "../../../assets/team-1.jpeg";
import NewCourse from "./components/NewCourse";

const MyCourses = () => {
  const data = [
    {
      id: "1",
      courseTitle: "This is example Title",
      courseDescription:
        "Explore the fundamentals of cryptocurrency and blockchain technology. Learn how to use cryptocurrencies and understand the underlying technology that drives them.",
      courseCategory: "Cryptocurrency",
      courseChapters: [],
      coursePrice: "198",
      courseImage: team1,
    },
    {
      id: "2",
      courseTitle: "Advanced Python Programming",
      courseDescription:
        "Dive deep into advanced Python concepts and become proficient in network programming, web frameworks, and data analysis.",
      courseCategory: "Programming",
      courseChapters: [],
      coursePrice: "150",
      courseImage: team1, // Assuming the same image for simplicity
    },
    {
      id: "3",
      courseTitle: "Introduction to Machine Learning",
      courseDescription:
        "Understand the basics of machine learning, including supervised and unsupervised learning techniques. And more courses are coming...",
      courseCategory: "Machine Learning",
      courseChapters: [],
      coursePrice: "250",
      courseImage: team1,
    },
    {
      id: "4",
      courseTitle: "Web Development Bootcamp",
      courseDescription:
        "Learn to build complete web applications from scratch using HTML, CSS, JavaScript, and modern frameworks like React.",
      courseCategory: "Web Development",
      courseChapters: [],
      coursePrice: "300",
      courseImage: team1,
    },
    {
      id: "5",
      courseTitle: "Blockchain Essentials",
      courseDescription:
        "Get to grips with the concepts of blockchain technology and how it can be leveraged in various industries.",
      courseCategory: "Blockchain",
      courseChapters: [],
      coursePrice: "220",
      courseImage: team1,
    },
    {
      id: "6",
      courseTitle: "Digital Marketing 101",
      courseDescription:
        "Explore the fundamentals of digital marketing, including SEO, social media marketing, and email marketing.",
      courseCategory: "Marketing",
      courseChapters: [],
      coursePrice: "99",
      courseImage: team1,
    },
  ];

  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleDeleteCourse = (id) => {
    console.log("Delete course with id: ", id);
    alert("Delete course with id: " + id);
  };

  const handleUnpublishCourse = (id) => {
    console.log("Unpublish course with id: ", id);
    alert("Unpublish course with id: " + id);
  };

  const handleEditCourse = (id) => {
    console.log("Edit course with id: ", id);
    setSelectedId(id);
    setIsEdit(true);
    setSelectedId(id);
    setIsEdit(false);
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <NewCourse selectedId={selectedId} />
      ) : (
        <>
          <div className="mt-32 mb-10 grid w-full grid-cols-3 gap-16 justify-items-center">
            {data.map((course) => {
              return (
                <div
                  key={course.id}
                  className="bg-white max-w-sm w-full  overflow-hidden shadow-lg flex flex-col items-center"
                >
                  <img
                    className="w-full px-10 pt-10 rounded-md"
                    src={course.courseImage}
                    alt="Course"
                  />
                  <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2">
                      {course.courseTitle}
                    </div>
                    <p className="text-gray-700 text-base">
                      {course.courseDescription}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                      #{course.courseCategory}
                    </span>
                    <span className="inline-block bg-green-800 rounded-full px-3 py-1 text-sm font-semibold text-green-200 mr-2 mb-2">
                      ${course.coursePrice}
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleEditCourse(course.id)}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleUnpublishCourse(course.id)}
                        className="bg-purple-500 text-white px-4 py-1 rounded-md"
                      >
                        Unpublish
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MyCourses;
