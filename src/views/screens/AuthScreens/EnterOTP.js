import { TouchableOpacity, StyleSheet, View } from "react-native"
import { TextInput, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";
import React, {useRef, useState} from 'react';

const EnterOTP = ({ navigation }) => {    

    const handleOtpSubmitPress = () => {
        navigation.push('Forgotpassword');
    }
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});


    const Resetpassword = () => {
        navigation.push('Resetpassword');
    }


    return (
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{backgroundColor: '#cce7e8'}}>

            <View style = {styles.midContainer}>
                <TouchableOpacity onPress={handleOtpSubmitPress}>
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

            <View style={styles.otpContainer}>
              <View style={styles.otpBox}>
                      <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={firstInput}
                        onChangeText={text => {
                          setOtp({...otp, 1: text});
                        }}
                      />
              </View>

                    <View style={styles.otpBox}>
                      <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={secondInput}
                        onChangeText={text => {
                          setOtp({...otp, 2: text});
                        
                        }}
                      />
                    </View>

                    <View style={styles.otpBox}>
                      <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={thirdInput}
                        onChangeText={text => {
                          setOtp({...otp, 3: text});
                        }}
                      />
                    </View>

                    <View style={styles.otpBox}>
                      <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={fourthInput}
                        onChangeText={text => {
                          setOtp({...otp, 4: text});
                        }}
                      />
                    </View>
            </View>
                                                    
            <View style = {styles.button}>
              <Button
              onPress={Resetpassword}
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
      }

})

export default EnterOTP

