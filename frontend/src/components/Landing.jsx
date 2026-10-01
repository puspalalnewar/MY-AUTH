import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center gap-2.5">
      <h1 className="text-center bg-red-500 px-5 py-5">I am Landding Page!!</h1>
      <button
        onClick={() => navigate("/signup")}
        className="bg-black px-8 py-4 text-white"
      >
        Sign Up
      </button>
      <button onClick={() => navigate("/login")} 
      className="bg-black px-8 py-4 text-white">
        Login
      </button>
    </div>
  );
};

export default Landing;
