import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Navbar from "../components/common/Navbar";

// Import images
import team1Img from "../assets/team-1.jpeg";
import team2Img from "../assets/team-2.jpeg";
import team3Img from "../assets/team-3.jpeg";
import team4Img from "../assets/team-4.jpeg";
import team5Img from "../assets/team-5.jpeg";
import team6Img from "../assets/team-6.jpeg";
import team7Img from "../assets/team-7.jpeg";
import team8Img from "../assets/team-8.jpeg";
import team9Img from "../assets/team-9.jpeg";
import Footer from "../components/home/Footer";
import { useUserStore } from "../data/user";

const Team = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log("token", token, id);
  return (
    <section className="teamComponent text-gray-700 body-font">
      <Navbar></Navbar>
      <div className=" container px-5 py-24 mx-auto">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-5xl md:font-semibold text-category-primary">
            OUR TEAM
          </h1>
          <p className="text-xl mt-4 text-text-gray">
            You can get to know our instructor friends who work on this platform
            and contact them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team1Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                JOHNATHON HAWKINGS
              </h2>
              <p className="text-sm text-gray-500 mb-4">Software Engineer</p>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team2Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                JANE DOE
              </h2>
              <p className="text-sm text-gray-500 mb-4">Graphic Designer</p>
              <p className="mb-8 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team3Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                MICHAEL SMITH
              </h2>
              <p className="text-sm text-gray-500 mb-4">UI/UX Designer</p>
              <p className="mb-8 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team4Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                EMMA WATSON
              </h2>
              <p className="text-sm text-gray-500 mb-4">Marketing Manager</p>
              <p className="mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team5Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                SARAH CONNOR
              </h2>
              <p className="text-sm text-gray-500 mb-4">Data Analyst</p>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team6Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                DAVID BOWIE
              </h2>
              <p className="text-sm text-gray-500 mb-4">Product Manager</p>
              <p className="mb-8 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 7 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team7Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                ALICE JOHNSON
              </h2>
              <p className="text-sm text-gray-500 mb-4">Software Engineer</p>
              <p className="mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 8 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team8Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                OLIVIA SMITH
              </h2>
              <p className="text-sm text-gray-500 mb-4">Web Developer</p>
              <p className="mb-8 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 9 */}
          <div className="flex flex-col items-center justify-center text-center bg-text-white px-4 py-4 rounded-md hover:bg-category-primary hover:text-text-white">
            <div className="mt-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4"
                src={team9Img}
              />
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                JAMES ANDERSON
              </h2>
              <p className="text-sm text-gray-500 mb-4">Frontend Developer</p>
              <p className="mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex justify-center mb-4 ">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaFacebook />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaInstagram />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Team;
