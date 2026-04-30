"use client";
import userAvatar from "@/assets/user.webp";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { FcGraduationCap } from "react-icons/fc";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {data,isPending} = authClient.useSession();
  const user = data?.user;
  console.log({user,isPending});
  const handleLogout = async() => {
    await authClient.signOut();
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
            {isPending ? <p>Loading...</p> : !user ? (
            <>
              <Link
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
                </Link>
            </>
             ) : ( 
            <div className="flex items-center gap-3">
              {/* Avatar */}
              {/* <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  sizes="sm"
                  src={ user?.image || userAvatar}
                />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar> */}
              <Image
                src={ user?.image || userAvatar}
                width={40}
                height={40}
                alt="User Image"
                className="rounded-full"
              />
              <Button
                onClick={async()=> await authClient.signOut()}
                size="sm"
                variant="danger"
              >
                Logout
              </Button>
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={async()=> await authClient.signOut()}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div> 
            </div>
            )} 
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

            {!user ? (
             <>
                <Link href="/signin" className="hover:text-indigo-600">
                  Login
                </Link>
                <Link href="/signup" className="hover:text-indigo-600">
                  Signup
                </Link>
              </> 
             ) : ( 
              <>
              <Image
                src={ user?.image || userAvatar}
                width={40}
                height={40}
                alt="User Image"
                className="rounded-full"
              />
              <button onClick={handleLogout} className="text-red-500 text-left cursor-pointer">
                Logout
              </button>
              </>
            )} 
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
