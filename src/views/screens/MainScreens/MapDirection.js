import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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
        <Container style={styles.topContainer} top padding={3}>
                
                    <View style={styles.Map}>
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                            provider= {PROVIDER_GOOGLE}
                            initialRegion= {INITIAL_POSITION}>
                                <Marker coordinate={My_Location}/>
                                <Marker coordinate={Dropoff_Location}/>
                            </MapView>

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
                    <View style = {styles.button}>
                            <Button 
                            onPress={GoToMap}
                            title={'Proceed To Camera'}
                            />
                        </View>
 


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

export default MapDirection