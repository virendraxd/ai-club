import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="bg-(--dark-blue) py-3 px-4">
        <ul className="uppercase text-xs text-(--light-gray) flex flex-row gap-4 justify-end">
            <li>Join club</li>
            <li>Events</li>
            <li>Research</li>
            <li>Contact</li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar
