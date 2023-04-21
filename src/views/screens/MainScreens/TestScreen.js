import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView, Dimensions, FlatList} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image';
import {
    icons,
    FONTS,
    SIZES,
  } from "../../../constants";
import Colors from '../../../utils/Colors';
import TransactionContext from '../../../api/context/transactions/TransactionContext';
import * as Location from 'expo-location';
import AuthContext from '../../../api/context/auth/AuthContext';


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
    const window = Dimensions.get('screen');

    const { transactions, getTransactions} = useContext(TransactionContext);
    
    const [count, setCount] = useState(0);

    const {setLat, lat, long, setLong, user} = useContext(AuthContext);


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                console.log("Permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
              console.log(location);
              setLat(location.coords.latitude)
              setLong(location.coords.longitude)
            })();

        getTransactions();
        const interval = setInterval(() => {
            getTransactions();
            setCount(count => count + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


return (
    <Container style={styles.topContainer} center padding={10}>
        <View style={styles.Status}>
            <TouchableOpacity onPress={handleProfile}>
                <Image source={{ uri: user.rider_documents.rider_photo }} style={styles.userprofile} onPress = {handleProfile} />
                    {/* <Text>{lat}</Text>
                    <Text>{long}</Text> */}
            </TouchableOpacity>
                    
            <Switch 
                onValueChange={toggleSwitch}
                value={switchValue}
                trackColor={{false: "#D9D9D9", true: "#f99293"}}
                thumbColor={switchValue ? "#f00d0e" : "#f99293"}
            />  
        </View>
        {/* <View>
            <Image
                source={icons.sample_logo}
                resizeMode="contain"
                style={{
                    // backgroundColor:'#000',
                    height: '80%',
                    alignSelf:'center',
                    width: '100%',
                }}
            />
            <Image
                source={icons.rider_logo}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    bottom: 10,
                    height: '60%',
                    width: '100%',
                }}
            />

        </View> */}
        <View>
            <View>
                <Text style={{ alignSelf: 'center'}}size={16} weight='bold'> TRANSACTION HISTORY</Text>
            </View>
        </View>
            <View style= {{ height: '85%', backgroundColor: '#FFF', borderRadius: 10, borderColor:'#000', backgroundColor:1, borderWidth: 2,}}>
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => `${item.transaction_id}`}
                    showsVerticalScrollIndicator={false}
                    style ={{ marginBottom: 10,  }}
                    renderItem={({ item }) => (
                        <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        }}>
                        <Image
                            source={{uri: item.restaurant_details.documents.logo}}
                            style={{ marginTop: 5, height: 80, width: 80 }}
                        />
                        <Text
                            style={{
                            marginLeft: SIZES.padding,
                            ...FONTS.h3,
                            }}
                        >
                            <Text style={{
                            ...FONTS.h2
                            }}>
                            {item.restaurant_details.business_name}
                            </Text>
                            {'\n'}
                            Status: {item.order_status}
                            {'\n'}
                            Date: {item.date}  
                        </Text>
                        </View>

                    )}
                />  
            </View> 

            <View style={{ position : 'absolute', bottom: 10, width: '100%', alignSelf:'center',}}>
                    { switchValue == false?
                        <View style={styles.valueSwitch}>
                            <Text style={{ backgroundColor: '#FFF', borderRadius: 10,}} color={Colors.primary} size={16} weight='bold'>"YOU ARE CURRENTLY OFFLINE"</Text>
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
        height: window.height,
        backgroundColor: '#FAFAFA'
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
        height: '50%',
        paddingHorizontal: 15,
        elevation: 1,
        bottom: 1,
    },
    userprofile:{
        height: 35,
        width: 35,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
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