import React, { useState } from "react";

const QuizAttempts = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleQuizTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [], correctAnswer: "" },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleSubmitQuiz = () => {
    // TODO: Implement quiz submission logic
    console.log("Quiz submitted:", { title: quizTitle, questions });
  };

  return (
    <div className="mt-32 ">
      <h2 className="text-2xl font-bold mb-4">Create Quiz</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Quiz Title"
          value={quizTitle}
          onChange={handleQuizTitleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>
      <div className="">
        {questions.map((question, index) => (
          <div key={index} className="flex gap-2 mb-8">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Question"
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="flex gap-2">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className=" flex mb-2">
                  <input
                    type="text"
                    placeholder={`Option ${optionIndex + 1}`}
                    value={option}
                    onChange={(e) =>
                      handleQuestionChange(
                        index,
                        `options[${optionIndex}]`,
                        e.target.value
                      )
                    }
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
              ))}
            </div>

            <div>
              <input
                type="text"
                placeholder="Correct Answer"
                value={question.correctAnswer}
                onChange={(e) =>
                  handleQuestionChange(index, "correctAnswer", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-2">
              <button
                onClick={() => handleAddOption(index)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Add Option
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmitQuiz}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizAttempts;
