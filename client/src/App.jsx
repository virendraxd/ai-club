import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AICellPage from './pages/AICellPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-cell" element={<AICellPage />} />
      </Routes>
    </div>
  )
}

export default App