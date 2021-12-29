import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../ContextApi/useAuth';





const PrivetRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { user } = useAuth();

    return user.email ? children :
        <Navigate to="/login"
            replace
            state={{ path: location.pathname }}
        />;
};

export default PrivetRoute;