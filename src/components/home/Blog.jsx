import blogger1 from "../../assets/blogger-1.jpeg";
import blogger2 from "../../assets/blogger-2.jpeg";
import blgoger3 from "../../assets/blogger-3.jpeg";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarTimes,
  FaCalendarWeek,
  FaCommentDots,
  FaRocketchat,
} from "react-icons/fa";

export const Blog = () => {
  const data = [
    {
      title: "Become A Better Blogger: Content Planning",
      date: "Oct 10,2021",
      comments: "Com 09",
      text: "Lorem ipsum set dolor amet mill fil the blank options seed.",
      img: blogger1,
    },
    {
      title: "Bloggers Are Asking: How To Plan Content?",
      date: "Oct 10,2021",
      comments: "Com 09",
      text: "Lorem ipsum set dolor amet mill fil the blank options seed.",
      img: blogger2,
    },
    {
      title: "What Kind Of Blogs Are Going To Better?",
      date: "Oct 10,2021",
      comments: "Com 09",
      text: "Lorem ipsum set dolor amet mill fil the blank options seed.",
      img: blgoger3,
    },
  ];
  return (
    <>
      <div id="blogComponent" className="max-sm:mx-8 max-md:mx-16 max-lg:mx-48 max-2xl:mx-24 max-xl:mx-4 mx-48 mb-48">
        <div className="mt-40 mb-20 text-center ">
          <p className="text-lg md:font-medium text-category-primary mb-4">
            LATEST ARTICLES
          </p>
          <p className="text-4xl md:font-bold">Get News With Yol Arkadaşım</p>
        </div>
        <div className="max-lg:gap-48 max-xl:gap-4 max-lg:grid-cols-1 grid grid-cols-3 gap-8">
          {data.map((item) => (
            <div className=" relative">
              <div className="z-50 bottom-32 right-12 absolute">
                <button
                  type="button"
                  class="max-xl:hidden text-white bg-category-primary hover:bg-deep-orange transition-all text-2xl rounded-full p-7 text-center inline-flex items-center me-2"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <span class="sr-only">Icon description</span>
                </button>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  className="rounded-xl hover:brightness-50 hover:cursor-pointer hover:scale-110 transition-all"
                  src={item.img}
                ></img>
              </div>
              <div className="max-lg:w-11/12 mx-4 px-6 py-4 bg-text-white  shadow-2xl rounded-xl absolute -bottom-24">
                <p className="my-2 text-gray-medium">ONLINE</p>
                <p className="text-xl md:font-semibold mb-4">{item.title}</p>
                <div className="flex gap-8 mb-5">
                  <div className="flex gap-2">
                    <FaCalendarAlt className="w-6 h-6 fill-category-primary" />
                    <p>{item.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <FaCommentDots className="w-6 h-6 fill-category-primary" />
                    <p>{item.comments}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
