import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-16 bg-blue-600 flex items-centre px-10 py-2 justify-between'>

            <h1 className='text-white text-3xl font-semibold font-Monteserrat'>Crud App</h1>

            <button className='w-48 bg-white text-blue-300 font-semibold text-xl h-12 rounded-lg'>Add Users</button>

        </div>
    )
}

export default Navbar