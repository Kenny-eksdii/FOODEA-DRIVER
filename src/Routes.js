import { useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './views/stacks/AuthStack';
import MainStack from './views/stacks/MainStack';
import AuthContext from './api/context/auth/AuthContext'


export default function App() {
    const { 
        logged_in, 
        setUser,
        setLogged_in
    } = useContext(AuthContext);

    useEffect(() => {

        SecureStore.getItemAsync('user')
            .then((response) => {
                let user = JSON.parse(response)
                if (user) {
                    setUser(user)
                    setLogged_in(true)
                }
            })
            .catch((error) => console.log(error))
    }, [])


    return (
        <NavigationContainer>
            {/* <MainStack /> */}
            { logged_in ? <MainStack /> : <AuthStack /> }
        </NavigationContainer>
    );
}


