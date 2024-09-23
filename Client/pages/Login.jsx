import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: ''
  })

const loginUser = async (e) => {
  e.preventDefault()
    const {email} = data
    try {
      const {data} = await axios.post('/login', {
        email
      });

      if(data.error){
        toast.error(data.error)
      } else {
       setData({});
      navigate('/dashboard')

      }
    } catch (error) {
      console.log(error)
    }
}

return (
  <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={loginUser}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
);
}
