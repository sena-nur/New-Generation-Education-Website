import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
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
import maleMentor from "../assets/male-mentor.jpeg";
import Dashboard from "../components/dashboard/dashboard/Dashboard";
import Profile from "../components/dashboard/Profile";
import Settings from "../components/dashboard/Settings";
import Logout from "../components/dashboard/Logout";
import Earnings from "../components/dashboard/Earnings";
import Withdrawals from "../components/dashboard/Withdrawals";
import QuizAttempts from "../components/dashboard/QuizAttempts";
import QuestionAnswer from "../components/dashboard/QuestionAnswer";
import Assignments from "../components/dashboard/Assignments";
import MyCourses from "../components/dashboard/myCourses/MyCourses";
import MentorApplicationForm from "../components/dashboard/MentorApplicationForm";
import Reviews from "../components/dashboard/Reviews";
import { getUser } from "../api/sign";

const InstructorDashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const token = localStorage.getItem("token");
  const x = async () => {
    const data1 = await getUser(token);
    console.log("sads", data1);
    setData(data1);
  };

  useEffect(() => {
    x();
  }, []);

  /*  const data = {
    name: "Charles Robin",
    email: "charlesrobin@gmail.com",
    photo: maleMentor,
  }; */

  function setPage(page) {
    setCurrentPage(page);
    console.log(currentPage);
  }

  return (
    <>
      <div className="bg-gray-100  min-h-screen">
        <Navbar position={false} />
        <div className="flex">
          <div className="pr-8 bg-white pl-4 flex flex-col justify-between h-screen max-w-72 min-w-72 shadow-lg">
            {currentPage === "Dashboard" ? (
              <div className="flex gap-1 pt-28 pb-2 items-center">
                <p className="text-2xl font-bold text-gray-800">Education</p>
              </div>
            ) : (
              <div className="flex gap-4 pt-28 pb-2 items-center">
                <img src={data.photo} className="w-12 h-12 rounded-full"></img>
                <p className="text-lg font-medium text-gray-800">{data.name}</p>
              </div>
            )}
            <hr className="my-4 border-orange-500"></hr>
            <div className="flex flex-col justify-between h-full">
              {/* Menu items */}
              {[
                {
                  name: "Dashboard",
                  icon: <FaChartLine className={styles.icon} />,
                },
                { name: "Profile", icon: <FaUser className={styles.icon} /> },

                {
                  name: "Mentor Application",
                  icon: <FaHeart className={styles.icon} />,
                },
                { name: "Reviews", icon: <FaStar className={styles.icon} /> },

                {
                  name: "My Courses",
                  icon: <FaBook className={styles.icon} />,
                },
                {
                  name: "Earnings",
                  icon: <FaMoneyBillWave className={styles.icon} />,
                },
                {
                  name: "Withdrawals",
                  icon: <FaMoneyBillWave className={styles.icon} />,
                },
                {
                  name: "Quiz Attempts",
                  icon: <FaTasks className={styles.icon} />,
                },
                {
                  name: "Question & Answer",
                  icon: <FaQuestion className={styles.icon} />,
                },
                {
                  name: "Assignments",
                  icon: <FaTasks className={styles.icon} />,
                },
              ].map((item) => (
                <div
                  onClick={() => setPage(item.name)}
                  key={item.name}
                  className="flex gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr className="my-4 border-orange-500"></hr>
            </div>
            <div className="ml-4 flex flex-col gap-6 mt-2">
              <div
                onClick={() => setPage("Logout")}
                className="flex gap-2 cursor-pointer"
              >
                <FaSignOutAlt className={styles.icon} />
                <p>Logout</p>
              </div>
              <div
                onClick={() => setPage("Settings")}
                className="flex gap-2 pb-8 cursor-pointer"
              >
                <FaCog className={styles.icon} />
                <p>Settings</p>
              </div>
            </div>
          </div>
          {currentPage === "Logout" && <Logout />}
          {currentPage === "Settings" && <Settings />}
          {currentPage === "Dashboard" && <Dashboard />}
          {currentPage === "Reviews" && <Reviews />}
          {currentPage === "Profile" && <Profile />}
          {currentPage === "Earnings" && <Earnings />}
          {currentPage === "Withdrawals" && <Withdrawals />}
          {currentPage === "Quiz Attempts" && <QuizAttempts />}
          {currentPage === "Question & Answer" && <QuestionAnswer />}
          {currentPage === "Assignments" && <Assignments />}
          {currentPage === "My Courses" && <MyCourses />}
          {currentPage === "Mentor Application" && <MentorApplicationForm />}
        </div>
      </div>
    </>
  );
};

export default InstructorDashboard;

const styles = {
  icon: "fill-current text-blue-500 flex self-center w-5 h-5",
};
