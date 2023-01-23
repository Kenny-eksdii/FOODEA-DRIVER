import { StyleSheet, TouchableOpacity, View} from 'react-native'
import { useContext } from 'react';
import { TextInput, Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import { TextInput as TxtInput } from 'react-native-paper';
import Colors from '../../../utils/Colors';
import AuthContext from '../../../api/context/auth/AuthContext';
import * as yup from 'yup'
import { Formik } from 'formik'


const LoginScreen = ({ navigation }) => {
    const handleForgotPassword = () => {
        navigation.push('Forgotpassword');
    }
    
    const { login } = useContext(AuthContext)

    const handleOnSubmit = (values) => {
        login(values.email, values.password);
    }
    const handleSignUpPress = () => {
        navigation.push('SignUpScreen');
    }
    
  
    const signInSchema = yup.object({
        email: yup.string().trim().email('Invalid Email').required('Email is required'),
        password: yup.string().trim().required('Password is required'),
    })


 

    return (
            <SafeAreaView flex statusBarColor={'rgba(0, 0, 0, 0)'}>
                <Container style={{flex: 1,backgroundColor: '#FAFAFA'}} padding={25} center>
                    <Text size={26} weight='medium'>Log in to your account</Text>
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
                                        secureTextEntry
                                        roundness={25}
                                        right={
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.primary}
                                                // onPress={() => setHidePassword(!hidePassword)}
                                            />
                                        }
                                    />

                                     <View style = {styles.button}>
                                    <Button 
                                        onPress={handleSubmit}
                                        title={'Sign In'}
                                    />
                                    </View>

                                    <TouchableOpacity onPress={handleForgotPassword}>
                                        <Text style={{marginTop: 20}} color={Colors.black} center size={12} weight='bold'>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleSignUpPress}>
                                        <Text style={{marginTop: 10}} color={Colors.black} center size={16} weight='bold' >Don't have an account? <Text color={Colors.primary} weight='medium'>Sign Up</Text></Text>
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
        backgroundColor: '#000',
        borderRadius: 15,
        marginBottom: 50
      },
})