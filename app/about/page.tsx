"use client";

import { motion } from "framer-motion";
import CompetenceCard from "@/components/CompetenceCard";
import Valor from "@/components/Valor";
import Link from "next/link";
import {
  FaDatabase,
  FaPaintBrush,
  FaRegFileCode,
  FaTools,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  // Animation de la section principale
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Déclenche une seule fois
    threshold: 0.2, // Quand 20% de l'élément est visible
  });

  // Animation pour les sections de compétences
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
      transition={{ duration: 2 }}
    >
      {/* Section A propos */}
      <motion.section
        ref={sectionRef}
        className="w-full text-center pt-40 bg-[#ffd1b3] pb-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#333]">A propos de moi</h1>
        <p className="mt-4 text-2xl text-[#333] lg:pl-140 lg:pr-140 ">
          Passionné par le développement web, j'aime concevoir des interfaces
          modernes et intuitives. Mon objectif est de transformer des idées en
          expériences interactives engageantes. Actuellement, je suis à la
          recherche d'opportunités pour contribuer à des projets innovants.
        </p>
        <button className="text-1xl rounded-full bg-[#ff7a29] text-white px-6 py-3 transition duration-300 hover:bg-[#ff944d] cursor-pointer mt-4">
          <Link href="/about">Télécharger mon CV</Link>
        </button>
      </motion.section>

      {/* Section Valor */}
      <motion.section
        className="w-full text-center bg-[#fff4e6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Valor />
      </motion.section>

      {/* Section Compétences */}
      <motion.section
        ref={skillsRef}
        className="w-full text-center pt-20 pb-30 bg-[#ffd1b3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: skillsInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#333] text-center mb-6">
          Compétences
        </h2>

        <div className="w-[80%] grid grid-cols-1 md:grid-cols-1 gap-6 mx-auto">
          <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-6 mx-auto">
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
