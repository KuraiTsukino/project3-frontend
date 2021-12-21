import React, { useEffect, useContext } from "react";
import CountryContext from "../../../context/Country/CountryContext";
import { useParams } from "react-router-dom";

export default function SingleCountry() {
  const ctx = useContext(CountryContext);
  const { singleCountry, getCountry } = ctx;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getCountry(id);
  }, []);

  return (
    <>
      <div className="min-h-full">
        <main className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-28 w-30 rounded"
                    src={singleCountry.flag}
                    alt="bandera de país"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{singleCountry.name}</h1>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Capital
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {singleCountry.capital}
                    </p>
                  </div>
                  <div className="border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Currency
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {singleCountry.currency}
                        </dd>
                        <br />
                        <dt className="text-sm font-medium text-gray-500">
                          Language
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {singleCountry.language}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Airports
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <ol>
                          <li>{singleCountry.airports}</li>
                          </ol>
                        </dd>
                      </div>

                      <div className="sm:col-span-2">
                        <dd className="mt-1 text-sm text-gray-900">
                            <img src={singleCountry.image} alt="imagen de ciudad"/>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
