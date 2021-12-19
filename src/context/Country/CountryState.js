// Estado global.

import { useReducer } from "react";
import CountryContext from "./CountryContext";
import CountryReducer from "./CountryReducer";

import axiosClient from "./../../config/axios";

const CountryState = (props) => {
    // Generar el estado global de los países
    // 1. Initial State
    const initialState = {
        countries: [],
        singleCountry: {
            _id: "",
           name: "",
           flag: "",
           currency: "",
           airports: "",
           image: ""
        }
    }

    // 2. Configuración del Reducer y creación del estado global.
    const [globalState, dispatch] = useReducer(CountryReducer, initialState)

    // 3. Funciones de cambio en el estado global
    const getCountries = async () => {
        const res = await axiosClient.get("countries/readall")
        
        const list = res.data.data
        dispatch({
            type: "GET_COUNTRIES",
            payload: list,
        })
        
    }

    const getCountry = async (countryId) => {
        
        const res = await axiosClient.get(`countries/readone/${countryId}`)

        const selectedCountry = res.data.data

        dispatch({
            type: "GET_COUNTRY",
            payload: selectedCountry
        })

    }

    // 4. Retorno.
    return (
        <CountryContext.Provider
            value={{
                countries: globalState.countries,
                singleCountry: globalState.singleCountry,
                getCountries,
                getCountry
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState