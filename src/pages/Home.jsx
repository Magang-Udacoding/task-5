import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* hero section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* profile photo */}
        <div 
        className="
        w-36 h-36 rounded-full overflow-hidden 
        border-4 border-blue-400 mb-6
        shadow-lg shadow-blue-500/30
        ">
          <img
            src="/img/myphotogw.jpeg"
            alt="profile photo"
            className=" w-full h-full object-cover"
          />
        </div>

        {/* stats badge */}
        <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-sm px-4 py-1 rounded-full mb-6 border border-green-300 dark:border-transparent">
          <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
          Available for Work
        </div>

        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          HI, I'm <span className="text-blue-500 dark:text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">Fail Hylmi Khalil</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6">
          Fullstack Developer - Jakarta
        </h2>

        {/* desc */}
        <p className="max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          I'm a developer with passionate in developing modern web application
          using React, Laravel, and latest Technology.
        </p>

        {/* cta  */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 "
          >
            View Project
          </a>
          <a
            href="https://wa.me/6282383918084"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* skills section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* section title */}
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
            The Technology I use on a daily
          </p>

          {/* skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 hover:border hover:border-blue-500/50 transition-all duration-300 border border-transparent"
              >
                <span className="text-4xl">{skill.badge}</span>

                <span className="text-gray-900 dark:text-white font-semibold">{skill.name}</span>

                <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* projects preview section */}
      <section className="py-20 px-6 bg-blue-50/20 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* section title */}
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">My Latest Projects</p>

          {/* projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                image={project.image}
                link={project.link}
              />
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
