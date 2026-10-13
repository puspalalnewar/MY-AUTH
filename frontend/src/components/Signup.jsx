import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (value, name) => {
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const fetchAPI = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success === true) {
        toast.success("OTP sent to your Gmail!");
        navigate("/enterotp");
      } else {
        toast.error(result.msg?.message || result.msg);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${API_URL}/auth/signup`;

    await fetchAPI(url, details);

    setDetails({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 md:grid-cols-2">
          {/* Left Section */}
          <div className="hidden flex-col justify-between bg-gray-900 p-10 md:flex">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                  <FaGlobe size={25} />
                </div>

                <div>
                  <h1 className="text-lg font-bold">Puspalal Newar</h1>

                  <p className="text-sm text-gray-400">
                    Geopolitics & World Affairs
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <FaGlobe className="mb-6 text-5xl text-blue-400" />

                <h2 className="text-4xl font-bold">
                  Understand the world.
                  <span className="mt-2 block text-blue-400">
                    Beyond the headlines.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-gray-400">
                  Join us to explore world politics, international relations,
                  global conflicts, diplomacy, and the events shaping our world.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Puspalal Newar
            </p>
          </div>

          {/* Right Section */}
          <div className="p-6 sm:p-10">
            {/* Mobile Brand */}
            <div className="mb-8 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500">
                <FaGlobe size={22} />
              </div>

              <div>
                <h1 className="font-bold">Puspalal Newar</h1>

                <p className="text-xs text-gray-400">
                  Geopolitics & World Affairs
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm text-blue-400">JOIN OUR COMMUNITY</p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Sign up to explore global politics and world affairs.
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={details.name}
                    onChange={(e) => handleData(e.target.value, e.target.name)}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-950 py-3 pl-11 pr-4 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={details.email}
                    onChange={(e) => handleData(e.target.value, e.target.name)}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-950 py-3 pl-11 pr-4 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={details.password}
                    onChange={(e) => handleData(e.target.value, e.target.name)}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-950 py-3 pl-11 pr-4 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 font-semibold hover:bg-blue-600"
              >
                Create Account
                <FaArrowRight />
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-7 text-center text-sm text-gray-400">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
