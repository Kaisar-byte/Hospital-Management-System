import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoutes;