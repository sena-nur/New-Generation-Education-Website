import React, { useState } from "react";
import MentorCard from "./MentorCard";
import MentorshipForm from "./MentorshipForm";
import Modal from "./Modal"; // Modal bileşeni eklendi
import maleMentor from "../../assets/male-mentor.jpeg";
import Navbar from "../../components/Navbar";

const GetMentorship = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "John Doe",
      expertise: "Web Development",
      experience: "5+ years",
      rate: "$50/hr",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: maleMentor,
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Data Science",
      experience: "7+ years",
      rate: "$70/hr",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: maleMentor,
    },
    {
      id: 3,
      name: "Alex Johnson",
      expertise: "Mobile App Development",
      experience: "6+ years",
      rate: "$60/hr",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: maleMentor,
    },
  ]);

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal durumu

  const selectMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true); // Mentor seçildiğinde modalı aç
  };

  const closeModal = () => {
    setShowModal(false); // Modalı kapat
    setSelectedMentor(null); // Seçilen mentörü sıfırla
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <Navbar></Navbar>
      <h1 className="text-3xl font-semibold mb-4">Get Mentorship</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
        lorem et justo vestibulum, et sollicitudin justo volutpat. Nullam dictum
        sem ut magna facilisis, a accumsan odio efficitur.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            selectMentor={selectMentor}
          />
        ))}
      </div>
      {showModal && (
        <Modal closeModal={closeModal}>
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-64 mb-4 lg:mb-0">
                <img
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Expertise:</span>{" "}
                {selectedMentor.expertise}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Experience:</span>{" "}
                {selectedMentor.experience}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Rate:</span>{" "}
                {selectedMentor.rate}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Description:</span>{" "}
                {selectedMentor.description}
              </p>
            </div>
          </div>
          <MentorshipForm mentor={selectedMentor} />
        </Modal>
      )}
    </div>
  );
};

export default GetMentorship;
