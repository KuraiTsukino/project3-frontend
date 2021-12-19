
const reducer = (globalState, action) => {

    switch (action.type) {

        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload)
            
            return {
                ...globalState,
                authStatus: true
            }
        
        case "GET_DATA_USER":

            return{
                ...globalState,
                authStatus: true,
                currentUser: action.payload
            }
    
        default:
            return globalState
    }

}

export default reducer
