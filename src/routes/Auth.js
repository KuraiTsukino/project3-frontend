import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from "react-router-dom"
import UserContext from "./../context/User/UserContext"

export default function AuthRoute({ component: Component, ...props}) {

    const userCtx = useContext(UserContext)
    // Contexto de usuario, antes de entrar a registro se ejecuta el Auth
    const { authStatus, verifyingToken } = userCtx

    const[loading, setLoading] = useState(true)

    useEffect(async () => {
        await verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (
        <>
          {
            authStatus ?
            (<Navigate replace to="/" />)
            :
            (<Component />)
          }  
        </>
    )
}
