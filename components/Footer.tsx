"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" h-full p-8 bg-[#ffc299] text-[#333] text-center">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center text-center">
        <div className="space-y-4">
          <h2 className="text-lg font-semi-bold">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-[#ff7a29]">
                A propos
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#ff7a29]">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff7a29]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold">Légal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-[#ff7a29]">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold">Me suivre</h2>
          <ul className="space-y-2 flex ">
            <li>
              <Link
                href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/"
                target="_blank"
                className="hover:text-[#ff7a29]"
              >
                <FaLinkedin className="inline mr-2 text-2xl" />
              </Link>
            </li>

            <li>
              <Link
                href="https://github.com/MathScic"
                target="_blank"
                className="hover:text-[#ff7a29]"
              >
                <FaGithub className="inline mr-2 text-2xl" />
              </Link>
            </li>

            <li>
              <Link
                href="scicluna.mathieu@hotmail.fr"
                target="_blank"
                className="hover:text-[#ff7a29]"
              >
                <MdEmail className="inline mr-2 text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>Créer par Mathieu Scicluna © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
