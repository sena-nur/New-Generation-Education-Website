import React, { useState } from "react";
import logo from "../../assets/logo .png";

const TopBar = ({ data, setCertificatePage }) => {
  const [rateModal, setRateModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleStarMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <>
      <div className="bg-video-bg items-center flex gap-4 px-2">
        <div>
          <img src={logo} alt="" className="h-10 invert" />
        </div>
        <div className="w-full py-1 px-8">
          <div className="text-white text-lg p-4 items-center flex justify-between">
            <div className="flex gap-4">
              <div>
                <h1 className="font-medium">{data.title}</h1>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <p
                onClick={() => {
                  setCertificatePage(true);
                }}
                className="text-white hover:cursor-pointer hover:text-orange-500 underline transition text-sm"
              >
                Get Certificate
              </p>
              <button
                onClick={() => setRateModal(true)}
                className="bg-orange-500 px-3 py-1 text-white text-sm"
              >
                Rate the course
              </button>
            </div>
          </div>
        </div>
      </div>

      {rateModal && (
        <div className="bg-black bg-opacity-80 fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 shadow-3xl">
            <h2 className="text-2xl font-semibold mb-4">Rate the Course</h2>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-8 h-8 cursor-pointer ${
                    index < (hoverRating || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => handleStarClick(index + 1)}
                  onMouseEnter={() => handleStarHover(index + 1)}
                  onMouseLeave={handleStarMouseLeave}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.585l-5.293 2.786.1-5.879L.415 8.707l5.878-.851L10 3.415l3.707 4.441 5.878.851-4.292 3.785.1 5.879L10 15.585z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <button
              onClick={() => setRateModal(false)}
              className="bg-orange-500 text-white px-4 py-2 "
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
