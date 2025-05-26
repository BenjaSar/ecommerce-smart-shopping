import { Outlet, Navigate } from "react-router-dom";


function PrivateRoutes(isAuthenticated, children){
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    return children
}

export default PrivateRoutes;