import React from 'react'
import { Link } from "react-router-dom";
import "../styles/AIClubClassic.css"
import Hero from "../components/aiclubclassic/Hero"
import Navbar from "../components/aiclubclassic/Navbar"
import NodeBlock from "../components/aiclubclassic/NodeBlock"

function AIClubClassic() {
  return (
    <>
      <Navbar />
      <Hero />
      <NodeBlock />
    </>
  )
}

export default AIClubClassic
