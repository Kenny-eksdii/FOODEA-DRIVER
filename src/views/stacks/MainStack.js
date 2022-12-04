import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/MainScreens/TestScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"TestScreen"} 
            component = {TestScreen}
        />
    </Stack.Navigator>
  )
}

export default MainStack