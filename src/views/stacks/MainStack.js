import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/MainScreens/TestScreen';
import Orders from '../screens/MainScreens/Orders';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"TestScreen"} 
            component = {TestScreen}
        />
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"Orders"} 
            component = {Orders}
        />
        
    </Stack.Navigator>
  )
}

export default MainStack