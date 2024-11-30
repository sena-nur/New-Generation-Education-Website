import React, { useState } from "react";

const Settings = () => {
  // State for holding user data
  const [userData, setUserData] = useState({
    firstName: "Samuel",
    lastName: "Abera",
    dateOfBirth: "21/02/1997",
    gender: "Male",
    location: "Ethiopia, Addis Ababa",
    phoneNumber: "+251913****30",
    email: "samuelabera87@gmail.com",
    profession: "Software Developer",
    profileImage:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  });

  // Function to handle changes in user data
  const handleUserDataChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  // Function to handle file upload
  const handleFileUpload = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleUserDataChange(field, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-28 w-full">
      <div className="mx-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Profile Settings
        </h2>
      </div>
      <div className="mb-6 mt-8 mx-24 ">
        <div className="grid grid-cols-2 gap-x-48 px-6 py-4 bg-gray-200 rounded-lg mb-10 shadow-xl items-center justify-items-center">
          {/* Profession */}
          <div className="mb-6 w-full ">
            <label className="block mb-1">Profession</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.profession}
              onChange={(e) =>
                handleUserDataChange("profession", e.target.value)
              }
            />
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.firstName}
              onChange={(e) =>
                handleUserDataChange("firstName", e.target.value)
              }
            />
          </div>
          {/* Last Name */}
          <div className="mb-6 w-full">
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.lastName}
              onChange={(e) => handleUserDataChange("lastName", e.target.value)}
            />
          </div>
          {/* Date of Birth */}
          <div className="mb-6 w-full">
            <label htmlFor="dateOfBirth" className="block mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              id="dateOfBirth"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.dateOfBirth}
              onChange={(e) =>
                handleUserDataChange("dateOfBirth", e.target.value)
              }
            />
          </div>
          {/* Gender */}
          <div className="mb-6 w-full">
            <label htmlFor="gender" className="block mb-1">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.gender}
              onChange={(e) => handleUserDataChange("gender", e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {/* Location */}
          <div className="mb-6 w-full">
            <label htmlFor="location" className="block mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              className=" w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.location}
              onChange={(e) => handleUserDataChange("location", e.target.value)}
            />
          </div>
          {/* Phone Number */}
          <div className="mb-6 w-full ">
            <label htmlFor="phoneNumber" className="block mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className=" w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.phoneNumber}
              onChange={(e) =>
                handleUserDataChange("phoneNumber", e.target.value)
              }
            />
          </div>
          {/* Email */}
          <div className="mb-6 w-full">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              value={userData.email}
              onChange={(e) => handleUserDataChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-around gap-32 mx-16">
          <div className="text-center ">
            <label
              htmlFor="profileImage"
              className="block mb-2 text-lg font-medium"
            >
              Profile Image
            </label>
            <div className="relative h-fit">
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "profileImage")}
              />
              {userData.profileImage && (
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="block mt-2 rounded-lg"
                />
              )}
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 cursor-pointer bg-blue-600 px-6 py-2 text-lg rounded-br-lg text-text-white hover:bg-blue-800 transition"
              >
                Choose File
              </label>
            </div>
          </div>
          {/* Cover Image */}
          <div className="mb-6 text-center">
            <label
              htmlFor="coverImage"
              className="block mb-2 text-lg font-medium"
            >
              Cover Image
            </label>
            <div className="relative h-fit">
              <input
                type="file"
                id="coverImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "coverImage")}
              />
              {userData.coverImage && (
                <img
                  src={userData.coverImage}
                  alt="Cover"
                  className="block mt-2 rounded-lg"
                />
              )}
              <label
                htmlFor="coverImage"
                className="absolute bottom-0 right-0 cursor-pointer bg-blue-600 px-6 py-2 text-lg rounded-br-lg text-text-white hover:bg-blue-800 transition"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="text-center ">
          <button className="bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
