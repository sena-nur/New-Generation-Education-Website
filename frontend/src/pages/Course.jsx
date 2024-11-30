import React from "react";
import courses from "../data/courses.json";

const Course = () => {
  const data = courses.courses[0];
  console.log(data);
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <span className="text-lg text-green-600 font-semibold uppercase tracking-wide">
              {data.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-indigo-700">
            {data.title}
          </h1>
          <p className="text-gray-700 mb-6 text-lg">{data.description}</p>
          <p className="text-xl flex justify-end font-semibold mb-8 text-purple-600">
            Instructor: {data.instructorName}
          </p>
          <hr className="border-gray-300 mb-8" />
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md px-8 py-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-white text-3xl font-bold mr-2">
                {data.rating}
              </span>
              <span className="text-white text-xl">Rating</span>
            </div>
            <div
              style={{ maxHeight: "200px", overflowY: "auto" }}
              className="mb-2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Reviews
              </h2>
              {data.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-4 mb-4 rounded-lg shadow-md"
                >
                  <p className="text-gray-800 mb-2 font-medium">
                    {review.review}
                  </p>
                  <p className="text-gray-600 text-sm">{review.studentName}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="px-8 py-6 text-gray-700 mt-8 bg-blue-100 rounded-lg">
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {data.plan.map((plan, index) => (
                <p key={index} className="text-gray-700 mb-2">
                  {1 + index + ": " + plan}
                </p>
              ))}
            </div>
          </p>
        </div>
        <div>
          <div className="mb-8">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${data.trailer}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            ></iframe>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Course Chapters
            </h2>
            {data.chapters.map((chapter, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 mb-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-700">
                  {chapter.title}
                </h3>
                <p className="text-gray-700">{chapter.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <h2 className="text-4xl font-bold text-white mb-4 md:mb-0">
                <span className="text-xl">$</span>
                {data.price}.00
              </h2>
              <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
