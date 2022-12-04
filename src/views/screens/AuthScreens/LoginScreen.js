import { StyleSheet, TouchableOpacity} from 'react-native'
import { useContext } from 'react';
import { TextInput, Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import { TextInput as TxtInput } from 'react-native-paper';
import Colors from '../../../utils/Colors';
import AuthContext from '../../../api/context/auth/AuthContext';
import * as yup from 'yup'
import { Formik } from 'formik'


const LoginScreen = ({ navigation }) => {
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
                <Container padding={20} center>
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
                                        roundness={10}
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
                                        roundness={10}
                                        right={
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.primary}
                                                // onPress={() => setHidePassword(!hidePassword)}
                                            />
                                        }
                                    />
                                    <TouchableOpacity style={styles.forgotPassword}>
                                        <Text color={Colors.lighter} center size={12} weight='medium'>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <Button 
                                        style={{
                                            marginTop: 25,
                                            marginBottom: 5
                                        }}
                                        onPress={handleSubmit}
                                        title={'Sign In'}
                                    />

                                    <Text center weight='light'>or</Text>
                                    <Button 
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 10
                                        }}
                                        title={'Sign Up Using Google'}
                                    />
                                    <TouchableOpacity onPress={handleSignUpPress}>
                                        <Text style={{marginTop: 15}} color={Colors.dark} center weight='medium' size={16}>Don't have an account? <Text color={Colors.primary}>Sign Up</Text></Text>
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
        marginTop: 10
    },
    signup_text: {
        
    },
})