import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock, FaArrowRight, FaBookOpen } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const EnterOtp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    otp: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const verifyOtp = async () => {
    try {
      const url = `${API_URL}/auth/verifyotp`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success === true) {
        toast.success(result.msg);
        navigate("/login");
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    await verifyOtp();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 shadow-2xl md:grid-cols-2">
          <div className="hidden flex-col justify-between bg-linear-to-br from-green-400/20 via-black to-blue-500/10 p-10 md:flex">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 font-bold text-black">
                  PN
                </div>

                <div>
                  <h1 className="font-bold text-lg">Puspalal Newar</h1>

                  <p className="text-sm text-gray-500">
                    Study & Technology Blog
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <FaBookOpen className="mb-6 text-5xl text-green-400" />

                <h2 className="text-4xl font-bold leading-tight">
                  One step
                  <br />
                  <span className="text-green-400">away.</span>
                </h2>

                <p className="mt-5 max-w-md leading-7 text-gray-400">
                  Verify your email address to activate your PN Blog account and
                  start your learning journey.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              © 2026 PN Blog. Learn something new every day.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400 font-bold text-black">
                PN
              </div>

              <div>
                <h1 className="font-bold">Puspalal Newar</h1>

                <p className="text-xs text-gray-500">Study & Technology Blog</p>
              </div>
            </div>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10">
              <FaLock className="text-xl text-green-400" />
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-green-400">
                EMAIL VERIFICATION
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Verify your email
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Enter the email address you used during signup and the 6-digit
                OTP sent to your Gmail.
              </p>
            </div>

            <form onSubmit={handleSubmitOtp} className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={handleOnChange}
                    required
                    className="w-full rounded-xl border border-gray-800 bg-black py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  6-Digit OTP
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter 6-digit OTP"
                    value={data.otp}
                    onChange={handleOnChange}
                    maxLength="6"
                    inputMode="numeric"
                    required
                    className="w-full rounded-xl border border-gray-800 bg-black py-3.5 pl-11 pr-4 text-center text-xl tracking-[0.5em] text-white outline-none transition placeholder:text-sm placeholder:tracking-normal placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-green-400 py-3.5 font-semibold text-black transition hover:bg-green-300"
              >
                Verify Email
                <FaArrowRight />
              </button>
            </form>

            <div className="mt-7 text-center text-sm text-gray-500">
              Already verified?
              <button
                onClick={() => navigate("/login")}
                className="ml-2 font-semibold text-green-400 hover:text-green-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtp;
