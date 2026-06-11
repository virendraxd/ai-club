import { Link } from "react-router-dom";
import '../App.css'

function AICellPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 bg-[#002147] text-white p-8 flex-shrink-0 sticky top-0 h-screen overflow-y-auto hidden md:block">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#002147] font-bold text-xl italic">VU</div>
          <div>
            <h1 className="text-xl font-bold leading-tight">AI Cell</h1>
            <p className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold">Vikrant University</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
            {[
              { label: 'About', href: '#about' },
              { label: 'Vision & Mission', href: '#vision-mission' },
              { label: 'Values', href: '#values' },
              { label: 'Our Team', href: '#team' },
              { label: 'Activities', href: '#activities' },
              { label: 'Roadmap', href: '#roadmap' },
              { label: 'Glimpse', href: '#glimpse' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block p-3 rounded-lg hover:bg-(--primary-dark) transition-all text-blue-100 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Top Utility Bar */}
        <div className="bg-white border-b border-gray-200 py-3 px-8 text-xs flex justify-end gap-6 text-gray-500 font-bold uppercase">
          <Link to="/" className="flex items-center text-black font-extrabold gap-2">Home</Link>
          <span>Pay Fees</span>
        </div>

        {/* Hero Section */}
        <div className="bg-[#002147] text-white py-16 px-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">AI CELL</h2>
            <div className="w-24 h-1 bg-(--primary-accent) mx-auto"></div>
          </div>
        </div>

        {/* Main Banner */}
        <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden aspect-[21/9] flex items-center justify-center border-4 border-white">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-[#002147] flex flex-col items-center justify-center text-center p-12">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">"One Campus. Many Disciplines. Infinite Intelligence."</h3>
              <button className="bg-(--primary-accent) hover:bg-(--primary-dark) text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Explore Our Initiatives
              </button>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-16">
          {/* About Section - White Background */}
          <section id="about" className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#002147] mb-8 relative inline-block">
                  About AI Cell
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-(--primary-accent) -mb-2"></span>
                </h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                  <p>
                    The AI Cell at Vikrant University is a multidisciplinary platform established to promote
                    awareness, innovation, research, and skill development in the field of Artificial Intelligence (AI).
                    The Cell serves as a dynamic ecosystem where students and faculty members from
                    diverse academic backgrounds come together to explore the transformative potential of AI and
                    emerging technologies.
                  </p>
                  <p>
                    AI is reshaping industries, businesses, governance, education, healthcare, agriculture, and
                    society as a whole. The Cell serves as a center for knowledge exchange, skill enhancement,
                    innovation, and collaboration. Through workshops, seminars, expert sessions, competitions,
                    research initiatives, and industry interactions, the AI Cell empowers learners to understand and
                    leverage Artificial Intelligence for academic, professional, and societal advancement.
                  </p>
                  <p>
                    As technology continues to transform every sector, the AI Cell aims to prepare students to
                    become responsible innovators, problem-solvers, and leaders in the age of intelligent systems.
                  </p>
                  <h4 className="text-2xl font-bold text-[#002147] mt-12 mb-6">Why AI Cell was established</h4>
                  <p>
                    Artificial Intelligence is no longer confined to the field of Computer Science. It has become a
                    transformative force impacting every discipline and profession. To prepare students for this
                    rapidly evolving technological landscape, Vikrant University established the AI Cell as a
                    dedicated platform for interdisciplinary learning and innovation.
                  </p>
                  <p>The AI Cell was created with the following objectives:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To create awareness about Artificial Intelligence and its applications across various domains.</li>
                    <li>To provide students with opportunities to develop practical AI skills and industry-relevant competencies.</li>
                    <li>To encourage innovation, research, and problem-solving through technology-driven approaches.</li>
                    <li>To foster collaboration among students and faculty members from different academic disciplines.</li>
                    <li>To bridge the gap between academic learning and emerging industry requirements.</li>
                    <li>To promote ethical, responsible, and sustainable use of Artificial Intelligence for societal development.</li>
                  </ul>
                  <p>
                    Through these initiatives, the AI Cell aims to nurture future leaders, innovators, researchers,
                    and entrepreneurs who can contribute meaningfully to the AI-driven world.
                  </p>
                </div>
              </div>
              {/* <div className="flex-1 bg-[#002147] p-8 rounded-2xl text-white shadow-xl flex items-center justify-center">
                <p className="text-xl font-bold italic">"One Campus. Many Disciplines. Infinite Intelligence."</p>
              </div> */}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-2xl font-bold text-[#002147] mb-6 border-l-4 border-(--primary-accent) pl-4">Multidisciplinary Nature of the AI Cell</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The AI Cell is built on the belief that Artificial Intelligence is not limited to a single discipline.
                  Modern challenges require solutions that combine technological expertise with knowledge from diverse domains.
                  To reflect this reality, the AI Cell operates as a multidisciplinary platform that welcomes participation
                  from all schools and departments of Vikrant University.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Members of the Cell represent disciplines such as Engineering & Technology, Computer Applications,
                  Management & Commerce, Legal Studies, Agriculture Science, Pharmacy, and other academic areas. This
                  diversity creates an environment where ideas are exchanged across disciplines, leading to broader
                  perspectives and innovative thinking.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The multidisciplinary structure enables members to understand how AI can be applied in different sectors,
                  from smart agriculture and business analytics to legal technology, healthcare innovations, educational
                  transformation, and sustainable development. By bringing together varied expertise and experiences, the
                  AI Cell encourages holistic learning and collaborative innovation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-2xl font-bold text-[#002147] mb-6 border-l-4 border-[#002147] pl-4">Collaboration across Schools</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the defining features of the AI Cell is its ability to connect students and faculty members
                  from different schools under a common vision of innovation and technological advancement. The Cell
                  serves as a collaborative network where individuals with diverse academic backgrounds work together
                  on projects, events, research activities, and knowledge-sharing initiatives.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This cross-disciplinary collaboration creates opportunities for students to learn from one another,
                  develop teamwork skills, and gain exposure to perspectives beyond their own fields of study.
                  Engineering students contribute technical expertise, management students bring strategic thinking,
                  legal studies students provide ethical and regulatory insights, agriculture students contribute domain
                  knowledge, and commerce students offer business perspectives.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Such collaboration not only enriches the learning experience but also helps in developing practical
                  solutions that are relevant, sustainable, and impactful. By fostering a culture of cooperation and
                  mutual learning, the AI Cell strengthens the university's commitment to innovation, inclusivity,
                  and excellence.
                </p>
              </div>
            </div>
          </section>
          {/* <p className="text-lg font-bold text-[#002147] italic">One Campus. Many Disciplines. Infinite Intelligence.</p> */}

          {/* Vision & Mission - Alternating Background */}
          <div className="-mx-4 px-4 py-16 bg-gray-100 mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-(--primary-accent)">
                  <h3 className="text-3xl font-bold text-[#002147] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">👁</span>
                    Vision
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
                    The AI Cell envisions creating an inclusive ecosystem where learners from diverse academic backgrounds
                    collaborate, innovate, and develop practical solutions to address real-world challenges.
                  </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#002147]">
                  <h3 className="text-3xl font-bold text-[#002147] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm">🎯</span>
                    Mission
                  </h3>
                  <ul className="text-gray-700 space-y-4 font-medium">
                    {[
                      "Promoting awareness and understanding of Artificial Intelligence and its applications across different domains.",
                      "Organizing workshops, seminars, expert lectures, training programs, and awareness initiatives to enhance AI literacy and technical competence.",
                      "Encouraging interdisciplinary collaboration among students and faculty members from various schools and departments of the university.",
                      "Supporting innovation-driven projects, research activities, and practical problem-solving using AI and related technologies.",
                      "Facilitating interaction with industry experts, researchers, entrepreneurs, and technology professionals to bridge the gap between academia and industry.",
                      "Providing a platform for students to explore emerging technologies, develop future-ready skills, and build professional competencies.",
                      "Encouraging the ethical, responsible, and sustainable use of Artificial Intelligence for the benefit of society.",
                      "Creating an environment that nurtures creativity, critical thinking, leadership, teamwork, and lifelong learning."
                    ].map((m, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        <span className="text-sm">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <section id="values" className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#002147] mb-4">Core Values (AICEL)</h3>
              <div className="w-24 h-1 bg-(--primary-accent) mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { letter: 'A', title: 'Awareness', desc: 'Promoting understanding of AI and emerging technologies.' },
                { letter: 'I', title: 'Innovation', desc: 'Encouraging creative thinking and problem-solving.' },
                { letter: 'C', title: 'Collaboration', desc: 'Connecting diverse disciplines and perspectives.' },
                { letter: 'E', title: 'Excellence', desc: 'Maintaining high standards in learning and innovation.' },
                { letter: 'L', title: 'Leadership', desc: 'Developing future-ready leaders and changemakers.' },
                { letter: 'L', title: 'Lifelong Learning', desc: 'Cultivating curiosity and continuous growth.' },
              ].map((value, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="text-5xl font-black text-blue-50/0 group-hover:text-blue-50 transition-colors absolute -mt-4 -ml-2 select-none">
                    {value.letter}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-[#002147] mb-4 group-hover:text-orange-500 transition-colors">
                      {value.letter}
                    </div>
                    <h4 className="text-xl font-bold text-[#002147] mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team Section */}
          <section id="team" className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#002147] mb-4">Our Team</h3>
              <div className="w-24 h-1 bg-(--primary-accent) mx-auto mb-8"></div>
              <div className="max-w-6xl mx-auto">
                <h4 className="text-2xl font-bold text-[#002147] mb-4">Leadership Team</h4>
                <p className="text-lg text-gray-600 leading-relaxed text-left">
                  The success of the AI Cell is driven by the vision, guidance, and collective efforts of its
                  academic leaders, mentors, and coordinators. The leadership framework is designed to ensure
                  effective planning, coordination, mentorship, and execution of activities that promote Artificial
                  Intelligence, interdisciplinary learning, and technological advancement across the university.
                  The Faculty Leadership Team provides strategic direction, mentorship, and academic support,
                  while the Student Leadership Team drives engagement, manages initiatives, and fosters active
                  participation among members. Together, they create a dynamic ecosystem that encourages
                  innovation, teamwork, and continuous learning.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-2">Faculty Leadership</h4>
                <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#002147] text-white">
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">S.No.</th>
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">Name</th>
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'Dr. Anand Pandey', role: 'Chairperson, AI Cell, VU' },
                        { name: 'Dr. Sandeep K Tiwari', role: 'Mentor, AI Cell, VU' },
                        { name: 'Prof. Bulbul Agrawal', role: 'Faculty Coordinator, AI Cell, VU' },
                        { name: 'Prof. Madhwan Upadhyay', role: 'Faculty Coordinator, AI Cell, VU' },
                        { name: 'Prof. Vipin Sharma', role: 'Treasure, AI Cell, VU' },
                      ].map((member, i) => (
                        <tr key={i} className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 font-medium text-gray-500">{i + 1}</td>
                          <td className="p-4 font-bold text-[#002147]">{member.name}</td>
                          <td className="p-4 text-gray-600 italic">{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-2">Student Leadership</h4>
                <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#002147] text-white">
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">S.No.</th>
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">Name</th>
                        <th className="p-4 font-bold uppercase tracking-wider text-sm">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'Mr. Vinay', role: 'President, AI Cell, VU' },
                        { name: 'Mr. Krishna Tripathi', role: 'Vice President, AI Cell, VU' },
                        { name: 'Ms. Anamika Pandey', role: 'Secretary, AI Cell, VU' },
                        { name: 'Ms. Akanksha', role: 'Treasurer, AI Cell, VU' },
                        { name: 'Mr. Virendra Singh Shakyawar', role: 'Technical Lead, AI Cell, VU' },
                      ].map((member, i) => (
                        <tr key={i} className="hover:bg-orange-50 transition-colors">
                          <td className="p-4 font-medium text-gray-500">{i + 1}</td>
                          <td className="p-4 font-bold text-[#002147]">{member.name}</td>
                          <td className="p-4 text-gray-600 italic">{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold text-[#002147] mb-2">Student Members Across Schools:</h4>
              <p className="text-gray-600">All registered AI Cell members from different schools and departments.</p>
            </div>
          </section>

          {/* Activities - Alternating background */}
          <div className="-mx-4 px-4 py-16 bg-blue-900 text-white mb-20">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold mb-8 text-center">Activities & Events</h3>
              <div className="max-w-6xl mx-auto text-blue-100 text-center mb-12 leading-relaxed text-left">
                <p>
                  The AI Cell actively organizes and participates in a variety of academic, technical, and
                  awareness-oriented activities throughout the year. These initiatives are designed to enhance AI
                  literacy, foster innovation, encourage interdisciplinary collaboration, and provide practical
                  exposure to emerging technologies. The Cell aims to create meaningful opportunities for
                  students and faculty members across different disciplines.
                </p>
                <p className="mt-4">
                  Explore the records of activities, reports, photographs, certificates, and achievements that
                  reflect the continuous efforts and contributions of the AI Cell community.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 border-b-2 border-white/20 pb-2">Faculty AI Integration Activities</h4>
                  <div className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/10 text-white">
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">S.No.</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Activity Name</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Date</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Category</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Report</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr className="text-blue-100 italic"><td colSpan="5" className="p-8 text-center">No activities listed yet.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 border-b-2 border-white/20 pb-2">Student Activities & Events</h4>
                  <div className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/10 text-white">
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">S.No.</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Activity Name</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Date</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Category</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Report</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-medium text-blue-100">1</td>
                          <td className="p-4 font-bold text-white">NeuroSpark 1.0</td>
                          <td className="p-4 text-blue-100">April 2026</td>
                          <td className="p-4 text-blue-100">Quiz/Challenge</td>
                          <td className="p-4"><a href="#" className="text-(--primary-accent) hover:underline">View</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <section id="roadmap" className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#002147] mb-4">Future Roadmap</h3>
              <div className="w-24 h-1 bg-(--primary-accent) mx-auto mb-8"></div>
              <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed space-y-6">
                <p>
                  The roadmap serves as a guiding framework for upcoming activities, training programs,
                  workshops, competitions, awareness campaigns, research initiatives, and collaborative projects
                  planned for future academic sessions. Members and visitors are encouraged to explore the latest
                  roadmap document to learn about upcoming plans, objectives, and opportunities offered by the
                  AI Cell.
                </p>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-[#002147] mb-2">Latest Session Roadmap:</h4>
                  <a href="#" className="text-blue-600 font-medium hover:underline flex items-center justify-center gap-2">
                    <span>📄</span> Download AI Cell Calendar (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-[#002147] mb-6">Progress Tracker</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                The Progress Tracker provides a snapshot of key AI Cell initiatives and their current status. It
                reflects our ongoing efforts, achievements, and future plans, ensuring transparency,
                accountability, and continuous growth in our journey toward innovation and excellence.
              </p>

              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <div className="grid gap-6">
                  {[
                    { name: 'AI Cell Formation', status: 'Completed', color: 'bg-green-500' },
                    { name: 'Student Leadership Formation', status: 'Completed', color: 'bg-green-500' },
                    { name: 'AI Integration (Faculty & Students)', status: 'Ongoing', color: 'bg-blue-400' },
                    { name: 'Events and Activities', status: 'Ongoing', color: 'bg-blue-400' },
                    { name: 'Industry Collaboration', status: 'Planned', color: 'bg-gray-400' },
                    { name: 'Research Initiatives', status: 'Planned', color: 'bg-gray-400' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-lg font-bold text-[#002147] group-hover:text-blue-600 transition-colors">{item.name}</span>
                      </div>
                      <span className={`${item.color} text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter shadow-sm`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="glimpse" className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#002147] mb-4">Glimpse</h3>
              <div className="w-24 h-1 bg-(--primary-accent) mx-auto mb-6"></div>
              <p className="text-xl font-medium text-gray-700 italic">A Visual Journey of the AI Cell</p>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Explore the gallery to witness the journey of learning, collaboration, and innovation that
                continues to shape the AI Cell and its community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a href="#" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">📸</div>
                <h4 className="text-xl font-bold text-[#002147]">Photo Gallery</h4>
              </a>
              <a href="#" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🎥</div>
                <h4 className="text-xl font-bold text-[#002147]">Video Gallery</h4>
              </a>
            </div>
          </section>

          {/* Contact Us */}
          <section id="contact" className="pb-20">
            <div className="bg-[#002147] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-bold mb-8">Ready to explore the future?</h3>
                  <p className="text-blue-200 text-lg mb-12 leading-relaxed">
                    Join the AI Cell and become part of a multidisciplinary network of learners, innovators, and changemakers.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-(--primary-accent)">📍</div>
                      <div>
                        <p className="font-bold">Vikrant University</p>
                        <p className="text-sm opacity-70">Gwalior, Madhya Pradesh</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-(--primary-accent)">🌐</div>
                      <a href="https://vikrantuniversity.ac.in/" className="hover:text-(--primary-accent) underline underline-offset-4 decoration-orange-500/50">vikrantuniversity.ac.in</a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                  <h4 className="text-xl font-bold mb-8 text-(--primary-accent)">Connect with Coordinators</h4>
                  <div className="space-y-8">
                    {[
                      { name: 'Prof. Bulbul Agrawal', phone: '+91 91315 02294', email: 'soet_bulbul@vikrantuniversity.ac.in' },
                      { name: 'Prof. Madhwan Upadhyay', phone: '+91 96300 36698', email: 'soet_madhwan@vikrantuniversity.ac.in' }
                    ].map((c, i) => (
                      <div key={i} className="border-l-2 border-(--primary-accent) pl-6">
                        <p className="font-black text-lg">{c.name}</p>
                        <p className="text-sm opacity-60 mt-1">{c.phone}</p>
                        <p className="text-xs opacity-60 text-blue-300 truncate">{c.email}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/10 flex gap-6 justify-center">
                    <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Follow Us:</span>
                    <a href="#" className="text-(--primary-accent) hover:text-white transition-colors font-bold">INSTAGRAM</a>
                    <a href="#" className="text-(--primary-accent) hover:text-white transition-colors font-bold">LINKEDIN</a>
                  </div>
                </div>
              </div>
              {/* Background element */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -mb-48 -mr-48"></div>
            </div>
          </section>

          <div className="text-center py-8 mb-8">
            <p className="text-xl font-medium text-gray-700 italic">“Let's connect, collaborate, and innovate together through the power of Artificial Intelligence.”</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-bold uppercase tracking-widest">
          &copy; 2026 Vikrant University AI Cell. All Rights Reserved.
        </footer>
      </div>
    </div>
  )
}

export default AICellPage
