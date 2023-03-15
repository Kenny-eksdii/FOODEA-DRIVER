import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../../utils/Colors';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '../../../../environment';


const PickUpMap = ({ navigation }) => {
    const GoToOrderDetails = () => {
        navigation.push('OrderDetails');
    }
    const [pin, setPin] = React.useState({
        latitude: 14.7744064,
        longitude: 121.0461308,
    });
    

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log("Permission to access location was denied");
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);

          setPin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          })
        })();
      }, []);

    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const Pickup_Location = {
        latitude: 14.7744064,
        longitude: 121.0461308,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const my_location = {
        latitude: pin.latitude,
        longitude: pin.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }




  return (
        <Container style={styles.topContainer} top padding={3}>
            <View style={{alignSelf:'center', alignItems:'center', borderRadius:5, backgroundColor:'#FAFAFA', width:'100%'}}>
                    <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5, marginTop: 5,}} color={Colors.primary}> PICK UP LOCATION </Text>
                </View>
            <View style={styles.Map}>
                <View style={styles.mapcontainer}>
                    <MapView style={styles.map}
                        provider= {PROVIDER_GOOGLE}
                        initialRegion= {Pickup_Location}>
                            <Marker coordinate={my_location} >
                                <Callout>
                                    <Text> My Location </Text>
                                </Callout>
                            </Marker>

                            <Marker
                                coordinate={Pickup_Location}
                                pinColor= "gold"
                            >
                                <Callout>
                                    <Text> Pick Up Location </Text>
                                </Callout>
                            </Marker>
                            <MapViewDirections
                                origin={my_location}
                                destination={Pickup_Location}
                                apikey={GOOGLE_API_KEY}
                                strokeColor= {Colors.primary}
                                strokeWidth={3}
                            />
                    </MapView>
                </View>
            </View>
                <View style = {styles.button}>
                    <Button 
                        onPress={GoToOrderDetails}
                        title={'View Order Details'}
                    />
                </View>
        </Container>
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA',
        height: Dimensions.get('window').height,
    },
    Map: {
        height: '85%',
        width: window.width,
        backgroundColor: '#fff',
        borderColor: '#F54748',
    },
    button: {
        marginTop: 20,
        bottom: 0,
        alignItems: 'center'
    },
      mapcontainer: {
        flex: 1,
      },
      map: {
        width: Dimensions.get('window').width,
        height: '100%',
      },
    });

export default PickUpMap