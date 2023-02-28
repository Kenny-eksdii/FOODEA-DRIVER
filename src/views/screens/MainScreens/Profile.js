import { View, StyleSheet, Image,  TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Container, SafeAreaView, Button,Text  } from '../../components/FoodeaComponents'
import AuthContext from '../../../api/context/auth/AuthContext'
import Colors from '../../../utils/Colors';
import images from '../../../utils/image';
import DriverDetails from '../../../utils/DriverDetails';



const Profile = ({ navigation }) => {
    const ToLandingPage = () => {
        navigation.push('TestScreen');
    }
    const { logout } = useContext(AuthContext);
    const [name, setname] = useState(DriverDetails.name);
    const [age, setage] = useState(DriverDetails.age);
    const [email, setemail] = useState(DriverDetails.email);



return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <ScrollView style={{flex: 1,backgroundColor: '#FAFAFA'}} padding={25} center>
            <View style = {styles.backbutton}>
                <Button
                    onPress={ToLandingPage}
                    title = "Back"
                />
            </View>

            <View style = { styles.UserContainer}>
                <Image source={DriverDetails.profile} style={styles.userprofile} />
                <Text
                    textAlign= 'center'
                    >NAME
                </Text>

                <TextInput
                    style={styles.txtinput}
                    textAlign= 'center'
                    editable={false}
                    placeholderTextColor={'#EA4D4E'}
                    onChangeText={(text) => setname(text)}
                    value={name}
                />

                <Text
                    textAlign= 'center'
                    >AGE
                </Text>
                
                <TextInput
                    style={styles.txtinput}
                    textAlign= 'center'
                    editable={false}
                    placeholderTextColor={'#EA4D4E'}
                    onChangeText={(text) => setage(text)}
                    value={age}
                />

                <Text
                    textAlign= 'center'
                    >EMAIL ADDRESS
                </Text>
                
                <TextInput
                    style={styles.txtinput}
                    textAlign= 'center'
                    editable={false}
                    placeholderTextColor={'#EA4D4E'}
                    onChangeText={(text) => setemail(text)}
                    value={email}
                />

            </View>
            <View style = {styles.button}>
                <Button
                    onPress={logout}
                    title="Log out" 
                />
            </View>


           
            
        </ScrollView>
    </SafeAreaView>

)}
const styles = StyleSheet.create({
    button: {
        width: '50%',
        marginLeft: 90,
        position:'relative',
        roundness:50,
        paddingTop: 1,
        paddingBottom: 1,
        backgroundColor: '#000',
        borderRadius: 20,
        
      },
    backbutton: {
        width: '25%',
        marginLeft: 1,
        roundness:50,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#000',
        borderRadius: 15,
      },
    userprofile:{
        height: 150,
        width: 150,
        marginLeft: 10,
        marginBottom: 30,
        alignContent: 'center',
        justifyContent: 'center',
    },
    UserContainer: {
        alignItems:'center',
    },
    txtinput: {
        height: 40,
        width: 300,
        borderColor: '#EA4D4E',
        borderWidth: 1,
        marginBottom: 10,
      },
})

export default Profile