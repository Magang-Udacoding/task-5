function ProjectCard({ title, desc, tech, image, link }) {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col">
      {/* image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {desc}
        </p>

        {/* tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* btn */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white text-center px-8 py-2 rounded-lg font-semibold transition-all duration-300 inline-block"
        >
          View on Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard