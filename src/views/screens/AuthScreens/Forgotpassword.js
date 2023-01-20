import React from 'react'
import { TouchableOpacity, StyleSheet, View } from "react-native"
import { TextInput, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import { TextInput as TxtInput } from 'react-native-paper';
import Colors from "../../../utils/Colors";
import * as yup from 'yup'
import { Formik } from 'formik'

const Forgotpassword = ({ navigation }) => {

    const handleMainScreenPress = () => {
        navigation.push('LoginScreen');
    }

    const EnterOTP = () => {
        navigation.push("EnterOTP");
    }

    const signInSchema = yup.object({
        email: yup.string().trim().email('Invalid Email').required('Email is required'),
    })

return (
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{flex: 1,backgroundColor: '#cce7e8'}}>

            <View style = {styles.midContainer}>
                <TouchableOpacity onPress={handleMainScreenPress}>
                    <Text color={Colors.black} size={15} weight='bold' center style={{paddingRight: 80}}> Back </Text>
                </TouchableOpacity>

                    <Text color={Colors.black} size={15} weight='bold' center> Step 1/3</Text>
            </View>

            <View style = {styles.forgot}>
                    <Text size={35} weight='bold'>Forgot {'\n'}Password</Text> 
            </View> 

            <View> 
                    <Text weight='light' style={{paddingLeft: 13, paddingBottom: 20}}>Don't worry! It happens. Please enter the address associated with your account. </Text>
            </View>

    <Formik
        initialValues={{ email: ''}}
        validationSchema={signInSchema}
        >
    {({ handleChange, handleBlur, }) => (
                                    
                                    <TextInput
                                        label='Email or Phone Number' 
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        roundness={10}
                                        right={
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.black}
                                            />
                                        }
                                    ></TextInput>
                                        )}
                                        
    </Formik>
                                    <View style = {styles.button}>
                                            <Button
                                                onPress={EnterOTP}
                                                title="Submit" 
                                            />
                                    </View>                  
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA'
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
    }

});

export default Forgotpassword