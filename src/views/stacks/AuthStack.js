import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPageScreen from '../screens/AuthScreens/LandingPageScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import Forgotpassword from '../screens/AuthScreens/Forgotpassword';
import Resetpassword from '../screens/AuthScreens/Resetpassword';
import Otp from '../screens/AuthScreens/Otp';
import Success from '../screens/AuthScreens/Success';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name={"LandingPageScreen"} 
            component={LandingPageScreen}
        />
        <Stack.Screen 
            options={{ headerShown:false }} 
            name="LoginScreen" 
            component={LoginScreen}
        />

        <Stack.Screen 
            options={{ headerShown:false }} 
            name="SignUpScreen" 
            component={SignUpScreen}
        />

        <Stack.Screen 
            options={{ headerShown:false }} 
            name="Forgotpassword" 
            component={Forgotpassword}
        />
        <Stack.Screen 
            options={{ headerShown:false }} 
            name="Resetpassword" 
            component={Resetpassword}
        />
        <Stack.Screen 
            options={{ headerShown:false }} 
            name="Otp" 
            component={Otp}
        />
        <Stack.Screen 
            options={{ headerShown:false }} 
            name="Success" 
            component={Success}
        />
    </Stack.Navigator>
  )
}

export default AuthStack