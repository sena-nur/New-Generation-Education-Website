import React from "react";
import community1 from "../../assets/community-1.png";
import community2 from "../../assets/community-2.png";
import community3 from "../../assets/community-3.png";
import triangle from "../../assets/dialog-triangle.png";
import student1 from "../../assets/student-1.jpeg";

const Community = () => {
  return (
    <>
      <div className="bg-dark-purple  text-text-white  pb-24">
        <div className="max-2xl:mx-36 max-xl:mx-24 max-lg:mx-16 max-md:mx-8 mt-72 mx-72 ">
          <p className="text-center pt-12 text-5xl md:font-semibold ">
            Join the Education.com community
          </p>
          <div className="max-md:grid-cols-1 grid grid-cols-3 mt-12 mb-12 gap-24">
            <div>
              <div className="flex justify-center mb-4">
                <img className={styles.icon} src={community1}></img>
              </div>
              <p className="text-xl text-center">
                <span className={styles.span}>44 Million</span> parents,
                teachers, and students served
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <img className={styles.icon} src={community2}></img>
              </div>
              <p className="text-xl text-center">
                Used in <span className={styles.span}>20 Countries</span>{" "}
                parents, teachers, and students served
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <img className={styles.icon} src={community3}></img>
              </div>
              <p className="text-xl text-center">
                Library with
                <span className={styles.span}> 36,000 Countries</span> parents,
                teachers, and students served
              </p>
            </div>
          </div>
          <div className="bg-state-purple rounded-xl p-8">
            <div className="relative bg-text-white text-gray-medium px-4 py-6 rounded-xl mb-10 w-8/12">
              <p className={styles.className}>
                Lorem ipsum set dolor amet mill fil the blank options seed.Lorem
                ipsum set dolor amet mill fil the blank options seed.
              </p>
              <div className="absolute left-8 -bottom-6 rotate-180">
                <img src={triangle} className="w-6 rotate-90 invert"></img>
              </div>
              <div className="absolute text-text-white -bottom-20">
                <p>Sarah H</p>
                <p>Premium Parent</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-transparent w-4/12"></div>
              <div className="relative bg-text-white text-gray-medium px-4 py-6 rounded-xl w-8/12 box-right">
                <p className={styles.dialogText}>
                  Lorem ipsum set dolor amet mill fil the blank options
                  seedLorem ipsum set dolor amet mill fil the blank options seed
                </p>
                <div className="absolute right-8 -bottom-6 ">
                  <img src={triangle} className="w-6 rotate-180 invert"></img>
                </div>
                <div>
                  <div className="absolute text-text-white right-14 -bottom-20 text-right">
                    <div className="flex gap-4">
                      <div className="">
                        <p>Amy Jo Meiners</p>
                        <p>2016 Alaska Teacher of the Year</p>
                      </div>
                      <div>
                        <img
                          src={student1}
                          className="w-16 h-16 rounded-full"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-28 text-center">
              <button className="bg-category-primary transition-all hover:bg-text-white hover:text-category-primary px-16 py-4 rounded-md text-md tracking-widest">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;

const styles = {
  dialogText: "text-md color-gray-medium tracking-wide leading-6",
  icon: " w-40 h-40",
  span: "text-yellow md:font-medium text-3xl",
};
