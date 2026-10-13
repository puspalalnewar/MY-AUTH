import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import articles from "./articles";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const isUserVerified = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/isuserverified`, {
        method: "POST",
        credentials: "include",
      });

      const result = await response.json();

      if (result.success) {
        setUserName(result.userName);
      } else {
        toast.error("User is not verified.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to verify user.");
      navigate("/login");
    }
  };

  isUserVerified();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Welcome */}
      <div className="px-6 py-10 md:px-12">
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">
          Geopolitics & <span className="text-blue-400">World Affairs</span>
        </h1>

        <p className="mt-3 text-gray-400">
          Explore global politics, international relations, and world events.
        </p>
      </div>

      {/* Article List */}
      <section className="px-6 pb-12 md:px-12">
        <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>

        <div className="flex flex-col gap-5">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6"
            >
              <p className="text-sm text-blue-400">{article.category}</p>

              <h3 className="mt-3 text-xl font-bold md:text-2xl">
                <button
                  onClick={() => navigate(`/blogs/${article.id}`)}
                  className="text-left hover:text-blue-400"
                >
                  {index + 1}. {article.title}
                </button>
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {article.description}
              </p>

              <button
                onClick={() => navigate(`/blogs/${article.id}`)}
                className="mt-4 font-semibold text-blue-400 hover:text-blue-300"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
