import React from 'react'
import {Navigate} from 'react-router-dom'
export default function ProtectedRoute (props) {
    const {routeLoc, token, children} = props
    return(
        <div>
{token ? children : <Navigate to={routeLoc} />}
        </div>
    )
}