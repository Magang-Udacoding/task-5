
function About() {
  const skills =[
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'Tailwind', 'HTMLCSS']
    },
    {
      category: 'Backend',
      items: ['Laravel', 'PHP', 'MySQL', 'REST API']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VSCode', 'Figma']
    },
  ]

  const education = [
    {
      id: 1,
      year: '2027-Now',
      title: 'Magister of Computer Science',
      place: 'Chaoyang University of Technology',
      desc: 'Focusing on implementation system and algorithm'
    },
    {
      id: 2,
      year: '2023-2027',
      title: 'Bachelor of Software Engineer',
      place: 'Politeknik Negeri Padang',
      desc: 'Focusing on developing system and algorithm'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* hero about */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* photo */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shrink-0">
            <img 
            src="/img/myphotogw.jpeg" alt="profile photo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
