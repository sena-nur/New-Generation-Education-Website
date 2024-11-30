import React, { useState } from "react";

const QuestionAnswer = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      student: "John Doe",
      question: "What is the purpose of React hooks?",
      answer: "",
    },
    {
      id: 2,
      student: "Jane Smith",
      question: "How do you handle state in a functional component?",
      answer: "",
    },
    {
      id: 3,
      student: "Mike Johnson",
      question: "What is the difference between props and state?",
      answer: "",
    },
  ]);

  const handleAnswerChange = (id, answer) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, answer };
        }
        return question;
      });
    });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question & Answer</h2>
      <p className="text-gray-600 mb-8">
        Welcome to the Q&A section! Here, students can ask questions and
        instructors can provide answers.
      </p>
      {questions.map((question) => (
        <div
          key={question.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6"
        >
          <div className="mb-4">
            <p className="text-lg font-semibold">{question.student}</p>
            <p className="text-gray-600">{question.question}</p>
          </div>
          <div>
            <label
              htmlFor={`answer-${question.id}`}
              className="block text-gray-700 font-semibold mb-2"
            >
              Answer:
            </label>
            <textarea
              id={`answer-${question.id}`}
              value={question.answer}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswer;
