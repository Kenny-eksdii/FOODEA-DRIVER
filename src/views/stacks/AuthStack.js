import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPageScreen from '../screens/AuthScreens/LandingPageScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';

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
    </Stack.Navigator>
  )
}

export default AuthStack