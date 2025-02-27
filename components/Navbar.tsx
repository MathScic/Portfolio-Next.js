"use client";

import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-[#333] text-white flex justify-between items-center px-12 sm:px-24">
      <div className="w-[80%] mx-auto flex justify-between items-center px-12 sm:px-24 ">
        <Link href="/">
          <h1 className="text-xl font-bold hover:scale-110 transition duration-300 cursor-pointer">
            Mathieu Scicluna
          </h1>
        </Link>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:space-x-8 sm:block absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#333] sm:bg-transparent transition-all ease-in-out duration-300 p-6 sm:p-0`}
        >
          <li>
            <Link
              href="/about"
              className="flex items-center px-6 py-3 rounded-full hover:bg-[#ff3131] font-semi-bold"
            >
              <IoPersonSharp className="mr-2" />
              <span>A propos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="flex items-center px-6 py-3 rounded-full hover:bg-[#ff3131] font-semi-bold"
            >
              <FaLaptopCode className="mr-2" />
              <span>Projets</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center px-6 py-3 rounded-full hover:bg-[#ff3131] font-semi-bold"
            >
              <IoIosMail className="mr-2" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
