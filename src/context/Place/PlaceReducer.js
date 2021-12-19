const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_PLACE":
            
            return {
                ...globalState,
                singlePlace: action.payload
            }

        case "GET_PLACES":

            return {
                ...globalState,
                countries: action.payload
            }
    
        default:
            return globalState
    }
}

export default reducer