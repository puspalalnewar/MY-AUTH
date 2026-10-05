import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleData = (val, name) => {
    const copyDetails = { ...details };
    copyDetails[name] = val;
    setDetails(copyDetails);
    return;
  };

  const url = "http://localhost:8000/auth/login";

  const fetchAPI = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success == true) {
        if (result.isAccountVerified == true) {
          navigate("/home");
        } else {
          navigate("/verifyemail");
        }
        return toast.success(result.msg);
      } else {
        return toast.error(result.msg.message || result.msg);
      }
    } catch (error) {
      return toast.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchAPI(url, details);
    setDetails({
      email: "",
      password: "",
    });
    return;
  };

  useEffect(() => {}, [details]);
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-2">Login - Puspalal</h1>
      <div className="border-2 border-green-500 p-2">
        <form className="flex flex-col">
          <label htmlFor="">Enter your email : </label>
          <input
            name="email"
            type="email"
            placeholder=""
            className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
            onChange={(e) => handleData(e.target.value, e.target.name)}
            value={details.email}
          />
          <label htmlFor="">Password : </label>
          <input
            name="password"
            type="password"
            placeholder=""
            className="border-2 border-blue-500 outline-0 rounded-xl px-4 py-2"
            value={details.password}
            onChange={(e) => handleData(e.target.value, e.target.name)}
          ></input>
          <button
            className="bg-black text-white m-2 rounded-2xl cursor-pointer"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
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
