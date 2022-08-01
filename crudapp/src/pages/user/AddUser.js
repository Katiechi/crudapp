import React from 'react'

function AddUser() {
  return (
    <div className='w-screen h-full flex flex-col justify-centre items-center mt-16'>

      <form className='w-[80%] h-full flex flex-col justify-center items-center'>
        <h1 className='text-black text-3xl font-semibold font-Monteserrat'>Add User</h1>
        <input type="text" placeholder="Enter your name" className="w-[80%] mt-4 text-xl font-normal py-4 pl-6 outline-none border border-zinc-400"/>

        <input type="email" placeholder="Enter your email" className="w-[80%] mt-4 text-xl font-normal py-4 pl-6 outline-none border border-zinc-400"/>


        <input type="phone" placeholder="Enter your phone" className="w-[80%] mt-4 text-xl font-normal py-4 pl-6 outline-none border border-zinc-400"/>

        <button className="w-[80%] mt-4 bg-blue-600 text-white text-xl font-normal py-4 pl-6  border "> Add User</button>


      </form>


    </div>
  )
}

export default AddUser