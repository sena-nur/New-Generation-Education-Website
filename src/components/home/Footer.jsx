import React from "react";
import logo from "../../assets/logo .png";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-footer-bg text-gray-light2 pb-40">
        <div className="mx-36 grid grid-cols-11 max-2xl:gap-4 max-xl:mx-12 gap-8 pt-20">
          <div className="col-span-3 max-xl:col-span-7">
            <div className="mb-8">
              <img src={logo} className="invert h-16"></img>
            </div>
            <p className="mb-6">
              Lorem ipsum set dolor amet mill fil the blank options seed.Lorem
              ipsum set dolor amet mill filthe blank options seed.
            </p>
            <p>Add: 70-80 Upper St. No Reach N R/2</p>
            <p>Call: +5396141176</p>
            <p>Email: semanurkose@outlook.com</p>
          </div>
          <div className="col-span-2">
            <p className={style.title}>Online Platform</p>
            <ul>
              <li className={style.li}>
                <p>About</p>
              </li>
              <li className={style.li}>
                <p>Courses</p>
              </li>
              <li className={style.li}>
                <p>Instructor</p>
              </li>
              <li className={style.li}>
                <p>Events</p>
              </li>
              <li className={style.li}>
                <p>Instructor Profile</p>
              </li>
              <li className={style.li}>
                <p>Purchase Guide</p>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className={style.title}>Links</p>
            <ul>
              <li className={style.li}>
                <p>Contact Us</p>
              </li>
              <li className={style.li}>
                <p>Gallery</p>
              </li>
              <li className={style.li}>
                <p>News & Articles</p>
              </li>
              <li className={style.li}>
                <p>FAQ's</p>
              </li>
              <li className={style.li}>
                <p>Sign In & Registration</p>
              </li>
              <li className={style.li}>
                <p>Coming SOON</p>
              </li>
            </ul>
          </div>
          <div className="col-span-4 max-xl:col-span-11">
            <p className={style.title}>Contacts</p>
            <p className="leading-loose">
              Enter your email address to register to our newsletter
              subscription
            </p>
            <div className="flex mt-5">
              <input
                className="text-text-black px-2 py-4 w-72 rounded-l-lg"
                placeholder="Your Email"
              ></input>
              <button className="hover:cursor-pointer hover:bg-category-primary  transition-all text-text-white w-36 bg-orange rounded-r-lg">
                Subscribe
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <FaFacebook className="w-5 h-5" />
              <FaLinkedin className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaTwitter className="w-5 h-5" />
              <FaYoutube className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer-bg text-gray-light2 text-center pb-10">
        <p>
          Copyright 2022 All Rights Reserved by{" "}
          <span className="text-orange transition-all hover:cursor-pointer hover:text-category-primary">
            Yol arkadaşım
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;

const style = {
  li: "pb-3",
  title: "md:font-semibold text-text-white pb-5 text-xl tracking-wide",
};
