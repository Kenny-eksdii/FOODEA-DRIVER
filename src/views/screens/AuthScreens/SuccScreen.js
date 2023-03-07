import { View, StyleSheet } from 'react-native'
import { Button, Container, Text } from '../../components/FoodeaComponents'
import React from 'react';
import Colors from "../../../utils/Colors";

const SuccScreen = ({navigation}) =>{

    const signInPress = () => {
    navigation.push("LoginScreen");
  }

  return (  
    <Container style={{flex: 1,backgroundColor: '#FAFAFA'}} center padding={20}>
      <View styles={styles.midContainer}>
        <Text style={{marginTop: 10}} color={Colors.black} center size={40} weight='bold'>
          CONGRATULATIONS!
        </Text>
        <Text style={{marginTop: 10}} color={Colors.black} center size={40} weight='bold'>You are all set, you've successfully changed your password!</Text>
      </View>
      <View styles={styles.button}>
        <Button
          onPress={signInPress}
          title="Go To Sign In"
        />
      </View>
        {/* <View style = {styles.midContainer}>
            <Text color={Colors.primary} size={40} weight='bold' center>CONGRATULATIONS!</Text>
            <Text center size={15} weight="bold" color={Colors.dark} style={{marginBottom: 50}}>
            You are all set, you've successfully changed your password!
            </Text>
        </View>
        <View style = {styles.button}>
            <Button
                onPress={signInPress}
                title="Go to Sign In" 
            />
        </View> */}
    </Container>
    )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#FAFAFA'
  },
  button: {
    marginTop: 2,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  midContainer : {
    paddingBottom: 400,
  }, titleText:{
    fontWeight: '700',
    fontSize: 30,
  }, bottomText: {
    fontWeight: '300',
    fontSize: 16,
  },
        
});

export default SuccScreen