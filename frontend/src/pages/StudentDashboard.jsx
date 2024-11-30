import React, { useState } from "react";
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
import Dashboard from "../components/studentDashboard/dashboard/Dashboard";
import Profile from "../components/studentDashboard/Profile";
import Settings from "../components/studentDashboard/Settings";
import Logout from "../components/studentDashboard/Logout";
import PurchaseHistory from "../components/studentDashboard/PurchaseHistory";
import MyQuizAttempts from "../components/studentDashboard/MyQuizAttempts";
import Favorites from "../components/studentDashboard/Favorites";
import EnrolledCourses from "../components/studentDashboard/EnrolledCourses";
import Reviews from "../components/studentDashboard/Reviews";

const InstructorDashboard = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const data = {
    name: "Charles Robin",
    email: "charlesrobin@gmail.com",
    photo: maleMentor,
  };

  function setPage(page) {
    setCurrentPage(page);
    console.log(currentPage);
  }

  return (
    <>
      <div className="bg-gray-100  min-h-screen">
        <Navbar position={false} />
        <div className="flex ">
          <div className="pr-8 bg-white pl-4 flex flex-col  h-screen max-w-72 min-w-72 shadow-lg">
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
            <div className="flex gap-8 flex-col h-8/12">
              {/* Menu items */}
              {[
                {
                  name: "Dashboard",
                  icon: <FaChartLine className={styles.icon} />,
                },
                { name: "Profile", icon: <FaUser className={styles.icon} /> },
                {
                  name: "Enrolled Courses",
                  icon: <FaBook className={styles.icon} />,
                },
                {
                  name: "Favorites",
                  icon: <FaHeart className={styles.icon} />,
                },
                { name: "Reviews", icon: <FaStar className={styles.icon} /> },
                {
                  name: "My Quiz Attempts",
                  icon: <FaTasks className={styles.icon} />,
                },
                {
                  name: "Purchase History",
                  icon: <FaHistory className={styles.icon} />,
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
          {currentPage === "Dashboard" && (
            <Dashboard setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "Reviews" && <Reviews />}
          {currentPage === "Profile" && <Profile />}

          {currentPage === "Purchase History" && <PurchaseHistory />}
          {currentPage === "My Quiz Attempts" && <MyQuizAttempts />}
          {currentPage === "Favorites" && <Favorites />}
          {currentPage === "Enrolled Courses" && <EnrolledCourses />}
        </div>
      </div>
    </>
  );
};

export default InstructorDashboard;

const styles = {
  icon: "fill-current text-blue-500 flex self-center w-5 h-5",
};
