import React, { useState, createContext } from 'react';
import * as SecureStore from 'expo-secure-store'
import api from '../../context/auth/api'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [logged_in, setLogged_in] = useState(false);


    // const login = async (email, password) => {
    //     setLoading(true)
    //     await api()
    //         .post('/token/login', { email, password })
    //         .then((response) => {
    //             const userData = response.data.data
    //             setUser(userData)
    //             setLogged_in('true')
    //             SecureStore.setItemAsync('user', JSON.stringify(userData))
    //             SecureStore.setItemAsync('logged_in', logged_in)
    //         })
    //         .catch((error) => {
    //             if (error.message === 'Network Error') {
    //                 alert('No Internet Access')
    //             } else {
    //                 console.log(error)
    //                 const errData = error.message
    //                 //setError(errData)
    //                 alert(errData)
    //             }
    //         })
    //         .finally(() => setLoading(false))
    // }

    // const logout = async () => {
    //     await api({ token: user.token })
    //         .post('/token/logout', {})
    //         .then((response) => {
    //             SecureStore.deleteItemAsync('user')
    //             SecureStore.deleteItemAsync('logged_in')
    //             setUser(null)
    //             setLogged_in('false')
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //         .finally(() => setLoading(false))
    // }











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
