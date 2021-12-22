import React, { useEffect, useContext } from "react";
import PlaceContext from "../../../context/Place/PlaceContext";
import { Link, useParams } from "react-router-dom";

export default function SinglePlace() {
  const ctx = useContext(PlaceContext);
  const { singlePlace, getPlace, deletePlace } = ctx;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getPlace(id);
  }, []);

  return (
    <>
      <div class="min-h-full">
        <main class="py-10">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div class="flex items-center space-x-5">
              <div class="flex-shrink-0">
                <div class="relative">
                  <img
                    class="h-24 w-24 rounded"
                    src={singlePlace.image}
                    alt="imagen pequeña de país"
                  />
                </div>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-gray-900">
                  {singlePlace.name}
                </h1>
                <p class="text-sm font-medium text-gray-500">
                  Place to visit in
                  <a href="/countries" class="text-gray-900">
                    {singlePlace.country}
                  </a>
                </p>
              </div>
            </div>
            <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              <Link to={`/places/${id}/edit`}>
                <button
                  type="button"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  Edit Place
                </button>
              </Link>
              <Link to="/places">
              <button
                onClick={() => deletePlace(id)}
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Delete place
              </button>
              </Link>
            </div>
          </div>
          <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-start-1 lg:col-span-2">
              <section aria-labelledby="applicant-information-title">
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Place Information
                    </h2>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Type</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singlePlace.type}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Schedule
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singlePlace.schedule}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Price</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singlePlace.price}
                        </dd>
                      </div>
                      <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">About</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singlePlace.description}
                        </dd>
                      </div>
                      <div class="sm:col-span-2">
                        <img src={singlePlace.image} alt="imagen de ciudad" />
                      </div>
                    </dl>
                  </div>
                  <div>
                    <Link
                      to="/places"
                      class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                    >
                      Check all the places to visit
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            <section
              aria-labelledby="timeline-title"
              class="lg:col-start-3 lg:col-span-1"
            >
              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  class="text-lg font-medium text-gray-900"
                >
                  Map
                </h2>
                <div class="mt-6 flow-root">
                  <iframe title="título de mapa" src={singlePlace.map} alt="imagen de mapa" style= {{width:"600", height:"500", border:"0"}} allowfullscreen="" loading="lazy" />
                </div>
                <div class="mt-6 flex flex-col justify-stretch">
                  <Link to="/countries">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Otros países
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
