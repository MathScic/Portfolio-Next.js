type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  siteLink: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  siteLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:h-auto w-[400px] h-[450px] mb-4 mx-auto md:w-[300px]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[200px] object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl  pl-5 font-semibold text-[#333]">{title}</h3>
      <p className="text-md p-2 pl-5  text-[#555] ">{description}</p>
      <div className=" p-2 flex pl-5 flex-wrap gap-3">
        {technologies.map((techString, index) => {
          const techs = techString.split(",").map((tech) => tech.trim());

          return techs.map((tech, techIndex) => (
            <span
              key={`${index}-${techIndex}`}
              className="text-xs bg-[#ff7a29] text-white px-4 py-1 rounded-full"
            >
              {tech}
            </span>
          ));
        })}
      </div>
      <div className="p-2 pl-5 flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-[#ff944d]"
          >
            GitHub
          </a>
        )}
        {siteLink && (
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-[#ff944d]"
          >
            Site
          </a>
        )}
      </div>
    </div>
  );
}
