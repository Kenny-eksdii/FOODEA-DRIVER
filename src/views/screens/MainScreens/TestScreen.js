import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView,} from 'react-native'
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

        <View style={{backgroundColor: '#FAFAFA'}}>
            <View>
                <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 20,}}>TODAY STATUS</Text>
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

                <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10, marginTop: 15, }}>TRANSACTION HISTORY</Text>
            <View style={styles.TransactionHistory}>       
                <ScrollView>
                    <View style = {{flexDirection:'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 5,}}>
                        <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.User1}</Text>
                        <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.Price}</Text>
                    </View>
                </ScrollView>    
            </View>
            
        </View>
            <View style={{position:'absolute', bottom: 10, width: '100%', alignSelf:'center',}}>
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
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
    },
    ImageSize: {
        height: 30,
        width: 30,
    },
    Status:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 10,

    },
    TransactionHistory: {
        flexDirection: "row",
        height: '60%',
        paddingHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: "#",
        elevation: 1,
        bottom: 1,
    },
    userprofile:{
        height: 35,
        width: 35,
        marginLeft: 10,
    },
    StatusContainer: {
        backgroundColor: '#000',
    },
    todayStats: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 2,
        backgroundColor: "#FAFAFA",
        elevation: 10,
        marginBottom: 10,
    },
    button: {
        width: "80%",
        borderRadius: 20,
        borderColor:'#000',
    },
    valueSwitch: {
        alignItems: 'center',
      },
      valueSwitchOnline: {
        alignItems:'center',
        width: '100%',
        paddingHorizontal: 90,
      },
    });

export default TestScreen