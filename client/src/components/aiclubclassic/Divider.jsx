import React from 'react'

function Divider() {
    return (
        <>
            <div className="flex flex-row justify-center items-center my-8">
                <div className="w-28 border border-(--text-color) my-4 "></div>
                <div className="h-10 w-10 border-3 border-(--secondary-accent) mx-6"></div>
                <div className="w-28 border border-(--text-color) my-4 "></div>
            </div>
        </>
    )
}

export default Divider
