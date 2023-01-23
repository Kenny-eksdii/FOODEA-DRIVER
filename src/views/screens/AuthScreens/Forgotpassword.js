import React from 'react'
import { TouchableOpacity, StyleSheet, View } from "react-native"
import { TextInput, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";
import * as yup from 'yup'
import { Formik } from 'formik'

const Forgotpassword = ({ navigation }) => {

    const handleMainScreenPress = () => {
        navigation.push('LoginScreen');
    }

    const handleEnterOTP = () => {
        navigation.push("Otp");
    }

    const signInSchema = yup.object({
        email: yup.string().trim().email('Invalid Email').required('Email is required'),
    })

return (
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container padding={25} center style={{flex: 1,backgroundColor: '#FAFAFA'}}>

            <View style = {styles.midContainer}>
                <TouchableOpacity onPress={handleMainScreenPress}>
                    <Text color={Colors.black} size={15} weight='bold' center > Back </Text>
                </TouchableOpacity>
                    <Text color={Colors.black} size={15} weight='bold' center style={{paddingRight: 50}}> Step 1/3</Text>
            </View>

            <View style = {styles.forgot}>
                <Text size={35} weight='bold'>Forgot {'\n'}Password</Text> 
            </View> 

            <View> 
                <Text weight='light' style={{ paddingBottom: 20}}>Don't worry! It happens. Please enter the address associated with your account. </Text>
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
                                    ></TextInput>
                                        )}
                                        
    </Formik>
                                    <View style = {styles.button}>
                                            <Button
                                                onPress={handleEnterOTP}
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
        paddingBottom: 170,
        flexDirection: 'row',
        justifyContent: "space-between",
        
    },
    forgot: {
        paddingBottom: 20,
    }, 
    button: {
        width: '50%',
        marginLeft: 80,
        position:'relative',
        marginTop: 10,
        marginTop: 20,
        roundness:10,
    }

});

export default Forgotpassword