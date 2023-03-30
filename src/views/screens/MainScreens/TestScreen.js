import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView, Dimensions, FlatList} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image';
import {
    FONTS,
    SIZES,
  } from "../../../constants";
import Colors from '../../../utils/Colors';
import TransactionContext from '../../../api/context/transactions/TransactionContext'


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

    useEffect(() => {
        getTransactions();
    }, []);


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
                        <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'> 0 </Text>
                    </View>
                </View>

                <View style = {{flexDirection: 'row', paddingHorizontal: 20,}}>
                    <View style = {{paddingHorizontal:20}}>
                        <Image center source={images.Earn} style={styles.ImageSize}/>
                    </View>

                    <View>
                        <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'> 0 </Text>
                    </View>
                </View>
            </View>

                <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10, marginTop: 15, }}>TRANSACTION HISTORY</Text>
            <View style={styles.TransactionHistory}>       
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => `${item.transaction_id}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 1,
                        }}>
                        {/* <Image
                            source={{uri: item.merchant_id}}
                            style={{ marginTop: 5, height: 80, width: 80 }}
                        /> */}
                        <Text
                            style={{
                            marginLeft: SIZES.padding,
                            ...FONTS.h3,
                            }}
                        >
                            <Text style={{
                            ...FONTS.h2
                            }}>
                            {item.merchant_id}
                            </Text>
                            {'\n'}
                            Date: {item.date}  
                        </Text>
                        </View>

                    )}
                />   
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