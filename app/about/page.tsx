import CompetenceCard from "@/components/CompetenceCard";
import Link from "next/link";
import { FaRegFileCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center ">
      <section className="w-full text-center  pt-40 bg-[#fff4e6] pb-40">
        <h1 className="text-4xl font-bold text-[#333]">A propos de moi</h1>
        <p className="mt-4 text-2xl text-[#333] pl-140 pr-140">
          Passionné par le développement web, j'aime concevoir des interfaces
          modernes et intuitives. Mon objectif est de transformer des idées en
          expériences interactives engageantes. Actuellement, je suis à la
          recherche d'opportunités pour contribuer à des projets innovants.
        </p>
        <button className="text-1xl rounded-full bg-[#ff7a29] text-white px-6 py-3 transition duration-300 hover:bg-[#ff944d] cursor-pointer mt-4">
          <Link href="/about">Télécharger mon CV</Link>
        </button>
      </section>

      <section className="w-full text-center  pt-40 pb-40 bg-[#ffd1b3]">
        <h2 className="text-3xl font-semibold text-[#333] text-center mb-6 ">
          Compétences
        </h2>

        <div className="w-[40%] grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-6 mx-auto">
          <CompetenceCard
            title="Technologies Frontend"
            skills={["React", "NextJs", "Scss", "Wordpress"]}
            icons={[<FaRegFileCode />]}
          />
        </div>
      </section>
    </div>
  );
}
