import React, { useState, createContext } from 'react';
import * as SecureStore from 'expo-secure-store'
import api from '../../context/auth/api'
import bcrypt from "bcryptjs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [logged_in, setLogged_in] = useState(false);


    const login = async (email, password, is_remember_me = false) => {
        // setLoading(true)
        await api()
            .get('riders')
            .then((response) => {
                const userData = response.data;
                const userFound = userData.find(user => user.email === email);

                if(userFound){
                    bcrypt.compare(password, userFound.password, (err, result) => {
                        if (err) {
                            console.error(err);
                        } else if (result) {
                            /* Codes here if password is matched */
                            
                            /* set the state to logged in user */
                            setUser(userFound)
                            setLogged_in('true')

                            if(is_remember_me){
                                /* save to local storage */
                                SecureStore.setItemAsync('user', JSON.stringify(userFound))
                                SecureStore.setItemAsync('logged_in', 'true')
                            }
                        } else {
                            /* Codes here if password is not matched */
                            alert("Password not match");

                        }
                    });
                }
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    alert('No Internet Access')
                } else {
                    console.log(error)
                    const errData = error.message
                    //setError(errData)
                    alert(errData)
                }
            })
            // .finally(() => setLoading(false))
    }

    const getUserInfo = async () => {
        SecureStore.setItemAsync('user', );
    }

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

    // const login = (email, password) => {

    //     if(email == 'test@gmail.com' && password == 'test'){
    //         let sampleUser = {id: '001', name: 'Jane Doe'};
    //         setUser(sampleUser);
    //         setLogged_in(true);
    //         SecureStore.setItemAsync('user', JSON.stringify(sampleUser))
    //         SecureStore.setItemAsync('logged_in', 'true')
    //     }
    // }

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
                setUser,
                logged_in,
                setLogged_in
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
