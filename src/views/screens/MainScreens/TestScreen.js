import { View } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../../../api/context/auth/AuthContext'
import { Button, Text } from '../../components/FoodeaComponents'

const TestScreen = () => {

    const { logout, user } = useContext(AuthContext);


  return (
    <View>
        <Text size={42} weight='bold'>Hello {user.name}</Text>
        <Text size={42} weight='semi-bold'>THIS IS THE MAIN SCREEN </Text>
        <Button 
            onPress={logout}
            title='logout'
        />
    </View>
  )
}

export default TestScreen