import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Home from "./components/Home";
import VerifyEmail from "./components/VerifyEmail";
import EnterOtp from "./components/EnterOtp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/enterotp" element={<EnterOtp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
