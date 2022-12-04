import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Container, } from '../../components/FoodeaComponents';

const SignUpScreen = ({ navigation }) => {
  function handleLogin (){
    navigation.push("LoginScreen");
  }

  return (
    <SafeAreaView flex statusBarColor={'rgba(0, 0, 0, 0)'}>
    <View>
      <Text size={20} weight='bold'>THIS IS THE SIGN UP SCREEN, BACK MO LANG PARA BUMALIK SA LANDINGPAGE SCREEN </Text>
      </View>
    </SafeAreaView>
  )
}


export default SignUpScreen