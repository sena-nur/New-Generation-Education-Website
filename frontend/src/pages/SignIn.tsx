import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../data/user";
import { signInFunc } from "../api/sign";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const id = localStorage.getItem("id");
    console.log("sdaads", role);
    console.log("sdaads", id);
    if (token) {
      console.log(token);
      if (role === "ROLE_ADMIN") {
        navigate("/instructor-dashboard");
      } else if (role === "ROLE_USER") {
        navigate("/student-dashboard");
      } else {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const id = useUserStore((state) => state.id);

  const handleLogin = () => {
    useUserStore.getState().login("2");
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-blue-200">
        <div className="relative px-8 py-12 bg-white rounded-lg text-left w-full max-w-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform -skew-y-12"></div>
          <div className="relative z-10">
            <h3 className="mb-8 text-xl font-medium text-center">
              Login To The Page
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
                  Or, Login with your email
                </div>
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
                  onClick={async () => {
                    //handleLogin();
                    //handleStudentSignupClick();
                    const token = await signInFunc({
                      email: email,
                      password: password,
                    });
                    useUserStore.getState().login(token);
                    console.log("token", useUserStore.getState().token);
                    isLoggedIn();
                  }}
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white font-medium text-center"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-gray-700 text-center">
              Forgot Your Password?{" "}
              <a href="#" className="text-indigo-500">
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
