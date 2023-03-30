import React from 'react';
import { createNativeStackNavigator, BottomTabBar } from '@react-navigation/native-stack';
import TestScreen from '../screens/MainScreens/TestScreen';
import Orders from '../screens/MainScreens/Orders';
import Profile from '../screens/MainScreens/Profile';
import MapDirection from '../screens/MainScreens/MapDirection';
import CaptureProcess from '../screens/MainScreens/CaptureProcess';
import OrderDetails from '../screens/MainScreens/OrderDetails';
import PickUpMap from '../screens/MainScreens/PickUpMap';
import DeliveryRecord from '../screens/MainScreens/DeliveryRecord';
import { TransactionProvider } from '../../api/context/transactions/TransactionContext';
import { OrderProvider } from '../../api/context/Orders/OrderContext';
import UserOrderDetails from '../screens/MainScreens/UserOrderDetails';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <OrderProvider>
        <TransactionProvider>
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
                    name = {"CaptureProcess"} 
                    component = {CaptureProcess}
                />
                <Stack.Screen 
                    options ={{ headerShown:false }} 
                    name = {"OrderDetails"} 
                    component = {OrderDetails}
                />
                <Stack.Screen 
                    options ={{ headerShown:false }} 
                    name = {"PickUpMap"} 
                    component = {PickUpMap}
                />
                <Stack.Screen 
                    options ={{ headerShown:false }} 
                    name = {"DeliveryRecord"} 
                    component = {DeliveryRecord}
                />
                <Stack.Screen 
                    options ={{ headerShown:false }} 
                    name = {"UserOrderDetails"} 
                    component = {UserOrderDetails}
                />
                
            </Stack.Navigator>
        </TransactionProvider>
    </OrderProvider>

  )
}

export default MainStack