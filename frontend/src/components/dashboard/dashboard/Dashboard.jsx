import React from "react";
import maleMentor from "../../../assets/male-mentor.jpeg";
import {
  FaUser,
  FaBook,
  FaHeart,
  FaStar,
  FaMoneyBillWave,
  FaQuestion,
  FaTasks,
  FaHistory,
  FaChartLine,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { useState } from "react";
import NewCourse from "./components/NewCourse";
import { getUser } from "../../../api/sign";
import { useEffect } from "react";
const Dashboard = () => {
  const [courseTitleMain, setCourseTitleMain] = useState("Default Title");
  const [isNewCourse, setIsNewCourse] = useState(false);
  const [isNewCourseModal, setIsNewCourseModal] = useState(false);

  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const x = async () => {
    const data1 = await getUser(token);
    console.log("sads", data1);
    setData(data1);
  };

  useEffect(() => {
    x();
  }, []);

  const NewCourseModal = () => {
    const [courseTitle, setCourseTitle] = useState("");
    // Function to close the modal
    const closeModal = () => {
      setIsNewCourseModal(false);
    };

    // Handle click outside of modal
    const modalRef = React.useRef(null);
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          closeModal();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
        <div
          ref={modalRef}
          className="w-1/2 h-fit relative bg-white p-8 rounded-lg shadow-lg"
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-3xl text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <p className="text-2xl font-medium text-text-black mb-1">
            Name your course
          </p>
          <p className="text-sm text-gray-500 mb-4">
            This will be the name of your course
          </p>
          <form>
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Course Title
              </label>
              <input
                placeholder="Enter your course title"
                value={courseTitle}
                onChange={(e) => {
                  setCourseTitle(e.target.value);
                }}
                type="text"
                className="mt-1 mb-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                // AWAIT DATA_BASE INSERTION
                // IF SUCCESSFULL RUN BELOW
                if (true) {
                  setIsNewCourse(!isNewCourse);
                  setIsNewCourseModal(!isNewCourseModal);
                  setCourseTitleMain(courseTitle);
                }
              }}
            >
              Add Course
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {isNewCourse ? (
        <NewCourse />
      ) : (
        <>
          <div className="flex-1  p-20 mt-8 ">
            <div className="flex justify-between bg-gray-dark rounded-full p-10 items-center mb-10">
              <div className="flex gap-6">
                <img
                  src={data.photo}
                  alt="Mentor"
                  className="rounded-full w-24 h-24"
                />
                <div className="flex justify-center items-center">
                  <p className="text-lg font-medium text-text-white">
                    {data.name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsNewCourseModal(!isNewCourseModal)}
                className="bg-category-primary transition-all text-white px-12 py-2 text-lg font-semibold hover:bg-blue-600 rounded-full"
              >
                Add New Course
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Example card */}
              {Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center gap-12 hover:shadow-md transition-shadow duration-300"
                  >
                    <FaStar className="w-12 h-12 text-blue-500" />
                    <div>
                      <p className="text-4xl font-bold mb-0">0</p>
                      <p className="text-sm text-gray-500">Enrolled courses</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
      {isNewCourseModal && <NewCourseModal />}
    </div>
  );
};

export default Dashboard;
