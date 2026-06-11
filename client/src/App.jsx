import './App.css'

function App() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-[#002147] text-white p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-white text-[#002147] flex items-center justify-center font-bold">AI</div>
          <h1 className="text-xl font-bold">AI Club</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#mission" className="hover:text-blue-300">Mission</a></li>
            <li><a href="#vision" className="hover:text-blue-300">Vision</a></li>
            <li><a href="#values" className="hover:text-blue-300">Core Values</a></li>
            <li><a href="#benefits" className="hover:text-blue-300">Benefits</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Placeholder */}
      <main className="flex-1 p-8">
        <header className="mb-12">
          <h2 className="text-lg font-medium text-gray-500 uppercase tracking-wider">Vikrant University</h2>
          <h1 className="text-5xl font-bold text-[#002147] mt-2">AI Club</h1>
        </header>

        <section id="about" className="max-w-3xl">
          <h3 className="text-3xl font-bold text-[#002147] mb-6">About</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The AI Club at Vikrant University is a platform for innovation, technical growth and collaborative learning in the field of Artificial Intelligence.
          </p>
          <div className="bg-gray-100 h-64 w-full rounded-xl flex items-center justify-center text-gray-400">
            [Banner Image Placeholder]
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
