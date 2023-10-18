import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoutes;