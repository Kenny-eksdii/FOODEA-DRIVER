import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useContext } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import AuthContext from '../../../api/context/auth/AuthContext'

const Profile = ({ navigation }) => {
    const ToLandingPage = () => {
        navigation.push('TestScreen');
    }
    const { logout } = useContext(AuthContext);


return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
            <View style = {styles.backbutton}>
                <Button
                    onPress={ToLandingPage}
                    title = "Back"
                />
            </View>

            <View style = {styles.button}>
                <Button
                    onPress={logout}
                    title="Log out" 
                />
            </View>
            
        </Container>
    </SafeAreaView>

)}
const styles = StyleSheet.create({
    button: {
        width: '50%',
        marginLeft: 80,
        position:'relative',
        marginTop: 20,
        roundness:50,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
      },
    backbutton: {
        width: '25%',
        marginLeft: 1,
        marginTop: 35,
        roundness:50,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#000',
        borderRadius: 15,
      },
    topContainer: {
        flex: 1,
    },
})

export default Profile