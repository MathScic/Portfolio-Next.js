type CompetenceCardProps = {
  title: string;
  skills: string[];
  icons: string;
};

export default function CompetenceCard({ title, skills }: CompetenceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-[250px] ">
      <h3 className="text-2xl font-semibold text-[#333] text-start ">
        {title}
      </h3>
      <ul className="mt-2 text-lg text-gray-700">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2.5 h-2.5 mr-2 rounded-full bg-[#ff7a29]"></span>{" "}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
