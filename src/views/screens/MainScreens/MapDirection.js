import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';
import MapViewDirections from 'react-native-maps-directions';

const MapDirection = ({ navigation }) => {
    const GoToMap = () => {
        navigation.push('Camera');
    }

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
    const Dropoff_Location = {
        latitude: 14.5977812,
        longitude: 120.9812226,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const My_Location = {
        latitude: 14.5999926,
        longitude: 120.983701,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };



  return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
                
                    <View style={styles.Map}>
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                            provider= {PROVIDER_GOOGLE}
                            initialRegion= {INITIAL_POSITION}>
                                <Marker coordinate={My_Location}/>
                                <Marker coordinate={Dropoff_Location}/>
                            </MapView>

                        </View>
                        <View style = {styles.button}>
                            <Button 
                            onPress={GoToMap}
                            title={'go to map'}
                            />
                        </View>

                            
{/*
                            <View style = {styles.searchcontainer}>
                                <Text>Drop Off Details</Text>
                                <GooglePlacesAutocomplete
                                styles = {{textInput: styles.input}}
                                onPress={(data, details = null) => {
                                    console.log(data, details);
                                }}
                                query = {{
                                    key: GOOGLE_API_KEY,
                                    language: 'en',
                                }}
                                />
                            </View>

*/}
                        

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
        width: "100%",
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

export default MapDirection