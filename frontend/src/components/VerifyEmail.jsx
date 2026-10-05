import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const sendOtp = async () => {
    try {
      const url = "http://localhost:8000/auth/sendotp";
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });

      const result = await response.json();

      if (result.success == true) {
        return toast.success(result.msg);
      } else {
        return toast.error(result.msg || "Something went wrong");
      }
    } catch (error) {
      return toast.error(error);
    }
  };

  const handleVerifyEmail = async () => {
    await sendOtp();
    navigate("/enterotp");
    return;
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center gap-5 p-5">
      <h1 className="text-3xl text-center">Verify Your Email First</h1>
      <button
        onClick={() => handleVerifyEmail()}
        className="bg-black text-white py-3.5 cursor-pointer"
      >
        Verify Email
      </button>
      <button className="bg-black text-white py-3.5 cursor-pointer">
        Udate Email
      </button>
    </div>
  );
};

export default VerifyEmail;
