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
        console.log("Obteniendo los países...")
        
        const list = res.data.data
        dispatch({
            type: "GET_COUNTRIES",
            payload: list,
        })
        
    }

    // 4. Retorno.
    return (
        <CountryContext.Provider
            value={{
                countries: globalState.countries,
                getCountries
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState