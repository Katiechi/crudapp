import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3003/users/${id}`)
            .then((res) => {
                setUser(res.data)
            })
    }, [])
    const { id } = useParams()

    return (
        <div className='text-sm w-full h-full  flex justify-center items-center'>
            {user && (
                <>
                    

                    <div className='w-[700px] h-[200px] flex px-6 py-4 '>

                        <div className='w-5/12 flex flex-col space-y-4 mt-16  '>
                            <h2 className= 'text-black text-2xl '>Name</h2>
                            <h2 className='text-black text-2xl  '>Email</h2>
                            <h2 className='text-black text-2xl  '>Phone</h2>
                        </div >

                        <div className='w-5/12 flex flex-col space-y-4 mt-16'>
                            <h2 className='text-black text-2xl'>{user.name}</h2>
                            <h2 className='text-black text-2xl'>{user.email}</h2>
                            <h2 className='text-black text-2xl'>{user.phone}</h2>
                        </div >

                    </div>
                </>


            )}
        </div>
    )
}

export default User