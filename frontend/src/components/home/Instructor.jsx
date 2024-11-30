import femaleInstructor from "../../assets/female-instructor.jpeg";
import maleMentor from "../../assets/male-mentor.jpeg";
import { useNavigate } from "react-router-dom";

export const Instructor = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col max-2xl:mx-0 mx-32">
        <div className="max-lg:grid-cols-1 grid grid-cols-2">
          <div className="max-md:p-10 max-lg:p-36 max-xl:from-main-background  m-12 p-12 bg-gradient-to-r from-orange md:from-yellow-500 rounded-full">
            <img
              className="max-lg:-mb-24 rounded-full"
              src={femaleInstructor}
            ></img>
          </div>
          <div className="p-20" id="instructorComponent">
            <p className="md:font-bold text-4xl">
              Become{" "}
              <span className="text-category-primary ">An Instructor </span> of
              Our Platform
            </p>
            <p className="leading-loose text-text-gray mt-14 mb-20">
              In a sunlit classroom, Mr. Harrison stood at the front, a seasoned
              teacher with salt-and-pepper hair. His passion for literature
              radiated through every word he spoke. Today, he dissectedIn a
              sunlit classroom, Mr. Harrison stood at the front, a seasoned
              teacher with salt-and-pepper hair. His passion for literature
              radiated through every word he spoke. Today, he dissected
            </p>
            <button
              onClick={() => {
                navigate("/instructor-signup");
              }}
              className="bg-category-primary text-white px-12 text-lg md:font-medium hover:shadow-btn-blue transition-all py-3 rounded-lg"
            >
              {" "}
              Start Teaching
            </button>
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col-reverse grid grid-cols-2 gap-16">
          <div className="p-20">
            <p className="md:font-bold text-4xl">
              Get{" "}
              <span
                className="text-category-primary 
              "
              >
                Mentorship
              </span>{" "}
              From Our Platform
            </p>
            <p className="leading-loose text-text-gray mt-14 mb-20">
              In a sunlit classroom, Mr. Harrison stood at the front, a seasoned
              teacher with salt-and-pepper hair. His passion for literature
              radiated through every word he spoke. Today, he dissectedIn a
              sunlit classroom, Mr. Harrison stood at the front, a seasoned
              teacher with salt-and-pepper hair. His passion for literature
              radiated through every word he spoke. Today, he dissected
            </p>
            <button
              onClick={() => {
                navigate("/getmentorship");
              }}
              className="bg-category-primary text-white px-12 text-lg md:font-medium hover:shadow-btn-blue transition-all py-3 rounded-lg"
            >
              Get Mentorship
            </button>
          </div>
          <div className="max-md:p-10 max-lg:p-36 max-xl:from-main-background m-12 p-12 bg-gradient-to-l from-orange md:from-yellow-500 rounded-full ">
            <img className=" max-lg:-mb-48 rounded-full" src={maleMentor}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
