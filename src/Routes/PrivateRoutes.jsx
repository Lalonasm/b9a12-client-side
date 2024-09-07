import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    // const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return 'please wait...'
    if (user) return children;

    return <Navigate to={'/login'} state={location.pathname} replace='true'></Navigate>
};

export default PrivateRoutes;