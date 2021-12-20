const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_PLACE":
        case "UPDATE_PLACE":
            
            return {
                ...globalState,
                singlePlace: action.payload
            }

        case "GET_PLACES":
            
            return {
                ...globalState,
                places: action.payload
            }
    
        default:
            return globalState
    }
}

export default reducer