import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedPath({isAuthenticated, children}){
    if(!isAuthenticated){
        <Navigate to = '/login' replace ></Navigate>
    }
    return children

}

export default ProtectedPath;