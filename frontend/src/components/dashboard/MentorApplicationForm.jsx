import React, { useState } from "react";

const MentorApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Başvuru formunun işlenmesi
    console.log("Başvuru gönderildi:", {
      name,
      email,
      expertise,
      experience,
      monthlyPrice,
      message,
    });
    // Başvuru gönderildiğinde ek işlemler yapılabilir
  };

  return (
    <div className="w-2/6 container mx-auto pt-48 ">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Mentor Başvuru Formu
      </h2>
      <form onSubmit={handleSubmit} className="px-4">
        <div className="form-group mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Adınız
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-posta Adresiniz
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="expertise"
            className="block text-sm font-medium text-gray-700"
          >
            Uzmanlık Alanınız
          </label>
          <input
            type="text"
            id="expertise"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Deneyim Süreniz (Yıl)
          </label>
          <input
            type="number"
            id="experience"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="monthlyPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Aylık Ödeme Beklentiniz ($)
          </label>
          <input
            type="number"
            id="monthlyPrice"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Ek Mesajınız (İsteğe bağlı)
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Başvur
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorApplicationForm;
