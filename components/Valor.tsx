import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

export default function Valor() {
  return (
    <section className="text-center py-16 mx-auto lg:px-8 w-full ">
      <h2 className="text-3xl font-bold text-[#333] mb-4">
        Ce que je vous propose
      </h2>
      <p className="text-lg text-gray-700 mb-10">
        Les valeurs qui définissent mon approche du développement web.
      </p>

      {/* Grid contenant les cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-8 mx-auto">
        {/* Partage & Communication */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-[350px] h-[250px] mx-auto md:w-[300px] lg:w-[350px]">
          <div className="flex items-center mb-4">
            <FaUsers className="text-[#ff7a29] text-3xl mr-4 md:w-[25px]" />
            <h3 className="text-xl font-semibold text-[#ff7a29] text-[15px]">
              Partage & Communication
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-center text-[15px]">
            Une collaboration efficace repose sur l’échange et l’écoute. J’aime
            partager mes idées et apprendre des autres pour faire évoluer chaque
            projet.
          </p>
        </div>

        {/* Apprentissage & Adaptabilité */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-[350px] h-[250px] mx-auto md:w-[300px] lg:w-[350px]">
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-[#ff7a29] text-3xl mr-4 md:w-[25px]" />
            <h3 className="text-xl font-semibold text-[#ff7a29] text-[15px]">
              Apprentissage & Adaptabilité
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-center text-[15px]">
            Le monde du web évolue sans cesse. Je m’adapte aux nouvelles
            technologies et développe constamment mes compétences pour proposer
            les meilleures solutions.
          </p>
        </div>

        {/* Innovation & Créativité */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-[350px] h-[250px] mx-auto md:w-[620px] md:h-[200px] lg:w-[750px] xl:w-[350px] xl:h-[250px]">
          <div className="flex items-center mb-4">
            <FaRocket className="text-[#ff7a29] text-3xl mr-4 md:w-[25px]" />
            <h3 className="text-xl font-semibold text-[#ff7a29] text-[15px]">
              Innovation & Créativité
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-center text-[15px]">
            Mon but est de créer des expériences uniques en utilisant les
            dernières tendances du design et du développement, pour des projets
            modernes et performants.
          </p>
        </div>
      </div>
    </section>
  );
}
