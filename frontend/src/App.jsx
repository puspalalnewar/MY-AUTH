import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Home from "./components/Home";
import VerifyEmail from "./components/VerifyEmail";
import EnterOtp from "./components/EnterOtp";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/enterotp" element={<EnterOtp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
