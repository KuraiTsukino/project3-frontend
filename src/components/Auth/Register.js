import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import UserContext from '../../context/User/UserContext';

export default function Register() {

    const ctx = useContext(UserContext)

    const {
        registerUser,
    } = ctx

    const [newUser, setNewUser] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handleChange = (e) => {
        e.preventDefault()

        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        registerUser(newUser)
    }

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto" alt='logo'
            src="https://cdn-icons-png.flaticon.com/512/2060/2060284.png"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already has an account? &nbsp;
            <Link to="/login" className="font-medium text-yellow-500 hover:text-yellow-300">
                Login
            </Link>
          </p>
        </div>
  
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
              className="space-y-6"
            >
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm your password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="confirmpassword"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
