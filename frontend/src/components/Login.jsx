import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-2">Login - Puspalal</h1>
      <div className="border-2 border-green-500 p-2">
        <form className="flex flex-col">
          <label htmlFor="">Enter your email : </label>
          <input
            type="email"
            placeholder=""
            className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
          />
          <label htmlFor="">Password : </label>
          <input
            type="password"
            placeholder=""
            className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
          ></input>
          <button
            className="bg-black text-white m-2 rounded-2xl cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          Dont have account?
          <span
            onClick={() => {
              navigate("/signup");
            }}
            className="underline cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
