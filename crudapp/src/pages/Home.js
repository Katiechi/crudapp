import axios from "axios"
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3003/users")
            .then((res) => {
                setUsers(res.data)
            })
    }, [])

    return (
        <div className='w-full h-full flex flex-col px-10 py-8'>
            <h1 className='text-black text-3xl font-semibold font-Monteserrat'>Home Page</h1>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Phone
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Action
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {users.map((user, index) => {
                                        return (<tr key={index} className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.phone}
                                            </td>
                                            <td className="flex justify-center items-center text-sm flex space-x-4 mt-1">
                                                <Link to={`/users/${user.id}`} className='px-6 py-2 text-white bg-black rounded-lg'>
                                                    View
                                                </Link>
                                                <button className='px-6 py-2 text-white bg-blue-600 rounded-lg'>
                                                    Edit
                                                </button>
                                                <button className='px-6 py-2 text-white bg-red-600 rounded-lg'>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>)
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home