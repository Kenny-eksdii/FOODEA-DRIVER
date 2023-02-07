import { View, StyleSheet, TouchableOpacity, Image, Switch, } from 'react-native'
import React, { useState } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image'
import Colors from '../../../utils/Colors';


const TestScreen = ({ navigation }) => {
    const [switchValue, setswitchValue] = useState(false);
    const toggleSwitch = (value) => {
      setswitchValue(value);
    }
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
                        <Image source={images.user} style={styles.userprofile} onPress = {handleProfile} />
                        <Text>MY PROFILE</Text>
                    </TouchableOpacity>
                    
                        <Switch 
                            onValueChange={toggleSwitch}
                            value={switchValue}
                            trackColor={{false: "#D9D9D9", true: "#f99293"}}
                            thumbColor={switchValue ? "#f00d0e" : "#f99293"}
                        />  
                </View>

                    <Text style={{fontSize:16, fontWeight:'bold'}}>TODAY STATUS</Text>

                    <View style={styles.todayStats}>
                        <View style={styles.Orders}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>ORDER</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>1</Text>
                        </View>
                        <View style={styles.Earns}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>EARNINGS</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>P1200</Text>
                        </View>
                    </View>
                
                    <View style={styles.Map}>
                        <Text>
                            THIS IS THE MAP
                        </Text>
                    </View>

            <View>
                { switchValue == false?
                    <View style={styles.valueSwitch}>
                        <Text style={{fontWeight: 'bold'}} color={Colors.primary}>"CURRENTLY OFFLINE"</Text>
                    </View>
          :
                <View style={styles.valueSwitchOnline}>
                    <View style = {styles.button}>
                        <Button 
                            onPress={handleStart}
                            title={'START EARNING'}
                        />
                    </View>
                </View>
                }
            </View>  


        </Container>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
    Status:{
        backgroundColor: '#FAFAFA',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
        marginBottom:20,
    },
    userprofile:{
        height: 35,
        width: 35,
        marginLeft: 10,
        flexDirection: "row",
    },
    todayStats: {
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        borderRadius: 10,
        backgroundColor: "#F54748",
        borderColor: "#F54748",
        borderWidth: 1,
    },
    Orders: {
        marginTop: 5,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
    },
    Earns: {
        marginTop: 5,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 150,
    },
    Map: {
        paddingHorizontal: 15,
        marginTop: 10,
        height: 450,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
    button: {
        width: "40%",
        paddingTop: 20,
        paddingBottom: 2,
        borderRadius: 20,
        borderColor:'#000',
    },
    valueSwitch: {
        fontSize: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
      },
      valueSwitchOnline: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        
      },
    });

export default TestScreen