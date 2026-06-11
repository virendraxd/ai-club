import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Utility Bar */}
      <div className="bg-[#002147] text-white py-2 px-8 text-xs flex justify-end gap-6 border-b border-blue-900 hidden md:flex">
        <span>Apply Now</span>
        <span>Pay Fees</span>
        <span>Contact Us</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold text-xl italic">VU</div>
          <div>
            <h1 className="text-xl font-bold text-[#002147] leading-tight">AI Cell</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Vikrant University</p>
          </div>
        </div>
        <ul className="hidden lg:flex gap-8 text-sm font-bold text-[#002147] uppercase tracking-wide">
          <li><a href="#about" className="hover:text-orange-500 transition-colors">About</a></li>
          <li><a href="#vision-mission" className="hover:text-orange-500 transition-colors">Vision & Mission</a></li>
          <li><a href="#team" className="hover:text-orange-500 transition-colors">Our Team</a></li>
          <li><a href="#activities" className="hover:text-orange-500 transition-colors">Activities</a></li>
          <li><a href="#roadmap" className="hover:text-orange-500 transition-colors">Roadmap</a></li>
          <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Hero / Breadcrumb Section */}
      <div className="bg-[#002147] text-white py-12 px-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-sm uppercase tracking-widest mb-4 opacity-80">Home / AI Cell</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">AI CELL</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
      </div>

      {/* Main Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden aspect-[21/9] flex items-center justify-center border-4 border-white">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-[#002147] flex flex-col items-center justify-center text-center p-12">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">"One Campus. Many Disciplines. Infinite Intelligence."</h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
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
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-500 -mb-2"></span>
              </h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  The AI Cell at Vikrant University is a multidisciplinary platform established to promote 
                  awareness, innovation, research, and skill development in the field of Artificial Intelligence (AI). 
                  The Cell serves as a dynamic ecosystem where students and faculty members from 
                  diverse academic backgrounds come together to explore the transformative potential of AI.
                </p>
                <p>
                  As technology continues to transform every sector, the AI Cell aims to prepare students to 
                  become responsible innovators, problem-solvers, and leaders in the age of intelligent systems.
                </p>
              </div>
            </div>
            <div className="flex-1 bg-[#002147] p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-6 text-orange-400">Why AI Cell?</h4>
              <ul className="space-y-4">
                {[
                  "Create awareness about AI applications.",
                  "Practical AI skills & industry readiness.",
                  "Encourage innovation and research.",
                  "Interdisciplinary collaboration.",
                  "Ethical and sustainable AI use."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-sm opacity-90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Alternating Background */}
        <div className="-mx-4 px-4 py-16 bg-gray-100 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-orange-500">
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
                    "Promoting awareness and understanding of AI.",
                    "Organizing workshops and training programs.",
                    "Encouraging interdisciplinary collaboration.",
                    "Supporting innovation-driven projects.",
                    "Facilitating industry-academia interaction."
                  ].map((m, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600">•</span>
                      <span>{m}</span>
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
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
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
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
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
        </section>

        {/* Activities - Alternating background */}
        <div className="-mx-4 px-4 py-16 bg-blue-900 text-white mb-20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Activities & Events</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'NeuroSpark 1.0', desc: 'AI Quiz & Creativity Challenge focusing on ML basics and practical tools.', status: 'Completed', quote: 'A platform to explore and innovate.' },
                { title: 'AI Cell Inauguration', desc: 'Official launch marking a milestone in AI education at VU.', status: 'April 20, 2026', quote: 'The journey begins here.' }
              ].map((act, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 block">{act.status}</span>
                  <h4 className="text-2xl font-bold mb-4">{act.title}</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">{act.desc}</p>
                  <p className="text-sm italic opacity-70">"{act.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <section id="roadmap" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#002147] mb-4">Future Roadmap</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
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
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-orange-400">📍</div>
                    <div>
                      <p className="font-bold">Vikrant University</p>
                      <p className="text-sm opacity-70">Gwalior, Madhya Pradesh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-orange-400">🌐</div>
                    <a href="https://vikrantuniversity.ac.in/" className="hover:text-orange-400 underline underline-offset-4 decoration-orange-500/50">vikrantuniversity.ac.in</a>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold mb-8 text-orange-400">Connect with Coordinators</h4>
                <div className="space-y-8">
                  {[
                    { name: 'Prof. Bulbul Agrawal', phone: '+91 91315 02294', email: 'soet_bulbul@vikrantuniversity.ac.in' },
                    { name: 'Prof. Madhwan Upadhyay', phone: '+91 96300 36698', email: 'soet_madhwan@vikrantuniversity.ac.in' }
                  ].map((c, i) => (
                    <div key={i} className="border-l-2 border-orange-500 pl-6">
                      <p className="font-black text-lg">{c.name}</p>
                      <p className="text-sm opacity-60 mt-1">{c.phone}</p>
                      <p className="text-xs opacity-60 text-blue-300 truncate">{c.email}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex gap-6 justify-center">
                  <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Follow Us:</span>
                  <a href="#" className="text-orange-400 hover:text-white transition-colors font-bold">INSTAGRAM</a>
                  <a href="#" className="text-orange-400 hover:text-white transition-colors font-bold">LINKEDIN</a>
                </div>
              </div>
            </div>
            {/* Background element */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -mb-48 -mr-48"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-bold uppercase tracking-widest">
        &copy; 2026 Vikrant University AI Cell. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App
