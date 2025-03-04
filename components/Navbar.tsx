"use client";

import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-[#f5f5f5] flex items-center px-0">
      <div className="w-[100%] sm:w-[70%] pl-2 pr-2 mx-auto flex justify-between items-center text-[#333]">
        {/* Logo et H1 alignés à gauche */}
        <Link href="/">
          <h1 className="flex items-center gap-4 text-xl text-[#ff7a29] font-bold hover:scale-110 transition duration-300 cursor-pointer whitespace-nowrap">
            <img
              src="images/logo.png"
              alt="Logo MS Digital"
              className="w-[80px] h-[50px]"
            />
            Mathieu Scicluna
          </h1>
        </Link>

        {/* Navigation Menu (affichage mobile) */}
        <div className="sm:hidden flex items-center w-full justify-between pl-4 pr-4">
          {/* Le burger icon se transforme en croix lorsque le menu est ouvert */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto relative z-50"
          >
            {menuOpen ? (
              <RxCross1 className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden absolute top-16 right-0 w-full bg-[#333] p-6 transition-all duration-500 ease-in-out transform`}
        >
          <ul className="space-y-6 text-white">
            <li>
              <Link
                href="/about"
                className="flex items-center text-[#ff7a29] hover:text-[#ff7a29] transition duration-300"
              >
                <IoPersonSharp className="mr-2" />
                <span>A propos</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex items-center text-[#ff7a29] hover:text-[#ff7a29] transition duration-300"
              >
                <FaLaptopCode className="mr-2" />
                <span>Projets</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center text-[#ff7a29] hover:text-[#ff7a29] transition duration-300"
              >
                <IoIosMail className="mr-2" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu Desktop */}
        <ul className="sm:flex sm:space-x-8 sm:flex-row sm:static sm:bg-transparent hidden">
          <li>
            <Link
              href="/about"
              className="flex items-center px-6 py-3 rounded-full text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] transition duration-300"
            >
              <IoPersonSharp className="mr-2" />
              <span>A propos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="flex items-center px-6 py-3 rounded-full text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] transition duration-300"
            >
              <FaLaptopCode className="mr-2" />
              <span>Projets</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center px-6 py-3 rounded-full text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] transition duration-300"
            >
              <IoIosMail className="mr-2" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
