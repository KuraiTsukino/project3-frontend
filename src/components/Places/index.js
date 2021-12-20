import React, { useEffect, useContext } from "react";
import PlaceContext from "./../../context/Place/PlaceContext";
import { Link } from "react-router-dom";

export default function Places() {
  // Estado global
  const ctx = useContext(PlaceContext);

  const { places, getPlaces } = ctx;

  // Estado local.
  useEffect(() => {
    getPlaces();
  }, []);
  
  return (
    <>
     <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
				<div class="md:flex md:items-center md:justify-between">
					<div class="flex-1 min-w-0">
						<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
							Places list
						</h2>
					</div>
				</div>



				<div class="bg-white">
					<div>
						<div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{
								places.map(element => {
									return (
										<>
											<div class="" style={{margin: 8}}>
												<div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
													<Link to={`/places/${element._id}`} >
													<img src={element.image} alt="Imagen de lugar" class="w-full h-full object-center object-cover" />
													</Link>
												</div>
												<div class="pt-10 pb-4 text-center">
													<h3 class="text-sm font-medium text-gray-900">
														<Link to={`/places/${element._id}`} >
															{element.name}
														</Link>
													</h3>
													<div class="mt-3 flex flex-col items-center">
														<p class="mt-1 text-sm text-gray-500">{element.country}</p>
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
  );
}
