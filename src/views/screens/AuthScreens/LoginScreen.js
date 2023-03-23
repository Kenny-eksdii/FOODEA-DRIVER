import { StyleSheet, TouchableOpacity, View, Alert, Linking, Switch, Image} from 'react-native'
import { useContext, useState} from 'react';
import { TextInput, Container, SafeAreaView, Button, Text} from '../../components/FoodeaComponents'
import { TextInput as TxtInput } from 'react-native-paper';
import Colors from '../../../utils/Colors';
import AuthContext from '../../../api/context/auth/AuthContext';
import * as yup from 'yup'
import { Formik } from 'formik'
// import {icons} from "../../../constants";
// // import { hide } from 'expo-splash-screen';

const mainURL = "https://foodea-website.herokuapp.com/rider_landing";
const secondaryURL = "https://foodea-website.herokuapp.com/rider_forgotpass"


const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const handleOnSubmit = (values) => {
        login(values.email, values.password, switchValue);
    }
    const [switchValue, setswitchValue] = useState(false);
    const toggleSwitch = (value) => {
        setswitchValue(value);
      } 
    const signInSchema = yup.object({
        email: yup.string().trim().email('Invalid Email').required('Email is required'),
        password: yup.string().trim().required('Password is required'),
    })

    const openURL = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert ('Dont know how to open this URL: ${url}');
        }
    }
    
 

    return (
            <SafeAreaView flex statusBarColor={'rgba(0, 0, 0, 0)'}>
                <Container style={{flex: 1,backgroundColor: '#FAFAFA'}} padding={25} center>
                    <Text size={26} weight='bold'>Log in to your account</Text>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={handleOnSubmit}
                            validationSchema={signInSchema}
                        >

                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <TextInput 
                                        label='Email' 
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        error={touched.email && errors.email ? true : false}
                                        errorMsg={touched.email && errors.email ? errors.email : ''}
                                        roundness={25}
                                        right={
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.black}
                                                // onPress={() => setHidePassword(!hidePassword)}
                                            />
                                        }
                                    />
                                    <TextInput 
                                        label='Password' 
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        error={touched.password && errors.password ? true : false}
                                        errorMsg={touched.password && errors.password ? errors.password : ''}
                                        secureTextEntry={isSecureEntry}
                                        roundness={25}
                                        right={
                                            // <TouchableOpacity onPress={() => {setIsSecureEntry((prev) => !prev);}}>
                                            //     <Image source={icons.showpass} style={{borderRadius: 12}}>{isSecureEntry? '' : hide}</Image>
                                            // </TouchableOpacity>
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.black}
                                                // onPress={() => setHidePassword(!hidePassword)}
                                            />
                                        }
                                    />
                                    <View style={{justifyContent:'flex-start', alignItems: 'flex-start', alignContent:'flex-start'}}>
                                        <View style={{backgroundColor:'#FAFAFA', flexDirection:'row'}}>
                                            <Switch 
                                                onValueChange={toggleSwitch}
                                                value={switchValue}
                                                trackColor={{false: "#D9D9D9", true: "#f99293"}}
                                                thumbColor={switchValue ? "#f00d0e" : "#f99293"}
                                            />
                                            <Text style={{fontSize:15, fontWeight:'light', paddingVertical: 15,}}> Remember Me </Text>
                                            {/* { switchValue == false?
                                                setswitchValue(false)
                                            :
                                                login.is_remember_me(true);
                                            }, */}
                                        </View>
                                        

                                    </View>

                                    <View style = {styles.button}>
                                    <Button 
                                        onPress={handleSubmit}
                                        title={'Sign In'}
                                    />
                                    </View>
                                    <TouchableOpacity onPress={() => {openURL(mainURL)}}>
                                        <Text style={{marginTop: 10}} color={Colors.black} center size={16} weight='bold' >Don't have an account? <Text color={Colors.primary} weight='medium'>Sign Up</Text></Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {openURL(secondaryURL)}}>
                                        <Text style={{marginTop: 20}} color={Colors.primary} center size={14} weight='bold'>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    
                                </>
                            )}
                        </Formik>
            </Container>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    forgotPassword: {
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 20,
    },
    button: {
        position:'relative',
        marginTop: 20,
        roundness:30,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
        marginBottom: 50
      },
})