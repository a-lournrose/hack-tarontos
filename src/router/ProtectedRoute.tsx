import {Navigate, Outlet} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext.tsx";

const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(AuthContext) || {};

    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
};

export default ProtectedRoute;