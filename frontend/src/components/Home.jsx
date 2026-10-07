import React from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const isUserVerified = async () => {
    const url = `${API_URL}/auth/isuserverified`;
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
    });
    const result = await response.json();
    if (result.success) {
      setUserName(result.userName);
      return;
    } else {
      navigate("/login");
      return toast.error("user is not verified.");
    }
  };
  isUserVerified();
  return (
    <div>
      <Navbar />
      <p className="text-2xl pt-10 mt-5 text-center">
        Namaste🙏,{" "}
        <span className="font-bold"> {userName.toUpperCase()} ✋</span>
      </p>
    </div>
  );
};

export default Home;
