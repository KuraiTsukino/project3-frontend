
const reducer = (globalState, action) => {

    switch (action.type) {

        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload)
            
            return {
                ...globalState,
                authStatus: true
            }
        
        case "REGISTER_ERROR":
            return {
                ...globalState,
                authStatus: false,
                msg: action.payload,
            }

        case "UPDATE_USER":
            return {
                ...globalState,
                currentUser: action.payload
            }
       
        case "LOGOUT_USER":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload
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
