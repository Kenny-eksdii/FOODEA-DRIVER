import React from 'react'
import { SafeAreaView as SAView } from 'react-native-safe-area-context'
import { Dimensions, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const height = Dimensions.get('window').height

export const SafeAreaView = ({ children, flex, statusBarColor = 'rgba(0, 0, 0, 0)', style }) => {
    const flexStyle = flex ? { flex: 1 } : {}

    return (
        <SAView style={{ height: height, ...flexStyle, ...style }}>
            <StatusBar backgroundColor={statusBarColor} />

            {children}
        </SAView>
    )
}
