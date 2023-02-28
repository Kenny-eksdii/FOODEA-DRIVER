import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image'
import Colors from '../../../utils/Colors';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';
import { TextInput } from 'react-native-paper';


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
const [orders, setOrdersNo] = useState('5');
const [earnnings, SetEarnings] = useState ('P12000');
    
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude: 14.599512,
    longitude: 120.984222,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};


  return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
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

                    <Text style={{fontSize:16, fontWeight:'bold'}}>TODAY STATUS</Text>

                    <View style={styles.todayStats}>
                        <View style={styles.Orders}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>ORDER</Text>
                            <TextInput
                                style={styles.txtinput}
                                editable={false}
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setOrdersNo(text)}
                                value={orders}
                            />
                        </View>
                        <View style={styles.Earns}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>EARNINGS</Text>
                                <TextInput
                                    style={styles.txtinput}
                                    editable={false}
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => SetEarnings(text)}
                                    value={earnnings}
                                />
                        </View>
                    </View>
                
                    <View style={styles.Map}>
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                            provider= {PROVIDER_GOOGLE}
                            initialRegion= {INITIAL_POSITION}>
                                <Marker coordinate={INITIAL_POSITION} />
                            </MapView>
                            

{/*                            <View style = {styles.searchcontainer}>
                                <GooglePlacesAutocomplete
                                styles = {{textInput: styles.input}}
                                placeholder="Search"
                                onPress={(data, details = null) => {
                                    console.log(data, details);
                                }}
                                query = {{
                                    key: {GOOGLE_API_KEY},
                                    language: 'en',
                                }}
                                />
                            </View>
*/}                          
                        </View>
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
    txtinput: {
        height: 40,
        width: 80,
        alignContent:"center",
        backgroundColor: '#FAFAFA',
        borderColor: "#F54748",
        borderWidth: 1,
      },
    searchcontainer: {
        position: "absolute",
        width: "90%",
        backgroundColor: "white",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
    },
    input: {
        borderColor: "#888",
        borderWidth: 1,
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
        backgroundColor: "#FAFAFA",
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
        marginTop: 10,
        height: 450,
        backgroundColor: '#fff',
        borderColor: '#F54748',
        borderWidth: 1,
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
        marginTop: 30,
      },
      valueSwitchOnline: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        
      },
      mapcontainer: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
    });

export default TestScreen