import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      const result = await response.json();

      if (result.success === true) {
        toast.success(result.msg || "Logged out successfully");
        navigate("/login");
      } else {
        toast.error(result.msg?.message || result.msg || "Logout failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to logout. Please try again.");
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 ${
      isActive
        ? "bg-blue-500/10 text-blue-400"
        : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Brand */}
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-xl">
            <FaGlobe />
          </div>

          <div className="text-left">
            <h1 className="text-lg font-bold sm:text-xl">
              Puspalal <span className="text-blue-400">Newar</span>
            </h1>

            <p className="hidden text-xs text-gray-400 sm:block">
              Geopolitics & World Affairs
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/home" className={linkClass}>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            <FaUser />
            Profile
          </NavLink>

          <button
            onClick={handleLogout}
            className="ml-3 flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 font-semibold hover:bg-blue-600"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-700 p-2 text-xl text-blue-400 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-800 bg-gray-900 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/home"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              <FaHome />
              Home
            </NavLink>

            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              <FaUser />
              Profile
            </NavLink>

            <button
              onClick={handleLogout}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 font-semibold hover:bg-blue-600"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
