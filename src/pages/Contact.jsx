import React from "react";
import Navbar from "../components/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../components/home/Footer";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-gray-100">
      <Navbar position={false} />
      <div class="flex w-full min-h-screen justify-center items-center ">
        <div className="flex flex-col md:flex-row  md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-text-white overflow-hidden">
          <div className=" flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <BsFillTelephoneFill className="text-teal-300 text-xl"></BsFillTelephoneFill>
                <span>+90(539) 730 7506</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <IoMdMail className="text-teal-300 text-xl"></IoMdMail>
                <span>contact@xyzyolarkadasim.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <IoLocationSharp className="text-teal-300 text-xl"></IoLocationSharp>
                <span>11,Street 342, Abcdefgh</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a Href="#">
                <FaFacebook />
              </a>
              <a Href="#">
                <FaTwitter />
              </a>
              <a Href="#">
                <FaLinkedin />
              </a>
              <a Href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className=" absolute w-400 z-0 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0  w-400 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
            <div className=" relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 ">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="" className="text-sm">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  ></input>
                </div>
                <div>
                  <label for="" className="text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  ></input>
                </div>
                <div>
                  <label for="" className="text-sm">
                    Message
                  </label>

                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-text-white font-bold rounded-lg px-6 py-2 uppercase text-sm ">
                  {" "}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
