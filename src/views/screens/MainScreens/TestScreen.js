import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image'
import Colors from '../../../utils/Colors';
import DriverDetails from '../../../utils/DriverDetails';
import HistoryOrders from '../../../utils/HistoryOrders';


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
    <SafeAreaView flex={1} center statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} center padding={10}>
                <View style={styles.Status}>
                    
                    <TouchableOpacity onPress={handleProfile}>
                        <Image source={images.user} style={styles.userprofile} onPress = {handleProfile} />
                    </TouchableOpacity>
                    
                        <Switch 
                            onValueChange={toggleSwitch}
                            value={switchValue}
                            trackColor={{false: "#D9D9D9", true: "#f99293"}}
                            thumbColor={switchValue ? "#f00d0e" : "#f99293"}
                        />  
                </View>

                <View styles= {styles.StatusContainer}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10,}}>TODAY STATUS</Text>
                    </View>
                    
                        <View style={styles.todayStats}>
                            <View style = {{flexDirection: 'row'}}>
                                <View style = {{paddingHorizontal:20}}>
                                    <Image center source={images.Orders} style={styles.ImageSize}/>
                                </View>

                                <View>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{DriverDetails.OrderNo}</Text>
                                </View>
                            </View>

                            <View style = {{flexDirection: 'row', paddingHorizontal: 20,}}>
                                <View style = {{paddingHorizontal:20}}>
                                    <Image center source={images.Earn} style={styles.ImageSize}/>
                                </View>

                                <View>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{DriverDetails.Earnings}</Text>
                                </View>
                            </View>
                        </View>
                    <View styles={styles.HistoryContainer}> 
                        <View styles={{flexDirection: 'row'}}>
                            <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10,}}>TRANSACTION HISTORY</Text>
                        </View>
                    </View>
                    <View style={styles.TransactionHistory}>
                            <ScrollView style={{flexDirection: 'column'}}>
                                <View style = {{flexDirection:'row', justifyContent: 'space-between', paddingHorizontal:20}}>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.User1}</Text>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.Price}</Text>
                                </View>
                            </ScrollView>

                        
                    </View>
                </View>

            <View>
                { switchValue == false?
                    <View style={styles.valueSwitch}>
                        <Text style={{fontWeight: 'bold'}} color={Colors.primary}>"YOU ARE CURRENTLY OFFLINE"</Text>
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
        backgroundColor: '#FAFAFA',
        flex:1,
    },
    Historyicon: {
        height: 5,
        width: 5,
    },
    ImageSize: {
        height: 30,
        width: 30,
    },
    Status:{
        backgroundColor: '#FAFAFA',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    HistoryContainer: {
        backgroundColor: '#FAFAFA',
    },
    TransactionHistory: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        height: '50%',
        elevation: 1,
    },
    userprofile:{
        height: 35,
        width: 35,
        marginLeft: 10,
        flexDirection: "row",
    },
    StatusContainer: {
        backgroundColor: '#FAFAFA',
    },
    todayStats: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        height: '15%',
        borderRadius: 10,
        backgroundColor: "#FAFAFA",
        elevation: 10,
    },
    button: {
        width: "80%",
        paddingTop: 20,
        paddingBottom: 2,
        borderRadius: 20,
        borderColor:'#000',
    },
    valueSwitch: {
        fontSize: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      valueSwitchOnline: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',

      },
    });

export default TestScreen