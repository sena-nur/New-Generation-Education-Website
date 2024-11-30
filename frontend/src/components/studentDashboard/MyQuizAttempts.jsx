import React, { useState } from "react";

const MyQuizAttempts = () => {
  const data = {
    quizzes: [
      {
        id: 1,
        name: "HTML Quiz",
        questions: [
          {
            question: "What does HTML stand for?",
            option1: "Hyper Text Markup Language",
            option2: "Home Tool Markup Language",
            option3: "Hyperlinks and Text Markup Language",
            option4: "Hyper Tool Markup Language",
          },
          {
            question: "Who is making the Web standards?",
            option1: "Microsoft",
            option2: "Google",
            option3: "The World Wide Web Consortium",
            option4: "Mozilla",
          },
          {
            question:
              "Choose the correct HTML element for the largest heading:",
            option1: "<heading>",
            option2: "<h6>",
            option3: "<head>",
            option4: "<h1>",
          },
        ],
      },
      {
        id: 2,
        name: "React Quiz",
        questions: [
          {
            question: "What is React?",
            option1: "A state management tool",
            option2: "A JavaScript library for building user interfaces",
            option3: "A database",
            option4: "A design tool",
          },
          {
            question: "What is JSX?",
            option1: "A syntax extension for JavaScript",
            option2: "A type of JavaScript",
            option3: "A method in React",
            option4: "A data format",
          },
          {
            question: "What is a component in React?",
            option1: "A function that returns HTML",
            option2: "A package",
            option3: "A methodology",
            option4: "A data structure",
          },
        ],
      },
      {
        id: 3,
        name: "CSS Quiz",
        questions: [
          {
            question: "What does CSS stand for?",
            option1: "Colorful Style Sheets",
            option2: "Creative Style Sheets",
            option3: "Cascading Style Sheets",
            option4: "Computer Style Sheets",
          },
          {
            question:
              "What is the correct HTML for referring to an external style sheet?",
            option1: "<stylesheet>mystyle.css</stylesheet>",
            option2: '<style src="mystyle.css">',
            option3:
              '<link rel="stylesheet" type="text/css" href="mystyle.css">',
            option4: "<css>mystyle.css</css>",
          },
          {
            question: "Which is the correct CSS syntax?",
            option1: "{body;color:black;}",
            option2: "{body:color=black;}",
            option3: "body {color: black;}",
            option4: "body:color=black;",
          },
        ],
      },
      {
        id: 4,
        name: "JavaScript Quiz",
        questions: [
          {
            question: "Inside which HTML element do we put the JavaScript?",
            option1: "<js>",
            option2: "<scripting>",
            option3: "<javascript>",
            option4: "<script>",
          },
          {
            question:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            option1: '<script href="xxx.js">',
            option2: '<script name="xxx.js">',
            option3: '<script src="xxx.js">',
            option4: '<script file="xxx.js">',
          },
          {
            question: 'How do you write "Hello World" in an alert box?',
            option1: 'msgBox("Hello World");',
            option2: 'alertBox("Hello World");',
            option3: 'msg("Hello World");',
            option4: 'alert("Hello World");',
          },
        ],
      },
    ],
  };

  const [answers, setAnswers] = useState({});
  const [selectedQuiz, setSelectedQuiz] = useState(null); // To track the selected quiz

  const handleOptionChange = (question, option) => {
    setAnswers({
      ...answers,
      [question]: option,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Answers:", answers);
    alert("Quiz submitted! Check the console for results.");
    setSelectedQuiz(null); // Close modal after submit
  };

  const openQuizModal = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const closeQuizModal = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="max-w-4xl mt-32 mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        My Quiz Attempts
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {data.quizzes.map((quiz, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => openQuizModal(quiz)}
          >
            <h2 className="text-xl font-semibold">{quiz.name}</h2>
          </div>
        ))}
      </div>
      {selectedQuiz && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-9/12 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {selectedQuiz.name}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mt-2 px-40 w-full flex flex-col justify-center items-center">
                  {selectedQuiz.questions.map((quizItem, index) => (
                    <div
                      key={index}
                      className="mb-4 w-fit px-20 py-5 my-6 bg-gray-200 rounded-lg"
                    >
                      <h4 className="text-md font-semibold mb-2">
                        {quizItem.question}
                      </h4>
                      <ul>
                        {[
                          quizItem.option1,
                          quizItem.option2,
                          quizItem.option3,
                          quizItem.option4,
                        ].map((option, idx) => (
                          <li key={idx} className="mb-2">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name={quizItem.question}
                                value={option}
                                checked={answers[quizItem.question] === option}
                                onChange={() =>
                                  handleOptionChange(quizItem.question, option)
                                }
                                className="form-radio text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-gray-700">
                                {option}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="ok-btn"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit Quiz
                  </button>
                </div>
              </form>
              <div className="items-center px-4 py-3">
                <button
                  onClick={closeQuizModal}
                  className="px-4 py-2 bg-gray-300 text-black text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyQuizAttempts;
