import { Text, View,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput as TxtInput } from 'react-native-paper';
import { SafeAreaView, Container,Button,TextInput} from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";
import { Formik } from 'formik';



const Resetpassword = ({ navigation }) => {


    const handleForgotpasswordPress = () => {
        navigation.push('LoginScreen');
    }

    const HandleLogIn = () => {
        navigation.push("LoginScreen");
    }

return (
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{flex: 1,backgroundColor: '#cce7e8'}}>

    <View style = {styles.topContainer}>
    <TouchableOpacity onPress={handleForgotpasswordPress}>
        <Text color={Colors.black} size={15} weight='bold' center style={{paddingRight: 80}}> Back </Text>
            </TouchableOpacity>

            <Text color={Colors.black} size={15} weight='bold' center> Step 3/3</Text>
        </View>
    <View style = {styles.Rests}>
        <Text size={35} weight='bold'>Reset {'\n'}Password</Text> 
        </View>
    

    <Formik>
    {({ handleChange, handleBlur }) => (
                                    
                                    <TextInput 
                                        label='Password' 
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        roundness={10}
                                        right={
                                            <TxtInput.Icon
                                                name="eye"
                                                color={Colors.white}
                                            />
                                        }
                                    />
        )}
    </Formik>
                                    <View style = {styles.button}>
                                        <Button
                                            onPress={HandleLogIn}
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
    topContainer: {
        paddingLeft: 13,
        paddingBottom: 170,
        flexDirection: 'row'
    },
    Rests: {
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

export default Resetpassword