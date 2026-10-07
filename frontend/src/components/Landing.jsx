import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaArrowRight, FaPenNib } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400 text-black font-bold text-lg">
            PN
          </div>

          <h1 className="text-xl font-bold">
            Puspalal <span className="text-green-400">Newar</span>
          </h1>
        </div>
        <div className="hidden gap-3 sm:flex">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-2.5 transition hover:border-green-400 hover:text-green-400"
          >
            <FiLogIn />
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="flex items-center gap-2 rounded-lg bg-green-400 px-5 py-2.5 font-semibold text-black transition hover:bg-green-300"
          >
            <FiUserPlus />
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <div className="grid w-full max-w-6xl items-center gap-12 py-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
              <FaBookOpen />
              Learn • Read • Grow
            </div>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Read More.
              <br />
              <span className="text-green-400">Learn More.</span>
              <br />
              Grow More.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Welcome to the Puspalal Newar blog. Discover useful study
              materials, programming knowledge, technology, and ideas that help
              you learn something new every day.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/signup")}
                className="flex items-center justify-center gap-2 rounded-xl bg-green-400 px-7 py-3.5 font-semibold text-black transition hover:bg-green-300"
              >
                Start Learning
                <FaArrowRight />
              </button>

              <button
                onClick={() => navigate("/login")}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-7 py-3.5 transition hover:border-green-400 hover:text-green-400"
              >
                <FiLogIn />
                Login
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-green-400/10 blur-2xl"></div>
              <div className="relative rounded-3xl border border-gray-800 bg-gray-950 p-7 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 text-lg font-bold text-black">
                      PN
                    </div>

                    <div>
                      <h3 className="font-semibold">Puspalal Newar</h3>

                      <p className="text-sm text-gray-500">
                        Study & Technology
                      </p>
                    </div>
                  </div>

                  <FaPenNib className="text-green-400" />
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <p className="text-sm uppercase tracking-widest text-green-400">
                    Featured
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Learn something new every day.
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Explore articles, programming tutorials, study notes,
                    technology and more.
                  </p>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-gray-900 p-3 text-center">
                    <p className="text-lg font-bold text-green-400">01</p>
                    <p className="text-xs text-gray-500">Read</p>
                  </div>

                  <div className="rounded-xl bg-gray-900 p-3 text-center">
                    <p className="text-lg font-bold text-green-400">∞</p>
                    <p className="text-xs text-gray-500">Learn</p>
                  </div>

                  <div className="rounded-xl bg-gray-900 p-3 text-center">
                    <p className="text-lg font-bold text-green-400">PN</p>
                    <p className="text-xs text-gray-500">Blog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Buttons */}
      <div className="flex gap-3 px-6 pb-8 sm:hidden">
        <button
          onClick={() => navigate("/login")}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-700 py-3"
        >
          <FiLogIn />
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-400 py-3 font-semibold text-black"
        >
          <FiUserPlus />
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Landing;
