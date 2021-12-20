import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./../../context/User/UserContext";

export default function Login() {
  const ctx = useContext(UserContext);

  const { loginUser } = ctx;

  // 1. Estado local
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(logUser);
  };

  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="justify-items-center">
              <img
                className="h-12 mx-auto w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2060/2060284.png"
                alt="Icon"
              />
              <h2 className="mt-6 text-3xl text-center font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account &nbsp;
                <Link
                  to="/register"
                  className="font-medium text-yellow-500 hover:text-yellow-300"
                >
                  Register here.
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  action="#"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                        name="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                        name="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://tecnohotelnews.com/wp-content/uploads/2017/08/shutterstock_144112840.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
