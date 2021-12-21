import React, { useContext, useEffect } from "react";
import UserContext from "./../../context/User/UserContext";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const ctx = useContext(UserContext);

  const { currentUser, verifyingToken } = ctx;

  const params = useParams()
  const id = currentUser._id
  console.log(currentUser)

  useEffect(() => {
    verifyingToken()
  }, []);

  return (
    <>
      <div class="h-full flex">
        <div
          class="fixed inset-0 flex z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
            aria-hidden="true"
          ></div>

          <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex-1 relative z-0 flex overflow-hidden">
            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <article>
                <div>
                  <div>
                    <img
                      class="h-32 w-full object-cover lg:h-48"
                      src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt=""
                    />
                  </div>
                  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div class="flex">
                        <img
                          class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={currentUser.imgUrl}
                          alt="imagen de usuario"
                        />
                      </div>
                      <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                          <h1 class="text-2xl font-bold text-gray-900 truncate">
                            {currentUser.firstName} {currentUser.lastName}
                          </h1>
                        </div>
                        <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                          {currentUser.firstName ? (
                            <Link to={`edit/${id}`}>
                              <button
                                type="button"
                                class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                              >
                                <span>Edit Profile</span>
                              </button>
                            </Link>
                          ) : (
                            <Link>
                              <button
                                type="button"
                                class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                              >
                                <span>Login</span>
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                      <h1 class="text-2xl font-bold text-gray-900 truncate">
                        {currentUser.firstName} {currentUser.lastName}
                      </h1>
                    </div>
                  </div>
                </div>

                <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Country</dt>
                      <dd class="mt-1 text-sm text-gray-900">{currentUser.country}</dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Email</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {currentUser.email}
                      </dd>
                    </div>
                    {/*
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">
                        Wish list
                      </dt>
                      <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                        <p>
                          Tincidunt quam neque in cursus viverra orci, dapibus
                          nec tristique. Nullam ut sit dolor consectetur urna,
                          dui cras nec sed. Cursus risus congue arcu aenean
                          posuere aliquam.
                        </p>
                      </dd>
                    </div>*/}
                  </dl>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
