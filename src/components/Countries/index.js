import React, { useEffect, useContext } from 'react'
import CountryContext from '../../context/Country/CountryContext';
import { Link } from 'react-router-dom';

export default function Countries() {

    // Estado global
    const ctx = useContext(CountryContext)

    const {
        countries,
        getCountries 
    } = ctx
    
    // Estado local
    // El momento en el que se ejecuta el UseEffect es después del return.
    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
          <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
				<div class="md:flex md:items-center md:justify-between">
					<div class="flex-1 min-w-0">
						<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
							Country list
						</h2>
					</div>
				</div>


				<div class="bg-white">
					<div>
						<div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{
								countries.map(element => {
									return (
										<>
											<div class="" style={{margin: 8}}>
												<div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
													<Link to={`/countries/${element._id}`} >
													<img src={element.flag} style={{ height: "200px", border: "1px solid black" }}alt="Imagen de bandera" class="w-full h-full object-center object-cover" />
													</Link>
												</div>
												<div class="pt-10 pb-4 text-center">
													<h3 class="text-sm font-medium text-gray-900">
														<Link to={`/countries/${element._id}`} >
															{element.name}
														</Link>
													</h3>
													<div class="mt-3 flex flex-col items-center">
														<p class="mt-1 text-sm text-gray-500">{element.capital}</p>
													</div>
												</div>
											</div>
										</>
									)
								})
							}
						</div>
					</div>
				</div>
			</div> 
        </>
    )
}
