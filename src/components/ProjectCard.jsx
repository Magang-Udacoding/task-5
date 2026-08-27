function ProjectCard({ title, desc, tech, image, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-500/30">

      {/* image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {desc}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
        >
          View on GitHub →
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;