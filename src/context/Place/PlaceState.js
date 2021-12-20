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
        console.log(res);
        
        const list = res.data.data
        dispatch({
            type: "GET_PLACES",
            payload: list,
        })
    }

    const getPlace = async (placeId) => {

        const res = await axiosClient.get(`places/readone/${placeId}`)
        console.log(res)
        const selectedPlace = res.data.data
        console.log(selectedPlace);
        dispatch({
            type: "GET_PLACE",
            payload: selectedPlace
        })
    }

    const createPlace = async (form) => {
        const res = await axiosClient.post("places/create", form)
        console.log(res)
    }

    const updatePlace = async (form, idPlace) => {

        const res = await axiosClient.put(`places/edit/${idPlace}`, form)

        const updatedPlace = res.data.data

        dispatch({
            type: "UPDATE_PLACE",
            payload: updatedPlace
        })

    }

    const deletePlace = async (idPlace) => {
        const res = await axiosClient.delete(`places/delete/${idPlace}`)
    }

    return (
        <PlaceContext.Provider
            value={{
                places: globalState.places,
                singlePlace: globalState.singlePlace,
                getPlaces,
                getPlace,
                createPlace,
                updatePlace,
                deletePlace
            }}
        >
            {props.children}
        </PlaceContext.Provider>
    )
}

export default PlaceState

