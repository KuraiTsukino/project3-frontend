import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function EditProfile() {
  // 1. Estado global.
  const params = useParams();
  const idUser = params.id;

  const ctx = useContext(UserContext);

  const { updateUser } = ctx;

  // 2. Estado local.
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    imgUrl: "",
  });

  // 3. Funciones.
  // useEffect para actualizar datos en el estado global


  const handleChange = (e) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(userData, idUser);
  };

  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        class="space-y-8 divide-y mr-10 ml-10 divide-gray-200"
      >
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Edit your profile
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Full every item below
              </p>
            </div>
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your First Name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Last Name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="type"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Country where you live
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="text"
                    name="country"
                    value={userData.country}
                    class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="price"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your image profile
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="text"
                    name="imgUrl"
                    value={userData.imgUrl}
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="button"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
