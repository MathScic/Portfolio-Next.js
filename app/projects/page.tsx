"use client";

import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredTech, setFilteredTech] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      const response = await fetch("/data/project.json"); // Assurez-vous que le fichier s'appelle bien 'projects.json' et est dans 'public/'
      const data = await response.json();
      setProjects(data); // Correction : il faut utiliser 'setProjects' (pluriel)
    };

    loadProject();
  }, []);

  // Filtrage des projets par technologie
  const filteredProject = filteredTech
    ? projects.filter((project) =>
        project.technologies.some((tech) => tech.includes(filteredTech))
      )
    : projects;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffc299] to-[#ffffff] flex flex-col">
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-[#333]">Mes réalisations</h1>
        <p className="mt-4 text-xl text-[#333]">
          Vous trouverez ici certaines de mes réalisations, pendant ma formation
          et certains projets pro.
        </p>
      </div>

      {/* Filtre des technologies */}
      <div className="flex justify-center items-center gap-4 mb-12">
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
      </div>

      {/* Cartes de projets */}
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {filteredProject.length > 0 ? (
          filteredProject.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.image}
              githubLink={project.github}
              siteLink={project.url}
            />
          ))
        ) : (
          <p className="text-center text-xl text-[#555]">
            Aucun projet à afficher
          </p>
        )}
      </div>
    </div>
  );
}
