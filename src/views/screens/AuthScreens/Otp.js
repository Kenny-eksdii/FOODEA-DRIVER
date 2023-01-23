import { TouchableOpacity, StyleSheet, View } from "react-native"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import React from 'react';
import Colors from "../../../utils/Colors";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }) => {    

    const handleBackPress = () => {
        navigation.push('Forgotpassword');
    }

    const handleResetpassword = () => {
        navigation.push('Resetpassword');
    }


    return (
        <SafeAreaView flex={1} style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
            <Container padding={20} center style={{backgroundColor: '#FAFAFA'}}>
                <View style = {styles.midContainer}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <Text color={Colors.black} size={15} weight='bold' center style={{paddingRight: 80}}> Back </Text>
                    </TouchableOpacity>
                        <Text color={Colors.black} size={15} weight='bold' center> Step 2/3</Text>
                </View>

                <View style = {styles.forgot}>
                    <Text size={35} weight='bold'>Enter OTP</Text> 
                </View>

                <View style = {styles.box}>
                    <Text size={35} weight='bold'>THIS IS THE BOX BOX</Text> 
                </View>


                <View> 
                    <Text weight='semi-bold' style={{paddingLeft: 13, paddingBottom: 20}}>An 4 digit code has been sent to your email / number </Text>
                </View>

              <View
              style={{
                flexDirection:'row',
                justifyContent: 'center',
                margintop: '20'
              }}
              >
                <Text
                styles = {{
                  color:Colors.grey
                }}
                >
                  Didn't Receive Code?
                </Text>
              </View>

                <View style = {styles.button}>
                    <Button
                    onPress={handleResetpassword}
                    title="Submit" 
                    />
                </View>
        
        
            </Container>
        </SafeAreaView>
            )
}

const styles = StyleSheet.create({
    topContainer: {
      flex: 1
    },
    box:{
      paddingBottom: 50,  
    },
    midContainer: {
        paddingBottom: 170,
        flexDirection: 'row'
    },
    forgot: {

    }, 
    button: {
        marginTop: 2,
        paddingTop: 10,
        paddingBottom: 2,
        marginTop: 20,
    }, 
    })


export default Otp