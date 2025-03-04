"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Project() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredTech, setFilteredTech] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      const response = await fetch("/data/project.json");
      const data = await response.json();
      setProjects(data);
    };

    loadProject();
  }, []);

  const filteredProject = filteredTech
    ? projects.filter((project) =>
        project.technologies.some((tech: string) => tech.includes(filteredTech))
      )
    : projects;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#ff9a3d] to-[#ffffff] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Titre principal */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#333]">Mes réalisations</h1>
        <p className="mt-4 text-xl text-[#333]">
          Vous trouverez ici certaines de mes réalisations, pendant ma formation
          et certains projets pro.
        </p>
      </motion.div>

      {/* Filtre des technologies */}
      <motion.div
        className="flex justify-center items-center gap-4 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="font-bold text-2xl text-[#333]">Stack</p>:
        <button
          onClick={() => setFilteredTech("React")}
          className="py-2 px-4 bg-[#ff7a29] text-white rounded-full hover:bg-[#ff944d] cursor-pointer"
        >
          React
        </button>
        <button
          onClick={() => setFilteredTech("NodeJS")}
          className="py-2 px-4 bg-[#ff7a29] text-white rounded-full hover:bg-[#ff944d] cursor-pointer"
        >
          NodeJS
        </button>
        <button
          onClick={() => setFilteredTech(null)}
          className="py-2 px-4 bg-[#ff7a29] text-white rounded-full hover:bg-[#ff944d] cursor-pointer"
        >
          Tous
        </button>
      </motion.div>

      {/* Cartes de projets */}
      <motion.div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {filteredProject.length > 0 ? (
          filteredProject.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.image}
                githubLink={project.github}
                siteLink={project.url}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-xl text-[#555]">
            Aucun projet à afficher
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
