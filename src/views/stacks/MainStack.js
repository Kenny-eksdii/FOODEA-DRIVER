import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/MainScreens/TestScreen';
import Orders from '../screens/MainScreens/Orders';
import Profile from '../screens/MainScreens/Profile';
import MapDirection from '../screens/MainScreens/MapDirection';
import DeliveryRecord from '../screens/EarnedScreens/DeliveryRecord';


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
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"Profile"} 
            component = {Profile}
        />
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"MapDirection"} 
            component = {MapDirection}
        />
        <Stack.Screen 
            options ={{ headerShown:false }} 
            name = {"DeliveryRecord"} 
            component = {DeliveryRecord}
        />
        
    </Stack.Navigator>
  )
}

export default MainStack