import React from "react";

const EnterOtp = () => {
  return (
    <div className="border-2 border-green-500 p-4 flex flex-col justify-center gap-4">
      <label htmlFor="">Enter OTP Here</label>
      <input
        type="text"
        className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
      />
      <button className="bg-black text-white py-3.5 cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default EnterOtp;
