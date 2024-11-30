import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import maleMentor from "../../assets/male-mentor.jpeg";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewerName: "John Doe",
      content: "I loved that course",
      rating: 4.5,
      image: maleMentor,
      course: "React",
    },
    {
      id: 2,
      reviewerName: "Michael Smith",
      content: "Very well explained topics!",
      image: maleMentor,
      rating: 5,
      course: "Node Js",
    },
    {
      id: 3,
      reviewerName: "Sarah Connor",
      content: "Could use more practical examples.",
      image: maleMentor,
      rating: 3.5,
      course: "Hayat Okulu Kursu",
    },
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleUpdate = (id, updatedContent) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, content: updatedContent } : review
      )
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500 inline-block" />
        );
      } else {
        stars.push(
          <FaRegStar key={i} className="text-yellow-500 inline-block" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-32 px-12">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Student Reviews
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  className="w-12 h-12 rounded-full mr-4"
                  alt={review.reviewerName}
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {review.reviewerName}
                  </h4>
                  <div className="text-gray-600 flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{review.course}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.content}</p>
              <button
                onClick={() =>
                  handleUpdate(review.id, "Updated content here...")
                }
                className="text-blue-500"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="text-red-500 ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
