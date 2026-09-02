import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  // useEffect
  useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Todo Weather App",
      desc: "Aplikasi todo list terintegrasi dengan Weather API real-time",
      tech: ["JavaScript", "CSS", "Weather API"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Todo+Weather",
      link: "https://todoweather.vercel.app/",
    },
    {
      id: 2,
      title: "Toko UKM Jekartah",
      desc: "Landing Page untuk UKM Toko Jekartah sebagai sistem informasi untuk calon pembeli",
      tech: ["JavaScript", "CSS", "HTML"],
      image:
        "https://placehold.co/600x400/1e293b/60a5fa?text=Toko+UKM+Jekartah",
      link: "https://toko-ukm-jekartah.vercel.app/",
    },
    {
      id: 3,
      title: "Renovi",
      desc: "Website pelacakan kinerja proyek dan landing page bagi usaha PT. Renovi, Batam",
      tech: ["NextJS", "Tailwind", "PostgreSQL"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Renovi",
      link: "https://github.com/FailHy/renovi",
    },
    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio multi-page dibangun dengan React 18, React Router v6, dan Tailwind CSS v4.",
      tech: ["React", "Tailwind CSS", "Vite", "React Router"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Portfolio",
      link: "https://aboutpail.vercel.app",
    },
    {
      id: 5,
      title: "Money Tracker Website",
      desc: "Aplikasi pelacakan pengeluaran dan pemasukan keuangan secara native.",
      tech: ["React", "Tailwind CSS", "Vite", "React Router"],
      image: "https://placehold.co/600x400/1e293b/60a5fa?text=Money+Tracker",
      link: "https://mymoneytracxed.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-400"> Projects</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          My Projects I've Done Before
        </p>
      </section>

      {/* grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>
    </main>
  );
}

export default Projects;
