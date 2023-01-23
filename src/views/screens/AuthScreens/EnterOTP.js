import { TouchableOpacity, StyleSheet, View } from "react-native"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";
import React from 'react';
import OTPInputView from "@twotalltotems/react-native-otp-input";

const EnterOTP = ({ navigation }) => {    

    const handleBackPress = () => {
        navigation.push('Forgotpassword');
    }

    const handleResetpassword = () => {
        navigation.push('Resetpassword');
    }

    const [timer, setTimer] = React.useState(60)

    return (
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{backgroundColor: '#cce7e8'}}>

            <View style = {styles.midContainer}>
              <TouchableOpacity onPress={handleBackPress}>
                <Text color={Colors.black} size={15} weight='bold' center style={{paddingRight: 80}}> Back </Text>
              </TouchableOpacity>
                <Text color={Colors.black} size={15} weight='bold' center> Step 2/3</Text>
            </View>

            <View style = {styles.forgot}>
              <Text size={35} weight='bold'>Enter OTP</Text> 
            </View>

            <View> 
              <Text weight='semi-bold' style={{paddingLeft: 13, paddingBottom: 20}}>An 4 digit code has been sent to + </Text>
            </View>

            <View
            style= {{
              flex: 1,
              margintop: 20
            }}
            >
              <OTPInputView
              pinCount={4}
              style={{
                width:"100%",
                height: 50
              }}
              codeInputFieldStyle={{
                width:65,
                height:64,
                borderRadius: 20,
                backgroundColor: Colors.grey,
                Colors: Colors.black,
              }}
              onCodeFilled = { (code) =>
              console.log(code)
            }
              
              >
              </OTPInputView>
              <View
              style={{
                flexDirection:'row',
                justifyContent: 'center',
                margintop: '20'
              }}
              >
                <text
                styles = {{
                  color:Colors.grey
                }}
                >
                  Didn't Receive Code?

                </text>
                <Textbutton>
                  label = { `Resend (${timer}s)`}
                  disabled = {timer == 0? false: true}
                  buttonContainerStyle = {{
                    marginLeft: 30,
                    backgroundColor: null
                  }}
                  labelStyle={{
                    color:Colors.primary,
                  }}
                </Textbutton>

              </View>

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
    midContainer: {
        paddingLeft: 13,
        paddingBottom: 170,
        flexDirection: 'row'
    },
    forgot: {
        paddingLeft: 13,
        paddingBottom: 20,
    }, 
    button: {
        marginTop: 2,
        paddingTop: 10,
        paddingBottom: 2,
        borderRadius: 15,
    }, 
    otpContainer: {
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
      otpBox: {
        paddingRight: 2,
        borderRadius: 5,
        borderColor: Colors.DEFAULT_GREEN,
      },
      otpText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
      },

})

export default EnterOTP

