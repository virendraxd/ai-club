import React from 'react'
import Divider from '../aiclubclassic/Divider'

function Hero() {
    return (
        <section className="py-14 px-6 text-center">
            <h2 className="text-4xl font-(family-name:--font-outfit) font-bold text-(--primary-accent) m-6">Vikrant University</h2>
            <h2 className="text-5xl font-(family-name:--font-outfit) font-bold text-(--primary-accent) m-6">AI Student Club</h2>

            <Divider />

            <div className="bg-neutral-200 flex justify-center items-center h-28 border-2 border-neutral-400">
                <img src="" alt="banner-ai-club" />
            </div>
        </section>
    )
}

export default Hero
