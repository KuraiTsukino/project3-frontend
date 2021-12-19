const reducer = (globalState, action) => {

    switch (action.type) {
        case "GET_COUNTRY":
            
            return {
                ...globalState,
                singleCountry: action.payload
            }
        case "GET_COUNTRIES":

            return {
                ...globalState,
                countries: action.payload
            }
    
        default:
            return globalState
    }
}

export default reducer