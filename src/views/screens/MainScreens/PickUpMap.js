import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../../../utils/Colors';

const PickUpMap = ({ navigation }) => {
    const GoToOrderDetails = () => {
        navigation.push('OrderDetails');
    }

    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const INITIAL_POSITION = {
        latitude: 14.7719701,
        longitude: 121.0543356,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const Dropoff_Location = {
        latitude: 14.7724448,
        longitude: 121.0526231,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const My_Location = {
        latitude: 14.7732177,
        longitude: 121.0538623,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const Pick_Up_Location ={
        latitude: 14.6034767,
        longitude: 120.9564552,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };



  return (
        <Container style={styles.topContainer} top padding={3}>
                
                    <View style={styles.Map}>
                        <View style={{alignSelf:'center', alignItems:'center', elevation:5, borderRadius:5, backgroundColor:'#FAFAFA', width:'100%'}}>
                            <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5,}} color={Colors.primary}> CLICK MARKER TO NAVIGATE </Text>
                        </View>
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                            provider= {PROVIDER_GOOGLE}
                            initialRegion= {My_Location}>
                                <Marker coordinate={My_Location} />
                                {/* <Marker coordinate={Dropoff_Location}/> */}
                                
                            </MapView>
                            

                        </View>
                        

                            

                            {/* <View style = {styles.searchcontainer}>
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
                            </View> */}


                        

                    </View>
                    <View style = {styles.button}>
                        <Button 
                            onPress={GoToOrderDetails}
                            title={'View Order Details'}
                        />
                    </View>
                    {/* <View style = {styles.button}>
                        <Button 
                            onPress={GoToMap}
                            title={'Proceed To Camera'}
                        />
                    </View> */}
 


        </Container>
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
    Map: {
        marginTop: 10,
        height: 700,
        width: Dimensions.get.width,
        backgroundColor: '#fff',
        borderColor: '#F54748',
        borderWidth: 1,
    },
    button: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 2,
        borderRadius: 20,
        borderColor:'#000',
    },
      mapcontainer: {
        flex: 1,
      },
      map: {
        width: Dimensions.get.width,
        height: '100%',
      },
    });

export default PickUpMap