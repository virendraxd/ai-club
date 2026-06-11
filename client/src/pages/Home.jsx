import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="bg-gray-900 h-dvh p-4 flex flex-col items-center  w-full">

                <div>
                    <h1 className="text-5xl text-white mt-8">AI Club</h1>
                    <h2 className="text-xl text-white/85 mt-1">Vikrant Universirty</h2>
                </div>

                <div className="bg-black  max-w-110  w-72 sm:w-120 h-fit mt-6 p-6 flex flex-col justify-between border-2 border-gray-500 rounded-xl  ">
                    <p className="text-white/90 text-lg text-left">Choose a template </p>

                    <div className="flex flex-col h-fit gap-4 mt-4">
                        <Link to="/ai-cell" className="text-xl text-white bg-neutral-900 px-4 py-2 rounded-xl border border-gray-500 text-center">AI Cell</Link>
                        <Link to="/ai-club-Classic" className="text-xl text-white bg-neutral-900 px-4 py-2 rounded-xl border border-gray-500 text-center">AI Club Classic</Link>

                        {/* <div className='w-full h-1 bg-amber-950 my-1'></div>

                        <Link to="/" className="text-xl text-white bg-neutral-900 px-4 py-2 rounded-xl border border-gray-500 text-center">Home</Link> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
