import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signUpFunc } from "../api/sign";
import { Role } from "../data/user";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/student-dashboard");
  };
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-blue-200">
        <div className="relative px-8 py-12 bg-white rounded-lg text-left w-full max-w-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform -skew-y-12"></div>
          <div className="relative z-10">
            <h3 className="mb-8 text-xl font-medium text-center">
              Create an Account And Be Learner
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <div className="flex items-center justify-center mb-4 space-x-4">
                  <FaFacebook className="text-3xl text-blue-600 cursor-pointer" />
                  <FaTwitter className="text-3xl text-blue-400 cursor-pointer" />
                  <FaGoogle className="text-3xl text-red-600 cursor-pointer" />
                  <FaGithub className="text-3xl text-gray-700 cursor-pointer" />
                </div>
                <div className="text-gray-700 text-center mb-8">
                  Or, sign up with your email
                </div>
                <label className="text-gray-700 block mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-8">
                <label className="text-gray-700 block mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white font-medium text-center"
                  onClick={() => {
                    signUpFunc({
                      email: email,
                      password: password,
                      name: fullName,
                      role: [Role.USER],
                    });
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-gray-700 text-center">
              Already have an account?{" "}
              <a href="#" className="text-indigo-500">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
