function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "Tailwind", "HTMLCSS", "Vue"],
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
      year: "2027-Now",
      title: "Magister of Computer Science",
      place: "Chaoyang University of Technology",
      desc: "Focusing on implementation system and algorithm",
    },
    {
      id: 2,
      year: "2023-2027",
      title: "Bachelor of Software Engineer",
      place: "Politeknik Negeri Padang",
      desc: "Focusing on developing system and algorithm",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* hero about */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* photo */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shrink-0">
            <img
              src="/img/myphotogw.jpeg"
              alt="profile photo"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* bio */}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              About
              <span className="text-blue-400"> Me</span>
            </h1>

            <h2 className="text-xl text-gray-400 mb-4">
              Fullstack Developer - Jakarta
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Hi! I'm
              <strong className="text-blue-400 text-xl"> Peter Parker</strong>,
              a Fullstack Developer with Passionate to developing modern
              application web, and system analyst.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Now, Im on my Magister Degree on Computer Science curently active
              acomplishing some freelance and academic projects.
            </p>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills &<span className="text-blue-400"> Technolgy</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="bg-gray-800 rounded-xl p-5">
                <h3 className="text-blue-400 font-bold text-lg mb-4">
                  {group.category}
                </h3>

                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-blue-400">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* edu */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My
            <span className="text-blue-400">Education</span>
          </h2>

          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gray-800 rounded-xl p-6 border-l-4 border-blue-400"
              >
                <span className="text-blue-400 text-sm font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-white font-bold text-lg mt-1">
                  {edu.title}
                </h3>
                <div>
                  <p className="text-gray-400 text-sm mb-2">{edu.place}</p>
                  <p className="text-gray-300 text-sm">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* interest */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Career <span className="text-blue-400"> Interest</span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            I interest to career as{" "}
            <strong className="text-blue-400 text-xl"> System Analyst</strong> &{" "}
            <strong className="text-orange-400 text-xl"> Researcher</strong> in
            Academic and Corporate Environtment. I am open to freelance
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
