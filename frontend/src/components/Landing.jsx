
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between p-6">

        <h1 className="text-2xl font-bold">
          Geo<span className="text-blue-400">Pulse</span>
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 hover:border-blue-400"
          >
            <FiLogIn />
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
          >
            <FiUserPlus />
            Sign Up
          </button>
        </div>

      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center gap-10 px-6 py-16 md:flex-row md:px-12">

        {/* Left Content */}
        <div className="flex-1">

          <p className="mb-4 flex items-center gap-2 text-blue-400">
            <FaGlobe />
            WORLD POLITICS • GLOBAL AFFAIRS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Understand the World.
            <span className="mt-2 block text-blue-400">
              Beyond the Headlines.
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            Explore geopolitics, international relations, global conflicts,
            diplomacy, and the events shaping our world.
          </p>

          <button
            onClick={() => navigate("/blogs")}
            className="mt-6 flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 hover:bg-blue-600"
          >
            Explore Articles
            <FaArrowRight />
          </button>

        </div>

        {/* Right Content */}
        <div className="flex-1 rounded-xl border border-gray-700 bg-gray-900 p-6">

          <FaGlobe className="mb-5 text-blue-400" size={40} />

          <p className="text-sm text-blue-400">
            FEATURED ARTICLE
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            The Changing Balance of Global Power
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Discover how countries, diplomacy, trade, and strategic
            alliances influence international relations.
          </p>

          <button
            onClick={() => navigate("/blogs")}
            className="mt-5 flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            Read More
            <FaArrowRight />
          </button>

        </div>

      </main>

      {/* Topics Section */}
      <section className="px-6 py-12 md:px-12">

        <h2 className="text-3xl font-bold">
          Explore Topics
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "World Politics",
            "International Relations",
            "Wars and Conflicts",
            "Global Economy",
          ].map((topic) => (
            <div
              key={topic}
              className="rounded-lg border border-gray-700 bg-gray-900 p-5"
            >
              <FaGlobe className="mb-4 text-blue-400" size={25} />

              <h3 className="text-lg font-semibold">
                {topic}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Read articles and understand global affairs.
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-gray-800 p-6 text-center text-gray-400">
        © {new Date().getFullYear()} GeoPulse | Geopolitics Blog | Puspalal Newar
      </footer>

    </div>
  );
};

export default Landing;
