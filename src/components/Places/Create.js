import React from "react";

export default function Create() {
  return (
    <div>
      <form
        //onSubmit={ (event) => { handleSubmit(event) }}
        class="space-y-8 divide-y mr-10 ml-10 divide-gray-200"
      >
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Create a new place to visit
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Full every item below
              </p>
            </div>
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Country of the place
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    //onChange={ (event) => { handleChange(event) } }
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Name of the place
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Type of attraction
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Price in local currency
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="street-address"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Image of the place
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your description. Why is interesting this place?
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Map
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
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
