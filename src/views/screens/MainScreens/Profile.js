import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useContext } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import AuthContext from '../../../api/context/auth/AuthContext'

const Profile = ({ navigation }) => {
    const { logout, user } = useContext(AuthContext);


return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
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
        backgroundColor: '#000',
        borderRadius: 15,
      },
    topContainer: {
        flex: 1,
    },
})

export default Profile