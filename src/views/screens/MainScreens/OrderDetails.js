import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView, FlatList} from 'react-native'
import React, { useState } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import Colors from '../../../utils/Colors';
import HistoryOrders from '../../../utils/HistoryOrders';


const OrderDetails = ({ navigation }) => {
    const HandleMap = () => {
        navigation.push("MapDirections");
    }


  return (
    <SafeAreaView flex={1} center statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} center padding={10}>

                <View styles= {styles.StatusContainer}>
                    <View styles={styles.HistoryContainer}> 
                        <View styles={{flexDirection: 'row',}}>
                            <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10,}}>THIS IS THE ORDER DETAILS</Text>
                        </View>
                    </View>
                    <View style={styles.TransactionHistory}>
                        
                            <ScrollView style={styles.scroll}>

                                <View style = {{flexDirection:'COLUMN', justifyContent: 'space-between', paddingHorizontal:20}}>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.User1}</Text>
                                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>{HistoryOrders.Price}</Text> 

                                </View>
                            </ScrollView>
                    </View>
                        <View style = {styles.button}>
                            <Button
                                onPress={HandleMap}
                                title="Go To Map" 
                            />
                        </View>
                </View>
        </Container>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    scroll:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: '150%',
        borderRadius: 1,
        elevation: 1,
        marginTop: -25

    },
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
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        height: '50%',
        width: '100%',
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

export default OrderDetails