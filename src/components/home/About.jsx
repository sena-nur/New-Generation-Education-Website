import React, { useEffect, useState, useRef } from "react";
import AboutImage from "../../assets/about-main-image.jpeg";
import LearnerImage from "../../assets/learner.svg";
import CertificateImage from "../../assets/certificate.svg";
import InstructorImage from "../../assets/instructor.svg";
import CourseImage from "../../assets/courses.svg";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <div
        id="aboutComponent"
        className="max-2xl:m-15 max-xl:grid-cols-1 max-2xl:gap-12 m-20 grid grid-cols-2 gap-16"
      >
        <div className="my-auto flex justify-center  text-center">
          <img
            src={AboutImage}
            alt="About"
            className="my-auto max-xl:shadow-3xl max-xl:max-w-screen-md max-md:max-w-screen-sm shadow-6xl rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full  text-3xl text-category-primary ">
            <p>LEARN ANYTHING</p>
          </div>
          <div className="w-full text-6xl text-text-black md:font-bold ">
            <p>Benefits About Online Learning Expertise</p>
          </div>
          <div className="shadow-3xl w-full grid grid-rows-1 grid-flow-col hover:cursor-pointer hover:bg-orange hover:text-white bg-gray-200 rounded-md">
            <div className="my-auto ">
              <img
                src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt="course"
                className="h-70 w-70"
              ></img>
            </div>
            <div className="ml-4 mt-2 mb-2 mr-4">
              <p className="md:font-bold text-2xl mt-2">
                Online Courses and Classes
              </p>
              <p className="mt-1  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
          <div className="w-full shadow-3xl grid grid-rows-1 grid-flow-col hover:cursor-pointer hover:bg-orange hover:text-white bg-gray-200 rounded-md">
            <div className="my-auto">
              <img
                src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt="course"
                className="h-70 w-70"
              ></img>
            </div>
            <div className="ml-4 mt-2 mb-2 mr-4">
              <p className="md:font-bold text-2xl mt-2">Learn with Expert</p>
              <p className="mt-1  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
          <div className="w-full shadow-3xl grid grid-rows-1 grid-flow-col hover:cursor-pointer hover:bg-orange hover:text-white bg-gray-200 rounded-md">
            <div className="my-auto">
              <img
                src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt="course"
                className="h-70 w-70"
              ></img>
            </div>
            <div className="ml-4 mt-2 mb-2 mr-4">
              <p className="md:font-bold  text-2xl mt-2">Get Mentorship</p>
              <p className="mt-1  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
          <div className="w-full shadow-3xl grid grid-rows-1 grid-flow-col hover:cursor-pointer hover:bg-orange hover:text-white bg-gray-200 rounded-md">
            <div className="my-auto">
              <img
                src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt="course"
                className="h-70 w-70"
              ></img>
            </div>
            <div className="ml-4 mt-2 mb-2 mr-4">
              <p className="md:font-bold  text-2xl mt-2">Earn a Certificate</p>
              <p className="mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className=" mx-auto bg-category-primary py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div>
              <img src={LearnerImage} alt="learner" className="w-32 h-32" />
            </div>
            <div className="mt-2 text-center">
              <CountUp start={0} end={2773} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span className="font-bold text-3xl" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Learners</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={CertificateImage} alt="learner" className="w-32 h-32" />
            </div>
            <div className="mt-2 text-center">
              <CountUp start={0} end={4427} duration={6}>
                {({ countUpRef }) => (
                  <div>
                    <span className="font-bold text-3xl" ref={countUpRef} />
                  </div>
                )}
              </CountUp>

              <p>Certifications</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={InstructorImage} alt="learner" className="w-32 h-32" />
            </div>
            <div className="mt-2 text-center">
              <CountUp start={0} end={120} duration={3}>
                {({ countUpRef }) => (
                  <div>
                    <span className="font-bold text-3xl" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Instructors</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={CourseImage} alt="learner" className="w-32 h-32" />
            </div>
            <div className="mt-2 text-center">
              <CountUp start={0} end={760} duration={4}>
                {({ countUpRef }) => (
                  <div>
                    <span className="font-bold text-3xl" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Courses published</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
