import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = 'Portfolio | About'
  }, [])

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "Tailwind", "HTML/CSS", "Vue"],
    },
    {
      category: "Backend",
      items: ["Laravel", "PHP", "MySQL", "REST API", "Java"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VSCode", "Figma", "ChatGPT"],
    },
  ];

  const education = [
    {
      id: 1,
      year: "2027 - Now",
      title: "Magister of Computer Science",
      place: "Chaoyang University of Technology",
      desc: "Focusing on implementation system and algorithm",
    },
    {
      id: 2,
      year: "2023 - 2027",
      title: "Bachelor of Software Engineer",
      place: "Politeknik Negeri Padang",
      desc: "Focusing on developing system and algorithm",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* Hero About */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Photo */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shrink-0 shadow-lg shadow-blue-500/30">
            <img
              src="/img/myphotogw.jpeg"
              alt="profile photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Fullstack Developer — Jakarta
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hi! I'm{" "}
              <strong className="text-blue-500 dark:text-blue-400">Fail Hylmi Khalil</strong>,
              a Fullstack Developer passionate in developing modern
              web applications and system analysis.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing a Master's Degree in Computer Science,
              actively accomplishing freelance and academic projects.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Skills & Technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-blue-500 dark:text-blue-400 font-bold text-lg mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 dark:text-blue-400">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            My Education
          </h2>

          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-400 shadow-sm dark:shadow-none"
              >
                <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mt-1">
                  {edu.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{edu.place}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Interest */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Career <span className="text-blue-500 dark:text-blue-400">Interest</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            I am interested in a career as{" "}
            <strong className="text-blue-500 dark:text-blue-400">System Analyst</strong> &{" "}
            <strong className="text-orange-500 dark:text-orange-400">Researcher</strong>{" "}
            in academic and corporate environments. Open to freelance
            opportunities as well as full-time positions.
          </p>
          <a
            href="https://wa.me/6282383918084"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-block"
          >
            Let's Talk!
          </a>
        </div>
      </section>

    </main>
  );
}

export default About;
