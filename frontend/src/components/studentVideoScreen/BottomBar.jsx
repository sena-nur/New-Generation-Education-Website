import React, { useState } from "react";

const BottomBar = ({ data, setCertificatePage }) => {
  const [activeButton, setActiveButton] = useState("general");
  const [askQuestion, setAskQuestion] = useState(false);

  const planHeaders = ["Beginner", "Intermediate", "Advanced"];

  const renderContent = () => {
    switch (activeButton) {
      case "general":
        return <GeneralLooking data={data} />;
      case "qa":
        return (
          <QuestionAnswers questionsAndAnswers={data.questionsAndAnswers} />
        );
      case "comments":
        return <Reviews data={data} />;
      default:
        return null;
    }
  };

  const GeneralLooking = ({ data }) => (
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-100 px-6 py-4 ">
        <p className="text-2xl mb-5 font-semibold">About This Course</p>
        <p>{data.description}</p>
      </div>
      <hr className="border-gray-300"></hr>
      <div className="flex justify-around">
        <div className="px-6 py-4  text-lg flex gap-4">
          <p className="">Instructor:</p>
          <p>{data.instructorName}</p>
        </div>
        <div className="flex gap-4 px-6 py-4">
          <p className="">Active students: </p>
          <p>{data.studentCount}</p>
        </div>
        <div className="flex gap-4 px-6 py-4">
          <p className="">Lessons: </p>
          <p>{data.lessons}</p>
        </div>
        <div className="flex gap-4 px-6 py-4">
          <p className="">Sold: </p>
          <p>{data.totalSold}</p>
        </div>
      </div>
      <hr className="border-gray-300"></hr>
      <div className=" px-12 py-4">
        <p className="text-xl font-medium mb-3">Plans: </p>
        <div>
          {data.plan.map((plan, index) => (
            <p className="mb-4" key={index}>
              <span className="font-semibold">{planHeaders[index]}: </span>
              {plan}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setCertificatePage(true)}
          className="bg-orange-500 text-white px-8 py-4"
        >
          Get Certificate
        </button>
      </div>
    </div>
  );

  const QuestionAnswers = ({ questionsAndAnswers }) => (
    <div>
      {questionsAndAnswers.map((qa) => (
        <div key={qa.id} className="mb-4 bg-gray-200 px-6 py-4">
          <p className="font-semibold">Q: {qa.question}</p>
          <p className="text-gray-700">A: {qa.answer}</p>
        </div>
      ))}
      <div className="flex justify-end">
        {!askQuestion && (
          <button
            onClick={() => setAskQuestion(!askQuestion)}
            className="bg-gray-200 text-black px-8 py-4"
          >
            {" "}
            Ask Question
          </button>
        )}
        {askQuestion && (
          <>
            <div className="px-1 bg-gray-700 w-full py-3 text-black">
              <input type="text" className="bg-white text-black w-96" />
              <button
                onClick={() => {
                  setAskQuestion(!askQuestion);
                  alert("Question submitted");
                }}
                className="mx-4 t bg-gray-200 px-4 py-2"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Comment submitted:", comment);
    setComment("");
  };
  const Reviews = ({ data }) => (
    <div>
      <div>
        <p className="text-2xl font-semibold">Öğrenci geri bildirimi</p>
      </div>

      <div className="flex mb-5 mt-2 items-center">
        <span className="text-2xl font-semibold text-orange-500 mr-2">
          {data.rating}
        </span>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < Math.floor(data.rating)
                  ? "text-orange-500"
                  : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 15.585l-5.293 2.786.1-5.879L.415 8.707l5.878-.851L10 3.415l3.707 4.441 5.878.851-4.292 3.785.1 5.879L10 15.585z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <span className="ml-2">({data.reviews.length})</span>
      </div>

      {data.reviews.map((review) => (
        <div className="items-center flex overflow-hidden ">
          <div>
            <img className="h-16 w-16" src={review.studentImage} alt="" />
          </div>
          <div key={review.id} className=" w-full pl-5 pr-6 py-4">
            <div className="">
              <p className="font-semibold">{review.studentName}</p>
              <div className="flex items-center">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-3 h-3 ${
                        index < Math.floor(review.rate)
                          ? "text-orange-500"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-5.293 2.786.1-5.879L.415 8.707l5.878-.851L10 3.415l3.707 4.441 5.878.851-4.292 3.785.1 5.879L10 15.585z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-xl font-semibold mb-4">Make Comment</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your comment..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <div className="px-12 p-4 pb-6">
        <div className="flex ml-12  space-x-4 mt-4">
          {["general", "qa", "comments"].map((button) => (
            <button
              key={button}
              className={`px-4 py-2  border-b-2 ${
                activeButton === button
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveButton(button)}
            >
              {button === "general"
                ? "General Looking"
                : button === "qa"
                ? "Q&A"
                : "Reviews"}
            </button>
          ))}
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </>
  );
};

export default BottomBar;
