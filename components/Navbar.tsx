"use client";

import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="w-full p-4 bg-[#f5f5f5] flex items-center px-0">
      <div className="w-full lg:w-[80%] xl:w-[70%] pl-2 pr-2 mx-auto flex justify-between items-center text-[#333]">
        {/* Logo aligné à gauche */}
        <Link href="/">
          <h1 className="flex items-center gap-4 text-xl text-[#ff7a29] font-bold hover:scale-110 transition duration-300 cursor-pointer whitespace-nowrap">
            <img
              src="/images/logo.png"
              alt="Logo MS Digital"
              className="w-[80px] h-[50px]"
            />
            Mathieu Scicluna
          </h1>
        </Link>

        {/* Icône Burger (Mobile) */}
        <div className="sm:hidden flex items-center w-full justify-between pl-4 pr-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto relative z-50 text-[#333]"
          >
            {menuOpen ? (
              <RxCross1 className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Menu Mobile avec animation fluide */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`fixed top-0 right-0 w-full h-[35vh] bg-[#333] text-white flex flex-col items-center justify-center transition-transform`}
        >
          {/* Bouton de fermeture */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            <RxCross1 />
          </button>

          {/* Logo en haut du menu */}
          <div className="mb-4">
            <img
              src="/images/logo.png"
              alt="Logo MS Digital"
              className="w-[100px] h-auto"
            />
          </div>

          {/* Liens du menu */}
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href="/"
                className="text-[#ff7a29] hover:text-white transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#ff7a29] hover:text-white transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-[#ff7a29] hover:text-white transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#ff7a29] hover:text-white transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Menu Desktop (tablette et plus large) */}
        <ul className="sm:flex sm:space-x-8 sm:flex-row sm:static sm:bg-transparent hidden">
          <li className="flex items-center">
            <Link
              href="/about"
              className="flex items-center px-6 py-3 text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] hover:rounded-[30px]"
            >
              <IoPersonSharp className="mr-2" />
              <span>A propos</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/projects"
              className="flex items-center px-6 py-3 text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] hover:rounded-[30px]"
            >
              <FaLaptopCode className="mr-2" />
              <span>Projets</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/contact"
              className="flex items-center px-6 py-3 text-[#ff7a29] hover:text-[#ff7a29] border-2 border-transparent hover:bg-[#ffd1b3] hover:rounded-[30px]"
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
