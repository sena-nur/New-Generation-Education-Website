import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      title: "Art & Design",
      courseCount: "25",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o2.png",
    },
    {
      title: "Marketing",
      courseCount: "31",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o8.png",
    },
    {
      title: "Music",
      courseCount: "45",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o10.png",
    },
    {
      title: "Computer Science",
      courseCount: "215",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o3.png",
    },
    {
      title: "History & Archeologic",
      courseCount: "15",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o4.png",
    },
    {
      title: "Business Administration",
      courseCount: "25",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o11.png",
    },
    {
      title: "Web Management",
      courseCount: "3",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o12.png",
    },
    {
      title: "Information Software",
      courseCount: "60",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o6.png",
    },
    {
      title: "UI/UX Design Courses",
      courseCount: "10",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o1.png",
    },
    {
      title: "Software Engineering",
      courseCount: "60",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o5.png",
    },
    {
      title: "Health & Fitness",
      courseCount: "68",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o7.png",
    },
    {
      title: "Graphic Design",
      courseCount: "43",
      icon: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o9.png",
    },
  ];

  const navigate = useNavigate();
  const redirectToCourses = (category) => {
    navigate("/courses", { state: { category } });
  };
  return (
    <>
      <div className="text-center mt-20">
        <p className="text-3xl mb-5 text-category-primary md:font-medium">
          Categories
        </p>
        <p className="text-5xl md:font-semibold">Browse Our Online Courses</p>
      </div>

      <div className="mx-32 my-16 grid max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  grid-cols-6 gap-3">
        {data.map((course, index) => (
          <div
            className="bg-gray-lighter p-5 rounded-md hover:cursor-pointer hover:shadow-category-shadow hover:scale-105 transition-all"
            key={index}
            onClick={() => redirectToCourses(course.title)}
          >
            <div className="">
              <img
                src={course.icon}
                alt={course.title}
                className=" mx-auto w-20 mb-4"
              />
            </div>
            <p className="text-md md:font-semibold text-center">
              {course.title}
            </p>
            <div className="text-center   mt-4 ">
              <div
                className="bg-text-white px-2 py-1 rounded"
                style={{ display: "inline-block" }}
              >
                <p className="text-center text-category-primary md:font-medium">
                  {course.courseCount} courses
                </p>
              </div>
            </div>
            <p className="text-center mt-4">{course.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
