import React, { useState, createContext } from 'react';
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [logged_in, setLogged_in] = useState(false);

    const login = (email, password) => {

        if(email == 'test@gmail.com' && password == 'test'){
            let sampleUser = {id: '001', name: 'Jane Doe'};
            setUser(sampleUser);
            setLogged_in(true);
            SecureStore.setItemAsync('user', JSON.stringify(sampleUser))
            SecureStore.setItemAsync('logged_in', 'true')
        }
    }

    const logout = () => {
        setUser(false);
        setLogged_in(false);
        SecureStore.deleteItemAsync('user');
        SecureStore.deleteItemAsync('logged_in');
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                user,
                logged_in
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
