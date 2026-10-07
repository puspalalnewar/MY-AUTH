import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;

const EnterOtp = () => {
  const navigate = useNavigate();

  const url = `${API_URL}/auth/verifyotp`;

  const verifyOtp = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(otp),
    });
    const result = await response.json();
    if (result.success == true) {
      navigate("/home");
      return toast.success(result.msg);
    } else {
      return toast.error(result.msg);
    }
  };

  const [otp, setOtp] = useState({
    userOtp: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    const copyOtp = { ...otp };
    copyOtp[name] = value;
    setOtp(copyOtp);
  };

  const handleSubmitOtp = async () => {
    await verifyOtp();
    return;
  };
  return (
    <div className="p-4">
      <div className="border-2 border-green-500 p-4 flex flex-col justify-center gap-4">
        <label htmlFor="">Enter OTP Here</label>
        <input
          type="text"
          name="otp"
          className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
          onChange={(e) => handleOnChange(e)}
        />
        <button
          className="bg-black text-white py-3.5 cursor-pointer"
          onClick={() => {
            handleSubmitOtp();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EnterOtp;
