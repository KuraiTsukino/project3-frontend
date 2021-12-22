import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="relative bg-gray-50">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Tsukino</span>
                <span className="block text-indigo-600 xl:inline">
                  Travels
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Travel to Europe and know the most interesting places to visit. 
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Log in
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute rounded-lg inset-0 w-full h-full object-cover"
              src="https://d1bvpoagx8hqbg.cloudfront.net/originals/frases-viajes-afb3e3b620ae87357c63946c05ed0ddb.jpg"
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}
