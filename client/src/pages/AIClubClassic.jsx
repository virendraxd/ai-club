import React from 'react'
import { Link } from "react-router-dom";
import "../styles/AIClubClassic.css"
import Hero from "../components/aiclubclassic/Hero"

function AIClubClassic() {
  return (
    <>
      <section>
        <div className="bg-neutral-200 flex justify-center items-center h-28 border-2 border-neutral-400">
          <img src="" alt="banner-ai-club" />
          <h1 className="text-3xl font-(family-name:--font-outfit) font-extrabold text-(--primary-accent)">AI Student Club</h1>
        </div>

        <div className="px-4 py-4 uppercase text-sm"><Link to="/">Home</Link> / <span>AI Student Club</span> </div>
      </section>

      <Hero />
    </>
  )
}

export default AIClubClassic
