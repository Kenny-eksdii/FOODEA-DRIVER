import React, { useState, createContext } from 'react';
import * as SecureStore from 'expo-secure-store'
import api from '../../context/auth/api'
import bcrypt from "bcryptjs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [logged_in, setLogged_in] = useState(false);
    const [userID, setUserID] = useState(false);
    const [lat, setLat] = useState();
    const [long, setLong] = useState();


    const login = async (email, password, is_remember_me = false) => {
        // setLoading(true)
        await api()
            .get(`riders`)
            .then((response) => {
                const userData = response.data;
                const userFound = userData.find(user => user.email === email);
                setUserID(userData[0].rider_id);
                console.log(userData[0].rider_id);

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

            await api()
            .patch(`riders/${user.rider_id}`,
                {
                latitude:lat,
                longitude:long,
                })
                .then((response) => {
                    console.log(lat);
                    console.log(long);
                })
                .catch((error) => {
                    if (error.message === 'Network Error') {
                        alert('No Internet Access')
                    } else {
                        // console.log(error)
                        // const errData = error.message
                        // alert(errData)
                    }
                })
    }

    


    const getUserInfo = async () => {
        SecureStore.setItemAsync('user', );
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
                setUser,
                logged_in,
                setLogged_in,
                userID,
                setLat,
                lat,
                setLong,
                long,

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
