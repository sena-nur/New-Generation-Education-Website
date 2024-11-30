import React from "react";
import { FaBook, FaCheckCircle } from "react-icons/fa"; // Importing icons from react-icons

const mockData = {
  chapters: [
    {
      title: "Chapter ",
      description: "This is the first chapter.",
      isCompleted: true,
    },
    {
      title: "Chapter ",
      description: "Real-world applications and case studies.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Integrating with other technologies.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Best practices and optimization.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Troubleshooting and debugging.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Scaling and performance considerations.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Advanced project and capstone.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Staying up-to-date and continuous learning.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Industry trends and future directions.",
      isCompleted: false,
    },
    {
      title: "Chapter ",
      description: "Final assessment and certification.",
      isCompleted: false,
    },
  ],
};

const SideBar = ({ data, onChapterSelect }) => {
  return (
    <div className="px-4 py-6 rounded-lg">
      <div className="text-lg mb-10 text-center font-medium text-blue-800">
        Course Content
      </div>
      <hr className="my-4 border-gray-300" />{" "}
      {/* Adding a horizontal line for separation */}
      <div className="mt-2">
        {data.chapters.map((item, index) => (
          <>
            <button
              key={index}
              className="flex items-center text-md text-gray-700 mt-5 w-full text-left"
              onClick={() => onChapterSelect(item)}
            >
              <FaBook className="text-blue-500 mr-2" />{" "}
              {/* Adding an icon next to chapter titles */}
              <div className="flex-1">
                <span>
                  {index + 1}. {item.title}
                </span>
                <div className="text-sm text-gray-500">
                  {item.description || "No description available."}
                </div>
              </div>
              {item.isCompleted && (
                <FaCheckCircle className="text-green-500 ml-2" />
              )}{" "}
              {/* Display a checkmark if the chapter is completed */}
            </button>
            <hr className="my-4 border-gray-300" />{" "}
          </>
        ))}
        {mockData.chapters.map((item, index) => (
          <>
            <button
              key={index}
              className="flex items-center text-md text-gray-700 mt-5 w-full text-left"
              onClick={() => onChapterSelect(item)}
            >
              <FaBook className="text-blue-500 mr-2" />{" "}
              {/* Adding an icon next to chapter titles */}
              <div className="flex-1">
                <span>{item.title}</span>
                <div className="text-sm text-gray-500">
                  {item.description || "No description available."}
                </div>
              </div>
              {item.isCompleted && (
                <FaCheckCircle className="text-green-500 ml-2" />
              )}{" "}
              {/* Display a checkmark if the chapter is completed */}
            </button>
            <hr className="my-4 border-gray-300" />{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
