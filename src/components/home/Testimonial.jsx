import femaleInstructor from "../../assets/female-instructor.jpeg";
import student1 from "../../assets/student-1.jpeg";
import student2 from "../../assets/student-2.jpeg";
import student3 from "../../assets/student-3.jpeg";
import { FaQuoteLeft } from "react-icons/fa";

export const Testimonial = () => {
  const data = [
    {
      studentName: "SENANUR KOSE",
      studentRole: "MAKE UP ARTIST",
      text: "Today, he dissectedIn a sunlit classroom, Mr. Harrison stood at the front, seasoned teacher with salt-and-pepper hair. ",
      img: student1,
    },
    {
      studentName: "NURCAN KOSE",
      studentRole: "A LOVELY MOTHER",
      text: "Today, he dissectedIn a sunlit classroom, Mr. Harrison stood at the front, seasoned teacher with salt-and-pepper hair. ",
      img: student2,
    },
    {
      studentName: "SERDAR ORTAC",
      studentRole: "NOT A MAN",
      text: "Today, he dissectedIn a sunlit classroom, Mr. Harrison stood at the front, seasoned teacher with salt-and-pepper hair. ",
      img: student3,
    },
  ];
  return (
    <>
      <div>
        <div className=" text-center mt-16">
          <p className="mb-6 text-xl md:font-medium text-category-primary">
            TESTIMONIAL
          </p>
          <p className="mb-16 text-5xl md:font-bold">Our Successful Students</p>
        </div>
        <div className="max-lg:grid-cols-1 max-2xl:mx-16 max-xl:mx-4 mx-32 grid grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              className="bg-text-white shadow-xl px-6 py-8 rounded-lg hover:cursor-pointer hover:text-text-black text-text-gray hover:bg-deep-orange transition-all hover:-translate-y-2  "
              key={index}
            >
              <div className="flex gap-3 leading-loose text-text-gray mb-6">
                <div className="relative w-32 ">
                  <div className="absolute bottom-0 right-0 bg-category-primary inline-block p-3 rounded-full">
                    <FaQuoteLeft className="w-5 h-5 fill-text-white" />
                  </div>
                  <img
                    className="w-32 h-32 rounded-full"
                    src={item.img}
                    alt={item.studentName}
                  />
                </div>
                <div className="">
                  <p className="mt-8 text-lg md:font-bold">
                    {item.studentName}
                  </p>
                  <p className="text-md text-category-primary md:font-semibold">
                    {item.studentRole}
                  </p>
                </div>
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;