import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allDetails = useFirebase();
    return (
        <AuthContext.Provider value={allDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;