import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ searchTerm defined
  const [success, setSuccess] = useState(false);

  const handleDummyLogin = () => {
    const email = prompt("Enter your email (e.g. test@example.com):");
    if (!email) return alert("Login cancelled!");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Please enter a valid email!");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 h-32 backdrop-blur shadow-md">
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Logo" className="w-36 h-34" />
      </Link>

      {/* Navbar Links */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 z-50 flex flex-col md:flex-row items-center gap-6 md:gap-8 min-md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur md:bg-white/20 max-md:bg-black/70 border border-gray-300/20 overflow-hidden transition-all duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
        <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false); }} to="/">Home</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false); }} to="/movies">Movies</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false); }} to="/favorite">Favorites</Link>

        {/* Mobile Search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1 border rounded-md w-full md:w-48 mt-2 md:mt-0 outline-none max-md:flex"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Desktop search icon */}
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        {/* Desktop search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="hidden max-md:flex px-3 py-1 border rounded-md outline-none"
        />

        {/* Login button */}
        <button
          className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          onClick={handleDummyLogin}
        >
          Login
        </button>
        {success && (
          <div className="absolute top-5 right-0 px-4 py-2 bg-green-500 text-white rounded shadow-md">
            Login Successful!
          </div>
        )}

        {/* Mobile menu toggle */}
        <MenuIcon className="md:hidden w-8 h-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Navbar;
