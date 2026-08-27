import { useEffect } from "react";

function Home() {
  // useEffect
  useEffect(()=> {
    document.title = 'Portfolio | Home'
  }, [])

  const skills = [
    {
      name: "React",
      badge: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="React icon"
        />
      ),
      level: "Intermediate",
    },
    {
      name: "Laravel",
      badge: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1280px-Laravel.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="Laravel icon"
        />
      ),
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      badge: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJiZlFwHkmOtwLwFSBvpMTZKDUGyVDzidEF9GkcrHhw&s=10"
          alt="JS icon"
        />
      ),
      level: "Intermediate",
    },
    {
      name: "CSS",
      badge: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GDdRNRJ3j1939go57mmLRCNLGBVTkCOI6mwya-s55Q&s"
          alt="CSS icon"
        />
      ),
      level: "Advanced",
    },
    {
      name: "Git",
      badge: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/3840px-Git_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="Git icon"
        />
      ),
      level: "Intermediate",
    },
    {
      name: "VSCode",
      badge: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1280px-Visual_Studio_Code_1.35_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210804221519"
          alt="VSCode icon"
        />
      ),
      level: "Advanced",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Todo Weather App",
      desc: "Aplikasi todo list terintegrasi dengan Weather API real-time",
      tech: ["JavaScript", "CSS", "Weather API"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Todo+Weather",
      link: "https://github.com/Magang-Udacoding/task-3n4",
    },
    {
      id: 2,
      title: "Toko UKM Jekartah",
      desc: "Landing Page untuk UKM Toko Jekartah sebagai sistem informasi untuk calon pembeli",
      tech: ["JavaScript", "CSS", "HTML"],
      image:
        "https://placehold.co/600x400/1e293b/60a5fa?text=Toko+UKM+Jekartah",
      link: "https://github.com/Magang-Udacoding/task-2",
    },
    {
      id: 3,
      title: "Renovi",
      desc: "Website pelacakan kinerja proyek dan landing page bagi usaha PT. Renovi, Batam",
      tech: ["NextJS", "Tailwind", "PostgreSQL"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Renovi",
      link: "https://github.com/FailHy/renovi",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* hero section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* profile photo */}
        <div 
        className=" w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 mb-6">
          <img
            src="/img/myphotogw.jpeg"
            alt="profile photo"
            className=" w-full h-full object-cover"
          />
        </div>

        {/* stats badge */}
        <div className="flex items-center gap-2 bg-green-900/40 text-green-400 text-sm px-4 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for Work
        </div>

        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          HI, I'm <span className="text-blue-400">Peter Parker</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
          Fullstack Developer - Jakarta
        </h2>

        {/* desc */}
        <p className="max-w-xl text-gray-400 leading-relaxed mb-10">
          I'm a developer with passionate in developing modern web application
          using React, Laravel, and latest Technology.
        </p>

        {/* cta  */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            View Project
          </a>
          <a
            href="https:/wa.me/082383918084"
            className="border-4 border-blue-600 text-white 
          hover:bg-blue-500 hover:border-blue-500 px-8 py-3 
          rounded-lg font-semibold transition-all 
          duration-200 hover:scale-105"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* skills section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* section title */}
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Tech Stack
          </h2>

          <p className="text-center text-gray-300 mb-16">
            The Technology I use on a daily
          </p>

          {/* skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-gray-500 hover:scale-105 transition-all duration-200"
              >
                <span className="text-4xl">{skill.badge}</span>

                <span className="text-white font-semibold">{skill.name}</span>

                <span className="text-gray-400 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* projects preview section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* section title */}
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12">My Latest Projects</p>

          {/* projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col"
              >
                {/* project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* project info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>

                  {/* tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-800/50 text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* link btn */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-center px-8 py-2 rounded-lg font-semibold transition-all duration-300 inline-block"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* see all projects */}
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              See All Projects Here!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
