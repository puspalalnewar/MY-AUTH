import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBookOpen,
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
    <div className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 shadow-2xl md:grid-cols-2">
          <div className="hidden flex-col justify-between bg-linear-to-br from-green-400/20 via-black to-blue-500/10 p-10 md:flex">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 font-bold text-black">
                  PN
                </div>

                <div>
                  <h1 className="font-bold text-lg">Puspalal Newar</h1>

                  <p className="text-sm text-gray-500">
                    Study & Technology Blog
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <FaBookOpen className="mb-6 text-5xl text-green-400" />

                <h2 className="text-4xl font-bold leading-tight">
                  Start your
                  <br />
                  <span className="text-green-400">learning journey.</span>
                </h2>

                <p className="mt-5 max-w-md leading-7 text-gray-400">
                  Create your account and explore study materials, programming
                  tutorials, technology articles and more.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              © 2026 PN Blog. Learn something new every day.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400 font-bold text-black">
                PN
              </div>

              <div>
                <h1 className="font-bold">Puspalal Newar</h1>

                <p className="text-xs text-gray-500">Study & Technology Blog</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-green-400">
                WELCOME TO PN BLOG
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Sign up to continue learning and reading.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
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
                    className="w-full rounded-xl border border-gray-800 bg-black py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
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
                    className="w-full rounded-xl border border-gray-800 bg-black py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
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
                    className="w-full rounded-xl border border-gray-800 bg-black py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-green-400 py-3.5 font-semibold text-black transition hover:bg-green-300"
              >
                Create Account
                <FaArrowRight />
              </button>
            </form>

            <div className="mt-7 text-center text-sm text-gray-500">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="ml-2 font-semibold text-green-400 hover:text-green-300"
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
