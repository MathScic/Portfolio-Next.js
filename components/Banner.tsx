"use client";

import Typewriter from "typewriter-effect";
import About from "./About";

const Banner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-center space-y-4">
      <img
        src="/images/Portrait.png"
        alt="Photo de profil"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4500]">
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
