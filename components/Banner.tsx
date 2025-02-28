"use client";

import Typewriter from "typewriter-effect";
import About from "./About";

const Banner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-center space-y-4 pt-12 pb-88">
      <img
        src="/images/Portrait.png"
        alt="Photo de profil"
        className="w-48 h-48 rounded-full "
      />

      <h1 className="text-5xl font-bold text-[#ff7a29] banner">
        <span className="text-[#333]">
          Bienvenue sur mon Portfolio,
          <br />
        </span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Scicluna Mathieu")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Développeur Frontend")
              .start();
          }}
          options={{
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <About />
    </div>
  );
};

export default Banner;
