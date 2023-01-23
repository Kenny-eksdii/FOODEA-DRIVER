import { View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useContext } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import AuthContext from '../../../api/context/auth/AuthContext'


const TestScreen = ({ navigation }) => {
    const { logout, user } = useContext(AuthContext);

    const handleStart = () => {
        navigation.push('Orders');
    }
    const handleProfile = ( ) => {
        navigation.push ('Profile');
    }
    



  return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
                <View style={styles.Status}>
                    <TouchableOpacity onPress={handleProfile}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Profile</Text>
                    </TouchableOpacity>
                    
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Status on/off</Text>    
                </View>

                    <Text style={{fontSize:15, fontWeight:'bold'}}>TODAY STATUS</Text>

                    <View style={styles.todayStats}>
                        <View style={styles.Orders}>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>ORDERS</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>1</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>2</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>3</Text>
                        </View>
                        <View style={styles.Earns}>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>EARNINGS</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>P1200</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>P10000</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>P1000000</Text>
                        </View>
                    </View>
                

                <Text style={{fontSize:15, fontWeight:'bold', marginTop:20}}>TOTAL EARNINGS</Text>
                <View style={styles.earningscontainer}>
                    <View style={styles.earningscontent}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>EARNINGS</Text>
                        <Text style={{fontSize:10, fontWeight:'bold'}}>P1234</Text>
                    </View>
                    <View style={styles.earningscontent}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>ORDERS</Text>
                        <Text style={{fontSize:10, fontWeight:'bold'}}>20</Text>
                    </View>
                </View>
                <View style={styles.Map}>
                    <Text> THIS IS THE MAP

                    </Text>

                </View>
                                    <View style = {styles.button}>
                                    <Button 
                                        onPress={handleStart}
                                        title={'START EARNING'}
                                    />
                                    </View>
                                    <View style = {styles.button}>
                                    <Button 
                                        onPress={logout}
                                        title={'Log Out'}
                                    />
                                    </View>

    
        </Container>
    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
    todayStats: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        borderRadius: 10,
        borderColor: "#F54748",
        borderWidth: 1,
        borderColor: "#F54748",
    },
    Earns: {
        marginTop: 5,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 150,
    },
    Orders: {
        marginTop: 5,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
    },
    Status:{
        backgroundColor: '#FAFAFA',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:30,
    },
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
    earningscontainer: {
        paddingHorizontal: 15,
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 1,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
    earningscontent:{
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: 10,
    },
    Map: {
        paddingHorizontal: 15,
        marginTop: 1,
        marginBottom: 10,
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
    button: {
        width: "50%",
        marginTop: 10,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 20,
        borderColor:'#000',
    },
    });

export default TestScreen