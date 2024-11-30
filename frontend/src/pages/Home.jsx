import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Navbar from "../components/common/Navbar";
import PopularCourses from "../components/home/PopulerCourses";
import Categories from "../components/home/Categories";
import Instructor from "../components/home/Instructor";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/Blog";
import Community from "../components/home/Community";
import Trial from "../components/home/Trial";
import Footer from "../components/home/Footer";
export const Home = () => {
  return (
    <>
      <Navbar position={false} />
      <Hero />
      <About />
      <PopularCourses />
      <Categories />
      <Instructor />
      <Testimonial />
      <Blog />
      <Community />
      <Trial />
      <Footer />
    </>
  );
};

export default Home;
