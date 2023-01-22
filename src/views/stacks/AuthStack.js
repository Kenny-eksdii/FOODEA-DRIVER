import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPageScreen from '../screens/AuthScreens/LandingPageScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import Forgotpassword from '../screens/AuthScreens/Forgotpassword';
import EnterOTP from '../screens/AuthScreens/EnterOTP';
import Resetpassword from '../screens/AuthScreens/Resetpassword';

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
            name="EnterOTP" 
            component={EnterOTP}
        />
        <Stack.Screen 
            options={{ headerShown:false }} 
            name="Resetpassword" 
            component={Resetpassword}
        />
    </Stack.Navigator>
  )
}

export default AuthStack