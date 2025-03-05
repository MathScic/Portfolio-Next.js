"use client";

import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Valor from "@/components/Valor";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  // Observer pour la section Banner
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Observer pour la section Valor
  const { ref: valorRef, inView: valorInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Observer pour la section Valor
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <div className="min-h-screen  flex flex-col bg-gradient-to-b from-[#ff9a3d] to-[#f5f5f5]">
        {/* Section Banner avec animation au scroll */}
        <motion.div
          ref={bannerRef}
          className="flex flex-col items-center justify-center min-h-screen "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: bannerInView ? 1 : 0, y: bannerInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Banner />
        </motion.div>

        {/* Section Valor avec animation au scroll */}
        <motion.div
          ref={valorRef}
          className="w-full text-center gap-8 sm:w-[80%] sm:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: valorInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Valor />
        </motion.div>

        {/* Section Projet avec animation au scroll */}
        <motion.div
          ref={projectRef}
          className="w-full text-center  py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: projectInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/* Section avec titre et description */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold text-[#333] mb-4">
              Projets Récents
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Découvre certains des projets récents
            </p>

            {/* Cartes de projet */}
            <div className="flex flex-wrap text-start gap-8 mt-6">
              <ProjectCard
                title="Marvel List"
                description="Voici un projet perso servant a m'entrainer a utiliser React et API Rest ainsi que NodeJS"
                technologies={["React", "NodeJs"]}
                imageUrl="images/marvel-banner.png"
                githubLink="https://github.com/MathScic/Liste-Marvel"
                siteLink="https://my-marvel-list.netlify.app"
              />

              <ProjectCard
                title="Brasserie de la Mer"
                description="Voici le site (fictif) de la Brasserie de la mer, Brasserie traditionnel depuis plus de 27ans. Coder avec React et Node.js"
                technologies={["React", "NodeJs"]}
                imageUrl="images/Brasseriedelamer.png"
                githubLink=""
                siteLink="https://brasserie-de-la-mer.netlify.app/"
              />
            </div>
          </div>
        </motion.div>

        {/* Section Contact avec animation au scroll */}
        <motion.div
          ref={valorRef}
          className="w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: valorInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </>
  );
}
