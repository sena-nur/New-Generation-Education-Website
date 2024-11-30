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
        className="m-20 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="flex justify-center items-center text-center">
          <img
            src={AboutImage}
            alt="About our platform"
            className="shadow-xl rounded-lg w-11/12 h-auto"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-3xl text-category-primary font-semibold">
            <p>LEARN ANYTHING</p>
          </div>
          <div className="text-4xl text-text-black font-bold">
            <p>Benefits of Online Learning Expertise</p>
          </div>
          {[
            {
              title: "Online Courses and Classes",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Alternative icon for online courses
            },
            {
              title: "Learn with Expert",
              icon: "https://cdn-icons-png.flaticon.com/512/2143/2143355.png", // Colored icon for earning a certificate
              // Alternative icon for learning with an expert
            },
            {
              title: "Get Mentorship",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png", // Alternative icon for mentorship
            },
            {
              title: "Earn a Certificate",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135764.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-md cursor-pointer"
            >
              <div className="grid grid-cols-6 items-center p-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto fill-category-primary"
                />
                <div className="col-span-5 ml-4">
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p>
                    Explore various courses and learn from industry experts.
                    Enhance your skills and gain new insights to advance your
                    career.
                  </p>
                </div>
              </div>
            </div>
          ))}
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
