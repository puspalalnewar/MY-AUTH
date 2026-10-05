import React from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const isUserVerified = async () => {
    const url = "http://localhost:8000/auth/isuserverified";
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
    });
    const result = await response.json();
    if (result.success) {
      return toast.success("You are verified!!");
    } else {
      navigate("/login");
      return toast.error("user is not verified.");
    }
  };
  isUserVerified();
  return (
    <div>
      <Navbar />
      <p className="text-2xl font-bold pt-10">Home</p>
    </div>
  );
};

export default Home;
