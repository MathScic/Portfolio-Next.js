"use client";

import { motion } from "framer-motion";
import CompetenceCard from "@/components/CompetenceCard";
import Valor from "@/components/Valor";
import Link from "next/link";
import {
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaPaintBrush,
  FaRegFileCode,
  FaTools,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { MdEmail } from "react-icons/md";

export default function AboutPage() {
  // Animation de la section principale
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation pour les sections de compétences
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#ff9a3d] to-[#f5f5f5]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
      transition={{ duration: 2 }}
    >
      {/* Section A propos */}
      <motion.section
        ref={sectionRef}
        className="w-full text-center pt-40  pb-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#333]">A propos de moi</h1>
        <p className="mt-4 text-2xl text-[#333] xl:w-[50%] xl:mx-auto md:w-[80%] md:mx-auto">
          Passionné par le développement web, j'aime concevoir des interfaces
          modernes et intuitives. Mon objectif est de transformer des idées en
          expériences interactives engageantes. Actuellement, je suis à la
          recherche d'opportunités pour contribuer à des projets innovants.
        </p>
        <button className="text-1xl rounded-full bg-[#FF4500] text-white px-6 py-3 transition duration-300 hover:bg-[#ff7a29] cursor-pointer mt-4">
          <Link href="images/CV Intégrateur Web.pdf" download="Mon_CV">
            Télécharger mon CV
          </Link>
        </button>
      </motion.section>

      {/* Section Valor */}
      <motion.section
        className="text-center gap-8 sm:w-[80%] sm:mx-auto xl:w-[70%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Valor />
      </motion.section>

      {/* Section Compétences */}
      <motion.section
        ref={skillsRef}
        className="w-full text-center pt-20 pb-30 "
        initial={{ opacity: 0 }}
        animate={{ opacity: skillsInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#333] text-center mb-6">
          Mes Compétences
        </h2>

        <div className="sm:w-[80%] grid grid-cols-1 md:grid-cols-1 gap-6 mx-auto">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-6 mx-auto">
            <CompetenceCard
              title="Frontend"
              skills={["React", "NextJs", "Scss", "Wordpress"]}
              icon={<FaRegFileCode className="text-[#ff7a29] text-3xl" />}
            />

            <CompetenceCard
              title="Backend"
              skills={["Node", "MySqk", "Express"]}
              icon={<FaDatabase className="text-[#ff7a29] text-3xl" />}
            />

            <CompetenceCard
              title="Design"
              skills={["Figma", "Responsiv Design"]}
              icon={<FaPaintBrush className="text-[#ff7a29] text-3xl" />}
            />

            <CompetenceCard
              title="Outils/Méthode"
              skills={["Github", "SEO", "Accessibilité"]}
              icon={<FaTools className="text-[#ff7a29] text-3xl" />}
            />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
