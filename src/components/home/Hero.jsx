import React from "react";
import logo from "../../assets/logo .png";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <>
      <div className="h-lvh" id="homeComponent">
        <div className="absolute z-0 top-0 bg-hero-background brightness-15 w-full h-screen"></div>
        <div className="absolute z-10 w-full">
          <section
            className=" hero min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${logo.default})` }}
          >
            <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
              <div className="text-center space-y-8">
                <h1 className="text-2xl  text-white md:text-2xl lg:text-2xl">
                  Welcome to Online Education and Work
                </h1>
                <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Best Online Education Expertise
                </h2>
                <p className="text-white text-lg  md:text-xl">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="primary-btn bg-button-background hover:bg-orange hover:text-white  font-bold py-4 px-8 rounded-full shadow-md transition duration-300">
                    GET STARTED NOW{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                  <button className="secondary-btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
                    VIEW COURSE <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
