"use client";
import userAvatar from "@/assets/user.webp";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { FcGraduationCap } from "react-icons/fc";
import Image from "next/image";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl flex gap-1 items-center font-bold text-indigo-600 hover:scale-105 duration-75 transition-transform "
          >
            <FcGraduationCap className="-rotate-20" size={25} /> SkillSphere
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks href={"/"} className="hover:text-indigo-600">
              Home
            </NavLinks>

            <NavLinks href={"/courses"} className="hover:text-indigo-600">
              Courses
            </NavLinks>

            <NavLinks href={"/profile"} className="hover:text-indigo-600">
              My Profile
            </NavLinks>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Auth UI */}
            {/* {!isLoggedIn ? ( */}
            <>
              {/* <Link
                  href="/signin"
                  className="px-3 py-1 border rounded-md hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Signup
                </Link> */}
            </>
            {/* ) : ( */}
            <div className="flex items-center gap-1">
              {/* Avatar */}
              <Image
                src={userAvatar}
                // { user?.image || userAvatar}
                width={40}
                height={40}
                alt="User Image"
                className="rounded-full"
              />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 rounded-md border border-red-500 cursor-pointer"
              >
                Logout
              </button>
              {/* Dropdown */}
              {/* <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div> */}
            </div>
            {/* )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-3 pb-4">
            <NavLinks href="/" className="hover:text-indigo-600">
              Home
            </NavLinks>

            <NavLinks href="/courses" className="hover:text-indigo-600">
              Courses
            </NavLinks>

            <NavLinks href="/profile" className="hover:text-indigo-600">
              My Profile
            </NavLinks>

            {/* {!isLoggedIn ? ( */}
            {/* <>
                <Link href="/signin" className="hover:text-indigo-600">
                  Login
                </Link>
                <Link href="/signup" className="hover:text-indigo-600">
                  Signup
                </Link>
              </> */}
            {/* ) : ( */}
            <Image
              src={userAvatar}
              // { user?.image || userAvatar}
              width={40}
              height={40}
              alt="User Image"
              className="rounded-full"
            />
            <button onClick={handleLogout} className="text-red-500 text-left cursor-pointer">
              Logout
            </button>
            {/* )} */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
