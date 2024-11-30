import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import maleMentor from "../../assets/male-mentor.jpeg";

const CoursesWithReviews = () => {
  const instructor = {
    name: "Charles Robin",
    image: maleMentor,
    rating: 4.5,
    reviews: [
      {
        reviewerName: "John Doe",
        content: "I loved that course",
        rating: 4.5,
        image: maleMentor,
      },
      {
        reviewerName: "Sarah Connor",
        content: "Very well explained topics!",
        image: maleMentor,
        rating: 5,
      },
      {
        reviewerName: "James Reid",
        content: "Could use more practical examples.",
        image: maleMentor,
        rating: 3.5,
      },
      {
        reviewerName: "Olivia Dunham",
        content: "Perfect for beginners.",
        image: maleMentor,
        rating: 4,
      },
      {
        reviewerName: "Ethan Hunt",
        content: "A bit rushed in the last few chapters.",
        image: maleMentor,
        rating: 3,
      },
      {
        reviewerName: "Mia Wallace",
        content: "Engaging content and knowledgeable instructor.",
        image: maleMentor,
        rating: 4.5,
      },
      {
        reviewerName: "Tony Stark",
        content: "Excellent course, well structured!",
        image: maleMentor,
        rating: 5,
      },
      {
        reviewerName: "Bruce Wayne",
        content: "Needs more interactive sessions.",
        image: maleMentor,
        rating: 3.5,
      },
      { reviewerName: "Clark Kent", content: "Very insightful.", rating: 4 },
      {
        reviewerName: "Diana Prince",
        content: "Great depth in the material covered.",
        image: maleMentor,
        rating: 4.5,
      },
      {
        reviewerName: "Peter Parker",
        content: "Helpful course materials and assignments.",
        image: maleMentor,
        image: maleMentor,
        rating: 4,
      },
      {
        reviewerName: "Bruce Banner",
        content: "Too theoretical, needs more practical exercises.",
        image: maleMentor,
        rating: 3,
      },
      {
        reviewerName: "Natasha Romanoff",
        content: "Well-paced and comprehensive.",
        rating: 5,
        image: maleMentor,
      },
      {
        reviewerName: "Steve Rogers",
        content: "A solid introduction to the subject.",
        rating: 4,
        image: maleMentor,
      },

      {
        reviewerName: "Thor Odinson",
        content: "Some topics were overly simplified.",
        rating: 3.5,
      },
      {
        reviewerName: "Loki Laufeyson",
        image: maleMentor,
        content: "Engaging and challenging at the same time.",
        rating: 4.5,
      },
      {
        reviewerName: "Wanda Maximoff",
        content: "Excellent support from the instructor.",
        image: maleMentor,
        rating: 5,
      },
      {
        reviewerName: "Vision",
        content: "Could benefit from more Q&A sessions.",
        image: maleMentor,
        rating: 4,
      },
      {
        reviewerName: "Scott Lang",
        content: "Good balance of theory and practice.",
        image: maleMentor,
        rating: 4,
      },
      {
        reviewerName: "Hope van Dyne",
        content: "The course was a bit outdated.",
        image: maleMentor,
        rating: 3,
      },
    ],
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
        <div className="flex items-center mb-8">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-32 h-32 rounded-full mr-6"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              {instructor.name}
            </h2>
            <div className="text-xl text-gray-600 flex items-center mt-2">
              {renderStars(instructor.rating)}
              <span className="ml-2">({instructor.rating})</span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructor.reviews.map((review, index) => (
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
                  </div>
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesWithReviews;
