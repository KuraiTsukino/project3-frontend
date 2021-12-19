// Estado global

import { useReducer } from "react";
import PlaceContext from "./PlaceContext";
import PlaceReducer from "./PlaceReducer";

import axiosClient from "../../config/axios";

const PlaceState = (props) => {
    // Generar el estado global de los lugares

    // 1. Initial State
    const initialState = {
        places: [],
        singlePlace: {
            _id: "",
            country: "",
            name: "",
            type: "",
            schedule: "",
            price: "",
            image: "", 
            description: "",
            map: ""
        }
    }

    // 2. Configuración del Reducer y creación del estado global.
    const [globalState, dispatch] = useReducer(PlaceReducer, initialState)

    // 3. Funciones de cambio en el estado global
    const getPlaces = async () => {
        const res = await axiosClient.get("places/readall")

        const list = res.data.data
        dispatch({
            type: "GET_PLACES",
            payload: list,
        })
    }

    const getPlace = async (placeId) => {

        const res = await axiosClient.get(`places/readone/${placeId}`)

        const selectedPlace = res.data.data

        dispatch({
            type: "GET_PLACE",
            payload: selectedPlace
        })
    }

    return (
        <PlaceContext.Provider
            value={{
                places: globalState.places,
                singlePlace: globalState.singlePlace,
                getPlaces,
                getPlace
            }}
        >
            {props.children}
        </PlaceContext.Provider>
    )
}

export default PlaceState

